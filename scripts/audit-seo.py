#!/usr/bin/env python3
"""Check the exported pages actually published, without third-party services."""
import argparse
from collections import Counter, deque
from html.parser import HTMLParser
import json
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.title_parts, self.canonicals, self.languages = [], [], {}
        self.descriptions, self.references, self.links = [], [], []
        self.ids, self.schemas, self.images = set(), [], []
        self.h1, self.title_open, self.schema_open = 0, False, False
        self.schema_parts, self.noindex, self.share_images = [], False, []
        self.feed(source)

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if a.get('id'):
            self.ids.add(a['id'])
        if tag == 'title':
            self.title_open = True
        if tag == 'h1':
            self.h1 += 1
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonicals.append(a.get('href'))
        if tag == 'link' and a.get('rel') == 'alternate' and a.get('hreflang'):
            self.languages[a['hreflang']] = a.get('href')
        if tag == 'meta':
            if a.get('name') == 'description':
                self.descriptions.append(a.get('content', ''))
            if a.get('name', '').lower() in ('robots', 'googlebot') and 'noindex' in a.get('content', '').lower():
                self.noindex = True
            if a.get('property') == 'og:image':
                self.share_images.append(a.get('content'))
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.schema_open, self.schema_parts = True, []
        if tag in ('a', 'img', 'script', 'link'):
            reference = a.get('src') or a.get('href')
            if reference:
                self.references.append(reference)
                if tag == 'a':
                    self.links.append(reference)
        if tag == 'img':
            self.images.append(a)
            for item in a.get('srcset', '').split(','):
                if item.strip():
                    self.references.append(item.strip().split()[0])

    def handle_endtag(self, tag):
        if tag == 'title':
            self.title_open = False
        if tag == 'script' and self.schema_open:
            self.schemas.append(json.loads(''.join(self.schema_parts)))
            self.schema_open = False

    def handle_data(self, data):
        if self.title_open:
            self.title_parts.append(data)
        if self.schema_open:
            self.schema_parts.append(data)

    @property
    def title(self):
        return ''.join(self.title_parts).strip()


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument('--directory', default='out')
    cli.add_argument('--base-path', default='')
    cli.add_argument('--origin', default='https://coderzhh.github.io')
    cli.add_argument('--homepage-url', help='Canonical homepage when served at the hostname root')
    cli.add_argument('--report', help='Optional JSON output path')
    args = cli.parse_args()
    root = Path(args.directory).resolve()
    base = args.base_path.rstrip('/')
    origin = args.origin.rstrip('/')
    errors, pages = [], {}
    for file in sorted(root.rglob('index.html')):
        relative = file.parent.relative_to(root)
        if relative.parts and relative.parts[0] in ('404', '_not-found'):
            continue
        route = '/' if str(relative) == '.' else '/' + relative.as_posix() + '/'
        pages[route] = Page(file.read_text())
    if not pages:
        raise SystemExit('No exported pages found; run the production build first.')

    def url(route):
        return args.homepage_url if route == '/' and args.homepage_url else origin + base + route

    def local_path(reference, source):
        parsed = urlparse(urljoin(url(source), reference))
        if parsed.scheme not in ('http', 'https') or parsed.netloc != urlparse(origin).netloc:
            return None, None
        path = unquote(parsed.path)
        if base and not (path == base or path.startswith(base + '/')):
            return None, None
        relative = path[len(base):] if base else path
        target = root / relative.lstrip('/')
        return target, relative

    graph = {route: set() for route in pages}
    for route, page in pages.items():
        expected = url(route)
        counterpart = route[3:] if route.startswith('/en/') else '/en' + route
        chinese = counterpart if route.startswith('/en/') else route
        english = route if route.startswith('/en/') else counterpart
        alternates = {'zh-CN': url(chinese), 'en': url(english), 'x-default': url(chinese)}
        if page.canonicals != [expected]:
            errors.append(f'{route}: canonical must be exactly {expected}')
        if page.languages != alternates:
            errors.append(f'{route}: language alternates are missing or inconsistent')
        if page.h1 != 1 or not page.title:
            errors.append(f'{route}: missing title or H1 count is {page.h1}')
        if len(page.descriptions) != 1 or not page.descriptions[0].strip():
            errors.append(f'{route}: needs one nonempty description')
        if page.noindex:
            errors.append(f'{route}: public page unexpectedly has noindex')
        if not page.share_images:
            errors.append(f'{route}: missing social image')
        for image in page.images:
            if 'alt' not in image:
                errors.append(f'{route}: image has no alt attribute: {image.get("src")}')
            if not image.get('width') or not image.get('height'):
                errors.append(f'{route}: image has no intrinsic dimensions: {image.get("src")}')
        for reference in page.references + page.share_images:
            target, target_route = local_path(reference, route)
            if target is not None and not target.exists():
                errors.append(f'{route}: broken local link/asset {reference}')
        for reference in page.links:
            target, target_route = local_path(reference, route)
            if target_route in pages:
                graph[route].add(target_route)
                fragment = urlparse(reference).fragment
                if fragment and fragment not in pages[target_route].ids:
                    errors.append(f'{route}: broken fragment {reference}')

    for title, count in Counter(page.title for page in pages.values()).items():
        if count > 1:
            errors.append(f'Duplicate title ({count}): {title}')
    for description, count in Counter(page.descriptions[0] for page in pages.values() if page.descriptions).items():
        if count > 1:
            errors.append(f'Duplicate description ({count}): {description}')

    distance, queue = {'/': 0}, deque(['/'])
    while queue:
        route = queue.popleft()
        for target in graph.get(route, ()):
            if target not in distance:
                distance[target] = distance[route] + 1
                queue.append(target)
    for route in pages:
        if route not in distance or distance[route] > 3:
            errors.append(f'{route}: orphaned or more than three links from homepage')

    namespace = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
    tree = ET.parse(root / 'sitemap.xml')
    entries = tree.findall('s:url', namespace)
    locations = [entry.findtext('s:loc', namespaces=namespace) for entry in entries]
    if len(locations) != len(set(locations)) or set(locations) != {url(route) for route in pages}:
        errors.append('Sitemap must contain every canonical public page once, and no unknown pages')
    for entry in entries:
        location = entry.findtext('s:loc', namespaces=namespace)
        route = next((route for route in pages if url(route) == location), None)
        alternates = {node.get('hreflang'): node.get('href') for node in entry.findall('x:link', namespace)}
        if route in pages and alternates != pages[route].languages:
            errors.append(f'{route}: sitemap language links disagree with HTML')

    report = {
        'publicPages': len(pages), 'sitemapUrls': len(locations), 'errors': errors,
        'scope': 'Exported HTML, JSON-LD parse, dimensions, links/assets, canonical, hreflang, sitemap, reachability; not indexing, ranking, or rich-result eligibility',
        'pages': [{'route': route, 'title': page.title, 'canonical': page.canonicals, 'linksFromHome': distance.get(route), 'structuredDataBlocks': len(page.schemas)} for route, page in pages.items()],
    }
    if args.report:
        destination = Path(args.report)
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    if errors:
        raise SystemExit('\n'.join(errors))
    print(f'Passed: {len(pages)} public pages, {len(locations)} sitemap URLs; all pages reachable within three links. This does not confirm indexing or ranking.')


if __name__ == '__main__':
    main()

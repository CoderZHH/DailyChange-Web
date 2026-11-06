#!/usr/bin/env python3
"""Notify IndexNow about changed public pages; receipt is not proof of indexing."""
import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import re
from urllib.error import HTTPError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    selection = cli.add_mutually_exclusive_group(required=True)
    selection.add_argument('--all', action='store_true', help='Use only when all published pages were changed')
    selection.add_argument('--url', action='append', help='A changed URL; may be repeated')
    cli.add_argument('--directory', default='out')
    cli.add_argument('--submit', action='store_true', help='Without this flag, only validate the local request')
    cli.add_argument('--output')
    args = cli.parse_args()
    root = Path(__file__).resolve().parent.parent
    config = json.loads((root / 'config/indexnow.json').read_text())
    key_file = config['keyFile']
    if Path(key_file).name != key_file:
        raise SystemExit('Invalid verification filename')
    key = (root / 'public' / key_file).read_text().strip()
    if not re.fullmatch(r'[0-9a-f]{32}', key) or key_file != key + '.txt':
        raise SystemExit('Invalid ownership verification file')
    namespace = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    entries = ET.parse(Path(args.directory) / 'sitemap.xml').findall('s:url/s:loc', namespace)
    canonical_urls = [node.text for node in entries]
    site = canonical_urls[0]
    if not site.endswith('/'):
        raise SystemExit('Expected a trailing-slash homepage as first sitemap URL')
    urls = list(dict.fromkeys(canonical_urls if args.all else args.url))
    host = urlparse(site).netloc
    if not urls or len(urls) > 10000:
        raise SystemExit('Expected 1–10,000 changed URLs')
    for url in urls:
        parsed = urlparse(url)
        if parsed.scheme != 'https' or parsed.netloc != host or not url.startswith(site):
            raise SystemExit('URL is outside this project’s verified path: ' + url)
    key_location = urljoin(site, key_file)
    receipt = {'observedAt': datetime.now(timezone.utc).isoformat(), 'endpoint': 'https://api.indexnow.org/indexnow', 'urlCount': len(urls), 'urls': urls, 'submitted': False, 'indexed': 'not_verified'}
    if args.submit:
        with urlopen(key_location, timeout=20) as response:
            if response.status != 200 or response.read().decode().strip() != key:
                raise SystemExit('Published ownership file does not match; deploy it before notifying')
        payload = {'host': host, 'key': key, 'keyLocation': key_location, 'urlList': urls}
        request = Request(receipt['endpoint'], json.dumps(payload).encode(), headers={'Content-Type': 'application/json; charset=utf-8'}, method='POST')
        try:
            with urlopen(request, timeout=30) as response:
                status = response.status
                message = response.read().decode(errors='replace')[:500]
        except HTTPError as error:
            status = error.code
            message = error.read().decode(errors='replace')[:500]
        receipt.update({'httpStatus': status, 'response': message, 'submitted': status in (200, 202), 'ownershipValidationPending': status == 202})
    if args.output:
        destination = Path(args.output)
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(receipt, ensure_ascii=False, indent=2))
    if args.submit and not receipt['submitted']:
        raise SystemExit('IndexNow did not accept the notification; inspect the receipt instead of retrying blindly')


if __name__ == '__main__':
    main()

import { absoluteUrl } from "../lib/localeMetadata";
import { guides } from "../lib/guides";
export const dynamic = "force-static";
export default function sitemap() {
  const paths = ["/", "/support/", "/privacy/", "/guides/", ...Object.keys(guides).map((slug) => `/guides/${slug}/`)];
  return paths.flatMap((path) => ["zh", "en"].map((locale) => ({ url: absoluteUrl(locale === "en" ? `/en${path}` : path), alternates: { languages: { "zh-CN": absoluteUrl(path), en: absoluteUrl(`/en${path}`), "x-default": absoluteUrl(path) } } })));
}

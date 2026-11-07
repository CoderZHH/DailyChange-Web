import { appImage } from "../lib/imageAssets";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { JsonLd } from "./StructuredData";
import { guides, guideIndexCopy } from "../lib/guides";
import { absoluteUrl } from "../lib/localeMetadata";
import { page } from "../lib/paths";
import { appStoreUrl } from "../lib/appStore";

export function GuideLinks({ locale = "zh" }) {
  const prefix = locale === "en" ? "/en" : "";
  return <div className="guide-links">{Object.entries(guides).map(([slug, guide]) => <a key={slug} href={page(`${prefix}/guides/${slug}/`)}><span>{guide[locale].title}</span><span aria-hidden="true">↗</span><p>{guide[locale].description}</p></a>)}</div>;
}
export function GuideIndex({ locale = "zh" }) {
  const english = locale === "en";
  const copy = guideIndexCopy[locale];
  return <><SiteHeader locale={locale} currentPath="/guides/" /><main className={`interior-main guide-main ${english ? "english-interior" : ""}`}><section className="page-shell guide-hero"><p className="eyebrow">ONE DAY AT A TIME</p><h1>{english ? "A little help\ngetting started." : "从今天，\n慢慢留下来。"}</h1><p className="interior-intro">{copy.description}</p><GuideLinks locale={locale} /></section></main><SiteFooter locale={locale} /></>;
}
export function GuideArticle({ slug, locale = "zh" }) {
  const english = locale === "en";
  const guide = guides[slug];
  const copy = guide[locale];
  const prefix = english ? "/en" : "";
  const path = `/guides/${slug}/`;
  const url = absoluteUrl(`${prefix}${path}`);
  const updated = guide.updated ?? "2026-11-07";
  const updatedLabel = new Intl.DateTimeFormat(english ? "en-US" : "zh-CN", {
    year: "numeric", month: english ? "long" : "numeric", day: "numeric", timeZone: "UTC",
  }).format(new Date(updated));
  const screenshots = [{
    file: guide.image,
    alt: copy.imageAlt,
    caption: copy.imageCaption ?? (english ? "Actual DailyChange screenshot, shown in Chinese. Labels may differ by app version." : "DailyChange 真实界面截图，具体选项以当前 App 版本为准。"),
  }];
  if (guide.calendarImage) {
    screenshots.push({ file: guide.calendarImage, alt: copy.calendarAlt, caption: copy.calendarCaption });
  }
  return <><SiteHeader locale={locale} currentPath={path} /><main className={`interior-main guide-main ${english ? "english-interior" : ""}`}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: copy.title, description: copy.description, url, mainEntityOfPage: url, inLanguage: english ? "en" : "zh-CN", datePublished: "2026-11-06", dateModified: updated, author: { "@type": "Organization", name: "DailyChange", url: absoluteUrl(`${prefix}/about/`) }, image: screenshots.map(({ file }) => absoluteUrl(`/media/app/${file}`)) }} />
    <article className="page-shell guide-article"><header className="guide-hero"><a className="guide-back" href={page(`${prefix}/guides/`)}>{english ? "← All guides" : "← 所有使用指南"}</a><p className="eyebrow">DAILYCHANGE / {english ? "GUIDE" : "使用指南"}</p><h1>{copy.title}</h1><p className="guide-byline"><a href={page(`${prefix}/about/`)}>DailyChange</a> · {english ? "Updated " : "更新于 "}<time dateTime={updated}>{updatedLabel}</time></p><p className="guide-intro">{copy.intro}</p></header>
    <div className="guide-body">{copy.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
    <div className={guide.calendarImage ? "guide-screens" : undefined}>
      {screenshots.map(({ file, alt, caption }) => (
        <figure className="guide-figure" key={file}>
          <img {...appImage(file, "270px")} alt={alt} loading="lazy" />
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
    {copy.exportLink && <p><a className="guide-back" href={page(`${prefix}/guides/selfie-timelapse/`)}>{copy.exportLink} ↗</a></p>}
    <aside className="guide-next"><h2>{english ? "Try it with your own photos" : "从自己的第一张开始"}</h2><p>{english ? "Daily photography, importing, and video export are Basic features. Optional PRO purchases add writing and creative tools." : "每日拍照、导入与视频导出属于基础功能；书写和部分创作功能可选择 PRO。"}</p><a className="button button-red" href={appStoreUrl}>{english ? "Get DailyChange on the App Store" : "前往 App Store 下载 DailyChange"}</a><p><a href={page(`${prefix}/support/`)}>{english ? "Questions? Read the FAQ or contact support." : "还有疑问？查看常见问题或联系支持。"}</a></p></aside>
    <nav className="guide-related" aria-label={english ? "Related guides" : "继续阅读"}><h2>{english ? "Keep reading" : "继续阅读"}</h2>{Object.entries(guides).filter(([key]) => key !== slug).map(([key, item]) => <a key={key} href={page(`${prefix}/guides/${key}/`)}>{item[locale].title} ↗</a>)}</nav>
    </div></article></main><SiteFooter locale={locale} /></>;
}

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { JsonLd } from "./StructuredData";
import { GuideLinks } from "./GuidePages";
import { absoluteUrl } from "../lib/localeMetadata";
import { page } from "../lib/paths";
import { appStoreUrl } from "../lib/appStore";

const copy = {
  zh: {
    title: "关于 DailyChange",
    intro: "DailyChange 是 iPhone 上的每日自拍记录 App。每天留一张自己的照片，让 App 在本机对齐双眼，再把一段日子的照片连成变化视频。日历、相纸和文字，让回看也成为记录的一部分。",
    sections: [
      ["适合怎样的记录", "它围绕同一个人的单人正脸自拍设计。你可以从今天开始，也可以导入以前拍过的自拍并确认日期。每个日期保留一张正式照片，空白的日子可以留白。清晰的双眼和相对稳定的光线，有助于获得更一致的画面。"],
      ["对齐的是照片中的位置", "DailyChange 在设备上检测双眼，调整照片的位置、大小与旋转，帮助不同日期的照片连起来看。对齐不用于识别身份，也不会预测未来长相。多人合照、宠物和全身照不属于它当前的记录用途。"],
    ],
    plansTitle: "先拍下来，再决定要不要多写一点",
    plansIntro: "每日自拍与视频导出属于基础功能。想在照片之外留下心情，再按需要选择 PRO。",
    headers: ["功能", "基础功能", "PRO"],
    rows: [
      ["每日拍照、导入历史自拍", "包含", "包含"],
      ["照片日历与历史浏览", "包含", "包含"],
      ["变化视频、单张相纸导出", "包含", "包含"],
      ["可选 iCloud 备份与恢复", "包含", "包含"],
      ["相纸留言、未来信件、日记", "—", "包含"],
      ["制作贴纸、照片墙、付费皮肤", "—", "包含"],
    ],
    pricing: "App 可免费下载。PRO 提供自动续订年费或一次性终身购买，当前价格与购买条件以你所在地区的 App Store 及 App 内页面为准。",
    privacyTitle: "照片保存在哪里",
    privacy: "照片、文字与对齐信息保存在设备上。开启可选 iCloud 备份后，副本存入你自己的 iCloud，不上传到开发者服务器。请留意备份完成状态；恢复购买只恢复购买权益，不能找回没有备份的照片。",
    sourceTitle: "这些说明由谁维护",
    source: "App Store 公开开发者名称为“航杰 张”。本页与使用指南由 DailyChange 官网维护，按 App 的功能实现和商店资料核对。截图来自真实 App；功能、购买与地区供应以当前 App 和 App Store 为准。这里不展示未经核实的下载量、评分或用户评价。",
    date: "资料更新：2026 年 11 月 6 日", guides: "使用指南", contact: "联系开发者", privacyLink: "阅读隐私政策", download: "在 App Store 查看 DailyChange",
  },
  en: {
    title: "About DailyChange",
    intro: "DailyChange is a daily selfie journal for iPhone. Keep one photo of yourself each day, align your eyes on your device, and turn a date range into a timelapse video. A photo calendar, paper-style prints, and writing give you more ways to revisit the days.",
    sections: [
      ["A record of the same person, one day at a time", "DailyChange is designed for clear, front-facing selfies of one person. Start today or import older selfies and confirm their dates. Each date keeps one photo, and days without a photo stay blank. Clear eyes and reasonably steady light help keep the sequence consistent."],
      ["What eye alignment does", "The app detects your eyes on your device and adjusts photo position, size, and rotation. This makes photos from different dates easier to watch together. Alignment is not identity recognition and does not predict your future face. Group photos, pets, and full-body progress pictures are outside the current use case."],
    ],
    plansTitle: "Start with the photo",
    plansIntro: "Daily photography and video export are Basic features. Choose PRO if you want to add writing and other creative tools.",
    headers: ["Feature", "Basic", "PRO"],
    rows: [
      ["Daily photos and old selfie imports", "Included", "Included"],
      ["Photo calendar and browsing", "Included", "Included"],
      ["Timelapse and individual print exports", "Included", "Included"],
      ["Optional iCloud backup and restore", "Included", "Included"],
      ["Print notes, future letters, diary", "—", "Included"],
      ["Sticker creation, photo walls, paid skins", "—", "Included"],
    ],
    pricing: "The app is free to download. PRO offers an annual auto-renewable subscription or a one-time lifetime purchase. Check your region’s App Store and the in-app purchase screen for current prices and terms.",
    privacyTitle: "Where your records stay",
    privacy: "Photos, writing, and alignment information are stored on your device. If you enable optional backups, copies go to your own iCloud, not developer servers. Check that your backup has completed. Restore Purchases restores purchase access; it cannot recover photos without an available backup.",
    sourceTitle: "Who maintains this information",
    source: "The developer name displayed on the App Store is 航杰 张. This page and the guides are maintained for the official DailyChange website and checked against the app’s implementation and store information. Screenshots show the real app. Features, purchases, and regional availability depend on the current app and App Store. We do not display unverified download counts, ratings, or testimonials.",
    date: "Information updated November 6, 2026", guides: "Using DailyChange", contact: "Contact the developer", privacyLink: "Read the privacy policy", download: "View DailyChange on the App Store",
  },
};
export default function AboutPage({ locale = "zh" }) {
  const english = locale === "en";
  const prefix = english ? "/en" : "";
  const data = copy[locale];
  const url = absoluteUrl(`${prefix}/about/`);
  return <><SiteHeader locale={locale} currentPath="/about/" /><main className={`interior-main guide-main ${english ? "english-interior" : ""}`}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url, name: data.title, inLanguage: english ? "en" : "zh-CN", about: { "@id": `${absoluteUrl(`${prefix}/`)}#app` }, publisher: { "@type": "Organization", name: "DailyChange", url: absoluteUrl(`${prefix}/`), email: "zhj1140351774@gmail.com", sameAs: [appStoreUrl] } }} />
    <article className="page-shell guide-article"><header className="guide-hero"><p className="eyebrow">DAILYCHANGE / {english ? "THE APP" : "产品资料"}</p><h1>{data.title}</h1><p className="guide-intro">{data.intro}</p><p className="guide-byline">{data.date}</p><a className="button button-red" href={appStoreUrl}>{data.download}</a></header><div className="guide-body">
    {data.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
    <section><h2>{data.plansTitle}</h2><p>{data.plansIntro}</p><table className="feature-table"><thead><tr>{data.headers.map(text => <th key={text} scope="col">{text}</th>)}</tr></thead><tbody>{data.rows.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table><p>{data.pricing}</p></section>
    <section><h2>{data.privacyTitle}</h2><p>{data.privacy}</p><a className="text-link" href={page(`${prefix}/privacy/`)}>{data.privacyLink}</a></section>
    <section><h2>{data.sourceTitle}</h2><p>{data.source}</p><a className="text-link" href="mailto:zhj1140351774@gmail.com">{data.contact}: zhj1140351774@gmail.com</a></section>
    <section><h2>{data.guides}</h2><GuideLinks locale={locale} /></section>
    </div></article></main><SiteFooter locale={locale} /></>;
}

import { absoluteUrl } from "../lib/localeMetadata";
import { appStoreId, appStoreListings, appStoreUrl } from "../lib/appStore";

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export const appEntityId = `${absoluteUrl("/")}#app`;

export default function StructuredData({ locale = "zh" }) {
  const english = locale === "en";
  const websiteUrl = absoluteUrl("/");
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [
    { "@type": "WebSite", "@id": `${websiteUrl}#website`, name: "DailyChange", alternateName: "Daily Change", url: websiteUrl, inLanguage: ["zh-CN", "en"] },
    { "@type": "SoftwareApplication", "@id": appEntityId, name: "DailyChange", alternateName: "DailyChange: A Photo a Day", url: websiteUrl, identifier: { "@type": "PropertyValue", propertyID: "App Store ID", value: appStoreId }, downloadUrl: appStoreUrl, sameAs: Object.values(appStoreListings), operatingSystem: "iOS 17.0 or later", applicationCategory: "MultimediaApplication", image: absoluteUrl("/media/brand/app-icon-192.webp"), inLanguage: ["zh-CN", "en"], description: english ? "A daily selfie journal for iPhone with on-device eye alignment, a photo calendar, and timelapse video export. Optional PRO purchases add writing and creative features." : "iPhone 每日自拍记录应用，在本机对齐双眼、回看照片日历并导出变化视频；可选 PRO 购买提供书写与创作功能。", offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: appStoreUrl, description: english ? "Free to download. Optional in-app purchases for PRO features." : "免费下载，可选 App 内购买解锁 PRO 功能。" } }
  ] }} />;
}

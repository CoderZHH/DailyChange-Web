import { page } from "./paths";

export const siteOrigin = "https://coderzhh.github.io";
export const absoluteUrl = (path = "/") => `${siteOrigin}${page(path)}`;
export const homeCopy = {
  zh: {
    title: "DailyChange｜每日自拍、自动对齐与变化视频",
    description: "每天留一张自拍，让 DailyChange 对齐双眼，把慢慢积攒的照片连成变化视频。适用于 iPhone，也能回看照片日历、写日记和给未来的自己留信。",
  },
  en: {
    title: "DailyChange | Daily Selfie Journal & Timelapse",
    description: "Keep one selfie a day. DailyChange aligns your eyes and turns your photos into a selfie timelapse on iPhone. Revisit your photo calendar and write to your future self.",
  },
};
const pageCopy = {
  "/support/": {
    zh: { title: "DailyChange 使用帮助：自拍、导出与 iCloud 备份", description: "了解 DailyChange 如何自动对齐自拍、导入旧照片、导出变化视频，以及基础功能、PRO 和可选 iCloud 备份的区别。" },
    en: { title: "DailyChange Help: Selfies, Exports & iCloud Backup", description: "Answers about selfie alignment, importing old photos, saving timelapse videos, Basic and PRO features, and optional iCloud backups in DailyChange." },
  },
  "/privacy/": {
    zh: { title: "隐私政策 · DailyChange", description: "DailyChange 隐私政策：了解照片、文字、人脸对齐信息、权限与可选 iCloud 备份。" },
    en: { title: "Privacy Policy · DailyChange", description: "How DailyChange handles photos, writing, face-alignment information, permissions, and optional iCloud backups." },
  },
};
export function localeMetadata(path = "/", locale = "zh", copy = {}) {
  const english = locale === "en";
  const chineseUrl = absoluteUrl(path);
  const englishUrl = absoluteUrl(`/en${path}`);
  const url = english ? englishUrl : chineseUrl;
  const { title, description } = { ...(pageCopy[path]?.[locale] || homeCopy[locale]), ...copy };
  const image = { url: absoluteUrl(`/media/brand/share-${locale}.png`), width: 1200, height: 630, alt: english ? "DailyChange — one selfie a day" : "DailyChange — 每天留一张自拍" };
  return {
    title: { absolute: title }, description,
    alternates: { canonical: url, languages: { "zh-CN": chineseUrl, en: englishUrl, "x-default": chineseUrl } },
    openGraph: { type: "website", siteName: "DailyChange", title, description, url, locale: english ? "en_US" : "zh_CN", alternateLocale: [english ? "zh_CN" : "en_US"], images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

import { asset, page } from "../lib/paths";

export default function SiteHeader({ locale = "zh", currentPath = "/" }) {
  const english = locale === "en";
  const prefix = english ? "/en" : "";
  return (
    <header className="site-header">
      <div className="site-header-inner page-shell">
        <a className="brand" href={page(`${prefix}/`)} aria-label={english ? "DailyChange home" : "DailyChange 首页"}>
          <img src={asset("/media/brand/app-icon.png")} width="42" height="42" alt="" />
          <span>DailyChange</span>
        </a>
        <nav className="primary-nav" aria-label={english ? "Main navigation" : "主导航"}>
          <a href={page(`${prefix}/#experience`)}>{english ? "Explore" : "产品体验"}</a>
          <a href={page(`${prefix}/support/`)}>{english ? "Support" : "帮助与反馈"}</a>
          <a href={page(`${prefix}/privacy/`)}>{english ? "Privacy" : "隐私政策"}</a>
          <a className="language-switch" href={page(`${english ? "" : "/en"}${currentPath}`)} hrefLang={english ? "zh-CN" : "en"} lang={english ? "zh-CN" : "en"} aria-label={english ? "阅读此页面的中文版" : "Read this page in English"}>{english ? "中文" : "English"}</a>
        </nav>
      </div>
    </header>
  );
}

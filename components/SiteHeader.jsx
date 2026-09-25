import { asset, page } from "../lib/paths";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner page-shell">
        <a className="brand" href={page("/")} aria-label="DailyChange 首页">
          <img src={asset("/media/brand/app-icon.png")} width="42" height="42" alt="" />
          <span>DailyChange</span>
        </a>
        <nav className="primary-nav" aria-label="主导航">
          <a href={page("/#experience")}>产品体验</a>
          <a href={page("/support/")}>帮助与反馈</a>
          <a href={page("/privacy/")}>隐私政策</a>
        </nav>
      </div>
    </header>
  );
}

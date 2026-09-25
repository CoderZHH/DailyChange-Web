import { asset, page } from "../lib/paths";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div className="footer-brand">
          <img src={asset("/media/brand/dailychange-wordmark-wide.png")} alt="DailyChange" />
          <p>每天一张，看见时间留下的变化。</p>
        </div>
        <nav aria-label="页脚导航">
          <a href={page("/")}>首页</a>
          <a href={page("/support/")}>帮助与反馈</a>
          <a href={page("/privacy/")}>隐私政策</a>
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DailyChange</span>
          <span>一张照片，也是一个日子。</span>
        </div>
      </div>
    </footer>
  );
}

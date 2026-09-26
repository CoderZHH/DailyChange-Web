import { asset, page } from "../lib/paths";

export default function SiteFooter({ locale = "zh" }) {
  const english = locale === "en";
  const prefix = english ? "/en" : "";
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div className="footer-brand">
          <img src={asset("/media/brand/dailychange-wordmark-wide.png")} alt="DailyChange" />
          <p>{english ? "One photo a day. See how time changes you." : "每天一张，看见时间留下的变化。"}</p>
        </div>
        <nav aria-label={english ? "Footer navigation" : "页脚导航"}>
          <a href={page(`${prefix}/`)}>{english ? "Home" : "首页"}</a>
          <a href={page(`${prefix}/support/`)}>{english ? "Support" : "帮助与反馈"}</a>
          <a href={page(`${prefix}/privacy/`)}>{english ? "Privacy policy" : "隐私政策"}</a>
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DailyChange</span>
          <span>{english ? "A little photo. A whole day." : "一张照片，也是一个日子。"}</span>
        </div>
      </div>
    </footer>
  );
}

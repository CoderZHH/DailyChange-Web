import { GuideLinks } from "./GuidePages";
import { productQuestions } from "../lib/productQuestions";
import { page } from "../lib/paths";
export default function HomeAnswers({ locale = "zh" }) {
  const english = locale === "en";
  return <section className="home-answers"><div className="page-shell"><div className="section-tag">START HERE <span>·</span> {english ? "A LITTLE HELP" : "开始之前"}</div><h2>{english ? "One selfie is a good start." : "第一张，就从今天开始。"}</h2><p className="answers-intro">{english ? "DailyChange is a photo journal for iPhone. Keep one selfie from today and find it again in your calendar. Add a few words when you feel like writing, or turn the photos you collect into a timelapse." : "DailyChange 是一款 iPhone 照片日记 App。每天给自己留一张自拍，过些日子在日历里回看。想写的时候，可以给相纸加几句话。照片攒多了，也能连成一段变化视频。"}</p><GuideLinks locale={locale} /><div className="answers-list">{productQuestions[locale].map((item) => <details key={item.title}><summary>{item.title}</summary><p>{item.answer}</p></details>)}</div><a className="guide-back" href={page(`${english ? "/en" : ""}/support/`)}>{english ? "More help and contact details ↗" : "更多使用帮助与反馈 ↗"}</a><p className="answers-source"><a href={page(`${english ? "/en" : ""}/about/`)}>{english ? "About DailyChange, features, and official sources" : "关于 DailyChange、功能范围与官方资料"}</a></p></div></section>;
}

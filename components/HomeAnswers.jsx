import { GuideLinks } from "./GuidePages";
import { productQuestions } from "../lib/productQuestions";
import { page } from "../lib/paths";
export default function HomeAnswers({ locale = "zh" }) {
  const english = locale === "en";
  return <section className="home-answers"><div className="page-shell"><div className="section-tag">START HERE <span>·</span> {english ? "A LITTLE HELP" : "开始之前"}</div><h2>{english ? "One selfie is a good start." : "第一张，就从今天开始。"}</h2><p className="answers-intro">{english ? "An iPhone app for daily selfies, automatic eye alignment, and timelapse videos. No public feed. No account required." : "DailyChange 是 iPhone 上的每日自拍记录 App。自动对齐双眼，把照片连成变化视频。无需注册，也不用把记录公开。"}</p><GuideLinks locale={locale} /><div className="answers-list">{productQuestions[locale].map((item) => <details key={item.title}><summary>{item.title}</summary><p>{item.answer}</p></details>)}</div><a className="guide-back" href={page(`${english ? "/en" : ""}/support/`)}>{english ? "More help and contact details ↗" : "更多使用帮助与反馈 ↗"}</a></div></section>;
}

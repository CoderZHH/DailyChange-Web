import { asset, page } from "../lib/paths";
import ArchiveFilm from "./ArchiveFilm";

const copy = {
  zh: {
    label: "相纸档案",
    title: "把每日变化，留成一段影像。",
    intro: "有些变化，只有回头看，才会被看见。用 DailyChange 每天拍一张，也可以导入旧照。App 在 iPhone 上对齐双眼，把同一个人不同日期的照片连成延时视频。",
    caption: "开发者的高中自拍 · DailyChange 实际导出",
    videoLabel: "用高中自拍制作的延时视频，无声",
    play: "播放", pause: "暂停",
    cases: [
      ["每日自拍", "从今天拍一张开始。周末翻回日历，找回平时没留意的表情。"],
      ["外貌变化", "留长发、蓄胡子，或记录养伤、术后的样子。隔几天再拍一张，按日期回看。"],
      ["孩子成长", "给能配合拍清晰正脸的孩子留一组照片。掉了第一颗乳牙，或剪了新发型，以后都能翻到那一天。"],
    ],
    note: "人像延时适合清晰的单人正脸照。想留下家里的狗或猫，可以把它们的照片做成贴纸，贴在相纸或照片墙上。",
    guide: "用旧自拍做一段延时视频",
  },
  en: {
    label: "The print archive",
    title: "Daily changes, one photo at a time.",
    intro: "Some changes only become clear when you look back. Take a photo a day or import old selfies. DailyChange aligns the eyes on your iPhone and turns photos of the same person, taken on different days, into a timelapse.",
    caption: "The developer’s high school selfies · Exported from DailyChange",
    videoLabel: "Silent timelapse made from the developer’s high school selfies",
    play: "Play", pause: "Pause",
    cases: [
      ["A daily selfie", "Start with a photo today. By the weekend, you’ll have a few days to look back on in your photo calendar."],
      ["Changes in appearance", "Growing out your hair or beard? Take photos as it grows, or keep a private photo record of how you look during recovery."],
      ["A child growing up", "Keep a series of clear, front-facing portraits when your child is happy to sit for one. The missing tooth and the new haircut will have their own days."],
    ],
    note: "Portrait timelapses work with clear, front-facing photos of one person. You can turn photos of your dog or cat into stickers for your prints or photo wall.",
    guide: "Make a timelapse with old selfies",
  },
};

export default function ChangeArchive({ locale = "zh" }) {
  const text = copy[locale];
  const prefix = locale === "en" ? "/en" : "";
  const media = asset("/media/stories/dailychange-selfie-timelapse");

  return (
    <section className="change-archive page-shell" id="experience" aria-labelledby="change-archive-title">
      <header className="change-archive-header">
        <p className="section-tag">{text.label}</p>
        <h2 id="change-archive-title">{text.title}</h2>
        <p className="change-archive-intro">{text.intro}</p>
      </header>
      <div className="change-archive-grid">
        <ArchiveFilm media={media} label={text.videoLabel} caption={text.caption} play={text.play} pause={text.pause} />
        <div className="change-archive-copy">
          <ol className="change-archive-scenes">
            {text.cases.map(([title, description], index) => (
              <li key={title}>
                <span className="change-archive-number" aria-hidden="true">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
          <p className="change-archive-note">{text.note}</p>
          <a className="hero-secondary" href={page(`${prefix}/guides/selfie-timelapse/`)}>{text.guide}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

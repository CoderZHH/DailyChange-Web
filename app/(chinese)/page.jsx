import { appImage } from "../../lib/imageAssets";
import StructuredData from "../../components/StructuredData";
import { localeMetadata } from "../../lib/localeMetadata";
import HomeMotion from "../../components/HomeMotion";
import TimeRibbon from "../../components/TimeRibbon";
import ScrollFloat from "../../components/react-bits/ScrollFloat";
import TiltedCard from "../../components/react-bits/TiltedCard";
import AppScreen from "../../components/AppScreen";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { asset } from "../../lib/paths";
import { appStoreUrl } from "../../lib/appStore";

export const metadata = {
  ...localeMetadata("/", "zh"),
  verification: { other: { "msvalidate.01": "45CBF9A17D971A0322BBDA0DFDAA450B" } },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HomeMotion />
      <StructuredData locale="zh" />
      <main className="motion-home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE PHOTO, EVERY DAY</p>
              <h1 id="hero-title">每天自拍，<br />看见自己<span className="hero-emphasis">慢慢变化。</span></h1>
              <p className="hero-lede">每天留一张自拍，眼睛的位置交给 DailyChange 来对齐。等照片慢慢积攒起来，再把它们连成一段变化视频。</p>
              <div className="hero-actions">
                <a className="button button-red" href={appStoreUrl}>前往 App Store 下载 <span aria-hidden="true">↗</span></a>
                <a className="hero-secondary" href="#experience">认识 DailyChange <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-index" aria-hidden="true"><span>01 今天</span><span>02 过去</span><span>03 明天</span></div>
            </div>
            <div className="hero-art" aria-label="DailyChange 的真实 App 界面截图">
              <span className="hero-art-orbit" aria-hidden="true" />
              <span className="hero-art-note" aria-hidden="true">给今天<br />留一张。</span>
              <div className="hero-photo-back"><img {...appImage("past-calendar.jpg")} alt="" /></div>
              <div className="hero-photo-front"><img fetchPriority="high" {...appImage("today-polaroid.jpg")} alt="今天相纸的真实 App 截图" /></div>
              <span className="hero-art-stamp" aria-hidden="true">KEEP THE DAY<br />DAILYCHANGE</span>
            </div>
          </div>
          <TimeRibbon />
        </section>

        <section className="manifesto page-shell" id="experience">
          <div className="section-tag">THE IDEA <span>·</span> 一张照片的时间感</div>
          <p><ScrollFloat>有些变化，只有回头看，才会被看见。</ScrollFloat></p>
          <span className="manifesto-side">每天一点点<br />慢慢变成很多。</span>
        </section>

        <section className="chapter chapter-today" aria-labelledby="today-title">
          <div className="page-shell chapter-grid">
            <div className="chapter-copy">
              <div className="chapter-heading"><span className="chapter-number">01</span><span className="chapter-en">TODAY / 今天</span></div>
              <h2 id="today-title"><ScrollFloat>先把今天，</ScrollFloat><br /><ScrollFloat>好好留下。</ScrollFloat></h2>
              <p>打开相机，拍下今天的自己。DailyChange 在本机自动对齐双眼，让每一天的自拍更容易连起来看。</p>
              <div className="chapter-aside">一张相纸，记住此刻。</div>
            </div>
            <div className="chapter-media today-media"><span className="media-halo" aria-hidden="true" /><div className="chapter-screen"><TiltedCard amplitude={9}><AppScreen src="today-polaroid.jpg" alt="DailyChange 今天相纸界面的真实截图" /></TiltedCard></div><span className="media-caption">NO. 001 &nbsp; / &nbsp; TODAY</span></div>
          </div>
        </section>

        <section className="chapter chapter-past" aria-labelledby="past-title">
          <div className="page-shell chapter-grid chapter-grid-reverse">
            <div className="chapter-media past-media"><div className="chapter-screen"><TiltedCard amplitude={9}><AppScreen src="past-calendar.jpg" alt="DailyChange 过去日历与往日记录的真实截图" /></TiltedCard></div><span className="media-caption">ONE DAY AT A TIME &nbsp; / &nbsp; PAST</span></div>
            <div className="chapter-copy">
              <div className="chapter-heading"><span className="chapter-number">02</span><span className="chapter-en">PAST / 过去</span></div>
              <h2 id="past-title"><ScrollFloat>日子过去了，</ScrollFloat><br /><ScrollFloat>故事还在。</ScrollFloat></h2>
              <p>在日历与时间线里回看往日相纸。相隔许久的两张照片，会告诉你时间悄悄改变了什么。</p>
              <div className="chapter-aside">回看，是另一种发现。</div>
            </div>
          </div>
        </section>

        <section className="chapter chapter-tomorrow" aria-labelledby="tomorrow-title">
          <div className="page-shell chapter-grid">
            <div className="chapter-copy">
              <div className="chapter-heading"><span className="chapter-number">03</span><span className="chapter-en">TOMORROW / 明天</span></div>
              <h2 id="tomorrow-title"><ScrollFloat>给未来的自己，</ScrollFloat><br /><ScrollFloat>留一封信。</ScrollFloat></h2>
              <p>用 PRO 写下此刻想说的话，交给未来的某一天。等那一天到来，再读一读过去的自己。</p>
              <div className="chapter-aside">写给后来会读到的人。</div>
            </div>
            <div className="chapter-media tomorrow-media"><div className="chapter-screen"><TiltedCard amplitude={9}><AppScreen src="future-message.jpg" alt="DailyChange 写给未来自己的留言界面真实截图" /></TiltedCard></div><span className="media-caption">POSTMARK &nbsp; / &nbsp; TOMORROW</span></div>
          </div>
        </section>

        <section className="details-section">
          <div className="page-shell">
            <div className="details-heading"><div><div className="section-tag">MORE THAN A PHOTO <span>·</span> 更多记录方式</div><h2><ScrollFloat>把日子，</ScrollFloat><br /><em><ScrollFloat>过得有形状。</ScrollFloat></em></h2></div><p>用 PRO 制作贴纸、布置照片墙、写日记；基础功能也能导出变化视频。照片之外的记忆，也值得收藏。</p></div>
            <div className="detail-grid">
              <article className="detail-card"><TiltedCard className="detail-image"><img {...appImage("sticker-creation.jpg")} alt="DailyChange 贴纸制作界面的真实截图" loading="lazy" /></TiltedCard><span className="detail-count">01 / CREATE</span><h3>制作与使用贴纸</h3><p>让相纸多一点只属于你的细节。</p></article>
              <article className="detail-card"><TiltedCard className="detail-image"><img {...appImage("photo-wall.jpg")} alt="DailyChange 照片墙的真实截图" loading="lazy" /></TiltedCard><span className="detail-count">02 / COLLECT</span><h3>布置照片墙</h3><p>把喜欢的瞬间放在一起，慢慢铺满。</p></article>
              <article className="detail-card"><TiltedCard className="detail-image"><img {...appImage("diary.jpg")} alt="DailyChange 日记界面的真实截图" loading="lazy" /></TiltedCard><span className="detail-count">03 / WRITE</span><h3>写一页日记</h3><p>把照片没有说完的故事写下来。</p></article>
              <article className="detail-card"><TiltedCard className="detail-image"><img {...appImage("video-export.jpg")} alt="DailyChange 变化视频导出界面的真实截图" loading="lazy" /></TiltedCard><span className="detail-count">04 / REVISIT</span><h3>导出变化视频</h3><p>让一张张照片，连成看得见的时间。</p></article>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="page-shell closing-grid">
            <div><p className="eyebrow">A NOTE TO YOUR FUTURE SELF</p><h2><ScrollFloat>未来的你，</ScrollFloat><br /><ScrollFloat>会感谢今天</ScrollFloat><br /><em><ScrollFloat>留下这一张。</ScrollFloat></em></h2><p>DailyChange 在 iPhone 上，陪你认真收藏每一天。</p></div>
            <div className="closing-card"><img src={asset("/media/brand/app-icon-192.webp")} width="94" height="94" alt="DailyChange App 图标" /><span className="closing-card-title">DailyChange</span><span>每天一张 · 个人记录 App</span><a className="store-link" href={appStoreUrl}>在 App Store 下载 <span aria-hidden="true">↗</span></a><small>iPhone App · 实际可用地区以你的 App Store 为准。</small></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

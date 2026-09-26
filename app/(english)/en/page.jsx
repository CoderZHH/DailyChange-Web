import { localeMetadata } from "../../../lib/localeMetadata";
import HomeMotion from "../../../components/HomeMotion";
import TimeRibbon from "../../../components/TimeRibbon";
import ScrollFloat from "../../../components/react-bits/ScrollFloat";
import TiltedCard from "../../../components/react-bits/TiltedCard";
import AppScreen from "../../../components/AppScreen";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { asset } from "../../../lib/paths";

export const metadata = localeMetadata("/", "en");

export default function HomePage() {
  return (
    <>
      <SiteHeader locale="en" />
      <HomeMotion />
      <main className="motion-home english-home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE PHOTO, EVERY DAY</p>
              <h1 id="hero-title">One photo a day.<br />See how time <span className="hero-emphasis">changes you.</span></h1>
              <p className="hero-lede">Start with a photo of today. Look back on the days you’ve lived, and leave a few words for your future self.</p>
              <div className="hero-actions">
                <a className="button button-red" href="#experience">Explore DailyChange <span aria-hidden="true">↗</span></a>
                <span className="availability">iOS App · App Store link coming soon</span>
              </div>
              <div className="hero-index" aria-hidden="true"><span>01 Today</span><span>02 Past</span><span>03 Tomorrow</span></div>
            </div>
            <div className="hero-art" aria-label="Actual DailyChange screenshots, shown in Chinese">
              <span className="hero-art-orbit" aria-hidden="true" />
              <span className="hero-art-note" aria-hidden="true">Keep<br />today.</span>
              <div className="hero-photo-back"><img src={asset("/media/app/past-calendar.jpg")} width="1278" height="2778" alt="" /></div>
              <div className="hero-photo-front"><img src={asset("/media/app/today-polaroid.jpg")} width="1278" height="2778" alt="Today’s photo in DailyChange (Chinese interface)" /></div>
              <span className="hero-art-stamp" aria-hidden="true">KEEP THE DAY<br />DAILYCHANGE</span>
            </div>
          </div>
          <p className="screenshot-note page-shell">Screenshots show the App’s Chinese interface.</p>
          <TimeRibbon />
        </section>

        <section className="manifesto page-shell" id="experience">
          <div className="section-tag">THE IDEA <span>·</span> ONE PHOTO AT A TIME</div>
          <p><ScrollFloat>Some changes only become clear when you look back.</ScrollFloat></p>
          <span className="manifesto-side">A little, every day.<br />A life, over time.</span>
        </section>

        <section className="chapter chapter-today" aria-labelledby="today-title">
          <div className="page-shell chapter-grid">
            <div className="chapter-copy">
              <div className="chapter-heading"><span className="chapter-number">01</span><span className="chapter-en">TODAY</span></div>
              <h2 id="today-title"><ScrollFloat>Keep today</ScrollFloat><br /><ScrollFloat>close.</ScrollFloat></h2>
              <p>Take a photo for today. Add a note to your photo print, so there’s room for the feelings outside the frame.</p>
              <div className="chapter-aside">One photo print. One moment kept.</div>
            </div>
            <div className="chapter-media today-media"><span className="media-halo" aria-hidden="true" /><div className="chapter-screen"><TiltedCard amplitude={9}><AppScreen src="today-polaroid.jpg" alt="DailyChange Today photo print (Chinese interface)" /></TiltedCard></div><span className="media-caption">NO. 001 &nbsp; / &nbsp; TODAY</span></div>
          </div>
        </section>

        <section className="chapter chapter-past" aria-labelledby="past-title">
          <div className="page-shell chapter-grid chapter-grid-reverse">
            <div className="chapter-media past-media"><div className="chapter-screen"><TiltedCard amplitude={9}><AppScreen src="past-calendar.jpg" alt="DailyChange calendar and past records (Chinese interface)" /></TiltedCard></div><span className="media-caption">ONE DAY AT A TIME &nbsp; / &nbsp; PAST</span></div>
            <div className="chapter-copy">
              <div className="chapter-heading"><span className="chapter-number">02</span><span className="chapter-en">PAST</span></div>
              <h2 id="past-title"><ScrollFloat>The days pass.</ScrollFloat><br /><ScrollFloat>The story stays.</ScrollFloat></h2>
              <p>Revisit past photo prints in your calendar and timeline. Two photos taken far apart can reveal the changes you never noticed along the way.</p>
              <div className="chapter-aside">Look back. Find something new.</div>
            </div>
          </div>
        </section>

        <section className="chapter chapter-tomorrow" aria-labelledby="tomorrow-title">
          <div className="page-shell chapter-grid">
            <div className="chapter-copy">
              <div className="chapter-heading"><span className="chapter-number">03</span><span className="chapter-en">TOMORROW</span></div>
              <h2 id="tomorrow-title"><ScrollFloat>Dear future me,</ScrollFloat><br /><ScrollFloat>a letter for you.</ScrollFloat></h2>
              <p>Write what’s on your mind and leave it for a day in the future. When that day arrives, hear from the person you were.</p>
              <div className="chapter-aside">A little of today, sent ahead.</div>
            </div>
            <div className="chapter-media tomorrow-media"><div className="chapter-screen"><TiltedCard amplitude={9}><AppScreen src="future-message.jpg" alt="DailyChange letter to your future self (Chinese interface)" /></TiltedCard></div><span className="media-caption">POSTMARK &nbsp; / &nbsp; TOMORROW</span></div>
          </div>
        </section>

        <section className="details-section">
          <div className="page-shell">
            <div className="details-heading"><div><div className="section-tag">MORE THAN A PHOTO <span>·</span> MAKE IT YOURS</div><h2><ScrollFloat>Give your days</ScrollFloat><br /><em><ScrollFloat>a little shape.</ScrollFloat></em></h2></div><p>A little decorating. A little writing. The memories beyond the photo deserve a place, too.</p></div>
            <div className="detail-grid">
              <article className="detail-card"><TiltedCard className="detail-image"><img src={asset("/media/app/sticker-creation.jpg")} alt="DailyChange sticker creation (Chinese interface)" loading="lazy" /></TiltedCard><span className="detail-count">01 / CREATE</span><h3>Make and use stickers</h3><p>Give your photo prints a touch that’s yours.</p></article>
              <article className="detail-card"><TiltedCard className="detail-image"><img src={asset("/media/app/photo-wall.jpg")} alt="DailyChange photo wall (Chinese interface)" loading="lazy" /></TiltedCard><span className="detail-count">02 / COLLECT</span><h3>Build a photo wall</h3><p>Bring your favorite moments together, one by one.</p></article>
              <article className="detail-card"><TiltedCard className="detail-image"><img src={asset("/media/app/diary.jpg")} alt="DailyChange diary (Chinese interface)" loading="lazy" /></TiltedCard><span className="detail-count">03 / WRITE</span><h3>Write a diary entry</h3><p>Write the part of the story a photo can’t tell.</p></article>
              <article className="detail-card"><TiltedCard className="detail-image"><img src={asset("/media/app/video-export.jpg")} alt="DailyChange change video export (Chinese interface)" loading="lazy" /></TiltedCard><span className="detail-count">04 / REVISIT</span><h3>Export a change video</h3><p>Turn your photos into a video of change over time.</p></article>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="page-shell closing-grid">
            <div><p className="eyebrow">A NOTE TO YOUR FUTURE SELF</p><h2><ScrollFloat>Your future self</ScrollFloat><br /><ScrollFloat>will be glad</ScrollFloat><br /><em><ScrollFloat>you kept today.</ScrollFloat></em></h2><p>DailyChange for iPhone. A place for the days you want to keep.</p></div>
            <div className="closing-card"><img src={asset("/media/brand/app-icon.png")} width="94" height="94" alt="DailyChange app icon" /><span className="closing-card-title">DailyChange</span><span>One photo a day · A personal journal</span><div className="store-placeholder" aria-label="App Store download link coming soon">App Store link coming soon <span aria-hidden="true">↗</span></div><small>A download link will appear here once confirmed.</small></div>
          </div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}

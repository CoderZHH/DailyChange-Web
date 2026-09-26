import { localeMetadata } from "../../../../lib/localeMetadata";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";
import { page } from "../../../../lib/paths";

export const metadata = {
  ...localeMetadata("/support/", "en"),
  title: "Support",
  description: "DailyChange help, frequently asked questions, and contact email.",
};

const questions = [
  {
    title: "How does “one photo a day” work?",
    answer: "DailyChange builds a personal timeline with one photo print for each day. You can retake today’s photo; the new photo replaces the previous record for that day. Days without a photo stay blank.",
  },
  {
    title: "Why does the App ask for camera, location, notification, or Photos permission?",
    answer: "The camera is used to take today’s photo. Location is optional and is used to add a place name when you use the feature and grant permission. Notifications are used for daily reminders you choose to enable. Photos permission lets you save exported photos or videos to your system photo library. You can manage permissions in iOS Settings. Denying a permission may make the related feature unavailable.",
  },
  {
    title: "How does iCloud backup work? Can I restore my records on another device?",
    answer: "You can opt in to iCloud backup in the App’s settings, under data and backup. Backups are stored in your own iCloud. With the same Apple Account, iCloud Drive enabled, and a valid backup available, the App will attempt to restore your records. Check the backup status in the App. Turning backup off stops future updates; it does not delete existing iCloud backups. Restoration may fail if a backup is unavailable or incomplete.",
  },
  {
    title: "Does Restore Purchases bring back my photos and diary?",
    answer: "No. Restore Purchases restores eligible DailyChange PRO purchases, not photos, diary entries, or other personal records. Restoring those records depends on data still on your device or an available backup.",
  },
  {
    title: "How do I export photos or change videos?",
    answer: "Open the relevant photo or export option in the App, then follow the prompts to save to Photos or share. Exporting requires the appropriate Photos permission and available device storage. If saving fails, check Photos permissions in iOS Settings and your available storage. When contacting support, mention which export option you used.",
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader locale="en" currentPath="/support/" />
      <main className="interior-main english-interior">
        <section className="interior-hero support-hero">
          <div className="page-shell interior-hero-grid">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> HERE TO HELP</p>
              <h1>Need a hand?<br /><em>Write to me.</em></h1>
              <p className="interior-intro">Report a problem, suggest an idea, or share your experience with DailyChange. Just send an email.</p>
            </div>
            <div className="contact-card">
              <span className="card-kicker">CONTACT / EMAIL</span>
              <a className="contact-email" href="mailto:zhj1140351774@gmail.com">zhj1140351774@gmail.com <span aria-hidden="true">↗</span></a>
              <p>Click to start an email, or select the address to copy it.</p>
              <span className="contact-card-index">DC — 001</span>
            </div>
          </div>
        </section>
        <section className="support-guidance page-shell">
          <div className="section-tag">BEFORE YOU SEND <span>·</span> A FEW HELPFUL DETAILS</div>
          <div className="guidance-grid"><h2>A few clues<br />go a long way.</h2><div><p>For a bug report, please include your App version, iOS version, when the problem happened, and the steps that led to it. A screenshot may also help.</p><p className="gentle-alert">Please don’t send original private diary entries or photos unless you choose to share them.</p></div></div>
        </section>
        <section className="faq-section">
          <div className="page-shell faq-grid">
            <div className="faq-heading"><div className="section-tag">GOOD TO KNOW <span>·</span> FAQ</div><h2>You might<br />be wondering.</h2><p>Daily records, permissions, backups, and exports.</p></div>
            <div className="faq-list">{questions.map((item, index) => <article className="faq-item" key={item.title}><span className="faq-index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.answer}</p></div></article>)}</div>
          </div>
        </section>
        <section className="support-bottom page-shell"><span>How your records are stored and deleted</span><a href={page("/en/privacy/")}>Read the privacy policy <span aria-hidden="true">↗</span></a></section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}

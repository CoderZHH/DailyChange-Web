import { localeMetadata } from "../../../../lib/localeMetadata";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";

export const metadata = {
  ...localeMetadata("/privacy/", "en"),
  title: "Privacy Policy",
  description: "How DailyChange handles local records, optional iCloud backups, support emails, and website visits.",
};
const email = "zhj1140351774@gmail.com";

function Pending({ children, title = "To be confirmed before release" }) {
  return <div className="pending-note"><strong>{title}</strong><p>{children}</p></div>;
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader locale="en" currentPath="/privacy/" />
      <main className="interior-main privacy-main english-interior">
        <section className="interior-hero privacy-hero">
          <div className="page-shell privacy-hero-inner">
            <p className="eyebrow"><span className="eyebrow-line" /> YOUR DAYS ARE YOURS</p>
            <h1>Privacy policy<span className="title-period">.</span></h1>
            <p className="interior-intro">DailyChange is a place to record your life. This policy explains where those records are stored, when a cloud copy is created, and how you can manage your data.</p>
            <div className="policy-meta"><span>Effective: September 26, 2026</span><span>Updated: September 26, 2026</span></div>
          </div>
        </section>
        <div className="page-shell policy-layout">
          <aside className="policy-sidebar" aria-label="Privacy policy contents">
            <span>CONTENTS</span>
            <a href="#scope">01 Scope and developer</a>
            <a href="#data">02 Data and storage</a>
            <a href="#permissions">03 Permissions and processing</a>
            <a href="#purchases">04 Purchases</a>
            <a href="#control">05 Retention and deletion</a>
            <a href="#website">06 Website visits</a>
            <a href="#contact">07 Contact and updates</a>
          </aside>
          <article className="policy-content">
            <section id="scope" className="policy-section">
              <div className="policy-section-label">01 / SCOPE</div><h2>Scope and developer</h2>
              <p>This policy applies to the publicly released <strong>DailyChange iOS App</strong> and this official website. DailyChange does not require you to create an account.</p>
              <p>Developer contact email: <a href={`mailto:${email}`}>{email}</a>.</p>
              <Pending>The developer’s legal name or legal entity is still to be confirmed. It will be added here once verified.</Pending>
            </section>
            <section id="data" className="policy-section">
              <div className="policy-section-label">02 / YOUR DATA</div><h2>Three kinds of data,<br />three places</h2>
              <div className="data-block"><span>ON YOUR DEVICE</span><h3>Your personal records</h3><p>Original photos, processed photos, thumbnails, photo-print notes, diary entries, letters to your future self, stickers you make or use, photo walls, and related record information are primarily stored on your device. Photo records may also include the date, an optional place name, and geometric landmarks and composition parameters used for face alignment. Landmarks include the face bounding box, eye, nose, and mouth positions, and confidence values. Composition parameters include rotation, scale, translation, crop, and output size. This information is saved with your photo records in local library metadata and is used for alignment and video export, not to identify you.</p></div>
              <div className="data-block"><span>ONLY IF YOU OPT IN</span><h3>Backups in your own iCloud</h3><p>If you enable iCloud backup in the App, copies of your records are written to the App’s data storage in your own iCloud Drive. The backup includes photos and library metadata, so saved face landmarks and composition parameters are also included. Other backed-up records include notes, diary entries, stickers, photo walls, and future letters. Turning backup off stops future updates; it does not delete copies that already exist. Apple provides iCloud storage and processing, subject to Apple’s rules. This face-alignment and in-App backup process does not send your content or face-alignment data to developer servers.</p></div>
              <div className="data-block"><span>WHEN YOU CHOOSE TO SEND IT</span><h3>Support emails</h3><p>When you email for help, the developer receives your sender email address, message, and any files you attach. This information is used to reply and handle your request. Please do not send original private diary entries or photos that you do not wish to share.</p></div>
              <Pending>The retention period and routine deletion process for support emails have not yet been determined. You may request deletion of a support email using the contact address above. This policy will be updated once the handling process is confirmed.</Pending>
            </section>
            <section id="permissions" className="policy-section">
              <div className="policy-section-label">03 / PERMISSIONS</div><h2>Permissions and processing</h2>
              <div className="policy-row"><h3>Camera and face alignment</h3><p>The camera is used to take today’s photo. Face alignment uses Apple Vision on your device to detect geometric positions for photo composition, not identity recognition. Landmarks and composition parameters are saved with photos rather than used only at the moment of capture. When exporting a change video, the App reads the original photos and saved eye, nose, and face-box positions to maintain consistent composition across different aspect ratios. Processing takes place on your device. If you enable iCloud backup, the photos and this metadata are also saved in your own iCloud.</p></div>
              <div className="policy-row"><h3>Location</h3><p>With your permission, the relevant feature can obtain a location and save an optional place name in the record. Photo records store the place name, not precise coordinates. You can use the App without granting location permission.</p></div>
              <div className="policy-row"><h3>Notifications</h3><p>Notification permission is used for daily photo reminders you choose to enable.</p></div>
              <div className="policy-row"><h3>Photos</h3><p>When you choose to save an exported photo or change video, the App uses the relevant system photo-library permission to write that content to Photos.</p></div>
              <p>You can adjust these permissions in iOS Settings at any time. Disabling a permission may make the related feature unavailable.</p>
              <Pending title="Release-version review">Face-alignment data, storage, and uses were verified against the project implementation on September 26, 2026. Place-name handling and other permission descriptions still need to be checked against the final iOS release.</Pending>
            </section>
            <section id="purchases" className="policy-section">
              <div className="policy-section-label">04 / PURCHASES</div><h2>Apple handles purchases</h2>
              <p>DailyChange offers a basic version and DailyChange PRO. PRO has an annual auto-renewing subscription and a lifetime purchase option. Purchases, payments, and orders are handled by Apple’s App Store through StoreKit. The developer does not collect payment-card details through this website. The App uses purchase status returned by Apple to recognize PRO access. Restore Purchases restores eligible PRO access, not photos, diary entries, or other records.</p>
            </section>
            <section id="control" className="policy-section">
              <div className="policy-section-label">05 / YOUR CONTROL</div><h2>Retention, controls,<br />and deletion</h2>
              <div className="policy-row"><h3>Local records</h3><p>Records remain in the App’s device storage until you delete the relevant content in the App or delete the App from your device. Deleting the App removes its data from that device. System device backups, content exported to Photos, and iCloud copies must be managed separately.</p></div>
              <div className="policy-row"><h3>Permissions and backup</h3><p>You can disable permissions in iOS Settings and turn iCloud backup off in the App’s settings, under data and backup. Turning backup off stops future backup updates; it <strong>does not delete existing iCloud data</strong>.</p></div>
              <div className="policy-row"><h3>Existing iCloud data</h3><p>To remove existing copies, first turn off iCloud backup in the App. Then open iPhone Settings → [your name] → iCloud → Storage / Manage Account Storage, look for DailyChange data, and use the deletion option provided by the system. If this data is visible in iCloud Drive in the Files app, you can also delete the relevant files after checking their contents, then check Recently Deleted. Deleting iCloud data can affect other devices using the same Apple Account. <a href="https://support.apple.com/guide/icloud/mm62d92d6b3e/icloud">See Apple’s guidance on third-party app data in iCloud</a>.</p></div>
              <Pending title="Deletion steps still to be verified">The exact DailyChange iCloud deletion options on different iOS versions still need to be checked with the final App on a real device. If you cannot find the options above, contact the developer first to avoid deleting unrelated data.</Pending>
            </section>
            <section id="website" className="policy-section">
              <div className="policy-section-label">06 / THIS WEBSITE</div><h2>Website visits</h2>
              <p>This website serves static pages through GitHub Pages. When you visit a GitHub Pages site, GitHub logs visitor IP addresses for security purposes. See the <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Pages documentation</a> and <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</a> for details. This website does not add analytics, advertising tracking, third-party forms, or a cookie banner.</p>
              <Pending title="Hosting information">GitHub Pages hosting has been confirmed. No analytics or advertising tracking tools are configured. The specific retention period for GitHub access logs has not been verified; GitHub’s Privacy Statement governs its processing.</Pending>
            </section>
            <section id="contact" className="policy-section">
              <div className="policy-section-label">07 / CONTACT</div><h2>Contact and updates</h2>
              <p>For questions about this policy, your records, or support emails, contact <a href={`mailto:${email}`}>{email}</a>. When this policy changes, this page and its “Updated” date will be revised.</p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}

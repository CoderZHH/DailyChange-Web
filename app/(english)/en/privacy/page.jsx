import { appStoreUrl } from "../../../../lib/appStore";
import { localeMetadata } from "../../../../lib/localeMetadata";
import SiteFooter from "../../../../components/SiteFooter";
import SiteHeader from "../../../../components/SiteHeader";

export const metadata = {
  ...localeMetadata("/privacy/", "en"),
  title: "Privacy Policy",
  description: "How DailyChange handles local records, optional iCloud backups, support emails, and website visits.",
};
const email = "zhj1140351774@gmail.com";

function PolicyNote({ children, title = "Policy information" }) {
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
            <div className="policy-meta"><span>Effective: September 26, 2026</span><span>Updated: November 6, 2026</span></div>
          </div>
        </section>
        <div className="page-shell policy-layout">
          <aside className="policy-sidebar" aria-label="Privacy policy contents">
            <span>CONTENTS</span>
            <a href="#scope">01 Scope and developer</a>
            <a href="#data">02 Data and storage</a>
            <a href="#face-data">03 Face data</a>
            <a href="#permissions">04 Permissions and processing</a>
            <a href="#purchases">05 Purchases</a>
            <a href="#control">06 Retention and deletion</a>
            <a href="#website">07 Website visits</a>
            <a href="#contact">08 Contact and updates</a>
          </aside>
          <article className="policy-content">
            <section id="scope" className="policy-section">
              <div className="policy-section-label">01 / SCOPE</div><h2>Scope and developer</h2>
              <p>This policy applies to the publicly released <strong>DailyChange iOS App</strong> and this official website. DailyChange does not require you to create an account.</p>
              <p>Developer contact email: <a href={`mailto:${email}`}>{email}</a>.</p>
              <p>The developer name publicly displayed on the App Store is 航杰 张. <a href={appStoreUrl}>View the store information</a>.</p>
            </section>
            <section id="data" className="policy-section">
              <div className="policy-section-label">02 / YOUR DATA</div><h2>Three kinds of data,<br />three places</h2>
              <div className="data-block"><span>ON YOUR DEVICE</span><h3>Your personal records</h3><p>Original photos, aligned photos, thumbnails, photo-print notes, diary entries, letters to your future self, stickers you make or use, photo walls, and related record information are primarily stored in the App’s private storage on your device. Photo records can also contain a date, an optional place name, and the face landmarks and composition parameters described in <a href="#face-data">Section 03</a>.</p></div>
              <div className="data-block"><span>ONLY IF YOU OPT IN</span><h3>Backups in your own iCloud</h3><p>If you enable iCloud backup in the App, copies of your library, photos, and metadata, including saved face landmarks and composition parameters, are written to the App’s storage in your own iCloud Drive. Other backed-up records include notes, diary entries, stickers, photo walls, and future letters. Apple provides iCloud storage. Turning backup off stops future updates; it does not delete existing copies. The backup can retain both current and previous backup generations; see <a href="#control">Section 06</a> for deletion guidance. The App does not send these backup files to a developer server.</p></div>
              <div className="data-block"><span>WHEN YOU CHOOSE TO SEND IT</span><h3>Support emails</h3><p>When you email for help, the developer receives your sender email address, message, and any files you attach. This information is used to reply and handle your request. Please do not send original private diary entries or photos that you do not wish to share.</p></div>
              <p>Support emails are used to answer and investigate the issue you send. Contact the address above to ask about email storage or request deletion of a support email you have sent.</p>
            </section>
            <section id="face-data" className="policy-section">
              <div className="policy-section-label">03 / FACE DATA</div><h2>Face data: use, storage,<br />and deletion</h2>
              <div className="policy-row" id="face-data-types"><h3>What the App processes</h3><p>During camera preview, Apple Vision analyzes the face frame, eye visibility, and head pose on your device. Preview frames and observations are temporary and are not saved as photo records. When you capture or import a photo, the App saves the original, aligned, and thumbnail images. Its photo record also saves sparse face landmarks: detection confidence, a face bounding box, and available left-eye, right-eye, nose, and mouth centers. It saves alignment parameters: rotation, scale, horizontal and vertical translation, crop rectangle, and output size. It does not save a full facial landmark mesh, identity vector, or face authentication template.</p></div>
              <div className="policy-row" id="face-data-uses"><h3>Why it is used</h3><p>Temporary preview analysis helps the App suggest camera adjustments, such as moving closer, facing forward, or improving light. Saved landmarks and alignment parameters help align your photos and keep the framing consistent when you export a change video in different aspect ratios. This processing happens on your device. The App does not use this data to identify or authenticate you, match faces across photos, train models, or serve ads or tracking.</p></div>
              <div className="policy-row" id="face-data-storage"><h3>Where it goes</h3><p>Saved photos, landmarks, and alignment parameters remain in the App’s private local library. If you choose to enable iCloud backup, they are also copied into this App’s data in your own iCloud Drive, which Apple operates. The App does not send face data to a developer server or a remote face-analysis service. A photo or video you choose to export or share can contain visible faces and is passed to the system Photos library or your chosen share destination; this is separate from sending the saved landmark metadata to a face-analysis service.</p></div>
              <div className="policy-row" id="face-data-retention"><h3>How long it remains</h3><p>Saved face landmarks and alignment parameters remain with their photo record; there is no fixed automatic expiry. A successful same-day retake replaces that day’s current local record, and the App subsequently cleans up the old local photo files. An existing iCloud backup may still contain older data, including in its previous backup generation, until that backup data is separately removed or superseded and cleaned up.</p></div>
              <div className="policy-row" id="face-data-deletion"><h3>How to remove it</h3><p>You can choose Delete Photo from the More menu on Today’s print or in photo details and confirm deletion of that date’s photo and alignment record. Diary entries, notes, and stickers remain, and the system photo library is unaffected. Manage existing backups separately; restoring an older backup may bring the photo back. The app currently has no general delete-all-records control. To remove the App’s local library, fully delete the App from the device; offloading it retains app data. Turning off iCloud backup or deleting the App does not delete existing iCloud copies. Manage and delete DailyChange’s iCloud data separately as explained in <a href="#control">Section 06</a>. Device backups, Photos exports, and files you shared elsewhere must also be managed separately.</p></div>
            </section>
            <section id="permissions" className="policy-section">
              <div className="policy-section-label">04 / PERMISSIONS</div><h2>Permissions and processing</h2>
              <div className="policy-row"><h3>Camera and face alignment</h3><p>The camera is used to take today’s photo. The App uses Apple Vision on your device for camera guidance and photo alignment. <a href="#face-data">Section 03</a> describes the face data that is temporarily processed, saved with a photo record, or optionally copied to iCloud.</p></div>
              <div className="policy-row"><h3>Location</h3><p>With your permission, the App can use location to add an optional place name. When importing an older photo, it may also read that photo’s location metadata or authorized Photos location to determine a place name. Apple’s geocoding service may process coordinates to resolve the name; the App does not send the photo or its face landmarks to that service. The App’s photo record saves the place name, not precise coordinates, and re-encodes imported originals without standard GPS metadata. You can use the App without granting location permission.</p></div>
              <div className="policy-row"><h3>Notifications</h3><p>Notification permission is used for daily photo reminders you choose to enable.</p></div>
              <div className="policy-row"><h3>Photos</h3><p>When you choose to save an exported photo or change video, the App uses the relevant system photo-library permission to write that content to Photos.</p></div>
              <p>You can adjust these permissions in iOS Settings at any time. Disabling a permission may make the related feature unavailable.</p>
              <PolicyNote title="Version information">The single-photo deletion description was checked against the 1.1.4 release implementation. System permission prompts and iCloud management screens may vary by iOS version.</PolicyNote>
            </section>
            <section id="purchases" className="policy-section">
              <div className="policy-section-label">05 / PURCHASES</div><h2>Apple handles purchases</h2>
              <p>DailyChange offers a basic version and DailyChange PRO. PRO has an annual auto-renewing subscription and a lifetime purchase option. Purchases, payments, and orders are handled by Apple’s App Store through StoreKit. The developer does not collect payment-card details through this website. The App uses purchase status returned by Apple to recognize PRO access. Restore Purchases restores eligible PRO access, not photos, diary entries, or other records.</p>
            </section>
            <section id="control" className="policy-section">
              <div className="policy-section-label">06 / YOUR CONTROL</div><h2>Retention, controls,<br />and deletion</h2>
              <div className="policy-row"><h3>Local records</h3><p>Records remain in the App’s private device storage without a fixed automatic expiry. You can choose Delete Photo from the More menu on Today’s print or in photo details and confirm deletion of that date’s photo and alignment record. Diary entries, notes, and stickers remain, and the system photo library is unaffected. Manage existing backups separately; restoring an older backup may bring the photo back. The app currently has no general delete-all-records control. A successful same-day retake replaces that day’s current record; old local photo files are cleaned up afterward. To remove the entire local library, fully delete the App from your device. Offloading an app keeps its data and is not equivalent to full deletion. System device backups, content exported to Photos, shared copies, and iCloud data must be managed separately.</p></div>
              <div className="policy-row"><h3>Permissions and backup</h3><p>You can disable permissions in iOS Settings and turn iCloud backup off in the App’s settings, under data and backup. Turning backup off stops future backup updates; it <strong>does not delete existing iCloud data</strong>.</p></div>
              <div className="policy-row"><h3>Existing iCloud data</h3><p>First turn off iCloud backup in the App to stop new copies. Then use iPhone Settings → [your name] → iCloud → Storage / Manage Account Storage to find and delete DailyChange’s stored app data, if the system offers that option. If DailyChange files are visible in iCloud Drive in the Files app, check their contents before removing the App’s “DailyChange Backup” folder and any older “DailyChange” backup folder, then review Recently Deleted. The current backup format can retain a current and a previous generation, so replacing a local photo does not immediately remove every older cloud copy. Deleting cloud data can affect other devices on your Apple Account. Review system device backups and exported Photos items separately. <a href="https://support.apple.com/guide/icloud/mm62d92d6b3e/icloud">See Apple’s guidance on third-party app data in iCloud</a>.</p></div>
              <PolicyNote title="iOS version differences">iCloud management options can differ across iOS versions. If you cannot find the options above, contact the developer first to avoid deleting unrelated data.</PolicyNote>
            </section>
            <section id="website" className="policy-section">
              <div className="policy-section-label">07 / THIS WEBSITE</div><h2>Website visits</h2>
              <p>This website serves static pages through GitHub Pages. When you visit a GitHub Pages site, GitHub logs visitor IP addresses for security purposes. See the <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Pages documentation</a> and <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</a> for details. This website does not add analytics, advertising tracking, third-party forms, or a cookie banner.</p>
              <PolicyNote title="Hosting information">GitHub Pages hosting has been confirmed. No analytics or advertising tracking tools are configured. The specific retention period for GitHub access logs has not been verified; GitHub’s Privacy Statement governs its processing.</PolicyNote>
            </section>
            <section id="contact" className="policy-section">
              <div className="policy-section-label">08 / CONTACT</div><h2>Contact and updates</h2>
              <p>For questions about this policy, your records, or support emails, contact <a href={`mailto:${email}`}>{email}</a>. When this policy changes, this page and its “Updated” date will be revised.</p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}

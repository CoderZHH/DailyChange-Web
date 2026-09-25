import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { page } from "../../lib/paths";

export const metadata = {
  title: "帮助与反馈",
  description: "DailyChange 使用帮助、常见问题与反馈邮箱。",
};

const questions = [
  {
    title: "“一天一张”是怎样的规则？",
    answer: <>DailyChange 以每天一张相纸组成个人时间线。你可以在当天重新拍摄；新的照片会替换当天原有的记录。没有拍摄的日期会自然留白，不会补造一张照片。</>,
  },
  {
    title: "为什么会请求相机、位置、通知或照片权限？",
    answer: <>相机用于拍摄当天照片；位置仅在你使用相关功能并授权时取得可选地点名称；通知用于你选择开启的每日提醒；照片图库权限用于将导出的照片或视频保存到系统相册。你可以在 iOS“设置”中管理权限。拒绝某项权限后，对应功能可能无法使用。</>,
  },
  {
    title: "怎样使用 iCloud 备份？换设备后能恢复吗？",
    answer: <>在 App 的“设置 → 数据与备份”中，可以选择开启 iCloud 备份。备份会存入你自己的 iCloud；使用同一 Apple 账户、开启 iCloud Drive 且有有效备份时，App 会尝试恢复。请留意 App 内的备份状态。关闭开关仅停止后续更新，不会删除已经保存的 iCloud 备份；备份不可用或不完整时，恢复可能失败。</>,
  },
  {
    title: "“恢复购买”会找回照片和日记吗？",
    answer: <>不会。“恢复购买”用于恢复已购买的 DailyChange PRO 权益，不会恢复照片、日记或其他个人记录。个人记录的恢复取决于设备上保留的数据或可用的备份。</>,
  },
  {
    title: "怎样导出照片或变化视频？",
    answer: <>在 App 内打开对应的照片或导出入口，按界面提示保存到系统相册或分享。导出需要相应的照片权限和设备储存空间。如果保存失败，请先检查 iOS 的照片权限与可用空间，并在反馈时说明所用的导出入口。</>,
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="interior-main">
        <section className="interior-hero support-hero">
          <div className="page-shell interior-hero-grid">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> HERE TO HELP</p>
              <h1>有问题，<br /><em>写给我。</em></h1>
              <p className="interior-intro">遇到故障、想提出建议，或只是想告诉我你的使用体验，都可以直接发邮件。</p>
            </div>
            <div className="contact-card">
              <span className="card-kicker">CONTACT / 联系邮箱</span>
              <a className="contact-email" href="mailto:zhj1140351774@gmail.com">zhj1140351774@gmail.com <span aria-hidden="true">↗</span></a>
              <p>点击即可写邮件；也可以选中邮箱地址复制。</p>
              <span className="contact-card-index">DC — 001</span>
            </div>
          </div>
        </section>

        <section className="support-guidance page-shell">
          <div className="section-tag">BEFORE YOU SEND <span>·</span> 反馈小提示</div>
          <div className="guidance-grid"><h2>一点线索，<br />更容易找到问题。</h2><div><p>如果是故障，请尽量附上 App 版本、iOS 版本、问题发生的时间，以及发生前的操作步骤。截图也可能有帮助。</p><p className="gentle-alert">请不要发送原始私密日记或照片，除非你自己愿意分享这些内容。</p></div></div>
        </section>

        <section className="faq-section">
          <div className="page-shell faq-grid">
            <div className="faq-heading"><div className="section-tag">GOOD TO KNOW <span>·</span> 常见问题</div><h2>你可能还想知道。</h2><p>关于每天的记录、权限、备份和导出。</p></div>
            <div className="faq-list">{questions.map((item, index) => <article className="faq-item" key={item.title}><span className="faq-index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.answer}</p></div></article>)}</div>
          </div>
        </section>
        <section className="support-bottom page-shell"><span>关于数据如何保存与删除</span><a href={page("/privacy/")}>阅读隐私政策 <span aria-hidden="true">↗</span></a></section>
      </main>
      <SiteFooter />
    </>
  );
}

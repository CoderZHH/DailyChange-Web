import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata = {
  title: "隐私政策",
  description: "了解 DailyChange iOS App 与官方网站如何处理本地记录、iCloud 备份、支持邮件和网站访问数据。",
};

const email = "zhj1140351774@gmail.com";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="interior-main privacy-main">
        <section className="interior-hero privacy-hero"><div className="page-shell privacy-hero-inner"><p className="eyebrow"><span className="eyebrow-line" /> YOUR DAYS ARE YOURS</p><h1>隐私政策<span className="title-period">.</span></h1><p className="interior-intro">DailyChange 用来记录你的生活。下面说明这些记录保存在何处、什么时候会产生云端副本，以及你可以怎样管理它们。</p><div className="policy-meta"><span>生效日期：2026 年 9 月 26 日</span><span>更新日期：2026 年 9 月 26 日</span></div></div></section>

        <div className="page-shell policy-layout">
          <aside className="policy-sidebar" aria-label="隐私政策目录"><span>CONTENTS / 目录</span><a href="#scope">01 适用范围</a><a href="#data">02 数据与保存位置</a><a href="#permissions">03 权限与处理用途</a><a href="#purchases">04 购买</a><a href="#control">05 保留、关闭与删除</a><a href="#website">06 网站访问数据</a><a href="#contact">07 联系与更新</a></aside>
          <article className="policy-content">
            <section id="scope" className="policy-section"><div className="policy-section-label">01 / SCOPE</div><h2>适用范围与开发者</h2><p>本政策适用于公开发布的 <strong>DailyChange iOS App</strong> 和本官方网站。DailyChange 不要求创建用户账号。</p><p>开发者联系邮箱：<a href={`mailto:${email}`}>{email}</a>。</p><div className="pending-note"><strong>发布前待确认</strong><p>开发者的法定姓名或主体名称仍需核定。确认后将在这里补全。</p></div></section>

            <section id="data" className="policy-section"><div className="policy-section-label">02 / YOUR DATA</div><h2>三类数据，三个位置</h2><div className="data-block"><span>在你的设备上</span><h3>App 内的个人记录</h3><p>你拍摄的原始照片、处理后的照片和缩略图，以及相纸留言、日记、未来信件、制作或使用的贴纸、照片墙和相关记录信息，主要保存在设备本地。照片记录还可能包含拍摄日期、可选的地点名称，以及用于人脸对齐的几何位置和构图参数。其中，人脸关键点包括脸框、眼睛、鼻子、嘴的位置及置信度；构图参数包括旋转、缩放、平移、裁剪和输出尺寸。这些信息会随照片记录保存在本机图库元数据中，用于对齐与视频导出，不用于身份识别。</p></div><div className="data-block"><span>由你选择开启</span><h3>你自己的 iCloud 备份</h3><p>你在 App 内主动开启 iCloud 备份后，App 会将记录副本写入你自己的 iCloud Drive 应用数据空间。备份包含照片和图库元数据，因此照片记录中的人脸关键点与构图参数也会进入你自己的 iCloud。其他备份内容包括留言、日记、贴纸、照片墙和未来信件等记录。关闭备份开关只停止后续更新，已经存在的副本不会因此删除。iCloud 由 Apple 提供储存与处理服务，并受 Apple 的规则约束。上述人脸对齐与 App 内备份流程不会将用户内容或人脸对齐数据发送到开发者服务器。</p></div><div className="data-block"><span>由你主动发送</span><h3>支持邮件</h3><p>你发邮件寻求帮助时，开发者会收到你的发件邮箱地址、邮件文字及你选择附加的文件，用于回复与处理问题。请勿发送不愿分享的原始私密日记或照片。</p></div><div className="pending-note"><strong>发布前待确认</strong><p>支持邮件的保存期限与定期删除办法尚待确定。你可以通过上述邮箱请求删除已发送的支持邮件；具体处理方式确认后会更新本政策。</p></div></section>

            <section id="permissions" className="policy-section"><div className="policy-section-label">03 / PERMISSIONS</div><h2>设备权限与处理用途</h2><div className="policy-row"><h3>相机与人脸对齐</h3><p>相机用于拍摄当天的照片。人脸对齐使用本机 Apple Vision 检测脸部的几何位置，为照片构图，不用于身份识别。关键点与构图参数会随照片保存，而非仅在拍摄瞬间使用：导出变化视频时，App 会读取原图及已保存的眼睛、鼻子和脸框位置，为不同画幅稳定构图。处理在设备上完成；用户开启 iCloud 备份后，照片及这些元数据也会存入其自己的 iCloud。</p></div><div className="policy-row"><h3>位置</h3><p>相关功能在你授权后可取得地点，并在记录中保存可选的地名。当前照片记录保存地点名称，不保存精确坐标；你也可以不提供位置权限。</p></div><div className="policy-row"><h3>通知</h3><p>通知权限用于你选择开启的每日拍摄提醒。</p></div><div className="policy-row"><h3>照片图库</h3><p>当你选择保存导出的照片或变化视频时，App 使用系统照片图库相关权限，将内容写入你的相册。</p></div><p>你可以随时到 iOS“设置”中调整这些权限；关闭权限后，对应功能可能无法使用。</p><div className="pending-note"><strong>发布前待复核</strong><p>人脸对齐的数据、保存位置与用途已按 2026 年 9 月 26 日的项目实现核实。地点名称及其他权限表述仍须与最终提交的 iOS 版本核对。</p></div></section>

            <section id="purchases" className="policy-section"><div className="policy-section-label">04 / PURCHASES</div><h2>购买由 Apple 处理</h2><p>DailyChange 提供基础版和 DailyChange PRO。PRO 有自动续订年费与终身购买选项。购买、付款及订单由 Apple 的 App Store 处理；开发者不会通过本网站收集银行卡信息。App 会使用 Apple 返回的购买状态识别 PRO 权益。点按“恢复购买”只恢复符合条件的 PRO 权益，不会恢复照片、日记或其他记录。</p></section>

            <section id="control" className="policy-section"><div className="policy-section-label">05 / YOUR CONTROL</div><h2>保留、关闭与删除</h2><div className="policy-row"><h3>本地记录</h3><p>记录会保留在 App 的设备数据中，直到你在 App 内删除相应内容，或从设备删除 App。删除 App 会移除该设备上的 App 数据；系统设备备份、已导出的相册内容和 iCloud 副本应分别管理。</p></div><div className="policy-row"><h3>关闭权限与备份</h3><p>设备权限可在 iOS“设置”中关闭；iCloud 备份可在 App 的“设置 → 数据与备份”中关闭。关闭备份开关仅停止今后的备份更新，<strong>不会删除已有 iCloud 数据</strong>。</p></div><div className="policy-row"><h3>删除已有 iCloud 数据</h3><p>如需删除已有副本，请先在 App 中关闭 iCloud 备份，再前往 iPhone“设置 → [你的姓名] → iCloud → 储存空间／管理账户储存空间”，查看 DailyChange 的数据并使用系统提供的删除操作。若该数据在“文件”App 的 iCloud 云盘中可见，也可在确认内容后删除对应文件；删除后还应检查“最近删除”。删除 iCloud 中的数据可能影响其他使用同一 Apple 账户的设备。<a href="https://support.apple.com/zh-cn/guide/icloud/mm62d92d6b3e/icloud">参阅 Apple 关于第三方 App iCloud 数据的说明</a>。</p></div><div className="pending-note"><strong>发布前待核对</strong><p>DailyChange 在不同 iOS 版本中显示的最终 iCloud 删除入口，仍需用正式版本与真实设备核对。若找不到上述入口，请先联系开发者确认，避免误删其他资料。</p></div></section>

            <section id="website" className="policy-section"><div className="policy-section-label">06 / THIS WEBSITE</div><h2>网站访问数据</h2><p>本网站使用 GitHub Pages 提供静态页面。访问 GitHub Pages 网站时，GitHub 会为安全目的记录访问者的 IP 地址；处理方式见 <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Pages 说明</a>及 <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub 隐私声明</a>。本站自身不添加访问分析、广告追踪、第三方表单或 Cookie 横幅。</p><div className="pending-note"><strong>托管信息说明</strong><p>已确认本站由 GitHub Pages 托管，未配置访问分析或广告追踪工具。GitHub 访问日志的具体保存期限尚未核定，相关处理以 GitHub 的隐私声明为准。</p></div></section>

            <section id="contact" className="policy-section"><div className="policy-section-label">07 / CONTACT</div><h2>联系与政策更新</h2><p>如对本政策、个人记录或支持邮件有疑问，请发送邮件至 <a href={`mailto:${email}`}>{email}</a>。政策发生变化时，本页面会更新内容与“更新日期”。</p></section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

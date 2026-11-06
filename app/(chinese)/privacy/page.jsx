import { appStoreUrl } from "../../../lib/appStore";
import { localeMetadata } from "../../../lib/localeMetadata";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";

export const metadata = {
  ...localeMetadata("/privacy/", "zh"),
  title: "隐私政策",
  description: "了解 DailyChange iOS App 与官方网站如何处理本地记录、iCloud 备份、支持邮件和网站访问数据。",
};

const email = "zhj1140351774@gmail.com";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader currentPath="/privacy/" />
      <main className="interior-main privacy-main">
        <section className="interior-hero privacy-hero"><div className="page-shell privacy-hero-inner"><p className="eyebrow"><span className="eyebrow-line" /> YOUR DAYS ARE YOURS</p><h1>隐私政策<span className="title-period">.</span></h1><p className="interior-intro">DailyChange 用来记录你的生活。下面说明这些记录保存在何处、什么时候会产生云端副本，以及你可以怎样管理它们。</p><div className="policy-meta"><span>生效日期：2026 年 9 月 26 日</span><span>更新日期：2026 年 11 月 6 日</span></div></div></section>

        <div className="page-shell policy-layout">
          <aside className="policy-sidebar" aria-label="隐私政策目录"><span>CONTENTS / 目录</span><a href="#scope">01 适用范围</a><a href="#data">02 数据与保存位置</a><a href="#face-data">03 人脸数据</a><a href="#permissions">04 权限与处理用途</a><a href="#purchases">05 购买</a><a href="#control">06 保留、关闭与删除</a><a href="#website">07 网站访问数据</a><a href="#contact">08 联系与更新</a></aside>
          <article className="policy-content">
            <section id="scope" className="policy-section"><div className="policy-section-label">01 / SCOPE</div><h2>适用范围与开发者</h2><p>本政策适用于公开发布的 <strong>DailyChange iOS App</strong> 和本官方网站。DailyChange 不要求创建用户账号。</p><p>开发者联系邮箱：<a href={`mailto:${email}`}>{email}</a>。</p><p>App Store 公开开发者名称：航杰 张。<a href={appStoreUrl}>查看商店资料</a>。</p></section>

            <section id="data" className="policy-section"><div className="policy-section-label">02 / YOUR DATA</div><h2>三类数据，三个位置</h2><div className="data-block"><span>在你的设备上</span><h3>App 内的个人记录</h3><p>原始照片、对齐后的照片、缩略图、相纸留言、日记、未来信件、制作或使用的贴纸、照片墙和相关记录信息，主要保存在设备上的 App 私有空间。照片记录还可能包含日期、可选的地点名称，以及<a href="#face-data">第 03 节</a>说明的人脸关键点和构图参数。</p></div><div className="data-block"><span>由你选择开启</span><h3>你自己的 iCloud 备份</h3><p>你在 App 内主动开启 iCloud 备份后，图库、照片及元数据副本会写入你自己的 iCloud Drive 中该 App 的数据空间，已保存的人脸关键点和构图参数也包含在内。其他备份内容包括留言、日记、贴纸、照片墙和未来信件。iCloud 存储由 Apple 提供。关闭备份开关只停止后续更新，已经存在的副本不会因此删除。备份可能保留当前和上一代数据；删除方法见<a href="#control">第 06 节</a>。App 不会将这些备份文件发送到开发者服务器。</p></div><div className="data-block"><span>由你主动发送</span><h3>支持邮件</h3><p>你发邮件寻求帮助时，开发者会收到你的发件邮箱地址、邮件文字及你选择附加的文件，用于回复与处理问题。请勿发送不愿分享的原始私密日记或照片。</p></div><p>支持邮件用于回复与处理你主动发来的问题。如需了解邮件保存安排，或请求删除你已发送的支持邮件，请联系上述邮箱。</p></section>

            <section id="face-data" className="policy-section">
              <div className="policy-section-label">03 / FACE DATA</div><h2>人脸数据的用途、<br />保存与删除</h2>
              <div className="policy-row" id="face-data-types"><h3>处理哪些数据</h3><p>相机预览时，本机 Apple Vision 会分析脸框、眼睛是否可见及头部姿态。预览画面和分析结果只作短暂处理，不保存为照片记录。拍摄或导入照片后，App 会保存原图、对齐图和缩略图；照片记录还会保存少量人脸关键点：检测置信度、脸框，以及可用的左右眼、鼻子和嘴部中心位置。另会保存旋转、缩放、水平及垂直平移、裁剪矩形和输出尺寸等对齐参数。App 不保存完整人脸关键点网格、身份向量或人脸认证模板。</p></div>
              <div className="policy-row" id="face-data-uses"><h3>用于什么目的</h3><p>预览阶段的短暂分析用于提示你靠近、正对相机或改善光线。已保存的关键点和对齐参数用于照片对齐，并在导出不同画幅的变化视频时保持构图一致。这些处理都在设备上完成。App 不使用这些数据识别或验证身份、跨照片匹配人脸、训练模型，也不用于广告或追踪。</p></div>
              <div className="policy-row" id="face-data-storage"><h3>保存在哪里、提供给谁</h3><p>保存的照片、关键点和对齐参数位于 App 的本机私有图库。只有在你选择开启 iCloud 备份后，它们才会复制到你自己 iCloud Drive 中由 Apple 提供的该 App 数据空间。App 不会将人脸数据发送到开发者服务器或远程人脸分析服务。你主动导出或分享的照片、视频可能包含可见的人脸画面，并会交给系统相册或你选定的分享目标；这不同于向人脸分析服务发送已保存的关键点元数据。</p></div>
              <div className="policy-row" id="face-data-retention"><h3>保留多久</h3><p>已保存的人脸关键点和对齐参数随其照片记录保留，没有按固定天数自动过期的规则。同一天重新拍摄并成功替换后，旧记录不再属于当前本地图库，旧照片文件随后清理。已有 iCloud 备份可能仍含较早数据，包括上一代备份；需等备份数据另行删除，或被后续备份替换并清理。</p></div>
              <div className="policy-row" id="face-data-deletion"><h3>怎样删除</h3><p>你可以在今天的相纸或照片详情的“更多”菜单中选择“删除照片”，确认后删除该日期的照片及其对齐记录；日记、留言和贴纸会保留，系统相册不受影响。已有备份需要另行管理，恢复旧备份可能重新带回删除前的照片。App 当前没有清空全部记录的通用入口。若要移除 App 的本地图库，请从设备完整删除 App；系统的“卸载 App”会保留数据，不等于完整删除。关闭 iCloud 备份或删除 App 均不会删除已有的 iCloud 副本，需按<a href="#control">第 06 节</a>另行管理和删除。系统设备备份、已导出到相册的内容及分享给其他地方的副本也需分别管理。</p></div>
            </section>

            <section id="permissions" className="policy-section"><div className="policy-section-label">04 / PERMISSIONS</div><h2>设备权限与处理用途</h2><div className="policy-row"><h3>相机与人脸对齐</h3><p>相机用于拍摄当天的照片。App 在设备上使用 Apple Vision 提供拍摄提示和照片对齐；暂时处理、随照片保存，以及可选备份到 iCloud 的人脸数据详见<a href="#face-data">第 03 节</a>。</p></div><div className="policy-row"><h3>位置</h3><p>获得授权后，App 可利用位置添加可选地名。导入往日照片时，也可能读取该照片的位置元数据或获授权的系统相册位置信息，以确定地名。Apple 的地理编码服务可能处理坐标以解析地名；App 不向该服务发送照片或人脸关键点。App 的照片记录只保存地名，不保存精确坐标；导入的原图会重新编码，去除标准 GPS 元数据。你也可以不授予位置权限。</p></div><div className="policy-row"><h3>通知</h3><p>通知权限用于你选择开启的每日拍摄提醒。</p></div><div className="policy-row"><h3>照片图库</h3><p>当你选择保存导出的照片或变化视频时，App 使用系统照片图库相关权限，将内容写入你的相册。</p></div><p>你可以随时到 iOS“设置”中调整这些权限；关闭权限后，对应功能可能无法使用。</p><div className="pending-note"><strong>版本说明</strong><p>单张照片删除说明已按 1.1.4 发布构建的实现核对。系统权限提示和 iCloud 管理界面可能随 iOS 版本变化。</p></div></section>

            <section id="purchases" className="policy-section"><div className="policy-section-label">05 / PURCHASES</div><h2>购买由 Apple 处理</h2><p>DailyChange 提供基础版和 DailyChange PRO。PRO 有自动续订年费与终身购买选项。购买、付款及订单由 Apple 的 App Store 处理；开发者不会通过本网站收集银行卡信息。App 会使用 Apple 返回的购买状态识别 PRO 权益。点按“恢复购买”只恢复符合条件的 PRO 权益，不会恢复照片、日记或其他记录。</p></section>

            <section id="control" className="policy-section"><div className="policy-section-label">06 / YOUR CONTROL</div><h2>保留、关闭与删除</h2><div className="policy-row"><h3>本地记录</h3><p>记录保留在 App 的本机私有空间中，没有按固定天数自动过期的规则。你可以在今天的相纸或照片详情的“更多”菜单中选择“删除照片”，确认后删除该日期的照片及其对齐记录；日记、留言和贴纸会保留，系统相册不受影响。已有备份需要另行管理，恢复旧备份可能重新带回删除前的照片。App 当前没有清空全部记录的通用入口。同一天重新拍摄并成功替换后，旧记录被替换，旧照片文件随后清理。如需删除整个本地图库，请从设备完整删除 App；系统的“卸载 App”会保留数据，不等于完整删除。系统设备备份、已导出的相册内容、已分享的副本和 iCloud 数据应分别管理。</p></div><div className="policy-row"><h3>关闭权限与备份</h3><p>设备权限可在 iOS“设置”中关闭；iCloud 备份可在 App 的“设置 → 数据与备份”中关闭。关闭备份开关仅停止今后的备份更新，<strong>不会删除已有 iCloud 数据</strong>。</p></div><div className="policy-row"><h3>删除已有 iCloud 数据</h3><p>请先在 App 内关闭 iCloud 备份，阻止产生新副本。然后前往 iPhone“设置 → [你的姓名] → iCloud → 储存空间／管理账户储存空间”，查找 DailyChange 的 App 数据；若系统提供删除选项，可在那里删除。若在“文件”App 的 iCloud 云盘中看得到 DailyChange 文件，请先核对内容，再删除该 App 的“DailyChange Backup”文件夹，以及可能存在的旧版“DailyChange”备份文件夹，并检查“最近删除”。目前的备份格式可能保留当前和上一代数据，因此替换本地照片不会立刻清除所有旧云端副本。删除云端数据可能影响同一 Apple 账户的其他设备。系统设备备份和已导出到相册的内容仍需另行管理。<a href="https://support.apple.com/zh-cn/guide/icloud/mm62d92d6b3e/icloud">参阅 Apple 关于第三方 App iCloud 数据的说明</a>。</p></div><div className="pending-note"><strong>系统界面说明</strong><p>不同 iOS 版本中显示的 iCloud 管理入口可能有所不同。若找不到上述入口，请先联系开发者确认，避免误删其他资料。</p></div></section>

            <section id="website" className="policy-section"><div className="policy-section-label">07 / THIS WEBSITE</div><h2>网站访问数据</h2><p>本网站使用 GitHub Pages 提供静态页面。访问 GitHub Pages 网站时，GitHub 会为安全目的记录访问者的 IP 地址；处理方式见 <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages">GitHub Pages 说明</a>及 <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub 隐私声明</a>。本站自身不添加访问分析、广告追踪、第三方表单或 Cookie 横幅。</p><div className="pending-note"><strong>托管信息说明</strong><p>已确认本站由 GitHub Pages 托管，未配置访问分析或广告追踪工具。GitHub 访问日志的具体保存期限尚未核定，相关处理以 GitHub 的隐私声明为准。</p></div></section>

            <section id="contact" className="policy-section"><div className="policy-section-label">08 / CONTACT</div><h2>联系与政策更新</h2><p>如对本政策、个人记录或支持邮件有疑问，请发送邮件至 <a href={`mailto:${email}`}>{email}</a>。政策发生变化时，本页面会更新内容与“更新日期”。</p></section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

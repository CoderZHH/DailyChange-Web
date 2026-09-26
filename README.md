# DailyChange 官方网站

公开发布的 DailyChange iOS App 官网。中文页面为 `/`、`/support/`、`/privacy/`，英文页面为 `/en/`、`/en/support/`、`/en/privacy/`，使用 Next.js 静态导出并部署到 GitHub Pages。网站不需要后端、账号或数据库。

线上地址：https://coderzhh.github.io/DailyChange-Web/

## 本地运行

```bash
npm ci
npm run dev
```

## 静态导出

```bash
npm run build
```

输出在 `out/`。GitHub Actions 构建时设置 `NEXT_PUBLIC_BASE_PATH=/DailyChange-Web`，以适配项目 Pages 地址。若将来启用自定义域名，应同时调整 workflow 中的 base path，并重新构建。

品牌图片与真实 App 截图在 `public/media/`。支持与隐私页的内容直接输出为 HTML；无需 JavaScript 才能阅读。

## 中英文内容

`app/(chinese)/` 与 `app/(english)/en/` 分别使用中文、英文根布局，输出对应的 HTML `lang`。路由分组不改变中文公开地址。导航、页脚、资源路径和动效组件共享；页首语言切换链接进入对应页面，不保存语言 Cookie，也不做自动跳转。每页输出对应的 canonical 与中英文 alternate 链接。原有条款页不存在，未额外添加。

英文页面保留真实中文 App 截图，首页可见标注为中文界面示例，图片替代文字也注明。更新产品事实与隐私政策时，应同步修改中英两份正文。GitHub Pages 自定义域名变更时，还需更新 `lib/localeMetadata.js` 中的网站域名。

英文 App Store 名称已确认为 `DailyChange: A Photo a Day`；App 内与官网品牌仍使用 `DailyChange`。页面顶部以带边框的语言链接切换到对应版本。

## 动效

首页使用 React Bits 的 Scroll Float 和 Tilted Card 改编组件，来源与许可保存在 `THIRD_PARTY_NOTICES.md`。GSAP 负责章节入场、逐字显影、相纸视差和阅读进度；Motion 负责鼠标悬浮倾斜。时间文字带为自定义实现，随滚动加速，并在离开屏幕后暂停。移动端降低视差幅度，系统启用“减少动态效果”时停用动效。支持与隐私页保留静态阅读布局。

## 发布前核对

- 隐私政策中的开发者法定姓名或主体、支持邮件保存期限。
- 正式 iOS 版本的地点和其他权限行为。人脸关键点与构图参数的本地保存、视频导出用途及可选 iCloud 备份已按 2026-09-26 的 App 代码核实，官网隐私政策已同步。
- 正式版本中删除既有 iCloud 数据的系统入口。
- GitHub 访问日志的具体保存期限（托管已确认为 GitHub Pages，未配置统计工具）。
- App Store 正式下载链接。

反馈邮箱 `zhj1140351774@gmail.com` 已由产品方确认。

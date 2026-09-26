# DailyChange 官方网站

公开发布的 DailyChange iOS App 官网。页面为 `/`、`/support/`、`/privacy/`，使用 Next.js 静态导出并部署到 GitHub Pages。网站不需要后端、账号或数据库。

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

## 动效

首页使用 React Bits 的 Scroll Float 和 Tilted Card 改编组件，来源与许可保存在 `THIRD_PARTY_NOTICES.md`。GSAP 负责章节入场、逐字显影、相纸视差和阅读进度；Motion 负责鼠标悬浮倾斜。时间文字带为自定义实现，随滚动加速，并在离开屏幕后暂停。移动端降低视差幅度，系统启用“减少动态效果”时停用动效。支持与隐私页保留静态阅读布局。

## 发布前核对

- 隐私政策中的开发者法定姓名或主体、支持邮件保存期限。
- 正式 iOS 版本的人脸关键点、地点和权限行为；当前代码将人脸对齐元数据写入本地记录，可能随用户开启的 iCloud 备份一起保存。
- 正式版本中删除既有 iCloud 数据的系统入口。
- GitHub Pages 实际托管设置和访问日志说明。
- App Store 正式下载链接。

反馈邮箱 `zhj1140351774@gmail.com` 已由产品方确认。

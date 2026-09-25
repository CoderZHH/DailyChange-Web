import "./globals.css";
import { asset } from "../lib/paths";

export const metadata = {
  title: {
    default: "DailyChange — 每天一张，看见时间留下的变化",
    template: "%s · DailyChange",
  },
  description:
    "DailyChange 是一款从每天一张照片开始的个人记录 App。在今天拍摄，在过去回看，也给未来的自己留一封信。",
  applicationName: "DailyChange",
  icons: { icon: asset("/media/brand/app-icon.png") },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

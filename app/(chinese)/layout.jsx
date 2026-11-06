import "../globals.css";
import { homeCopy } from "../../lib/localeMetadata";
import { asset } from "../../lib/paths";

export const metadata = {
  title: {
    default: homeCopy.zh.title,
    template: "%s · DailyChange",
  },
  description: homeCopy.zh.description,
  applicationName: "DailyChange",
  icons: { icon: asset("/media/brand/app-icon-192.webp") },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

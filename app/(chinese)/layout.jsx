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
  icons: { icon: { url: asset("/favicon.png"), type: "image/png", sizes: "96x96" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

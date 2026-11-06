import "../../globals.css";
import { homeCopy } from "../../../lib/localeMetadata";
import { asset } from "../../../lib/paths";

export const metadata = {
  title: {
    default: homeCopy.en.title,
    template: "%s · DailyChange",
  },
  description: homeCopy.en.description,
  applicationName: "DailyChange",
  icons: { icon: asset("/media/brand/app-icon.png") },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

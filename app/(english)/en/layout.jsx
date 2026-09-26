import "../../globals.css";
import { asset } from "../../../lib/paths";

export const metadata = {
  title: {
    default: "DailyChange: A Photo a Day — See how time changes you.",
    template: "%s · DailyChange",
  },
  description:
    "A personal journal for iPhone, one photo at a time. Capture today, revisit the past, and write to your future self.",
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

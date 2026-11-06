import AboutPage from "../../../../components/AboutPage";
import { localeMetadata } from "../../../../lib/localeMetadata";
export const metadata = localeMetadata("/about/", "en");
export default function Page() { return <AboutPage locale="en" />; }

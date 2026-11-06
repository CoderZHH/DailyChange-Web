import AboutPage from "../../../components/AboutPage";
import { localeMetadata } from "../../../lib/localeMetadata";
export const metadata = localeMetadata("/about/", "zh");
export default function Page() { return <AboutPage locale="zh" />; }

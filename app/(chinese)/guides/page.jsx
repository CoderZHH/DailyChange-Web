import { GuideIndex } from "../../../components/GuidePages";
import { guideIndexCopy } from "../../../lib/guides";
import { localeMetadata } from "../../../lib/localeMetadata";
export const metadata = localeMetadata("/guides/", "zh", guideIndexCopy.zh);
export default function Page() { return <GuideIndex locale="zh" />; }

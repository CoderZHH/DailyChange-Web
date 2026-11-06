import { notFound } from "next/navigation";
import { GuideArticle } from "../../../../../components/GuidePages";
import { guides } from "../../../../../lib/guides";
import { localeMetadata } from "../../../../../lib/localeMetadata";
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(guides).map((slug) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!guides[slug]) return {};
  return localeMetadata(`/guides/${slug}/`, "en", guides[slug].en);
}
export default async function Page({ params }) {
  const { slug } = await params;
  if (!guides[slug]) notFound();
  return <GuideArticle slug={slug} locale="en" />;
}

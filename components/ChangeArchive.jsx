import TimeStudy from "./TimeStudy";

export default function ChangeArchive({ locale = "zh" }) {
  return (
    <section className="time-study" id="experience" aria-label={locale === "en" ? "A photo a day, a story over time" : "每天一张，看见每日变化"}>
      <TimeStudy locale={locale} />
    </section>
  );
}

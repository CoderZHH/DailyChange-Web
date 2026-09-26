import { page } from "./paths";

export function localeMetadata(path = "/", locale = "zh") {
  const origin = "https://coderzhh.github.io";
  const chinese = `${origin}${page(path)}`;
  const english = `${origin}${page(`/en${path}`)}`;
  return {
    alternates: {
      canonical: locale === "en" ? english : chinese,
      languages: { "zh-CN": chinese, en: english, "x-default": chinese },
    },
  };
}

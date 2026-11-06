import { asset } from "./paths";
export function appImage(src, sizes = "(max-width: 760px) 80vw, 340px") {
  const stem = src.replace(/\.jpg$/, "");
  return {
    src: asset(`/media/app/${stem}-960.webp`),
    srcSet: `${asset(`/media/app/${stem}-480.webp`)} 480w, ${asset(`/media/app/${stem}-960.webp`)} 960w`,
    sizes,
    width: src === "video-export.jpg" ? 1279 : 1278,
    height: src === "video-export.jpg" ? 2781 : 2778,
    decoding: "async",
  };
}

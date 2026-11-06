import { appImage } from "../lib/imageAssets";

export default function AppScreen({ src, alt, className = "" }) {
  return (
    <figure className={`app-screen ${className}`}>
      <img {...appImage(src)} alt={alt} loading="lazy" />
    </figure>
  );
}

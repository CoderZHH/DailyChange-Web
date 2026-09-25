import { asset } from "../lib/paths";

export default function AppScreen({ src, alt, className = "" }) {
  return (
    <figure className={`app-screen ${className}`}>
      <img src={asset(`/media/app/${src}`)} alt={alt} loading="lazy" />
    </figure>
  );
}

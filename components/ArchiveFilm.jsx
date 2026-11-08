"use client";

import { useRef, useState } from "react";

export default function ArchiveFilm({ media, label, caption, play, pause }) {
  const film = useRef(null);
  const [playing, setPlaying] = useState(false);

  function togglePlayback() {
    const video = film.current;
    if (!video.paused) {
      video.pause();
      return;
    }
    video.play().catch(() => { video.controls = true; });
  }

  return (
    <figure className="change-archive-print">
      <video ref={film} playsInline preload="none" aria-label={label} aria-describedby="change-archive-caption"
        width={720} height={876} poster={`${media}.jpg`}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}>
        <source src={`${media}.mp4`} type="video/mp4" />
      </video>
      <figcaption className="change-archive-film-footer">
        <span id="change-archive-caption">{caption}</span>
        <button type="button" className="change-archive-play" onClick={togglePlayback}>
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d={playing ? "M4 3h3v10H4zM9 3h3v10H9z" : "M5 3v10l8-5z"} />
          </svg>
          {playing ? pause : play}
        </button>
      </figcaption>
    </figure>
  );
}

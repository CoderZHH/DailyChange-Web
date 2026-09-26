"use client";

import { useEffect, useRef } from "react";

// A lightweight velocity-sensitive time ribbon; pauses when off screen or hidden.
export default function TimeRibbon() {
  const ref = useRef(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    let frame, last = 0, previousY = window.scrollY, velocity = 0, position = 0, visible = false;
    const track = ref.current.querySelector(".time-ribbon-track");
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(ref.current);
    const scroll = () => { velocity = Math.min(900, Math.abs(window.scrollY - previousY) * 12); previousY = window.scrollY; };
    const tick = now => {
      const delta = Math.min((now - last) / 1000, .04); last = now;
      if (visible && !document.hidden) {
        velocity *= .94;
        const width = track.firstElementChild.offsetWidth;
        position = (position + (25 + velocity) * delta) % width;
        track.style.transform = `translate3d(${-position}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    frame = requestAnimationFrame(tick);
    const change = () => { if (media.matches) { cancelAnimationFrame(frame); track.style.transform = ""; } };
    media.addEventListener("change", change);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll", scroll); media.removeEventListener("change", change); };
  }, []);
  const words = <><span>PAST</span><i>✳</i><span>TODAY</span><i>✳</i><span>TOMORROW</span><i>✳</i></>;
  return <div ref={ref} className="time-ribbon" aria-hidden="true"><div className="time-ribbon-track">{[0,1,2,3].map(i => <div className="time-ribbon-group" key={i}>{words}</div>)}</div></div>;
}

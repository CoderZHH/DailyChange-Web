"use client";

// Adapted from React Bits Scroll Float by David Haz (see THIRD_PARTY_NOTICES.md).
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollFloat({ children, className = "", as: Tag = "span" }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(ref.current.querySelectorAll(".float-char"), {
        opacity: .12, yPercent: 90, scaleY: 1.5, scaleX: .85, transformOrigin: "50% 0%",
      }, {
        opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1,
        ease: "back.out(1.4)", stagger: .035,
        scrollTrigger: { trigger: ref.current, start: "top 92%", end: "bottom 62%", scrub: .7 },
      });
    });
    return () => media.revert();
  }, []);
  return <Tag ref={ref} className={`scroll-float ${className}`} aria-label={children}>
    <span aria-hidden="true">{Array.from(children).map((char, i) => <span className="float-char" key={i}>{char === " " ? "\u00a0" : char}</span>)}</span>
  </Tag>;
}

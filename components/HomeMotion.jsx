"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeMotion() {
  const progressRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const narrow = window.matchMedia("(max-width: 760px)").matches;
      const intro = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
      intro.from(".hero-copy > *", { y: 32, opacity: 0, stagger: .12 })
        .from(".hero-photo-front", { y: 110, rotation: 16, opacity: 0 }, .25)
        .from(".hero-photo-back", { y: 80, rotation: -22, opacity: 0 }, .45)
        .from(".hero-art-note, .hero-art-stamp", { scale: .75, opacity: 0, stagger: .15 }, .8);
      const parallax = (selector, y, rotate = 0, base = 0) => {
        gsap.fromTo(selector, { y: 0, rotation: base }, { y: narrow ? y * .4 : y, rotation: base + rotate, immediateRender: false, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 } });
      };
      parallax(".hero-photo-front", -100, -5, 7);
      parallax(".hero-photo-back", -200, 7, -13);
      parallax(".hero-art-orbit", 100);
      parallax(".hero-art-note", -65, -8, 12);
      parallax(".hero-art-stamp", -60, 24, -18);
      gsap.utils.toArray(".chapter").forEach(section => {
        gsap.from(section.querySelectorAll(".chapter-heading, .chapter-copy > p, .chapter-aside"), { y: 35, opacity: 0, stagger: .14, duration: .9, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 72%", once: true } });
        gsap.fromTo(section.querySelector(".chapter-screen"), { y: narrow ? 35 : 90, rotate: -3 }, { y: narrow ? -25 : -75, rotate: 3, ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.1 } });
      });
      gsap.utils.toArray(".detail-card").forEach((card, i) => {
        gsap.from(card, { y: 65, opacity: 0, rotation: i % 2 ? 3 : -3, duration: 1, delay: (i % (narrow ? 2 : 4)) * .1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 94%", once: true } });
      });
      gsap.from(".closing-card", { y: 70, rotation: 5, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".closing-card", start: "top 92%", once: true } });
      gsap.to(progressRef.current, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: .2 } });
      const refresh = () => ScrollTrigger.refresh();
      document.fonts.ready.then(refresh);
      const images = Array.from(document.images);
      images.forEach(img => img.addEventListener("load", refresh));
      return () => images.forEach(img => img.removeEventListener("load", refresh));
    });
    return () => media.revert();
  }, []);
  return <div className="reading-progress" ref={progressRef} aria-hidden="true" />;
}

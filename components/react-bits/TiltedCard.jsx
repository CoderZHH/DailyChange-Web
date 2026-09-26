"use client";

// Adapted from React Bits Tilted Card by David Haz (see THIRD_PARTY_NOTICES.md).
import { useRef } from "react";
import { motion, useSpring, useReducedMotion } from "motion/react";

const spring = { damping: 30, stiffness: 100, mass: 2 };
export default function TiltedCard({ children, className = "", amplitude = 7 }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const scale = useSpring(1, spring);
  function reset() { rotateX.set(0); rotateY.set(0); scale.set(1); }
  function move(e) {
    if (reduced || e.pointerType !== "mouse") return;
    const rect = ref.current.getBoundingClientRect();
    rotateX.set(-(e.clientY - rect.top - rect.height / 2) / (rect.height / 2) * amplitude);
    rotateY.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2) * amplitude);
    scale.set(1.025);
  }
  return <motion.div ref={ref} className={`tilted-card ${className}`} onPointerMove={move} onPointerLeave={reset} style={{ rotateX, rotateY, scale }}>{children}</motion.div>;
}

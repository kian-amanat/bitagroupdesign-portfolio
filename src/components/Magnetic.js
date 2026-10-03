"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Element gently follows the pointer while hovered. */
export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.2 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.2 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} className={`inline-block ${className}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}

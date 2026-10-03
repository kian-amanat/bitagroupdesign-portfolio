"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Custom follower — only on devices with a fine pointer. Elements opt in with data-cursor="label". */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const el = e.target.closest?.("[data-cursor], a, button");
      setHover(!!el);
      setLabel(el?.dataset?.cursor ?? "");
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!enabled) return null;
  const big = !!label;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full bg-cream text-xs font-bold text-ink mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: big ? 96 : hover ? 44 : 14, height: big ? 96 : hover ? 44 : 14 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {big && <span className="mix-blend-normal">{label}</span>}
    </motion.div>
  );
}

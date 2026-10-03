"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

/** Image that drifts inside its frame while scrolling (oversized by `range`). */
export default function ParallaxImage({ src, alt, sizes, priority = false, range = 12, className = "", scale = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [1.25, 1.1, 1] : [1.15, 1.15, 1.15]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-0 will-change-transform" style={{ y, scale: s }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} placeholder="blur" className="object-cover" />
      </motion.div>
    </div>
  );
}

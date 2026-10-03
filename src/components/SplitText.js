"use client";

import { motion } from "motion/react";
import { useReady } from "./Providers";

/**
 * Word-by-word masked reveal. Splits on words only (never letters) so Persian
 * letter joining stays intact. `immediate` waits for the preloader instead of the viewport.
 */
export default function SplitText({ text, className = "", delay = 0, immediate = false, as = "h1", stagger = 0.07 }) {
  const ready = useReady();
  const Tag = motion[as];
  const words = text.split(" ");
  const trigger = immediate
    ? { animate: ready ? "show" : "hide" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Tag
      className={className}
      initial="hide"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.18em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            variants={{ hide: { y: "115%", rotate: 4 }, show: { y: 0, rotate: 0 } }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

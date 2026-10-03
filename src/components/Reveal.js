"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

/** Fade + rise when scrolled into view (transform/opacity only). */
export function Reveal({ children, delay = 0, y = 40, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </Tag>
  );
}

/** Image/box unmasking: clip-path wipe from the bottom. */
export function ClipReveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

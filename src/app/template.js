"use client";

import { motion } from "motion/react";

/** Re-mounts on every navigation: a dark curtain lifts to reveal the new page. */
export default function Template({ children }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80] origin-top bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        style={{ willChange: "transform" }}
      />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
        {children}
      </motion.div>
    </>
  );
}

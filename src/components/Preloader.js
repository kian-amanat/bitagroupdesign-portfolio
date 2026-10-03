"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "motion/react";
import { toFa } from "@/lib/site";

const KEY = "bita-intro-seen";

export default function Preloader({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      setVisible(false);
      onDone();
      return;
    }
    const controls = animate(0, 100, {
      duration: 1.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
        setVisible(false);
        onDone();
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      aria-hidden={!visible}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-cream"
      style={{ pointerEvents: visible ? "auto" : "none" }}
      initial={false}
      animate={visible ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(0% 0% 100% 0%)" }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-sans text-6xl font-extrabold tracking-[0.3em] sm:text-8xl"
          dir="ltr"
        >
          BITA
        </motion.p>
      </div>
      <p className="mt-4 text-sm tracking-widest text-brass">گروه طراحی و اجرای بیتا</p>
      <div className="absolute inset-x-8 bottom-10 flex items-end justify-between">
        <span className="text-7xl font-light tabular-nums leading-none sm:text-9xl">{toFa(count)}</span>
        <span className="text-xs tracking-widest text-cream/50">در حال بارگذاری</span>
      </div>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[3px] origin-right bg-brass"
        style={{ scaleX: count / 100 }}
      />
    </motion.div>
  );
}

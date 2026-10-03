"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import Preloader from "./Preloader";
import Cursor from "./Cursor";
import ScrollProgress from "./ScrollProgress";

const ReadyContext = createContext(false);
/** true once the intro preloader has finished — gate hero animations on it */
export const useReady = () => useContext(ReadyContext);

let lenisInstance = null;

export default function Providers({ children }) {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisInstance = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  useEffect(() => {
    lenisInstance?.scrollTo(0, { immediate: true });
  }, [pathname]);

  useEffect(() => {
    if (!ready) lenisInstance?.stop();
    else lenisInstance?.start();
    document.documentElement.style.overflow = ready ? "" : "hidden";
  }, [ready]);

  return (
    <MotionConfig reducedMotion="user">
      <ReadyContext.Provider value={ready}>
        <Preloader onDone={() => setReady(true)} />
        <ScrollProgress />
        <Cursor />
        {children}
      </ReadyContext.Provider>
    </MotionConfig>
  );
}

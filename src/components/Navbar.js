"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, site, toFa } from "@/lib/site";
import { useReady } from "./Providers";

const ease = [0.76, 0, 0.24, 1];

export default function Navbar() {
  const pathname = usePathname();
  const ready = useReady();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    const shouldHide = y > prev && y > 160;
    setHidden((h) => (h === shouldHide ? h : shouldHide));
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, ready]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[70] text-white mix-blend-difference"
        initial={{ y: "-100%" }}
        animate={{ y: ready && (!hidden || open) ? 0 : "-100%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-5 md:px-12 md:py-7" aria-label="ناوبری اصلی">
          <Link href="/" className="group flex items-baseline gap-2" aria-label="بیتا — صفحه اصلی" dir="ltr">
            <span className="text-2xl font-extrabold tracking-[0.28em]">BITA</span>
            <span className="hidden text-[10px] tracking-[0.35em] opacity-70 transition-opacity group-hover:opacity-100 sm:inline">
              GROUP
            </span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group relative block h-7 overflow-hidden text-sm font-medium leading-7" aria-current={isActive(l.href) ? "page" : undefined}>
                  <span className="block transition-transform duration-500 ease-expo group-hover:-translate-y-full">{l.label}</span>
                  <span className="absolute inset-x-0 top-0 block translate-y-full transition-transform duration-500 ease-expo group-hover:translate-y-0" aria-hidden>
                    {l.label}
                  </span>
                  <span
                    className="absolute inset-x-0 bottom-0 h-px origin-right bg-current transition-transform duration-500 ease-expo"
                    style={{ transform: `scaleX(${isActive(l.href) ? 1 : 0})` }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative flex h-11 items-center gap-3 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span>{open ? "بستن" : "منو"}</span>
            <span className="relative block h-3 w-7" aria-hidden>
              <span className={`absolute inset-x-0 h-px bg-current transition-all duration-500 ease-expo ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute inset-x-0 h-px bg-current transition-all duration-500 ease-expo ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[65] flex flex-col justify-between bg-ink px-6 pb-10 pt-28 text-cream md:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease }}
          >
            <ul className="space-y-2">
              {nav.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0, transition: { delay: 0.25 + i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                    exit={{ y: "110%", transition: { duration: 0.3 } }}
                  >
                    <Link href={l.href} className="flex items-baseline justify-between py-2 text-5xl font-bold" onClick={() => setOpen(false)}>
                      <span className={isActive(l.href) ? "text-brass" : ""}>{l.label}</span>
                      <span className="text-sm font-normal text-cream/40">{toFa(`0${i + 1}`)}</span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7 } }}
              exit={{ opacity: 0 }}
              className="space-y-3 text-sm text-cream/70"
            >
              {site.phones.map((p) => (
                <a key={p.href} href={p.href} className="block text-lg text-cream" dir="ltr">
                  {p.label}
                </a>
              ))}
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="block">
                اینستاگرام
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

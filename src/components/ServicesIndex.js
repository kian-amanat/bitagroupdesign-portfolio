"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import projects from "@/data/projects";
import { toFa } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * Minimal index list. Hovering a row dims the others and shows a small preview in the
 * empty middle column, tracking the pointer vertically only (so it never covers text).
 */
export default function ServicesIndex() {
  const [active, setActive] = useState(null);
  const y = useSpring(useMotionValue(0), { stiffness: 160, damping: 24, mass: 0.5 });

  return (
    <section className="relative bg-cream px-6 py-28 text-ink md:px-12 md:py-40" onPointerMove={(e) => y.set(e.clientY)} onPointerLeave={() => setActive(null)}>
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="mb-4 text-xs font-light tracking-[0.3em] text-ink/50">خدمات</p>
          <h2 className="mb-16 text-4xl font-light md:text-6xl">هر آنچه خانه‌ی شما نیاز دارد.</h2>
        </Reveal>

        <ul className="border-t border-ink/10">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-b border-ink/10 transition-opacity duration-500" style={{ opacity: active && active.slug !== p.slug ? 0.3 : 1 }}>
              <Link
                href={`/projects/${p.slug}`}
                onPointerEnter={() => setActive(p)}
                onFocus={() => setActive(p)}
                onBlur={() => setActive(null)}
                className="group flex items-center gap-6 py-6 md:py-8"
              >
                <span className="w-8 text-xs font-light text-ink/40">{toFa(`0${i + 1}`)}</span>
                <span className="flex-1 text-2xl font-light transition-transform duration-700 ease-expo group-hover:-translate-x-3 md:text-5xl">{p.title}</span>
                <span className="hidden text-xs font-light tracking-[0.3em] text-ink/40 sm:block" dir="ltr">
                  {p.en.toUpperCase()}
                </span>
                <span className="text-xl font-light text-ink/40 transition-all duration-700 ease-expo group-hover:-translate-x-2 group-hover:text-ink">←</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="preview"
            aria-hidden
            className="pointer-events-none fixed left-[24%] top-0 z-30 hidden h-[300px] w-[230px] md:block"
            style={{ y, translateY: "-50%" }}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active.slug}
                className="absolute inset-0 overflow-hidden"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                exit={{ clipPath: "inset(100% 0 0 0)" }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              >
                <Image src={active.image} alt="" fill sizes="230px" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

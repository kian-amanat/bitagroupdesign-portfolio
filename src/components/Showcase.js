"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import projects from "@/data/projects";
import { toFa } from "@/lib/site";

/** Vertical scroll drives a horizontal gallery (sticky pin). RTL: track slides to the right. */
export default function Showcase() {
  const section = useRef(null);
  const track = useRef(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const x = useTransform(smooth, [0, 1], [0, dist]);
  const bar = useTransform(smooth, [0, 1], [0.04, 1]);

  useEffect(() => {
    const measure = () => setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={section} className="relative bg-ink text-cream" style={{ height: `calc(100vh + ${dist}px)`, minHeight: "200vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-8 flex items-end justify-between px-6 md:px-12">
          <h2 className="text-4xl font-extrabold md:text-6xl">پروژه‌های ما</h2>
          <Link href="/projects" className="text-sm text-brass underline-offset-8 hover:underline">
            همه پروژه‌ها ↖
          </Link>
        </div>

        <motion.ul ref={track} style={{ x }} className="flex w-max gap-5 px-6 will-change-transform md:gap-8 md:px-12">
          {projects.map((p, i) => (
            <li key={p.slug} className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw]">
              <Link href={`/projects/${p.slug}`} data-cursor="مشاهده" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 30vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
                  <span className="absolute right-5 top-5 text-sm text-cream/80">{toFa(`0${i + 1}`)}</span>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <span className="text-xs tracking-widest text-cream/50" dir="ltr">
                    {p.en}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </motion.ul>

        <div className="mx-6 mt-10 h-px bg-cream/15 md:mx-12">
          <motion.div className="h-full origin-right bg-brass" style={{ scaleX: bar }} />
        </div>
      </div>
    </section>
  );
}

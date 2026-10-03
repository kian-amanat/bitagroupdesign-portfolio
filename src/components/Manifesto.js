"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const text =
  "ما باور داریم یک خانه‌ی خوب فقط دیوار و سقف نیست؛ مجموعه‌ای از جزئیات است که با دقت، مواد باکیفیت و دست‌های ماهر کنار هم می‌نشینند تا فضایی بسازند که هر روز از زندگی در آن لذت ببرید.";

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <section ref={ref} className="bg-cream px-6 py-32 text-ink md:px-12 md:py-48">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-10 text-xs font-light tracking-[0.3em] text-ink/50">فلسفه ما</p>
        <p className="text-[clamp(1.8rem,4.6vw,4.4rem)] font-light leading-[1.6]">
          {words.map((w, i) => {
            const start = i / words.length;
            return (
              <span key={i}>
                <Word progress={scrollYProgress} range={[start, start + 1.5 / words.length]}>
                  {w}
                </Word>{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

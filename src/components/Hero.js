"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import hero from "@/assets/images/bg2.jpg";
import SplitText from "./SplitText";
import Magnetic from "./Magnetic";
import { useReady } from "./Providers";

export default function Hero() {
  const ref = useRef(null);
  const ready = useReady();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-cream">
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imgY, scale: imgScale }}
        initial={{ scale: 1.3, opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src={hero} alt="فضای داخلی مدرن طراحی‌شده توسط بیتا" fill priority sizes="100vw" placeholder="blur" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-6 text-sm tracking-[0.3em] text-brass"
        >
          طراحی · بازسازی · اجرا
        </motion.p>
        <SplitText
          as="h1"
          immediate
          delay={0.2}
          text="فضایی که زندگی در آن جریان دارد"
          className="max-w-5xl text-[clamp(2.8rem,8vw,8rem)] font-extrabold leading-[1.2]"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-md text-base leading-8 text-cream/75">
            گروه طراحی و اجرای بیتا — از بازسازی کامل و نجاری سفارشی تا برق، لوله‌کشی، سرامیک و نقاشی، همه در یک تیم.
          </p>
          <div className="flex items-center gap-4">
            <Magnetic>
              <Link href="/projects" className="inline-flex h-14 items-center rounded-full bg-cream px-8 text-sm font-bold text-ink transition-colors duration-500 hover:bg-brass">
                مشاهده پروژه‌ها
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/contact" className="inline-flex h-14 items-center rounded-full border border-cream/40 px-8 text-sm font-bold transition-colors duration-500 hover:bg-cream hover:text-ink">
                تماس با ما
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-cream/60 md:flex" aria-hidden>
        <span>SCROLL</span>
        <span className="relative block h-10 w-px overflow-hidden bg-cream/20">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-cream" style={{ animation: "scrollcue 1.8s cubic-bezier(.65,0,.35,1) infinite" }} />
        </span>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { nav, site, toFa } from "@/lib/site";
import projects from "@/data/projects";
import Magnetic from "./Magnetic";
import Marquee from "./Marquee";

const linkCls = "group relative inline-block text-cream/70 transition-colors duration-300 hover:text-brass";

export default function Footer() {
  const year = toFa(new Date().getFullYear());
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-ink text-cream" aria-label="پاورقی">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: site.name,
            alternateName: site.nameEn,
            url: site.url,
            telephone: site.phones.map((p) => p.href.replace("tel:", "")),
            sameAs: [site.instagram],
          }),
        }}
      />

      <Marquee
        className="border-y border-cream/10 py-5 text-sm font-light tracking-[0.35em] text-cream/40"
        speed={50}
        items={projects.map((p) => p.en.toUpperCase())}
      />

      <div className="mx-auto max-w-[1800px] px-6 pb-10 pt-20 md:px-12 md:pt-28">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-5xl font-extrabold leading-[1.25] sm:text-7xl">
            بیایید خانه‌ی <span className="text-brass">رؤیایی</span> شما را بسازیم.
          </h2>
          <Magnetic>
            <Link
              href="/contact"
              data-cursor="شروع"
              className="flex h-36 w-36 items-center justify-center rounded-full bg-brass text-lg font-bold text-ink transition-transform duration-500 ease-expo hover:scale-105 sm:h-44 sm:w-44"
            >
              تماس با ما ↖
            </Link>
          </Magnetic>
        </div>

        <div className="mt-24 grid gap-14 border-t border-cream/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-5 text-sm tracking-widest text-brass">درباره ما</h3>
            <p className="max-w-xs text-sm leading-7 text-cream/60">
              ما در زمینه ساخت و ساز با کیفیت بالا، بازسازی و طراحی داخلی تخصص داریم. دقت، دوام و زیبایی را در هر پروژه تضمین می‌کنیم.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-widest text-brass">صفحات</h3>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-widest text-brass">خدمات</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className={linkCls}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm tracking-widest text-brass">ارتباط</h3>
            <ul className="space-y-3">
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className={`${linkCls} text-lg`} dir="ltr">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="اینستاگرام بیتا"
              className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 transition-all duration-500 ease-expo hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-ink"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden
        dir="ltr"
        className="select-none whitespace-nowrap text-center font-extrabold leading-[0.8] tracking-tight text-cream/[0.06]"
        style={{ fontSize: "clamp(5rem, 24vw, 26rem)" }}
        initial={{ y: "40%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        BITA GROUP
      </motion.div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-5 px-6 py-6 text-xs text-cream/50 md:flex-row md:px-12">
          <p>© {year} {site.name}. همه حقوق محفوظ است.</p>
          <div className="flex items-center gap-4">
            <span>طراحی و توسعه: {site.developer.name}</span>
            <a href={site.developer.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-brass">
              <FaGithub size={18} />
            </a>
            <a href={site.developer.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-brass">
              <FaLinkedin size={18} />
            </a>
          </div>
          <button type="button" onClick={toTop} className="group flex items-center gap-2 transition-colors hover:text-brass">
            بازگشت به بالا
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { toFa } from "@/lib/site";

export default function ProjectCard({ project, index, priority = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.12 }}
    >
      <Link href={`/projects/${project.slug}`} data-cursor="مشاهده" className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority={priority}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 to-transparent p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <span className="translate-y-4 text-sm font-bold text-cream transition-transform duration-700 ease-expo group-hover:translate-y-0">
              اطلاعات بیشتر ↖
            </span>
          </div>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-bold md:text-3xl">{project.title}</h3>
          <span className="text-sm text-ink/40">{toFa(`0${index + 1}`)}</span>
        </div>
        <p className="mt-1 text-xs tracking-widest text-ink/50" dir="ltr">{project.en}</p>
      </Link>
    </motion.article>
  );
}

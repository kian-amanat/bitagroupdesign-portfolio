import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import projects, { getProject } from "@/data/projects";
import ParallaxImage from "@/components/ParallaxImage";
import SplitText from "@/components/SplitText";
import { Reveal } from "@/components/Reveal";
import { toFa } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description.split("\n")[0],
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: p.title, description: p.description.split("\n")[0], images: [{ url: p.image.src, width: p.image.width, height: p.image.height }] },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const lines = project.description.split("\n");

  return (
    <>
      <header className="bg-cream px-6 pb-12 pt-40 text-ink md:px-12 md:pt-52">
        <div className="mx-auto max-w-[1500px]">
          <Link href="/projects" className="mb-10 inline-block text-sm text-ink/60 transition-colors hover:text-brass">
            → همه پروژه‌ها
          </Link>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SplitText as="h1" immediate delay={0.1} text={project.title} className="text-[clamp(3rem,9vw,9rem)] font-extrabold leading-[1.15]" />
            <p className="pb-4 text-sm tracking-[0.3em] text-ink/50" dir="ltr">
              {toFa(`0${index + 1}`)} / {toFa(`0${projects.length}`)} — {project.en.toUpperCase()}
            </p>
          </div>
        </div>
      </header>

      <section className="bg-cream px-6 md:px-12">
        <ParallaxImage src={project.image} alt={project.alt} priority sizes="100vw" range={10} className="mx-auto aspect-[16/10] max-w-[1800px] rounded-sm md:aspect-[21/9]" />
      </section>

      <section className="bg-cream px-6 py-24 text-ink md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="text-sm tracking-[0.3em] text-brass">درباره این خدمت</p>
          </Reveal>
          <div className="space-y-8">
            {lines.map((l, i) => (
              <Reveal key={i} delay={i * 0.1} as="p" className={i === 0 ? "text-3xl font-bold leading-[1.6] md:text-5xl" : "max-w-2xl text-lg leading-9 text-ink/70"}>
                {l}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Link href={`/projects/${next.slug}`} data-cursor="بعدی" className="group relative block h-[70vh] overflow-hidden bg-ink text-cream">
        <Image src={next.image} alt="" fill sizes="100vw" className="object-cover opacity-50 transition-all duration-[1600ms] ease-expo group-hover:scale-105 group-hover:opacity-70" />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <span className="mb-4 text-sm tracking-[0.3em] text-brass">پروژه بعدی</span>
          <span className="text-[clamp(3rem,9vw,9rem)] font-extrabold leading-tight">{next.title}</span>
        </div>
      </Link>
    </>
  );
}

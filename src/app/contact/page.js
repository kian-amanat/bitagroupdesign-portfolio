import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import projects from "@/data/projects";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "تماس با ما",
  description: "برای مشاوره و برآورد پروژه با گروه طراحی بیتا تماس بگیرید.",
  alternates: { canonical: "/contact" },
};

const card = "group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-sm border border-ink/15 p-8 transition-colors duration-700 hover:border-ink hover:text-cream";
const fill = "absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-expo group-hover:scale-y-100";

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="تماس با ما" title="حرف‌هایتان را بشنویم." intro="برای مشاوره، برآورد هزینه یا هر سؤالی درباره پروژه‌تان، با ما در تماس باشید." />

      <section className="bg-cream px-6 pb-32 text-ink md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-3">
          {site.phones.map((p, i) => (
            <Reveal key={p.href} delay={i * 0.1}>
              <a href={p.href} className={card} data-cursor="تماس">
                <span className={fill} />
                <span className="text-sm tracking-widest text-brass">تلفن</span>
                <span className="text-3xl font-bold md:text-4xl" dir="ltr">{p.label}</span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={card} data-cursor="باز کردن">
              <span className={fill} />
              <span className="text-sm tracking-widest text-brass">اینستاگرام</span>
              <span className="text-3xl font-bold md:text-4xl">@bitaa.group</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-24 max-w-[1500px]">
          <h2 className="mb-8 text-2xl font-bold">برای کدام خدمت به ما نیاز دارید؟</h2>
          <ul className="flex flex-wrap gap-3">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="inline-block rounded-full border border-ink/20 px-6 py-3 text-sm transition-colors duration-500 hover:bg-ink hover:text-cream">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}

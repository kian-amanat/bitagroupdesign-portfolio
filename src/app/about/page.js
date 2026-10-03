import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ParallaxImage from "@/components/ParallaxImage";
import { Reveal } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import living from "@/assets/images/bg18.jpg";
import { toFa } from "@/lib/site";

export const metadata = {
  title: "درباره ما",
  description: "با گروه طراحی بیتا آشنا شوید؛ تیمی که طراحی، ساخت و اجرای فضاهای مسکونی را با دقت و کیفیت بالا انجام می‌دهد.",
  alternates: { canonical: "/about" },
};

const values = [
  { t: "دقت", d: "از اندازه‌گیری تا آخرین پرداخت، هر جزئیات را با وسواس بررسی می‌کنیم." },
  { t: "دوام", d: "فقط از مصالح و مواد باکیفیت استفاده می‌کنیم تا کار شما سال‌ها بماند." },
  { t: "رضایت", d: "پروژه وقتی تمام می‌شود که شما از نتیجه راضی باشید." },
];

const steps = [
  { t: "مشاوره", d: "نیازها و ایده‌های شما را می‌شنویم و بهترین مسیر را پیشنهاد می‌دهیم." },
  { t: "طراحی", d: "فضا را با توجه به سلیقه و بودجه شما طراحی و برنامه‌ریزی می‌کنیم." },
  { t: "اجرا", d: "تیم متخصص ما هر مرحله را با نظارت کامل و کیفیت بالا اجرا می‌کند." },
  { t: "تحویل", d: "پس از بازبینی نهایی، فضای آماده‌ی زندگی را تحویل می‌دهیم." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="درباره ما"
        title="تیمی که خانه را از ایده تا واقعیت می‌سازد."
        intro="ما در زمینه ساخت و ساز با کیفیت بالا، بازسازی و طراحی داخلی تخصص داریم. چه بازسازی خانه باشد، چه ساخت محصولات چوبی یا کارهای برقی، کیفیت ساخت و رضایت مشتری اولویت ماست."
      />

      <section className="bg-cream px-6 md:px-12">
        <ParallaxImage src={living} alt="نمای داخلی لوکس و مدرن" sizes="100vw" priority range={10} className="mx-auto aspect-[16/10] max-w-[1800px] rounded-sm md:aspect-[21/9]" />
      </section>

      <section className="bg-cream px-6 py-28 text-ink md:px-12 md:py-44">
        <div className="mx-auto grid max-w-[1500px] gap-px bg-ink/15 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.12} className="bg-cream py-10 md:px-10">
              <span className="text-sm text-brass">{toFa(`0${i + 1}`)}</span>
              <h2 className="mb-4 mt-4 text-5xl font-extrabold">{v.t}</h2>
              <p className="leading-8 text-ink/65">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-cream md:px-12 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="mb-4 text-sm tracking-[0.3em] text-brass">روند کار</p>
            <h2 className="mb-20 text-4xl font-extrabold md:text-7xl">چهار قدم تا خانه‌ی رؤیایی.</h2>
          </Reveal>
          <ol className="grid gap-12 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 0.12} className="group border-t border-cream/20 pt-8 transition-colors duration-700 hover:border-brass">
                <span className="block text-7xl font-extralight text-cream/20 transition-colors duration-700 group-hover:text-brass">{toFa(i + 1)}</span>
                <h3 className="mb-3 mt-6 text-2xl font-bold">{s.t}</h3>
                <p className="leading-8 text-cream/60">{s.d}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-24 text-center">
            <Magnetic>
              <Link href="/contact" className="inline-flex h-16 items-center rounded-full bg-brass px-10 font-bold text-ink transition-colors duration-500 hover:bg-cream">
                پروژه خود را شروع کنید
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}

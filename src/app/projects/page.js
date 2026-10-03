import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export const metadata = {
  title: "پروژه‌ها",
  description: "نگاهی به خدمات و پروژه‌های گروه طراحی بیتا: بازسازی، محصولات چوبی، درب، پنجره، برق، لوله‌کشی، سرامیک و نقاشی.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="پروژه‌ها" title="کارهایی که از خود حرف می‌زنند." intro="مجموعه‌ای از تخصص‌های ما؛ برای دیدن جزئیات هر خدمت روی آن کلیک کنید." />
      <section className="bg-cream px-6 pb-32 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-x-8 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-32" : ""}>
              <ProjectCard project={p} index={i} priority={i < 2} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Showcase from "@/components/Showcase";
import ServicesIndex from "@/components/ServicesIndex";
import projects from "@/data/projects";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        className="border-b border-ink/10 bg-cream py-5 text-sm font-light tracking-[0.35em] text-ink/60"
        items={projects.map((p) => p.title)}
        speed={45}
      />
      <Manifesto />
      <Showcase />
      <ServicesIndex />
    </>
  );
}

import SplitText from "./SplitText";
import { Reveal } from "./Reveal";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="bg-cream px-6 pb-16 pt-40 text-ink md:px-12 md:pb-24 md:pt-56">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-6 text-sm tracking-[0.3em] text-brass">{eyebrow}</p>
        <SplitText as="h1" immediate delay={0.1} text={title} className="max-w-5xl text-[clamp(2.8rem,8vw,8rem)] font-extrabold leading-[1.2]" />
        {intro && (
          <Reveal delay={0.5} className="mt-10 max-w-xl text-lg leading-9 text-ink/70">
            <p>{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

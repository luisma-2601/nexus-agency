import { FadeIn } from '../motion/FadeIn';
import { Magnet } from '../motion/Magnet';
import { ContactButton } from '../common/ContactButton';
import { heroCopy } from '../../data/content';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen flex-col justify-between overflow-hidden px-6 pb-7 pt-28 sm:pb-8 sm:pt-32 md:pb-10 md:pt-36"
    >
      <FadeIn delay={0} y={-20} className="mx-auto w-fit">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-2/25 bg-accent-2/[0.08] px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wider text-accent-2">
          {heroCopy.eyebrow}
        </div>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="relative z-10 overflow-hidden">
        <h1 className="hero-heading w-full whitespace-nowrap text-center font-display text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[10.5rem]">
          {heroCopy.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
      </FadeIn>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[190px] -translate-x-1/2 -translate-y-1/2 sm:w-[260px] md:w-[340px] lg:w-[400px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} className="pointer-events-auto">
            <img src="media/hero-portrait.png" alt="Nexus — inteligencia artificial y automatización" className="w-full" />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex items-end justify-between gap-6">
        <FadeIn delay={0.35} y={20} className="max-w-[190px] sm:max-w-[260px] md:max-w-[320px]">
          <p
            className="font-light uppercase leading-snug tracking-wide text-text-dim"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {heroCopy.subheading}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

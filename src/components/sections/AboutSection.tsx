import { FadeIn } from '../motion/FadeIn';
import { AnimatedText } from '../motion/AnimatedText';
import { ContactButton } from '../common/ContactButton';
import { aboutCopy } from '../../data/content';

const corners = [
  { src: 'media/marquee-2.jpg', alt: 'Automatización de flujos', pos: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]', size: 'w-[110px] sm:w-[150px] md:w-[190px]', delay: 0.1, x: -80 },
  { src: 'media/marquee-3.jpg', alt: 'Integraciones', pos: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]', size: 'w-[90px] sm:w-[130px] md:w-[160px]', delay: 0.25, x: -80 },
  { src: 'media/marquee-4.jpg', alt: 'Diseño web', pos: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]', size: 'w-[110px] sm:w-[150px] md:w-[190px]', delay: 0.15, x: 80 },
  { src: 'media/marquee-5.jpg', alt: 'Reportes y analítica', pos: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]', size: 'w-[120px] sm:w-[160px] md:w-[200px]', delay: 0.3, x: 80 },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10">
      {corners.map((corner) => (
        <FadeIn
          key={corner.src}
          delay={corner.delay}
          x={corner.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute z-0 ${corner.pos} ${corner.size}`}
        >
          <img src={corner.src} alt={corner.alt} className="w-full rounded-2xl opacity-70" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <div className="text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-2/25 bg-accent-2/[0.08] px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wider text-accent-2">
                {aboutCopy.eyebrow}
              </div>
              <h2
                className="hero-heading font-display font-black uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
              >
                {aboutCopy.heading}
              </h2>
            </div>
          </FadeIn>

          <AnimatedText
            text={aboutCopy.paragraph}
            className="max-w-[560px] text-center font-medium leading-relaxed text-text-dim text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <ContactButton />
      </div>
    </section>
  );
}

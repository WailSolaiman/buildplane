import { motion } from 'framer-motion'
import { homePhilosophySection, homeSectionImages } from '../../content/home'
import { Reveal } from '../motion/Reveal'
import { SectionShell } from './SectionShell'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomePhilosophy() {
  return (
    <SectionShell className="bg-[hsl(var(--foreground)/0.02)]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            {homePhilosophySection.eyebrow}
          </p>
          <h2
            className="mt-3 text-3xl font-normal tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {homePhilosophySection.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-lg">
            {homePhilosophySection.intro}
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[hsl(var(--muted-foreground))]">
            {homePhilosophySection.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-1.5 shrink-0 rounded-full bg-[hsl(var(--foreground)/0.35)]" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="liquid-glass overflow-hidden rounded-2xl p-2 sm:p-3">
            <img
              src={homeSectionImages.philosophy}
              alt=""
              className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-[3/4]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { homeCtaSection } from '../../content/home'
import { Reveal } from '../motion/Reveal'
import { SectionShell } from './SectionShell'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeCta() {
  return (
    <SectionShell className="pb-28 md:pb-36">
      <motion.div
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-12 sm:py-16 md:px-16 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="pointer-events-none absolute -left-24 top-1/2 size-[320px] -translate-y-1/2 rounded-full bg-[hsl(var(--foreground)/0.04)] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-[280px] rounded-full bg-[hsl(var(--foreground)/0.05)] blur-3xl" />
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            {homeCtaSection.eyebrow}
          </p>
          <h2
            className="mx-auto mt-4 max-w-xl text-3xl font-normal tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {homeCtaSection.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            {homeCtaSection.body}
          </p>
          <Link
            to="/reach-us"
            className="liquid-glass mt-10 inline-flex rounded-full px-10 py-3.5 text-sm font-medium text-[hsl(var(--foreground))] transition-transform hover:scale-[1.03]"
          >
            Reach us
          </Link>
        </Reveal>
      </motion.div>
    </SectionShell>
  )
}

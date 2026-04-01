import { motion } from 'framer-motion'
import { homeProcessSection } from '../../content/home'
import { Reveal } from '../motion/Reveal'
import { SectionShell } from './SectionShell'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeProcess() {
  return (
    <SectionShell>
      <Reveal className="mb-14 md:mb-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
          {homeProcessSection.eyebrow}
        </p>
        <h2
          className="mt-3 max-w-2xl text-3xl font-normal tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {homeProcessSection.headline}
        </h2>
      </Reveal>
      <motion.ol
        className="grid gap-6 md:grid-cols-3 md:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {homeProcessSection.steps.map((s) => (
          <motion.li
            key={s.n}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
            }}
            className="liquid-glass rounded-2xl p-6 md:p-8"
          >
            <span
              className="text-sm tabular-nums text-[hsl(var(--muted-foreground))]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {s.n}
            </span>
            <h3
              className="mt-4 text-2xl font-normal text-[hsl(var(--foreground))]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              {s.body}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </SectionShell>
  )
}

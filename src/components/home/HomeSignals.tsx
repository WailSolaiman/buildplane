import { motion } from 'framer-motion'
import { homeSignalsSection } from '../../content/home'
import { Reveal } from '../motion/Reveal'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeSignals() {
  return (
    <div className="border-y border-[hsl(var(--border)/0.25)] bg-[hsl(var(--foreground)/0.02)]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:py-16">
        <Reveal className="mb-10 text-center md:mb-14">
          <p
            className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {homeSignalsSection.subhead}
          </p>
          <p className="mt-2 text-2xl text-[hsl(var(--foreground))] sm:text-3xl md:text-4xl">
            {homeSignalsSection.headline}
          </p>
        </Reveal>
        <motion.ul
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
        >
          {homeSignalsSection.stats.map((s) => (
            <motion.li
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              className="liquid-glass rounded-2xl px-5 py-6 text-center md:px-6 md:py-8"
            >
              <p
                className="text-3xl font-normal tabular-nums text-[hsl(var(--foreground))] md:text-4xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))] sm:text-sm">
                {s.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

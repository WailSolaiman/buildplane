import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { homeWorkGridSection, homeWorkProjects } from '../../content/home'
import { Reveal } from '../motion/Reveal'
import { SectionShell } from './SectionShell'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeWorkGrid() {
  return (
    <SectionShell>
      <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            {homeWorkGridSection.eyebrow}
          </p>
          <h2
            className="mt-3 max-w-xl text-3xl font-normal tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {homeWorkGridSection.headline}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[hsl(var(--muted-foreground))] md:text-right">
          {homeWorkGridSection.aside}
        </p>
      </Reveal>

      <motion.div
        className="grid grid-cols-1 gap-4 md:min-h-[560px] md:grid-cols-3 md:grid-rows-2 md:gap-5 md:auto-rows-fr"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {homeWorkProjects.map((p) => (
          <motion.article
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
            }}
            className={`group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.35)] bg-[hsl(var(--foreground)/0.03)] md:min-h-0 ${p.span}`}
          >
            <div className="relative min-h-[200px] flex-1 overflow-hidden md:min-h-0">
              <motion.img
                src={p.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.92)] via-transparent to-transparent md:from-[hsl(var(--background)/0.85)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 md:p-6">
              <div className="min-w-0 pr-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                  {p.tag}
                </p>
                <h3
                  className="mt-1 text-xl font-normal text-[hsl(var(--foreground))] md:text-2xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[hsl(var(--muted-foreground))] md:text-sm">
                  {p.blurb}
                </p>
              </div>
              <span className="liquid-glass flex size-10 shrink-0 items-center justify-center rounded-full md:size-11">
                <ArrowUpRight
                  className="size-4 text-[hsl(var(--foreground))]"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  )
}

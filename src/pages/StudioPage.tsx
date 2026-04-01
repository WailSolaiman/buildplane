import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { studioPageHeader, studioProjects } from '../content/studio'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function StudioPage() {
  return (
    <main className="min-h-svh pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <PageHeader
          eyebrow={studioPageHeader.eyebrow}
          title={studioPageHeader.title}
          subtitle={studioPageHeader.subtitle}
        />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {studioProjects.map((w) => (
            <motion.article
              key={w.title}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              className="group overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.35)] bg-[hsl(var(--foreground)/0.03)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <motion.img
                  src={w.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.9)] via-transparent to-transparent opacity-80" />
                <span className="liquid-glass absolute right-4 top-4 flex size-9 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden />
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                  {w.cat}
                </p>
                <h2
                  className="mt-1 text-xl font-normal text-[hsl(var(--foreground))]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {w.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {w.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  )
}

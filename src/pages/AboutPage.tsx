import { motion } from 'framer-motion'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/motion/Reveal'
import {
  aboutAssets,
  aboutPageHeader,
  aboutSectionPeople,
  aboutSectionValues,
  aboutStatsRows,
  aboutTeam,
  aboutValues,
} from '../content/about'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function AboutPage() {
  return (
    <main className="min-h-svh pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <PageHeader
          eyebrow={aboutPageHeader.eyebrow}
          title={aboutPageHeader.title}
          subtitle={aboutPageHeader.subtitle}
        />

        <Reveal className="mt-14 grid gap-4 sm:grid-cols-3 md:mt-20">
          {aboutStatsRows.map((row) => (
            <div
              key={row.k}
              className="liquid-glass rounded-2xl px-6 py-8 text-center md:py-10"
            >
              <p
                className="text-3xl font-normal text-[hsl(var(--foreground))] md:text-4xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {row.v}
              </p>
              <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">{row.k}</p>
            </div>
          ))}
        </Reveal>

        <motion.div
          className="mt-16 overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.3)] md:mt-24"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          <img
            src={aboutAssets.desk}
            alt=""
            className="aspect-[21/9] w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <Reveal className="mt-20 md:mt-28">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            {aboutSectionValues.eyebrow}
          </p>
          <h2
            className="mt-3 max-w-xl text-3xl font-normal text-[hsl(var(--foreground))] sm:text-4xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {aboutSectionValues.title}
          </h2>
        </Reveal>

        <motion.ul
          className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {aboutValues.map((v) => (
            <motion.li
              key={v.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              className="rounded-2xl border border-[hsl(var(--border)/0.35)] bg-[hsl(var(--foreground)/0.03)] p-6 backdrop-blur-sm md:p-8"
            >
              <h3
                className="text-xl font-normal text-[hsl(var(--foreground))]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {v.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mt-20 md:mt-28">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
            {aboutSectionPeople.eyebrow}
          </p>
          <h2
            className="mt-3 text-3xl font-normal text-[hsl(var(--foreground))] sm:text-4xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {aboutSectionPeople.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {aboutTeam.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className="text-center"
            >
              <div className="liquid-glass mx-auto max-w-[220px] overflow-hidden rounded-2xl p-2">
                <img
                  src={m.img}
                  alt=""
                  className="aspect-[3/4] w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 font-medium text-[hsl(var(--foreground))]">{m.name}</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

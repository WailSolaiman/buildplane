import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { journalPageHeader, journalPosts } from '../content/journal'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function JournalPage() {
  const [featured, ...rest] = journalPosts

  return (
    <main className="min-h-svh pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <PageHeader
          eyebrow={journalPageHeader.eyebrow}
          title={journalPageHeader.title}
          subtitle={journalPageHeader.subtitle}
        />

        <motion.article
          className="mt-14 overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.35)] bg-[hsl(var(--foreground)/0.03)] md:mt-20 lg:grid lg:grid-cols-12"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="relative aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[380px]">
            <img
              src={featured.img}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.75)] to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))]">
              Featured
            </span>
            <h2
              className="mt-3 text-2xl font-normal leading-snug text-[hsl(var(--foreground))] sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {featured.title}
            </h2>
            <time className="mt-4 text-xs text-[hsl(var(--muted-foreground))]">
              {featured.date}
            </time>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--foreground))]">
              Read
              <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden />
            </span>
          </div>
        </motion.article>

        <div className="mt-16 space-y-4 md:mt-24">
          {rest.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className="group flex flex-col gap-5 rounded-2xl border border-[hsl(var(--border)/0.25)] bg-[hsl(var(--foreground)/0.02)] p-4 transition-colors hover:border-[hsl(var(--border)/0.45)] sm:flex-row sm:items-center sm:gap-8 sm:p-5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:aspect-[5/3] sm:w-52 md:w-64 shrink-0">
                <img
                  src={post.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <time className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--muted-foreground))]">
                  {post.date}
                </time>
                <h3
                  className="mt-2 text-xl font-normal text-[hsl(var(--foreground))] sm:text-2xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-[hsl(var(--muted-foreground))]">
                  {post.excerpt}
                </p>
              </div>
              <ArrowRight
                className="hidden size-5 shrink-0 text-[hsl(var(--muted-foreground))] transition-transform group-hover:translate-x-1 sm:block"
                strokeWidth={1.5}
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

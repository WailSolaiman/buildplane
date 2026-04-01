import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/motion/Reveal'
import { reachUsPageHeader } from '../content/reachUs'
import { site } from '../content/site'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const inputClass =
  'w-full rounded-xl border border-[hsl(var(--border)/0.45)] bg-[hsl(var(--foreground)/0.04)] px-4 py-3 text-sm text-[hsl(var(--foreground))] outline-none backdrop-blur-sm transition-colors placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--foreground)/0.25)]'

export function ReachUsPage() {
  return (
    <main className="min-h-svh pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <PageHeader
          eyebrow={reachUsPageHeader.eyebrow}
          title={reachUsPageHeader.title}
          subtitle={reachUsPageHeader.subtitle}
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="space-y-6">
              <div className="liquid-glass rounded-2xl p-6">
                <MapPin className="size-5 text-[hsl(var(--foreground))]" strokeWidth={1.5} aria-hidden />
                <p className="mt-3 text-sm font-medium text-[hsl(var(--foreground))]">Studio</p>
                <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </p>
              </div>
              <div className="liquid-glass rounded-2xl p-6">
                <Mail className="size-5 text-[hsl(var(--foreground))]" strokeWidth={1.5} aria-hidden />
                <p className="mt-3 text-sm font-medium text-[hsl(var(--foreground))]">Hello</p>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{site.email}</p>
              </div>
            </div>
          </motion.div>

          <Reveal className="lg:col-span-7" delay={0.06}>
            <form
              className="liquid-glass rounded-2xl p-6 sm:p-8 md:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                    Name
                  </span>
                  <input className={inputClass} type="text" name="name" placeholder="Alex Rivera" />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                    Email
                  </span>
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                    Project type
                  </span>
                  <input
                    className={inputClass}
                    type="text"
                    name="type"
                    placeholder="Product, brand, site…"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                    Message
                  </span>
                  <textarea
                    className={`${inputClass} min-h-[140px] resize-y`}
                    name="message"
                    placeholder="Timeline, goals, links…"
                    rows={5}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="liquid-glass mt-8 w-full rounded-full py-3.5 text-sm font-medium text-[hsl(var(--foreground))] transition-transform hover:scale-[1.01] sm:w-auto sm:px-14"
              >
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </main>
  )
}

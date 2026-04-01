import { motion } from 'framer-motion'
import { homeSectionImages, homeTestimonialContent } from '../../content/home'
import { Reveal } from '../motion/Reveal'
import { SectionShell } from './SectionShell'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeTestimonial() {
  return (
    <SectionShell className="border-y border-[hsl(var(--border)/0.2)]">
      <motion.div
        className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease }}
      >
        <div className="relative overflow-hidden rounded-2xl lg:col-span-5">
          <img
            src={homeSectionImages.testimonial}
            alt=""
            className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto lg:min-h-[420px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.85)] to-transparent lg:bg-gradient-to-r" />
        </div>
        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal delay={0.05}>
            <blockquote
              className="text-2xl font-normal leading-snug text-[hsl(var(--foreground))] sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {homeTestimonialContent.quote}
            </blockquote>
            <footer className="mt-8 flex flex-col gap-1 border-t border-[hsl(var(--border)/0.35)] pt-8">
              <cite className="not-italic text-base font-medium text-[hsl(var(--foreground))]">
                {homeTestimonialContent.name}
              </cite>
              <span className="text-sm text-[hsl(var(--muted-foreground))]">
                {homeTestimonialContent.role}
              </span>
            </footer>
          </Reveal>
        </div>
      </motion.div>
    </SectionShell>
  )
}

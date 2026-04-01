import { Reveal } from './motion/Reveal'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

const display = { fontFamily: "'Instrument Serif', serif" } as const

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: PageHeaderProps) {
  return (
    <Reveal
      className={
        align === 'center'
          ? 'mx-auto max-w-3xl text-center md:max-w-4xl'
          : 'max-w-3xl md:max-w-2xl'
      }
    >
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className="text-4xl font-normal tracking-tight text-[hsl(var(--foreground))] sm:text-5xl md:text-6xl"
        style={display}
      >
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-6 text-base leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}

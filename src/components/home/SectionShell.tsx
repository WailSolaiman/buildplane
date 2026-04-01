import type { ReactNode } from 'react'

type SectionShellProps = {
  id?: string
  children: ReactNode
  className?: string
  /** Extra top padding after hero */
  tightTop?: boolean
}

export function SectionShell({
  id,
  children,
  className = '',
  tightTop,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`px-6 sm:px-8 ${tightTop ? 'pt-16 pb-24 md:pt-20 md:pb-32' : 'py-24 md:py-32'} ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

import { site } from '../content/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[hsl(var(--border)/0.35)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between sm:text-left sm:px-8">
        <p className="m-0">
          © {year} {site.name}. {site.city}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="w-fit transition-colors hover:text-[hsl(var(--foreground))]"
        >
          {site.email}
        </a>
      </div>
    </footer>
  )
}

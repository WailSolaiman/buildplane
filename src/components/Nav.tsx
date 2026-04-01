import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

type NavItem = { to: string; label: string; end?: boolean }

const links: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/studio', label: 'Studio' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
  { to: '/reach-us', label: 'Reach Us' },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  return (
    <>
      {menuOpen ? (
        <div
          className="fixed inset-0 z-[90] bg-black/45 backdrop-blur-[2px] md:hidden"
          aria-hidden
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <header
        className={`site-header fixed inset-x-0 top-0 backdrop-blur-md transition-colors duration-300 ${menuOpen ? 'z-[100]' : 'z-20'}`}
      >
        <nav
          className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6"
          aria-label="Primary"
        >
          <NavLink
            to="/"
            className="font-display shrink-0 text-2xl tracking-tight text-[hsl(var(--foreground))] sm:text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            Buildplane
            <sup className="ml-0.5 align-super text-xs">®</sup>
          </NavLink>

          <div className="hidden items-center gap-10 md:flex">
            {links.map(({ to, label, end: endMatch }) => (
              <NavLink
                key={to}
                to={to}
                end={endMatch}
                className={({ isActive }) =>
                  [
                    'text-sm transition-colors',
                    isActive
                      ? 'text-[hsl(var(--foreground))]'
                      : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full border border-[hsl(var(--border)/0.45)] text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--foreground)/0.06)] md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={1.75} aria-hidden />
              ) : (
                <Menu className="size-5" strokeWidth={1.75} aria-hidden />
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`relative z-10 border-t border-[hsl(var(--nav-border)/var(--nav-border-alpha))] bg-[hsl(var(--nav-tint)/var(--nav-alpha))] backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
            menuOpen
              ? 'max-h-[min(70vh,28rem)] overflow-y-auto opacity-100'
              : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
          }`}
          role="navigation"
          aria-label="Mobile"
        >
          <div className="flex flex-col px-6 py-5 sm:px-8">
            {links.map(({ to, label, end: endMatch }) => (
              <NavLink
                key={to}
                to={to}
                end={endMatch}
                className={({ isActive }) =>
                  [
                    'border-b border-[hsl(var(--border)/0.25)] py-3.5 text-base transition-colors last:border-b-0',
                    isActive
                      ? 'text-[hsl(var(--foreground))]'
                      : 'text-[hsl(var(--muted-foreground))] active:text-[hsl(var(--foreground))]',
                  ].join(' ')
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

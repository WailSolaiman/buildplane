import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme/ThemeContext'

/** Snappy, low-bounce spring — tuned for a quick, smooth thumb slide. */
const thumbTransition = {
  type: 'spring',
  stiffness: 720,
  damping: 36,
  mass: 0.55,
} as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="relative flex rounded-full border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--foreground)/0.04)] p-0.5 backdrop-blur-sm"
      role="group"
      aria-label="Color theme"
    >
      <motion.span
        className="pointer-events-none absolute inset-y-0.5 left-0.5 z-0 w-[calc(50%-0.125rem)] rounded-full bg-[hsl(var(--foreground)/0.12)]"
        initial={false}
        animate={{ x: theme === 'dark' ? '100%' : 0 }}
        transition={thumbTransition}
        aria-hidden
      />
      <button
        type="button"
        aria-label="Light theme"
        aria-pressed={theme === 'light'}
        className={`relative z-10 flex size-9 items-center justify-center rounded-full transition-colors duration-150 ease-out ${
          theme === 'light'
            ? 'text-[hsl(var(--foreground))]'
            : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
        }`}
        onClick={() => setTheme('light')}
      >
        <Sun className="size-[18px] shrink-0" strokeWidth={1.75} aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        aria-pressed={theme === 'dark'}
        className={`relative z-10 flex size-9 items-center justify-center rounded-full transition-colors duration-150 ease-out ${
          theme === 'dark'
            ? 'text-[hsl(var(--foreground))]'
            : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
        }`}
        onClick={() => setTheme('dark')}
      >
        <Moon className="size-[18px] shrink-0" strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  )
}

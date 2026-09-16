import { useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from '../theme/ThemeContext'

const base = import.meta.env.BASE_URL

/** Matched pair: the studio building, same frame, by day and at night. */
const HERO_IMAGE_LIGHT = `${base}hero-day.webp`
const HERO_IMAGE_DARK = `${base}hero-night.webp`

const IMAGE_CLASS = 'h-full w-full object-cover'

/** Clips the image; inner pan shifts the crop on small screens. */
const IMAGE_CLIP = 'absolute inset-0 overflow-hidden'

const LAYER_TRANSITION = 'transition-[opacity] duration-500 ease-out'

type Outgoing = 'light' | 'dark' | null

export function Hero() {
  const { theme: targetTheme } = useTheme()
  const [stableTheme, setStableTheme] = useState<'light' | 'dark'>(targetTheme)
  const [lightReady, setLightReady] = useState(false)
  const [darkReady, setDarkReady] = useState(false)
  const [outgoing, setOutgoing] = useState<Outgoing>(null)
  const [outgoingOpaque, setOutgoingOpaque] = useState(true)

  const targetRef = useRef(targetTheme)
  targetRef.current = targetTheme

  useEffect(() => {
    if (targetTheme === stableTheme || outgoing) return

    if (targetTheme === 'dark' && darkReady) {
      setOutgoing('light')
    } else if (targetTheme === 'light' && lightReady) {
      setOutgoing('dark')
    }
  }, [targetTheme, stableTheme, darkReady, lightReady, outgoing])

  useEffect(() => {
    if (!outgoing) return
    setOutgoingOpaque(true)
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setOutgoingOpaque(false))
    })
    return () => cancelAnimationFrame(id)
  }, [outgoing])

  const onLightLoad = useCallback(() => setLightReady(true), [])
  const onDarkLoad = useCallback(() => setDarkReady(true), [])

  const onOutgoingTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName !== 'opacity' || outgoingOpaque || !outgoing) return
      setStableTheme(targetRef.current)
      setOutgoing(null)
    },
    [outgoing, outgoingOpaque],
  )

  let darkZ: number
  let darkOp: number
  let lightZ: number
  let lightOp: number

  if (outgoing === 'light') {
    darkZ = 5
    darkOp = 1
    lightZ = 10
    lightOp = outgoingOpaque ? 1 : 0
  } else if (outgoing === 'dark') {
    lightZ = 5
    lightOp = 1
    darkZ = 10
    darkOp = outgoingOpaque ? 1 : 0
  } else if (stableTheme === 'light') {
    darkZ = 1
    darkOp = 0
    lightZ = 2
    lightOp = lightReady ? 1 : 0
  } else {
    darkZ = 2
    darkOp = darkReady ? 1 : 0
    lightZ = 1
    lightOp = 0
  }

  const holdLightUntilDark =
    targetTheme === 'dark' && stableTheme === 'light' && !darkReady && !outgoing
  if (holdLightUntilDark) {
    darkZ = 1
    darkOp = 0
    lightZ = 2
    lightOp = lightReady ? 1 : 0
  }

  const holdDarkUntilLight =
    targetTheme === 'light' && stableTheme === 'dark' && !lightReady && !outgoing
  if (holdDarkUntilLight) {
    lightZ = 1
    lightOp = 0
    darkZ = 2
    darkOp = darkReady ? 1 : 0
  }

  return (
    <section className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[hsl(var(--background))] transition-colors duration-300" />

        <div
          className={`absolute inset-0 ${LAYER_TRANSITION}`}
          style={{ zIndex: darkZ, opacity: darkOp }}
          onTransitionEnd={outgoing === 'dark' ? onOutgoingTransitionEnd : undefined}
        >
          <div className={IMAGE_CLIP}>
            <img
              src={HERO_IMAGE_DARK}
              alt=""
              onLoad={onDarkLoad}
              onError={onDarkLoad}
              decoding="async"
              fetchPriority={stableTheme === 'dark' ? 'high' : 'low'}
              className={IMAGE_CLASS}
              style={{ objectPosition: '50% 50%' }}
            />
          </div>
        </div>

        <div
          className={`absolute inset-0 ${LAYER_TRANSITION}`}
          style={{ zIndex: lightZ, opacity: lightOp }}
          onTransitionEnd={outgoing === 'light' ? onOutgoingTransitionEnd : undefined}
        >
          <div className={IMAGE_CLIP}>
            <img
              src={HERO_IMAGE_LIGHT}
              alt=""
              onLoad={onLightLoad}
              onError={onLightLoad}
              decoding="async"
              fetchPriority={stableTheme === 'light' ? 'high' : 'low'}
              className={IMAGE_CLASS}
              style={{ objectPosition: '50% 50%' }}
            />
          </div>
        </div>
      </div>

      {/* Dark gradient scrim over the image for text contrast */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-black/25 via-black/40 to-black/60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-3xl flex-col items-center justify-center px-6 pb-16 pt-20 text-center sm:pt-24">
        <h1
          className="animate-fade-rise w-full max-w-md font-normal leading-[1.08] tracking-tight text-balance text-5xl text-white sm:max-w-lg sm:text-6xl md:max-w-xl md:text-7xl lg:max-w-2xl lg:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic">dreams</em>
          <br />
          rise <em className="not-italic">through the silence.</em>
        </h1>
      </div>
    </section>
  )
}

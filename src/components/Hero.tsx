import { useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from '../theme/ThemeContext'

/** `autoplay=muted` is required for background playback in most browsers. */
const MUX_PLAYER_LIGHT =
  'https://player.mux.com/ytumTMGEnhkpLWAWc8QtpRdnDZEWmZq5JYtM302Z5VOc?metadata-video-title=1774988239934&video-title=1774988239934&autoplay=muted&muted=true&loop=true'

const MUX_PLAYER_DARK =
  'https://player.mux.com/5ajVajxyVpFdB2TLCzuhE1PwDRAmZdfnqUC2tB01rMRs?metadata-video-title=1774988243278&video-title=1774988243278&autoplay=muted&muted=true&loop=true'

/** 241:134 from Mux embed — used for object-fit–style cover math. */
const MUX_ASPECT_W = 241
const MUX_ASPECT_H = 134

const IFRAME_FRAME_CLASS =
  'pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 border-0'

/** Clips iframe; inner pan shifts frame on small screens (reveal left side of shot). */
const VIDEO_CLIP = 'absolute inset-0 overflow-hidden'
const VIDEO_PAN =
  'relative h-full w-full max-md:-translate-x-[min(30vw,7rem)] md:translate-x-0'

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

  const iframeSize = {
    width: `max(100vw, calc(100vh * ${MUX_ASPECT_W} / ${MUX_ASPECT_H}))`,
    height: `max(100vh, calc(100vw * ${MUX_ASPECT_H} / ${MUX_ASPECT_W}))`,
  } as const

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
          <div className={VIDEO_CLIP}>
            <div className={VIDEO_PAN}>
              <iframe
                title="Buildplane background — dark"
                src={MUX_PLAYER_DARK}
                onLoad={onDarkLoad}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                className={IFRAME_FRAME_CLASS}
                style={iframeSize}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 ${LAYER_TRANSITION}`}
          style={{ zIndex: lightZ, opacity: lightOp }}
          onTransitionEnd={outgoing === 'light' ? onOutgoingTransitionEnd : undefined}
        >
          <div className={VIDEO_CLIP}>
            <div className={VIDEO_PAN}>
              <iframe
                title="Buildplane background — light"
                src={MUX_PLAYER_LIGHT}
                onLoad={onLightLoad}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                className={IFRAME_FRAME_CLASS}
                style={iframeSize}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dark gradient scrim over video for text contrast (option 1) */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-b from-black/[0.06] via-black/[0.22] to-black/[0.52]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-3xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:pt-28">
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

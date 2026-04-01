import { site } from './site'

/** Work grid + section stills in /public/home — swap filenames if you regenerate. */
const homeAssets = {
  lumenAtlas: '/home/Manhattan_arts_building_202604011158.jpeg',
  northwindOs: '/home/Laptop_showing_logistics_202604011159.jpeg',
  velvetLedger: '/home/Reception_in_contemporary_202604011159.jpeg',
  studioNotes: '/home/Brooklyn_brownstones_at_202604011159.jpeg',
  philosophy: '/home/Modern_design_studio_202604011159.jpeg',
  /** Mira Chen quote — use `nycProductTeam` in `homeSectionImages` if you prefer the meeting-room shot. */
  testimonial: '/home/Professional_woman_VP_202604011159.jpeg',
  nycProductTeam: '/home/NYC_product_team_202604011159.jpeg',
} as const

/** Exported for Philosophy + Testimonial sections (single place to change hero stills). */
export const homeSectionImages = {
  philosophy: homeAssets.philosophy,
  testimonial: homeAssets.testimonial,
  nycProductTeam: homeAssets.nycProductTeam,
} as const

export const homeWorkProjects = [
  {
    title: 'Lumen Atlas',
    tag: 'Product · Civic',
    blurb: 'Wayfinding and lobby interfaces for a Manhattan arts annex — glass, light, zero noise.',
    image: homeAssets.lumenAtlas,
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Northwind OS',
    tag: 'Product · SaaS',
    blurb: 'Operations dashboards and a scalable UI system for a Series B logistics platform.',
    image: homeAssets.northwindOs,
    span: '',
  },
  {
    title: 'Velvet Ledger',
    tag: 'Brand · Web',
    blurb: 'Identity and site for a Brooklyn CPA collective — trust, warmth, no stock handshake photos.',
    image: homeAssets.velvetLedger,
    span: '',
  },
  {
    title: 'Studio Notes',
    tag: 'Editorial',
    blurb: 'In-house journal: typography, monochrome layout, and essays on quiet software.',
    image: homeAssets.studioNotes,
    span: 'md:col-span-2',
  },
] as const

export const homeWorkGridSection = {
  eyebrow: 'Selected work',
  headline: 'Built for focus — here and on the road.',
  aside: `Representative engagements from ${site.name} — a six-person studio in DUMBO, Brooklyn. Names and details are fiction for this portfolio site.`,
} as const

export const homePhilosophySection = {
  eyebrow: 'Philosophy',
  headline: 'We design for the pause between thoughts.',
  intro: `${site.name} is a ${site.teamSize}-person studio in ${site.city}. We partner with US and European teams who ship serious software — logistics, finance, culture — and want interfaces that feel like one quiet room. Strategy, UX, UI, and front-end craft stay in-house; we bring specialists only when the work demands it.`,
  bullets: [
    'Research-led UX — we map how work really happens',
    'Design systems that survive handoff and years of iteration',
    'Motion and type as punctuation, not decoration',
  ] as const,
}

export const homeProcessSection = {
  eyebrow: 'Process',
  headline: 'Three beats. No theatre.',
  steps: [
    {
      n: '01',
      title: 'Listen',
      body: `Workshops on your turf or ours in ${site.city.split(',')[0]} — we map workflows, constraints, and where calm is missing.`,
    },
    {
      n: '02',
      title: 'Shape',
      body: 'Direction, information architecture, and a visual language that holds from marketing site to product UI.',
    },
    {
      n: '03',
      title: 'Ship',
      body: 'We embed with your engineers, ship a documented system, and tune motion until the product feels inevitable.',
    },
  ] as const,
}

export const homeSignalsSection = {
  subhead: site.city,
  headline: 'Brooklyn studio. National clients.',
  stats: [
    { label: 'Founded', value: site.founded },
    { label: 'Core team', value: site.teamSize },
    { label: 'Shipped engagements', value: '48+' },
    { label: 'Client regions', value: 'US · EU' },
  ] as const,
}

export const homeTestimonialContent = {
  quote:
    '“They didn’t ship a deck — they shipped judgment. Our product finally feels like one calm room.”',
  name: 'Mira Chen',
  role: 'VP Product, Northwind Systems — logistics SaaS, NYC',
} as const

export const homeCtaSection = {
  eyebrow: 'Next',
  headline: 'Tell us what you’re building in silence.',
  body: `New product, rebrand, or a quiet rescue mission — tell us in a paragraph. We reply from ${site.city} within two business days.`,
} as const

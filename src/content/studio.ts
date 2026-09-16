import { site } from './site'

/** Stills in /public/studio */
const base = import.meta.env.BASE_URL

const studioAssets = {
  lumenAtlas: `${base}studio/gallery-lobby.webp`,
  northwindOs: `${base}studio/northwind-desk.webp`,
  velvetLedger: `${base}studio/office-reception.webp`,
  studioNotes: `${base}studio/desk-still-life.webp`,
  harborMeridian: `${base}studio/desk-monitor.webp`,
  dumboWorks: `${base}studio/loft-coworking.webp`,
} as const

export const studioProjects = [
  {
    title: 'Lumen Atlas',
    cat: 'Product · Civic',
    desc: 'Wayfinding and lobby UI for a Manhattan arts annex.',
    img: studioAssets.lumenAtlas,
  },
  {
    title: 'Northwind OS',
    cat: 'Product · SaaS',
    desc: 'Operations dashboards for a Series B logistics platform.',
    img: studioAssets.northwindOs,
  },
  {
    title: 'Velvet Ledger',
    cat: 'Brand · Web',
    desc: 'Identity and site for a Brooklyn CPA collective.',
    img: studioAssets.velvetLedger,
  },
  {
    title: 'Studio Notes',
    cat: 'Editorial',
    desc: 'In-house journal — typography and essays on quiet software.',
    img: studioAssets.studioNotes,
  },
  {
    title: 'Harbor Meridian',
    cat: 'Product · Fintech',
    desc: 'Investor reporting portal for a maritime finance desk.',
    img: studioAssets.harborMeridian,
  },
  {
    title: 'Dumbo Works',
    cat: 'Brand',
    desc: 'Naming and visual system for a neighborhood coworking hall.',
    img: studioAssets.dumboWorks,
  },
] as const

export const studioPageHeader = {
  eyebrow: 'Studio',
  title: 'Work that holds up in the quiet moments.',
  subtitle: `Selected projects from ${site.name} — fictional narratives for portfolio layout, aligned with the stories on the home page.`,
} as const

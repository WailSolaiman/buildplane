import { site } from './site'

/** Stills in /public/studio */
const studioAssets = {
  lumenAtlas: '/studio/Manhattan_gallery_lobby_202604011236.jpeg',
  northwindOs: '/studio/Northwind_OS_desk_202604011238.jpeg',
  velvetLedger: '/studio/Small_office_reception_202604011243.jpeg',
  studioNotes: '/studio/Desk_still_life_202604011247.jpeg',
  harborMeridian: '/studio/Desk_with_monitor_202604011247.jpeg',
  dumboWorks: '/studio/Loft_coworking_brick_202604011247.jpeg',
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

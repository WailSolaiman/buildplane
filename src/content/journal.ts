import { site } from './site'

/** Assets in /public/journal */
const journalAssets = {
  pauseNotPeak: '/journal/Brooklyn_open_plan_202604011440.jpeg',
  systemsOverScreens: '/journal/Abstract_close-up_design_202604011440.jpeg',
  motionPunctuation: '/journal/Mechanical_watch_or_202604011440.jpeg',
  quietRebels: '/journal/Minimal_landscape_distant_202604011440.jpeg',
} as const

export const journalPosts = [
  {
    title: 'Designing for the pause, not the peak',
    date: 'Mar 12, 2026',
    excerpt:
      'Why the best interfaces reward stillness — notes from a Brooklyn studio that ships calm software for loud markets.',
    img: journalAssets.pauseNotPeak,
    featured: true as const,
  },
  {
    title: 'Systems over screens',
    date: 'Feb 2, 2026',
    excerpt:
      'Tokens, grids, and the boring documentation that keeps a brand honest when the team doubles.',
    img: journalAssets.systemsOverScreens,
  },
  {
    title: 'Motion as punctuation',
    date: 'Jan 18, 2026',
    excerpt:
      'Timing curves we reach for in product UI — and the moments we leave the canvas still.',
    img: journalAssets.motionPunctuation,
  },
  {
    title: 'Quiet rebels',
    date: 'Dec 4, 2025',
    excerpt:
      'Working with US and EU teams who treat restraint as a feature, not a missing roadmap.',
    img: journalAssets.quietRebels,
  },
] as const

export const journalPageHeader = {
  eyebrow: 'Journal',
  title: 'Notes on craft, rhythm, and restraint.',
  subtitle: `Essays and field notes from ${site.name} — replace with Markdown or a CMS when you wire the backend.`,
} as const

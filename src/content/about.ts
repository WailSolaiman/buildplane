import { site } from './site'

/** Assets in /public/about */
export const aboutAssets = {
  desk: '/about/Creative_studio_desk_202604011416.jpeg',
  elenaVoss: '/about/Elena_Voss.jpeg',
  jamesOkoro: '/about/James_Okoro.jpeg',
  sofiaReyes: '/about/Sofia_Reyes.jpeg',
  marcusWebb: '/about/Marcus_Webb.jpeg',
  ninaPark: '/about/Nina_Park.jpeg',
  weiLin: '/about/Wei_Lin.jpeg',
} as const

export const aboutValues = [
  {
    title: 'Clarity',
    text: 'We edit until the interface disappears and the task feels obvious — especially in dense B2B and finance-adjacent products.',
  },
  {
    title: 'Patience',
    text: 'Good systems compound. We skip trends that age in a quarter and build for handoff to your team.',
  },
  {
    title: 'Care',
    text: 'Motion, type, and spacing are promises. Our six-person core keeps quality consistent from kickoff to launch.',
  },
] as const

export const aboutTeam = [
  { name: 'Elena Voss', role: 'Founder & creative director', img: aboutAssets.elenaVoss },
  { name: 'James Okoro', role: 'Lead product designer', img: aboutAssets.jamesOkoro },
  { name: 'Sofia Reyes', role: 'Strategy & writing', img: aboutAssets.sofiaReyes },
  { name: 'Marcus Webb', role: 'Lead engineer, frontend', img: aboutAssets.marcusWebb },
  { name: 'Nina Park', role: 'Brand & motion', img: aboutAssets.ninaPark },
  { name: 'Wei Lin', role: 'Operations & producer', img: aboutAssets.weiLin },
] as const

export const aboutStatsRows = [
  { k: 'Founded', v: site.founded },
  { k: 'Core team', v: site.teamSize },
  { k: 'Home base', v: 'DUMBO' },
] as const

export const aboutPageHeader = {
  eyebrow: 'About',
  title: 'A six-person studio with long timelines.',
  subtitle: `${site.name} works from ${site.city}. Founded ${site.founded}, we partner with product and brand teams across the US East Coast and Europe — hybrid by default, precise by habit.`,
} as const

export const aboutSectionValues = {
  eyebrow: 'Values',
  title: 'What we protect on every engagement.',
} as const

export const aboutSectionPeople = {
  eyebrow: 'People',
  title: 'Core collective',
} as const

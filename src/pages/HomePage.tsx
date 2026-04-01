import { Hero } from '../components/Hero'
import { HomeCta } from '../components/home/HomeCta'
import { HomePhilosophy } from '../components/home/HomePhilosophy'
import { HomeProcess } from '../components/home/HomeProcess'
import { HomeSignals } from '../components/home/HomeSignals'
import { HomeTestimonial } from '../components/home/HomeTestimonial'
import { HomeWorkGrid } from '../components/home/HomeWorkGrid'

export function HomePage() {
  return (
    <>
      <Hero />
      <HomeSignals />
      <HomeWorkGrid />
      <HomePhilosophy />
      <HomeProcess />
      <HomeTestimonial />
      <HomeCta />
    </>
  )
}

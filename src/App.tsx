import { MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { JournalPage } from './pages/JournalPage'
import { ReachUsPage } from './pages/ReachUsPage'
import { StudioPage } from './pages/StudioPage'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-svh flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/reach-us" element={<ReachUsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </MotionConfig>
  )
}

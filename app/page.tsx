'use client'

import Hero from '@/components/Hero'
import HybridTimeline from '@/components/HybridTimeline'
import AIProjects from '@/components/AIProjects'
import TelecomProjects from '@/components/TelecomProjects'
import Certifications from '@/components/Certifications'
import SkillsMap from '@/components/SkillsMap'
import Leadership from '@/components/Leadership'
import DownloadCV from '@/components/DownloadCV'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MouseGlow from '@/components/MouseGlow'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MouseGlow />
      <Navigation />
      <Hero />
      <HybridTimeline />
      <AIProjects />
      <TelecomProjects />
      <Certifications />
      <SkillsMap />
      <Leadership />
      <DownloadCV />
      <Contact />
      <Footer />
    </main>
  )
}


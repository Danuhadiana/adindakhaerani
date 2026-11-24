import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { OrganizationSection } from './components/OrganizationSection'
import { PublicSpeakingSection } from './components/PublicSpeakingSection'
import { AchievementsSection } from './components/AchievementsSection'
import { ContactPage } from './components/ContactPage'
import { Footer } from './components/Footer'
import { portfolioData as initialData } from './data/portfolioData'
import type { PortfolioData } from './types'

function App() {
  const [data, setData] = useState<PortfolioData>(initialData)
  const [currentView, setCurrentView] = useState<'portfolio' | 'contact'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase()
      if (hash.includes('kontak') || hash.includes('contact')) return 'contact'
    }
    return 'portfolio'
  })

  // Deep linking hash synchronization
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'kontak' || hash === 'contact') {
        setCurrentView('contact')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (currentView === 'contact') {
        setCurrentView('portfolio')
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [currentView])

  // Background fetch if backend is active
  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(d => {
        if (d && d.profile) setData(d)
      })
      .catch(() => {
        // Fallback to initialData gracefully
      })
  }, [])

  const navigateToContact = () => {
    window.location.hash = 'kontak'
    setCurrentView('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToPortfolio = () => {
    window.location.hash = ''
    setCurrentView('portfolio')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateSection = (sectionId: string) => {
    if (currentView === 'contact') {
      setCurrentView('portfolio')
      window.location.hash = ''
    }

    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 40)
  }

  // Full-page Contact View (NO MODAL POPUP)
  if (currentView === 'contact') {
    return <ContactPage profile={data.profile} onBack={navigateToPortfolio} />
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Minimal Top Navigation */}
      <Navbar
        name={data.profile.name}
        onNavigateContact={navigateToContact}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Single-Column Editorial Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12">
        <HeroSection
          profile={data.profile}
          onNavigateContact={navigateToContact}
        />

        <AboutSection about={data.about} />

        <ExperienceSection experiences={data.experience} />

        <OrganizationSection
          organizations={data.organizations}
          roles={data.organizationRoles}
          images={data.organizationImages}
        />

        <PublicSpeakingSection speaking={data.publicSpeaking} />

        <AchievementsSection
          achievements={data.achievements}
          images={data.achievementImages}
        />
      </main>

      {/* Minimal Clean Footer */}
      <Footer
        name={data.profile.name}
        onNavigateContact={navigateToContact}
      />
    </div>
  )
}

export default App

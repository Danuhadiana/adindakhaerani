import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { SectionTabs } from './components/SectionTabs'
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
  const [activeTab, setActiveTab] = useState<string>('all')

  // Listen to hash changes for deep linking (e.g. #kontak)
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

  // Progressive background fetch if backend API is online
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
      setActiveTab('all')
      return
    }

    setActiveTab(sectionId)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  // If in Contact Page view, render full dedicated page (NO MODAL POPUP)
  if (currentView === 'contact') {
    return <ContactPage profile={data.profile} onBack={navigateToPortfolio} />
  }

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Fixed Executive Navbar */}
      <Navbar
        name={data.profile.name}
        activeSection={activeTab}
        onNavigateContact={navigateToContact}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Executive Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        
        {/* Executive Hero Section */}
        <HeroSection
          profile={data.profile}
          highlights={data.highlights}
          onNavigateContact={navigateToContact}
        />

        {/* Interactive Sticky Tab Bar Filter */}
        <SectionTabs
          activeTab={activeTab}
          onTabChange={(tabId) => {
            setActiveTab(tabId)
            if (tabId !== 'all') {
              const el = document.getElementById(tabId)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
        />

        {/* Content Sections Flow (Clean, Spacious, Uncluttered) */}
        <div className="flex flex-col gap-8">
          
          {(activeTab === 'all' || activeTab === 'tentang') && (
            <AboutSection about={data.about} />
          )}

          {(activeTab === 'all' || activeTab === 'pengalaman') && (
            <ExperienceSection experiences={data.experience} />
          )}

          {(activeTab === 'all' || activeTab === 'organisasi') && (
            <OrganizationSection
              organizations={data.organizations}
              roles={data.organizationRoles}
              images={data.organizationImages}
            />
          )}

          {(activeTab === 'all' || activeTab === 'public-speaking') && (
            <PublicSpeakingSection speaking={data.publicSpeaking} />
          )}

          {(activeTab === 'all' || activeTab === 'prestasi') && (
            <AchievementsSection
              achievements={data.achievements}
              images={data.achievementImages}
            />
          )}

        </div>

      </main>

      {/* Modern Executive Footer */}
      <Footer
        name={data.profile.name}
        onNavigateContact={navigateToContact}
      />
    </div>
  )
}

export default App

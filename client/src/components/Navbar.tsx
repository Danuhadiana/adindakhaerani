import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

interface NavbarProps {
  name: string
  onNavigateContact: () => void
  onNavigateSection: (sectionId: string) => void
}

const navItems = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'organisasi', label: 'Organisasi' },
  { id: 'public-speaking', label: 'Public Speaking' },
  { id: 'prestasi', label: 'Prestasi' },
]

export function Navbar({ name, onNavigateContact, onNavigateSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    onNavigateSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Brand */}
        <button 
          onClick={() => handleNavClick('beranda')}
          className="text-left cursor-pointer group py-2"
        >
          <span className="font-bold text-zinc-900 text-sm sm:text-base tracking-tight group-hover:text-zinc-600 transition-colors">
            {name}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions & Mobile Nav Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="/PORTFOLIO_PPT_ADINDA.pdf"
            download
            className="hidden sm:flex text-xs font-medium text-zinc-600 hover:text-zinc-950 items-center gap-1.5 transition-colors"
          >
            <Download size={14} />
            <span>Unduh CV</span>
          </a>

          <button
            onClick={onNavigateContact}
            className="text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors cursor-pointer min-h-[36px] sm:min-h-[40px] flex items-center"
          >
            Kontak
          </button>

          {/* Mobile Hamburger (Min 44x44px touch area) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Menu Navigasi"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 py-3 space-y-1 shadow-sm">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 active:bg-zinc-100 transition-colors cursor-pointer min-h-[44px] flex items-center"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 mt-2 border-t border-zinc-100 flex flex-col gap-2">
            <a
              href="/PORTFOLIO_PPT_ADINDA.pdf"
              download
              className="px-3 py-2.5 rounded-lg text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <Download size={15} />
              <span>Unduh CV Lengkap (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

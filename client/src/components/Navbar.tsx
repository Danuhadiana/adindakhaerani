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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <button 
          onClick={() => handleNavClick('beranda')}
          className="text-left cursor-pointer group"
        >
          <span className="font-bold text-zinc-900 text-base tracking-tight group-hover:text-zinc-600 transition-colors">
            {name}
          </span>
          <span className="hidden sm:inline-block text-xs text-zinc-400 ml-2 font-normal">
            Biologi &bull; Farmasi
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

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/PORTFOLIO_PPT_ADINDA.pdf"
            download
            className="text-xs font-medium text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
          >
            <Download size={14} />
            <span>Unduh CV</span>
          </a>

          <button
            onClick={onNavigateContact}
            className="text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Kontak
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 cursor-pointer"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left py-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2.5">
            <a
              href="/PORTFOLIO_PPT_ADINDA.pdf"
              download
              className="text-xs font-medium text-zinc-700 py-1"
            >
              Unduh CV (PDF)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onNavigateContact()
              }}
              className="text-xs font-semibold text-center text-white bg-zinc-900 py-2.5 rounded-lg cursor-pointer"
            >
              Hubungi Adinda
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

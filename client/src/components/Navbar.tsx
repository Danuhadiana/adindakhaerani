import { useState } from 'react'
import { Menu, X, Download, ShieldCheck, Mail } from 'lucide-react'

interface NavbarProps {
  name: string
  activeSection: string
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-black text-base flex items-center justify-center shadow-xs group-hover:bg-slate-800 transition-colors">
            AK
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-950 text-base tracking-tight">{name}</span>
              <ShieldCheck size={16} className="text-emerald-600 fill-emerald-100" />
            </div>
            <p className="text-[10px] font-semibold text-slate-400 tracking-wide uppercase">Biologi UIN &amp; Farmasi SMKN 15</p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="/PORTFOLIO_PPT_ADINDA.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <Download size={14} />
            <span>Unduh CV</span>
          </a>

          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full transition-colors shadow-xs cursor-pointer"
          >
            <Mail size={14} />
            <span>Hubungi Saya</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Buka navigasi"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-fade-in shadow-lg">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="/PORTFOLIO_PPT_ADINDA.pdf"
              download
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full"
            >
              Unduh Portofolio (PDF)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onNavigateContact()
              }}
              className="w-full py-2.5 px-4 bg-slate-900 text-white text-xs font-bold rounded-full text-center cursor-pointer"
            >
              Hubungi Adinda (Kirim Pesan)
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

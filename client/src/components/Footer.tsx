import { Mail, Download, ArrowUp } from 'lucide-react'

interface FooterProps {
  name: string
  onNavigateContact: () => void
}

export function Footer({ name, onNavigateContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-950 text-lg tracking-tight">{name}</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Lulusan Terbaik 2026
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Portofolio Resmi &bull; Mahasiswi Biologi UIN Jakarta &amp; Alumni SMKN 15 Bekasi
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/PORTFOLIO_PPT_ADINDA.pdf"
              download
              className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors inline-flex items-center gap-1.5"
            >
              <Download size={14} /> Unduh PDF
            </a>

            <button
              onClick={onNavigateContact}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full transition-colors shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Mail size={14} /> Hubungi Adinda
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {name}. Seluruh hak cipta dilindungi.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-950 transition-colors cursor-pointer font-medium"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

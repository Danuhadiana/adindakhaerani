import { Download, Mail } from 'lucide-react'

interface FooterProps {
  name: string
  onNavigateContact: () => void
}

export function Footer({ name, onNavigateContact }: FooterProps) {
  return (
    <footer className="py-12 border-t border-zinc-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>
          <p className="font-semibold text-zinc-900">{name}</p>
          <p className="text-[11px] text-zinc-400 mt-0.5">Biologi UIN Syarif Hidayatullah Jakarta &bull; Alumni Farmasi SMKN 15 Bekasi</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/PORTFOLIO_PPT_ADINDA.pdf"
            download
            className="hover:text-zinc-900 transition-colors flex items-center gap-1"
          >
            <Download size={13} />
            <span>Unduh CV</span>
          </a>

          <button
            onClick={onNavigateContact}
            className="hover:text-zinc-900 transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            <Mail size={13} />
            <span>Hubungi</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

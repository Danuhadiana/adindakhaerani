import { Download, Mail } from 'lucide-react'
import { InstagramIcon } from './Icons'
import type { Profile } from '../types'

interface HeroSectionProps {
  profile: Profile
  onNavigateContact: () => void
}

export function HeroSection({ profile, onNavigateContact }: HeroSectionProps) {
  return (
    <section className="pt-10 pb-16 border-b border-zinc-200/80">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
        
        {/* Left Column: Text & Credibility */}
        <div className="flex-1">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
            Portofolio Profesional
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            {profile.name}
          </h1>

          <p className="mt-2.5 text-base text-zinc-700 font-medium leading-relaxed">
            Mahasiswi Biologi UIN Syarif Hidayatullah Jakarta dan Lulusan Terbaik Teknologi Farmasi SMKN 15 Kota Bekasi.
          </p>

          <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
            Memadukan ketelitian pengujian mutu industri farmasi (CPOB), dedikasi riset biologi laboratorium, serta pengalaman koordinasi kepemimpinan dan pemandu acara (Master of Ceremony).
          </p>

          {/* Education Lines */}
          <div className="mt-6 space-y-1.5 text-xs text-zinc-600">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              <span><strong>UIN Syarif Hidayatullah Jakarta</strong> &bull; Mahasiswi Biologi (Aktif)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              <span><strong>SMKN 15 Kota Bekasi</strong> &bull; Lulusan Terbaik Farmasi (2026)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              <span>Domisili: {profile.location}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateContact}
              className="text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Mail size={14} />
              <span>Hubungi Saya</span>
            </button>

            <a
              href="/PORTFOLIO_PPT_ADINDA.pdf"
              download
              className="text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2"
            >
              <Download size={14} />
              <span>Unduh CV (PDF)</span>
            </a>

            <a
              href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2.5 transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon size={14} />
              <span>{profile.instagram}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean, Uncluttered Portrait Photo */}
        <div className="shrink-0 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-xs">
          <img
            src={profile.photo || "/images/profile.jpg"}
            alt={profile.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </section>
  )
}

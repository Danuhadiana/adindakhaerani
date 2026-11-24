import { Download, Mail } from 'lucide-react'
import { InstagramIcon } from './Icons'
import type { Profile } from '../types'

interface HeroSectionProps {
  profile: Profile
  onNavigateContact: () => void
}

export function HeroSection({ profile, onNavigateContact }: HeroSectionProps) {
  return (
    <section className="pt-4 sm:pt-8 pb-10 sm:pb-14 border-b border-zinc-200">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 md:gap-12">
        
        {/* Left Column: Typography, Bio & Structured Metadata */}
        <div className="flex-1 min-w-0 w-full">
          
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-zinc-950 tracking-tight leading-tight">
            {profile.name}
          </h1>

          <p className="mt-2 text-sm sm:text-base lg:text-lg text-zinc-800 font-medium leading-snug">
            Mahasiswi Biologi UIN Syarif Hidayatullah Jakarta &bull; Lulusan Terbaik Teknologi Farmasi SMKN 15 Bekasi
          </p>

          <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal max-w-2xl">
            Memadukan ketelitian pengujian mutu industri farmasi standar CPOB, dedikasi riset biologi laboratorium, serta rekam jejak kepemimpinan organisasi dan pemandu acara (Master of Ceremony).
          </p>

          {/* Structured Credential Grid */}
          <div className="mt-5 pt-4 sm:mt-6 sm:pt-5 border-t border-zinc-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-x-6 sm:gap-y-3.5 text-xs">
            <div className="bg-zinc-50/70 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-zinc-100 sm:border-0">
              <span className="text-zinc-400 font-medium block text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">
                Pendidikan Tinggi
              </span>
              <p className="font-semibold text-zinc-900 text-xs sm:text-sm">
                UIN Syarif Hidayatullah Jakarta
              </p>
              <p className="text-zinc-500 text-[11px]">Program Studi S1 Biologi (Mahasiswi Aktif)</p>
            </div>

            <div className="bg-zinc-50/70 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-zinc-100 sm:border-0">
              <span className="text-zinc-400 font-medium block text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">
                Pendidikan Menengah Kejuruan
              </span>
              <p className="font-semibold text-zinc-900 text-xs sm:text-sm">
                SMKN 15 Kota Bekasi
              </p>
              <p className="text-zinc-500 text-[11px]">Lulusan Terbaik Jurusan Farmasi (2026)</p>
            </div>

            <div className="bg-zinc-50/70 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-zinc-100 sm:border-0">
              <span className="text-zinc-400 font-medium block text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">
                Fokus Keahlian
              </span>
              <p className="font-semibold text-zinc-900 text-xs">
                Quality Assurance (CPOB), Riset Lab &amp; MC
              </p>
            </div>

            <div className="bg-zinc-50/70 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-zinc-100 sm:border-0">
              <span className="text-zinc-400 font-medium block text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">
                Domisili
              </span>
              <p className="font-semibold text-zinc-900 text-xs">
                {profile.location}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={onNavigateContact}
              className="w-full sm:w-auto text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 px-5 py-3 sm:py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs min-h-[44px]"
            >
              <Mail size={15} />
              <span>Hubungi Saya</span>
            </button>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
              <a
                href="/PORTFOLIO_PPT_ADINDA.pdf"
                download
                className="text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Download size={15} />
                <span>Unduh CV</span>
              </a>

              <a
                href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 sm:border-0 px-3 py-2.5 rounded-lg sm:rounded-none transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <InstagramIcon size={15} />
                <span>{profile.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Properly Proportioned 3:4 Pas Foto Card */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="w-32 sm:w-44 md:w-52 aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 relative">
            <img
              src={profile.photo || "/images/profile.jpg"}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div className="mt-2 text-center hidden md:block">
            <p className="text-xs font-bold text-zinc-900 tracking-tight">{profile.name}</p>
            <p className="text-[11px] text-zinc-500 font-medium">Lulusan Terbaik Farmasi 2026</p>
          </div>
        </div>

      </div>
    </section>
  )
}

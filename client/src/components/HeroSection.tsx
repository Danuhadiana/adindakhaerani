import { Mail, Download, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from './Icons'
import type { Profile, Highlight } from '../types'

interface HeroSectionProps {
  profile: Profile
  highlights: Highlight[]
  onNavigateContact: () => void
}

export function HeroSection({ profile, highlights, onNavigateContact }: HeroSectionProps) {
  return (
    <section className="relative pt-6 pb-12">
      
      {/* Background Soft Glows for Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-r from-emerald-100/40 via-blue-100/30 to-purple-100/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Executive Identity & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Top Status Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for QA, Laboratory Research &amp; Event MC</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                <MapPin size={13} className="text-slate-400" />
                {profile.location}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              {profile.name}
            </h1>

            <p className="mt-3 text-base sm:text-lg font-semibold text-slate-700 leading-snug">
              Mahasiswi Biologi UIN Jakarta &bull; Lulusan Terbaik Farmasi SMKN 15 Bekasi &bull; QA &amp; MC
            </p>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
              Memadukan ketelitian regulasi industri farmasi CPOB, dedikasi riset laboratorium biologi murni, serta kemampuan kepemimpinan komunikasi publik yang adaptif dan teruji.
            </p>

            {/* Dual Academic Affiliations */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.affiliations.map((aff, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-2xs shrink-0">
                    <GraduationCap size={20} className="text-slate-900" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-xs text-slate-900 truncate">{aff.name}</p>
                    <p className="text-[11px] text-slate-500 font-medium truncate">{aff.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Highlight Stat Cards (Replacing the feed strip) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    0{i + 1}
                  </span>
                  <div className="mt-2">
                    <p className="text-xs font-black text-slate-950 leading-tight">{h.label}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateContact}
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Mail size={16} />
                <span>Kirim Pesan / Hubungi</span>
              </button>

              <a
                href="/PORTFOLIO_PPT_ADINDA.pdf"
                download
                className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-2xs hover:border-slate-400 transition-colors"
              >
                <Download size={16} />
                <span>Unduh Portofolio Resmi (PDF)</span>
              </a>

              <a
                href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <InstagramIcon size={16} />
                <span>{profile.instagram}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Executive Portrait Card with Floating Chips */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Card Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 via-emerald-100/40 to-blue-100/50 rounded-3xl blur-xl" />

            <div className="relative w-full max-w-sm rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-3.5">
              
              {/* Photo Frame */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative group">
                <img
                  src={profile.photo || "/images/profile.jpg"}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Lulusan Terbaik SMKN 15 Bekasi</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5">Nilai Akademis Tertinggi Teknologi Farmasi</p>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="mt-3.5 px-2 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <Award size={15} className="text-amber-500" />
                  <span>Cadisdik Award Jabar</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">Class of 2026</span>
              </div>

            </div>

            {/* Floating Chip 1: Top Right */}
            <div className="hidden sm:flex absolute -top-3 -right-3 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg items-center gap-2 text-xs font-bold text-slate-900 rotate-2">
              <span className="text-base">🏆</span>
              <div>
                <p className="text-[10px] text-slate-400 uppercase leading-none">Apresiasi Siswa</p>
                <p className="text-xs font-extrabold text-slate-900 mt-0.5">Juara 1 Presentasi</p>
              </div>
            </div>

            {/* Floating Chip 2: Bottom Left */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg items-center gap-2 text-xs font-bold text-slate-900 -rotate-2">
              <span className="text-base">🎙️</span>
              <div>
                <p className="text-[10px] text-slate-400 uppercase leading-none">Public Speaking</p>
                <p className="text-xs font-extrabold text-slate-900 mt-0.5">Master of Ceremony</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

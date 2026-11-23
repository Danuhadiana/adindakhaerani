import { Mail, Download, MapPin, GraduationCap } from 'lucide-react'
import { InstagramIcon } from './Icons'
import type { Profile } from '../types'

interface HeroCardProps {
  profile: Profile
  onContact: () => void
}

export function HeroCard({ profile, onContact }: HeroCardProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
      {/* Banner */}
      <div 
        className="h-32 sm:h-48 relative"
        style={{
          background: 'linear-gradient(135deg, #18181B 0%, #27272A 50%, #3F3F46 100%)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute right-4 top-4 text-xs font-mono text-zinc-400 bg-zinc-900/60 backdrop-blur-sm px-3 py-1 rounded-full border border-zinc-700">
          UIN Jakarta • Class of 2026
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="relative px-4 sm:px-8 pb-6">
        {/* Overlapping Profile Photo */}
        <div className="absolute -top-12 sm:-top-16 left-4 sm:left-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-zinc-100 overflow-hidden shadow-md">
            <img 
              src={profile.photo || "/images/profile.jpg"} 
              alt={profile.name} 
              className="w-full h-full object-cover object-top" 
            />
          </div>
        </div>

        {/* Content Details */}
        <div className="pt-14 sm:pt-20 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">{profile.name}</h1>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-300">
                Lulusan Terbaik 2026
              </span>
            </div>

            <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {profile.headline}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-zinc-500">
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-zinc-400" />
                {profile.location}
              </span>
              <span>•</span>
              <a 
                href={`mailto:${profile.email}`} 
                className="hover:text-zinc-950 hover:underline transition-colors"
              >
                {profile.email}
              </a>
              <span>•</span>
              <a 
                href={`https://instagram.com/${profile.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-zinc-950 hover:underline transition-colors"
              >
                {profile.instagram}
              </a>
            </div>
          </div>

          {/* Affiliations (Desktop View) */}
          <div className="hidden lg:flex flex-col gap-2 shrink-0 bg-zinc-50 p-3 rounded-lg border border-zinc-200">
            {profile.affiliations.map((aff, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs">
                <div className="w-7 h-7 rounded-md bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                  <GraduationCap size={15} className="text-zinc-700" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">{aff.name}</p>
                  <p className="text-zinc-500">{aff.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <button 
            onClick={onContact} 
            className="inline-flex items-center gap-2 px-5 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <Mail size={15} /> Kirim Pesan
          </button>
          
          <a 
            href={`https://instagram.com/${profile.instagram.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-zinc-900 text-sm font-medium rounded-full border border-zinc-900 hover:bg-zinc-50 transition-colors"
          >
            <InstagramIcon size={15} /> Instagram
          </a>

          <a 
            href="/PORTFOLIO_PPT_ADINDA.pdf" 
            download 
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-zinc-700 text-sm font-medium rounded-full border border-zinc-300 hover:border-zinc-900 hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
          >
            <Download size={15} /> Unduh Portofolio (PDF)
          </a>
        </div>

        {/* Affiliations (Mobile View) */}
        <div className="mt-4 lg:hidden flex flex-col gap-2">
          {profile.affiliations.map((aff, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
              <GraduationCap size={16} className="text-zinc-600 shrink-0" />
              <div>
                <p className="font-semibold text-zinc-900">{aff.name}</p>
                <p className="text-zinc-500">{aff.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

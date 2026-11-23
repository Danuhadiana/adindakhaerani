import { Mail, MapPin, GraduationCap, CheckCircle2, FileText, ExternalLink } from 'lucide-react'
import { InstagramIcon } from './Icons'
import type { Profile } from '../types'

interface SidebarProps {
  profile: Profile
}

export function Sidebar({ profile }: SidebarProps) {
  const competencies = [
    'Standar CPOB (Cara Pembuatan Obat yang Baik)',
    'Administrasi & Dokumen Mutu Industri (QA)',
    'Skrining & Peracikan Resep Manual',
    'Manajemen Logistik Farmasi (FIFO/FEFO)',
    'Master of Ceremony & Spontaneous Speaking',
    'Koordinasi Organisasi & Administrasi Proposal'
  ]

  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-20">
      {/* Contact Card */}
      <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-zinc-950 pb-2.5 border-b border-zinc-100 mb-4 flex items-center justify-between">
          <span>Kontak & Lokasi</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Tersedia untuk peluang" />
        </h3>

        <div className="space-y-3.5 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <Mail size={16} className="text-zinc-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-zinc-400">Email Utama</p>
              <a 
                href={`mailto:${profile.email}`} 
                className="font-medium text-zinc-900 hover:underline break-all"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <InstagramIcon size={16} className="text-zinc-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-zinc-400">Instagram</p>
              <a 
                href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-900 hover:underline"
              >
                {profile.instagram}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-zinc-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-zinc-400">Domisili</p>
              <p className="font-medium text-zinc-900">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Card */}
      <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-zinc-950 pb-2.5 border-b border-zinc-100 mb-4 flex items-center gap-2">
          <GraduationCap size={16} className="text-zinc-800" />
          Pendidikan Resmi
        </h3>

        <div className="space-y-4">
          {profile.affiliations.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
                <GraduationCap size={16} className="text-zinc-700" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-zinc-950 leading-snug">
                  {item.name}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competencies Card */}
      <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-zinc-950 pb-2.5 border-b border-zinc-100 mb-4">
          Kompetensi Inti
        </h3>

        <div className="space-y-2.5">
          {competencies.map((comp, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
              <CheckCircle2 size={14} className="text-zinc-500 mt-0.5 shrink-0" />
              <span>{comp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Portfolio Download Box */}
      <div className="bg-zinc-900 text-white rounded-xl p-5 shadow-md">
        <h4 className="text-sm font-bold flex items-center gap-2 mb-2">
          <FileText size={16} />
          Dokumen Portofolio
        </h4>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Unduh berkas portofolio asli versi presentasi (PDF) lengkap dengan seluruh rekam jejak Adinda Khaerani.
        </p>
        <a 
          href="/PORTFOLIO_PPT_ADINDA.pdf" 
          download 
          className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-white text-zinc-950 text-xs font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
        >
          <span>Download PDF Asli</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  )
}

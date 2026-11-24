import type { About } from '../types'

interface AboutSectionProps {
  about: About
}

const competencies = [
  'Standar CPOB (Cara Pembuatan Obat yang Baik)',
  'Administrasi & Dokumen Mutu Industri (QA)',
  'Skrining & Peracikan Resep Dokter',
  'Manajemen Logistik Farmasi (FIFO & FEFO)',
  'Master of Ceremony & Komunikasi Spontan',
  'Penyusunan Proposal & Administrasi Acara'
]

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="tentang" className="py-8 sm:py-12 border-b border-zinc-200/80 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-2xl">
        <h2 className="text-xl font-bold text-zinc-950 tracking-tight">
          Tentang Profil
        </h2>
        
        <p className="mt-4 text-sm text-zinc-700 leading-relaxed whitespace-pre-line font-normal">
          {about.text}
        </p>

        {/* Focus Areas */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3">
            Fokus Akademik &amp; Riset
          </h3>
          <ul className="space-y-2 text-sm text-zinc-600">
            {about.focus.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Competencies */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-3">
            Keterampilan &amp; Kompetensi
          </h3>
          <div className="flex flex-wrap gap-2">
            {competencies.map((comp, i) => (
              <span
                key={i}
                className="text-xs text-zinc-700 bg-zinc-100 px-3 py-1.5 rounded-md font-medium"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

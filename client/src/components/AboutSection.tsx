import { Compass, Target, CheckCircle2, Award } from 'lucide-react'
import type { About } from '../types'

interface AboutSectionProps {
  about: About
}

const competencies = [
  'Standar CPOB (Cara Pembuatan Obat yang Baik)',
  'Administrasi & Dokumen Mutu Industri (QA)',
  'Skrining & Peracikan Resep Manual',
  'Manajemen Logistik Farmasi (FIFO / FEFO)',
  'Master of Ceremony & Spontaneous Speaking',
  'Manajemen Acara & Administrasi Persuratan'
]

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="tentang" className="scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 mb-6 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Compass size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Ringkasan Eksekutif &amp; Profil</h2>
              <p className="text-xs text-slate-500 font-medium">Dedikasi akademis, regulasi farmasi, &amp; komunikasi publik</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Mahasiswi Biologi UIN Syarif Hidayatullah
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Bio */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p className="whitespace-pre-line">
              {about.text}
            </p>

            {/* Core Competencies Box */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Award size={16} className="text-amber-500" />
                <span>Kompetensi &amp; Kualifikasi Kunci</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {competencies.map((comp, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-slate-300 transition-colors"
                  >
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                    <span>{comp}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Priority Focus Cards */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200/60">
              <Target size={18} className="text-slate-900" />
              <h3 className="text-sm font-bold text-slate-950">Fokus &amp; Prioritas Saat Ini</h3>
            </div>

            <div className="space-y-3">
              {about.focus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Siap berkontribusi pada riset sains &amp; praktikum farmasi.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

import { Briefcase, CheckCircle2, Building2, MapPin } from 'lucide-react'
import type { Experience } from '../types'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="pengalaman" className="scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 mb-8 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Pengalaman Kerja &amp; Praktik Industri</h2>
              <p className="text-xs text-slate-500 font-medium">Rekam jejak terverifikasi di industri farmasi dan pelayanan kesehatan</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            2 Tempat Praktik Terverifikasi
          </span>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-5 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs shrink-0">
                    <Building2 size={22} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-slate-700 shadow-2xs">
                    {idx === 0 ? 'Industri Farmasi' : 'Fasilitas Kesehatan'}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-950 leading-tight">
                  {exp.company}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#059669] mt-1">
                  {exp.role}
                </p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-medium">
                  <MapPin size={13} />
                  <span>Jawa Barat, Indonesia &bull; Praktik Kerja Lapangan (PKL)</span>
                </p>

                {/* Key Points */}
                <ul className="mt-4 space-y-2.5">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                      <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Result Quote */}
                <div className="mt-5 p-3.5 bg-white rounded-xl border border-slate-200/90 text-xs sm:text-sm shadow-2xs">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider mb-1 text-slate-400">
                    Hasil Pembelajaran Teruji:
                  </span>
                  <p className="text-slate-800 font-medium italic">
                    "{exp.result}"
                  </p>
                </div>
              </div>

              {/* Photo Showcase */}
              {exp.images && exp.images.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-200/60">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Dokumentasi Aktivitas:
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {exp.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="aspect-square rounded-xl overflow-hidden border border-slate-200 bg-white group relative"
                      >
                        <img
                          src={img}
                          alt={`${exp.company} aktivitas ${imgIdx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

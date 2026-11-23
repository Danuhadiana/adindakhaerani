import { Trophy, Award, Medal, Star } from 'lucide-react'
import type { Achievement } from '../types'

interface AchievementsSectionProps {
  achievements: Achievement[]
  images: string[]
}

export function AchievementsSection({ achievements, images }: AchievementsSectionProps) {
  return (
    <section id="prestasi" className="scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 mb-8 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Trophy size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Prestasi, Penghargaan &amp; Beasiswa</h2>
              <p className="text-xs text-slate-500 font-medium">Pengakuan akademik, kompetisi kefarmasian, dan bakat seni</p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            6 Apresiasi Resmi
          </span>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, idx) => {
            const isHighlight = item.highlight
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl flex flex-col justify-between transition-all ${
                  isHighlight
                    ? 'bg-amber-50/50 border-2 border-amber-300/80 shadow-xs'
                    : 'bg-slate-50/70 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isHighlight
                          ? 'bg-amber-500 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-800'
                      }`}
                    >
                      {idx === 0 ? <Trophy size={18} /> : isHighlight ? <Award size={18} /> : <Medal size={18} />}
                    </div>
                    {item.year && (
                      <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                        {item.year}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-base text-slate-950 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {isHighlight && (
                  <div className="mt-4 pt-2.5 border-t border-amber-200/60 flex items-center gap-1.5 text-xs font-bold text-amber-900">
                    <Star size={13} className="fill-amber-500 text-amber-500" />
                    <span>Penghargaan Utama</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Certificates & Trophy Photos */}
        {images && images.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Dokumentasi Piagam, Piala &amp; Apresiasi:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group relative shadow-2xs"
                >
                  <img
                    src={img}
                    alt={`Dokumentasi Prestasi ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

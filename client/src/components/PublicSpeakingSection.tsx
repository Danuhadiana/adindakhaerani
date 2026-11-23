import { Mic2, Sparkles, School, Home, Zap } from 'lucide-react'
import type { PublicSpeaking } from '../types'

interface PublicSpeakingSectionProps {
  speaking: PublicSpeaking
}

export function PublicSpeakingSection({ speaking }: PublicSpeakingSectionProps) {
  const getScopeIcon = (category: string) => {
    if (category.includes('Sekolah')) return <School size={18} />
    if (category.includes('Lingkungan')) return <Home size={18} />
    return <Zap size={18} />
  }

  return (
    <section id="public-speaking" className="scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 mb-8 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Mic2 size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Public Speaking &amp; Master of Ceremony</h2>
              <p className="text-xs text-slate-500 font-medium">Keterampilan vokal, artikulasi formal, dan pemanduan panggung adaptif</p>
            </div>
          </div>
          <span className="text-xs font-bold text-purple-800 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
            MC Formal &amp; Semi-Formal
          </span>
        </div>

        {/* 3 Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {speaking.scopes.map((scope, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs mb-3">
                  {getScopeIcon(scope.category)}
                </div>
                <h3 className="font-extrabold text-base text-slate-950">{scope.category}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {scope.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <Sparkles size={13} className="text-amber-500" />
                <span>Terbiasa Tanpa Teks &bull; Spontan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        {speaking.images && speaking.images.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Dokumentasi Penampilan di Atas Panggung:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {speaking.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group relative shadow-2xs"
                >
                  <img
                    src={img}
                    alt={`Public Speaking ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5 text-white text-[11px] font-semibold">
                    Live Event MC
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

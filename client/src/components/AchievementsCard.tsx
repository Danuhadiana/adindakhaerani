import { Trophy, Award, Medal, GraduationCap, Star } from 'lucide-react'
import type { Achievement } from '../types'

interface AchievementsCardProps {
  achievements: Achievement[]
  images: string[]
}

export function AchievementsCard({ achievements, images }: AchievementsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-5">
        <h2 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
          <Trophy size={20} className="text-zinc-800" />
          Prestasi & Penghargaan
        </h2>
        <span className="text-xs text-zinc-500 font-mono">Akademik & Non-Akademik</span>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        {achievements.map((item, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-xl border transition-all ${
              item.highlight 
                ? 'bg-zinc-900 border-zinc-900 text-white shadow-sm' 
                : 'bg-zinc-50 border-zinc-200 text-zinc-900 hover:border-zinc-300'
            }`}
          >
            <div className="flex items-start gap-3.5">
              <div 
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  item.highlight 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : 'bg-white text-zinc-800 border border-zinc-200 shadow-xs'
                }`}
              >
                {item.highlight ? (
                  <Star size={18} className="fill-white/20" />
                ) : idx === 1 ? (
                  <Trophy size={18} />
                ) : idx === 2 ? (
                  <Award size={18} />
                ) : idx === 5 ? (
                  <GraduationCap size={18} />
                ) : (
                  <Medal size={18} />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className={`text-sm sm:text-base font-bold ${item.highlight ? 'text-white' : 'text-zinc-950'}`}>
                    {item.title}
                  </h3>
                  {item.year && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.highlight ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'
                    }`}>
                      {item.year}
                    </span>
                  )}
                </div>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${item.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Gallery with Monokrom style */}
      {images && images.length > 0 && (
        <div>
          <p className="text-xs font-medium text-zinc-500 mb-2">Dokumentasi Penghargaan & Kompetisi:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100 group"
              >
                <img 
                  src={img} 
                  alt={`Prestasi ${idx + 1}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

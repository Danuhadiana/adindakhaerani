import { Target, Compass } from 'lucide-react'
import type { About } from '../types'

interface AboutCardProps {
  about: About
}

export function AboutCard({ about }: AboutCardProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-4">
        <h2 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
          <Compass size={20} className="text-zinc-800" />
          Tentang Profil
        </h2>
        <span className="text-xs text-zinc-400 font-mono">Biologi UIN Jakarta</span>
      </div>

      <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-line">
        {about.text}
      </p>

      <div className="mt-6 pt-5 border-t border-zinc-100">
        <h3 className="text-sm font-semibold text-zinc-900 mb-3 flex items-center gap-2">
          <Target size={16} className="text-zinc-700" />
          Fokus & Prioritas Saat Ini
        </h3>

        <div className="grid grid-cols-1 gap-2.5">
          {about.focus.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-zinc-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

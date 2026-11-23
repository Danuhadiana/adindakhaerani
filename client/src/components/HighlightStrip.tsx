import { Award, FileCheck2, Stethoscope, Mic2 } from 'lucide-react'
import type { Highlight } from '../types'

const iconMap = [Award, FileCheck2, Stethoscope, Mic2]

interface HighlightStripProps {
  highlights: Highlight[]
}

export function HighlightStrip({ highlights }: HighlightStripProps) {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {highlights.map((h, i) => {
        const IconComponent = iconMap[i % iconMap.length]
        return (
          <div 
            key={i} 
            className="bg-white rounded-xl border border-zinc-200 p-3.5 flex items-center gap-3 hover:border-zinc-400 transition-all shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200">
              <IconComponent size={20} className="text-zinc-800" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-zinc-950 truncate">{h.label}</p>
              <p className="text-xs text-zinc-500 truncate">{h.detail}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

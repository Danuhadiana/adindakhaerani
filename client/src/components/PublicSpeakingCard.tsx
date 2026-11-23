import { Mic, Radio, Sparkles } from 'lucide-react'
import type { PublicSpeaking } from '../types'

interface PublicSpeakingCardProps {
  speaking: PublicSpeaking
}

export function PublicSpeakingCard({ speaking }: PublicSpeakingCardProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-5">
        <h2 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
          <Mic size={20} className="text-zinc-800" />
          Public Speaking & MC
        </h2>
        <span className="text-xs text-zinc-500 font-mono">Master of Ceremony</span>
      </div>

      <p className="text-xs sm:text-sm text-zinc-600 mb-5 leading-relaxed">
        Aktif dan berpengalaman sebagai pemandu acara formal maupun semi-formal, dengan artikulasi yang lugas, pembawaan tenang, dan kemampuan adaptasi situasi panggung secara spontan.
      </p>

      {/* Scopes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {speaking.scopes.map((scope, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-zinc-200 text-zinc-800">
                  {idx === 2 ? <Sparkles size={14} /> : <Radio size={14} />}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950">
                  {scope.category}
                </h3>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                {scope.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Gallery */}
      {speaking.images && speaking.images.length > 0 && (
        <div>
          <p className="text-xs font-medium text-zinc-500 mb-2">Dokumentasi Memandu Acara (MC):</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {speaking.images.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100 group"
              >
                <img 
                  src={img} 
                  alt={`Dokumentasi MC ${idx + 1}`} 
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

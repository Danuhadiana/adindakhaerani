import type { PublicSpeaking } from '../types'

interface PublicSpeakingSectionProps {
  speaking: PublicSpeaking
}

export function PublicSpeakingSection({ speaking }: PublicSpeakingSectionProps) {
  return (
    <section id="public-speaking" className="py-8 sm:py-12 border-b border-zinc-200/80 scroll-mt-16 sm:scroll-mt-20">
      <h2 className="text-xl font-bold text-zinc-950 tracking-tight mb-2">
        {speaking.title}
      </h2>
      <p className="text-xs text-zinc-500 mb-8">
        Pengalaman memandu acara formal, perlombaan, dan forum publik
      </p>

      <div className="space-y-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {speaking.scopes.map((scope, i) => (
            <div key={i} className="p-4 rounded-xl border border-zinc-200 bg-white">
              <h3 className="font-bold text-sm text-zinc-900 mb-1.5">{scope.category}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{scope.description}</p>
            </div>
          ))}
        </div>

        {/* Photos */}
        {speaking.images && speaking.images.length > 0 && (
          <div className="pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {speaking.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100"
                >
                  <img
                    src={img}
                    alt={`Public Speaking ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
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

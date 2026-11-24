import type { Achievement } from '../types'

interface AchievementsSectionProps {
  achievements: Achievement[]
  images: string[]
}

export function AchievementsSection({ achievements, images }: AchievementsSectionProps) {
  return (
    <section id="prestasi" className="py-8 sm:py-12 border-b border-zinc-200/80 scroll-mt-16 sm:scroll-mt-20">
      <h2 className="text-xl font-bold text-zinc-950 tracking-tight mb-8">
        Prestasi &amp; Penghargaan
      </h2>

      <div className="space-y-6 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                item.highlight
                  ? 'border-zinc-300 bg-zinc-50/50'
                  : 'border-zinc-200 bg-white'
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-bold text-sm text-zinc-900 leading-snug">
                  {item.title}
                </h3>
                {item.year && (
                  <span className="text-[11px] text-zinc-400 font-mono shrink-0">
                    {item.year}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Photos */}
        {images && images.length > 0 && (
          <div className="pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100"
                >
                  <img
                    src={img}
                    alt={`Prestasi ${i + 1}`}
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

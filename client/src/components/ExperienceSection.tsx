import type { Experience } from '../types'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="pengalaman" className="py-12 border-b border-zinc-200/80 scroll-mt-20">
      <h2 className="text-xl font-bold text-zinc-950 tracking-tight mb-8">
        Pengalaman Kerja &amp; Praktik
      </h2>

      <div className="space-y-10 max-w-3xl">
        {experiences.map((exp, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-base font-bold text-zinc-900">
                {exp.company}
              </h3>
              <span className="text-xs text-zinc-500 font-normal">
                Praktik Kerja Lapangan &bull; Jawa Barat
              </span>
            </div>

            <p className="text-xs font-semibold text-zinc-800">
              {exp.role}
            </p>

            <ul className="space-y-1.5 text-sm text-zinc-600">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-zinc-500 italic pt-1">
              Hasil: "{exp.result}"
            </p>

            {/* Photos */}
            {exp.images && exp.images.length > 0 && (
              <div className="pt-2">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {exp.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100"
                    >
                      <img
                        src={img}
                        alt={`${exp.company} ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

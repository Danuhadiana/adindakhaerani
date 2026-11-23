import { Briefcase, CheckCircle2, Building2, MapPin } from 'lucide-react'
import type { Experience } from '../types'

interface ExperienceCardProps {
  experiences: Experience[]
}

export function ExperienceCard({ experiences }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-6">
        <h2 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
          <Briefcase size={20} className="text-zinc-800" />
          Pengalaman Kerja & Magang
        </h2>
        <span className="text-xs text-zinc-500 font-mono">Farmasi & QA</span>
      </div>

      <div className="relative">
        {/* Continuous timeline line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-zinc-200" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12">
              {/* Timeline icon indicator */}
              <div className="absolute left-0 top-0.5 w-[38px] h-[38px] rounded-full bg-zinc-900 border-4 border-white flex items-center justify-center z-10 shadow-sm">
                <Building2 size={16} className="text-white" />
              </div>

              {/* Experience header */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  {exp.company}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-700 mt-0.5">
                  {exp.role}
                </p>
                <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1">
                  <MapPin size={12} /> Jawa Barat, Indonesia • Praktik Kerja Lapangan
                </p>

                {/* Bullets */}
                <ul className="mt-3.5 space-y-2">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600">
                      <CheckCircle2 size={15} className="text-zinc-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Outcome badge */}
                <div className="mt-4 p-3 bg-zinc-50 rounded-lg border border-zinc-200 text-xs sm:text-sm">
                  <span className="font-semibold text-zinc-900 block mb-0.5">Hasil Pembelajaran:</span>
                  <p className="text-zinc-600 italic">"{exp.result}"</p>
                </div>

                {/* Photo Gallery with Monokrom subtle hover */}
                {exp.images && exp.images.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium text-zinc-500 mb-2">Dokumentasi Kegiatan:</p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {exp.images.map((img, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100 group relative"
                        >
                          <img 
                            src={img} 
                            alt={`${exp.company} dokumentasi ${imgIdx + 1}`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-105" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

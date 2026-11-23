import { Users2, Award, Calendar, ChevronRight } from 'lucide-react'
import type { Organization } from '../types'

interface OrganizationCardProps {
  organizations: Organization[]
  roles: string[]
  images: string[]
}

export function OrganizationCard({ organizations, roles, images }: OrganizationCardProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-5">
        <h2 className="text-lg font-bold text-zinc-950 flex items-center gap-2">
          <Users2 size={20} className="text-zinc-800" />
          Kepemimpinan & Organisasi
        </h2>
        <span className="text-xs text-zinc-500 font-mono">OSIS & Paskibra</span>
      </div>

      {/* Position Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {organizations.map((org, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center mb-3">
                <Award size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-950 leading-snug">
                {org.title}
              </h3>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500">
              <Calendar size={13} />
              <span>{org.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Key Roles */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-zinc-900 mb-3">
          Tanggung Jawab & Peran Utama:
        </h3>
        <div className="space-y-2">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 bg-zinc-50/70 p-2.5 rounded-lg border border-zinc-100"
            >
              <ChevronRight size={15} className="text-zinc-500 mt-0.5 shrink-0" />
              <span>{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery with Grayscale effect */}
      {images && images.length > 0 && (
        <div>
          <p className="text-xs font-medium text-zinc-500 mb-2">Dokumentasi Organisasi & Lapangan:</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100 group"
              >
                <img 
                  src={img} 
                  alt={`Organisasi ${idx + 1}`} 
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

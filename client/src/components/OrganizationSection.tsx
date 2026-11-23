import { Users2, Shield, Calendar, CheckCircle2 } from 'lucide-react'
import type { Organization } from '../types'

interface OrganizationSectionProps {
  organizations: Organization[]
  roles: string[]
  images: string[]
}

export function OrganizationSection({ organizations, roles, images }: OrganizationSectionProps) {
  return (
    <section id="organisasi" className="scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 mb-8 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Users2 size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-950">Kepemimpinan &amp; Organisasi</h2>
              <p className="text-xs text-slate-500 font-medium">Rekam jejak manajerial, persuratan proposal, dan koordinasi kepanitiaan</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            3 Jabatan Kepengurusan
          </span>
        </div>

        {/* 3 Leadership Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {organizations.map((org, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs">
                    <Shield size={18} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                    <Calendar size={12} />
                    {org.period}
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-slate-950">{org.title}</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">SMKN 15 Kota Bekasi</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Tuntas Masa Bakti</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsibilities & Achievements in Roles */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
            Tanggung Jawab &amp; Kontribusi Nyata:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {roles.map((r, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                <span className="leading-snug font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery of Leadership Photos */}
        {images && images.length > 0 && (
          <div className="mt-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Dokumentasi Kegiatan &amp; Kepanitiaan:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group relative"
                >
                  <img
                    src={img}
                    alt={`Kegiatan Organisasi ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

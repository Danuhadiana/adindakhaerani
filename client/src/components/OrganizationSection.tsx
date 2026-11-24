import type { Organization } from '../types'

interface OrganizationSectionProps {
  organizations: Organization[]
  roles: string[]
  images: string[]
}

export function OrganizationSection({ organizations, roles, images }: OrganizationSectionProps) {
  return (
    <section id="organisasi" className="py-8 sm:py-12 border-b border-zinc-200/80 scroll-mt-16 sm:scroll-mt-20">
      <h2 className="text-xl font-bold text-zinc-950 tracking-tight mb-8">
        Organisasi &amp; Kepemimpinan
      </h2>

      <div className="space-y-6 max-w-3xl">
        {/* Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {organizations.map((org, i) => (
            <div key={i} className="p-4 rounded-xl border border-zinc-200 bg-white">
              <span className="text-xs text-zinc-400 font-mono block mb-1">
                {org.period}
              </span>
              <h3 className="font-bold text-sm text-zinc-900">{org.title}</h3>
              <p className="text-xs text-zinc-500 mt-0.5">SMKN 15 Kota Bekasi</p>
            </div>
          ))}
        </div>

        {/* Responsibilities */}
        <div className="pt-2">
          <ul className="space-y-2 text-sm text-zinc-600">
            {roles.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0"></span>
                <span className="leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photos */}
        {images && images.length > 0 && (
          <div className="pt-2">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100"
                >
                  <img
                    src={img}
                    alt={`Organisasi ${i + 1}`}
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

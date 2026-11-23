interface SectionTabsProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

const tabs = [
  { id: 'all', label: 'Semua Profil' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'organisasi', label: 'Organisasi' },
  { id: 'public-speaking', label: 'Public Speaking' },
  { id: 'prestasi', label: 'Prestasi' },
]

export function SectionTabs({ activeTab, onTabChange }: SectionTabsProps) {
  return (
    <div className="sticky top-16 z-30 py-3 bg-[#FAFBFD]/95 backdrop-blur-md mb-8">
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

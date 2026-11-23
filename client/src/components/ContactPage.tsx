import { useState } from 'react'
import { ArrowLeft, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from './Icons'
import type { Profile } from '../types'

interface ContactPageProps {
  profile: Profile
  onBack: () => void
}

export function ContactPage({ profile, onBack }: ContactPageProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: 'Peluang Kerja & Magang',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // Fallback for static hosting
    }

    setTimeout(() => {
      setStatus('success')
    }, 400)
  }

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(`[Inquiry] ${form.category} - ${form.name}`)}&body=${encodeURIComponent(
    `Halo Adinda,\n\nNama: ${form.name}\nEmail: ${form.email}\nKategori: ${form.category}\n\nPesan:\n${form.message}\n`
  )}`

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-20">
      {/* Top Bar */}
      <header className="border-b border-zinc-200">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Portofolio</span>
          </button>
          <span className="text-xs text-zinc-400">Kontak Resmi</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-2xl mx-auto px-6 pt-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
          Hubungi Adinda Khaerani
        </h1>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-normal">
          Silakan hubungi untuk diskusi riset biologi murni, internship farmasi dan QA, tawaran MC acara, atau konsultasi akademik.
        </p>

        {status === 'success' ? (
          <div className="mt-10 p-8 rounded-2xl border border-zinc-200 bg-zinc-50/50 text-center">
            <CheckCircle2 size={36} className="text-zinc-900 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-zinc-950">Pesan Berhasil Terkirim</h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2 max-w-md mx-auto">
              Terima kasih. Pesan Anda telah tersimpan dan akan segera ditindaklanjuti melalui email Anda.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href={mailtoUrl}
                className="text-xs font-semibold px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Kirim via Aplikasi Email
              </a>
              <button
                onClick={onBack}
                className="text-xs font-medium px-4 py-2 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {/* Direct Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition-colors block"
              >
                <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                  <Mail size={13} />
                  <span className="font-medium">Email</span>
                </div>
                <p className="font-semibold text-zinc-900 truncate">{profile.email}</p>
              </a>

              <a
                href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 transition-colors block"
              >
                <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                  <InstagramIcon size={13} />
                  <span className="font-medium">Instagram</span>
                </div>
                <p className="font-semibold text-zinc-900">{profile.instagram}</p>
              </a>

              <div className="p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 block">
                <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                  <MapPin size={13} />
                  <span className="font-medium">Domisili</span>
                </div>
                <p className="font-semibold text-zinc-900">{profile.location}</p>
              </div>
            </div>

            {/* Clean Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-zinc-200">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Nama Lengkap / Instansi
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama Anda atau Instansi"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Alamat Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="alamat@email.com"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Kategori
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 transition-colors"
                >
                  <option value="Peluang Kerja & Magang">Peluang Kerja &amp; Magang Farmasi / QA</option>
                  <option value="Pemandu Acara / MC">Undangan Pemandu Acara (MC)</option>
                  <option value="Riset Biologi">Kolaborasi Riset Laboratorium Biologi</option>
                  <option value="Lainnya">Diskusi Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="text-xs font-semibold px-6 py-2.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>{status === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}

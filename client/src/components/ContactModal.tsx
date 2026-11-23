import { useState } from 'react'
import { X, Send, CheckCircle2, AlertCircle, Mail, User, MessageSquare } from 'lucide-react'

interface ContactModalProps {
  onClose: () => void
}

export function ContactModal({ onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Terjadi kesalahan saat mengirim pesan.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Tidak dapat terhubung ke server. Pastikan backend aktif.')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl border border-zinc-200 max-w-lg w-full p-6 sm:p-7 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          aria-label="Tutup modal"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-200">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-lg font-bold text-zinc-950">Pesan Berhasil Terkirim!</h3>
            <p className="text-sm text-zinc-600 mt-2 max-w-sm mx-auto">
              Terima kasih telah menghubungi Adinda Khaerani. Pesan Anda telah diterima dan akan segera direspons.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors"
            >
              Tutup Jendela
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-zinc-950">Hubungi Adinda Khaerani</h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Kirim pesan langsung untuk diskusi riset, kolaborasi acara, MC, atau peluang kerja.
              </p>
            </div>

            {status === 'error' && (
              <div className="mb-4 p-3 bg-zinc-100 border border-zinc-300 rounded-lg flex items-center gap-2 text-xs text-zinc-900">
                <AlertCircle size={16} className="text-zinc-700 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-2.5 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-2.5 text-zinc-400" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="contoh@domain.com"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Pesan / Tawaran Kerjasama
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-2.5 text-zinc-400" />
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tuliskan pesan Anda secara detail..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-zinc-200 text-zinc-700 text-sm font-medium rounded-full hover:bg-zinc-100 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-5 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 disabled:opacity-50 transition-colors flex items-center gap-1.5"
                >
                  <Send size={14} />
                  <span>{status === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

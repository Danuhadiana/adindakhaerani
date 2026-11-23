# Portofolio Profesional — Adinda Khaerani

Aplikasi web portofolio profesional bergaya **LinkedIn Profile** dengan tema estetika **Monokrom Minimalis** (Zinc-100, Pure White, Zinc-950, 1px border tipis), responsif untuk Desktop dan Mobile. Dibuat berdasarkan isi lampiran dokumen `PORTFOLIO PPT ADINDA.pdf`.

---

## 🛠️ Tech Stack & Arsitektur

- **Frontend (`/client`):**
  - **React 19 + TypeScript**
  - **Vite**
  - **Tailwind CSS v4**
  - **Lucide React** (Ikon antarmuka profesional)
  - Desain Monokrom ketat dengan efek foto dokumentasi *subtle grayscale* (`grayscale hover:grayscale-0 transition duration-300`)
  - Responsif: Desktop 2 kolom (`8:4`) & Mobile 1 kolom vertikal

- **Backend (`/server`):**
  - **Node.js + Express**
  - REST API `GET /api/portfolio`: Menyajikan data terstruktur profil, pengalaman, kepemimpinan, public speaking, dan prestasi.
  - REST API `POST /api/contact`: Endpoint pesan/kolaborasi dengan validasi formulir dan format email.
  - Dukungan static file serving untuk deployment produksi.

- **Orkestrasi Root (`/package.json`):**
  - Menjalankan client dan server secara bersamaan dengan `concurrently`.

---

## 🚀 Cara Menjalankan Proyek

### 1. Mode Development (Jalankan Sekaligus)
Di direktori root project (`c:\laragon\www\adindakhaerani`):

```bash
npm run dev
```

Perintah di atas akan menjalankan:
- **Backend API Server**: `http://localhost:5000`
- **Frontend Vite Client**: `http://localhost:3000` (dengan reverse-proxy ke `/api`)

### 2. Menjalankan Terpisah (Opsional)
- **Backend Server:**
  ```bash
  cd server
  npm run dev
  ```
- **Frontend Client:**
  ```bash
  cd client
  npm run dev
  ```

### 3. Build & Production Run
```bash
# Build frontend
npm run build

# Jalankan server production (otomatis melayani build client)
npm start
```

---

## 📁 Struktur Direktori

```
adindakhaerani/
├── client/
│   ├── public/
│   │   ├── images/               # Foto dokumentasi hasil ekstraksi dari PDF
│   │   └── PORTFOLIO_PPT_ADINDA.pdf # Berkas PDF asli untuk unduhan
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx        # Sticky header dengan menu navigasi & CTA Hubungi
│   │   │   ├── HeroCard.tsx      # Banner grid geometris, overlapping avatar, headline, & action bar
│   │   │   ├── HighlightStrip.tsx# 4 badge kartu ringkas capaian kunci
│   │   │   ├── AboutCard.tsx     # Profil ringkas & 3 fokus keilmuan Biologi UIN
│   │   │   ├── ExperienceCard.tsx# Timeline pengalaman QA CPOB & Farmasi Intern
│   │   │   ├── OrganizationCard.tsx # Rekam jejak OSIS & Paskibra
│   │   │   ├── PublicSpeakingCard.tsx # Ruang lingkup Master of Ceremony
│   │   │   ├── AchievementsCard.tsx # Prestasi akademik (Lulusan Terbaik) & kompetisi
│   │   │   ├── ContactModal.tsx  # Modal formulir interaktif kirim pesan
│   │   │   ├── Sidebar.tsx       # Kolom samping info kontak, pendidikan, kompetensi
│   │   │   └── Footer.tsx        # Footer monokrom minimalis
│   │   ├── App.tsx
│   │   ├── index.css             # Tema monokrom (#F4F4F5, #FFFFFF, #09090B)
│   │   └── types.ts              # Definisi interface TypeScript
│   └── vite.config.ts            # Proxy ke backend port 5000
├── server/
│   ├── data/
│   │   └── portfolio.json        # Data portofolio terstruktur
│   ├── index.js                  # Express server & API routes
│   └── package.json
└── package.json                  # Root runner script
```

# 🍕 Pizzalongan — Landing Page

> Pizza Panjang Pekalongan · Cara baru makan Pizza, rasa nikmat tiada tara

Landing page modern untuk **Pizzalongan** — dibangun dengan Next.js 15, Tailwind CSS, dan Framer Motion.

---

## ✨ Fitur

- **Hero section** dengan animasi pizza berputar + floating badge Halal
- **Marquee ticker** berjalan otomatis
- **Menu section** — 6 varian pizza dengan kartu interaktif
- **Keunggulan section** — dark-theme dengan 6 fitur
- **Outlet section** — 3 lokasi dengan link Google Maps
- **Order/CTA section** — tombol WhatsApp + semua social media
- **Footer** minimalis

---

## Tech Stack

| Tool | Keterangan |
|------|------------|
| Next.js 16 | App Router, TypeScript |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animasi scroll & hover |
| Lucide React | Icon library |

---

## 🚀 Deploy ke Vercel (Gratis)

### Cara 1 — Via GitHub (Disarankan)

1. Push ke GitHub:
   git init
   git add .
   git commit -m "feat: Pizzalongan landing page"
   git remote add origin https://github.com/USERNAME/pizzalongan.git
   git push -u origin main

2. Buka vercel.com -> Login -> "Add New Project" -> Import repo -> Deploy

### Cara 2 — Via Vercel CLI

   npm install -g vercel
   vercel login
   vercel --prod

---

## 💻 Jalankan Lokal

   npm install
   npm run dev
   # Buka http://localhost:3000

---

## 📁 Struktur Project

   pizzalongan/
   ├── app/
   │   ├── globals.css       # CSS variables, animations
   │   ├── layout.tsx        # Root layout + SEO metadata
   │   └── page.tsx          # Halaman utama
   ├── components/
   │   ├── Navbar.tsx        # Navigasi sticky
   │   ├── Hero.tsx          # Hero + animasi pizza
   │   ├── Marquee.tsx       # Ticker berjalan
   │   ├── MenuSection.tsx   # 6 varian menu
   │   ├── Features.tsx      # Keunggulan
   │   ├── Outlets.tsx       # 3 lokasi outlet
   │   ├── OrderSection.tsx  # CTA WhatsApp
   │   └── Footer.tsx        # Footer
   └── vercel.json

---

## 🎨 Kustomisasi

Ganti nomor WA di Navbar.tsx, Hero.tsx, OrderSection.tsx:
  https://wa.me/62816413468  ->  https://wa.me/62NOMORBARU

Ganti warna di app/globals.css:
  --red: #C8272D
  --green: #1A5C2C
  --gold: #D4A017

---

Made with love for Pizzalongan 🍕

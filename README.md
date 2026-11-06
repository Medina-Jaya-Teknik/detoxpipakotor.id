# detoxpipakotor.id — Platform Jasa Detox Pipa Kotor & Saluran Mampet Bandung

Website resmi **detoxpipakotor.id**, penyedia spesialis layanan detox pipa air kotor, cuci pipa air bersih tanpa kimia, pelancaran saluran pipa mampet (wastafel, floor drain, WC, got) tanpa bongkar keramik, inspeksi kamera endoskop HD, dan deteksi pipa bocor di Bandung Raya.

## 🛠️ Stack & Arsitektur
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- **Data Terpusat**: Seluruh konfigurasi NAP, daftar wilayah, dan spesifikasi layanan dipusatkan di `config/site.ts`.
- **Programmatic Local SEO Engine**: Dynamic route `app/kota/[area]/page.tsx` untuk 18 kecamatan target di Bandung Raya lengkap dengan schema graph (LocalBusiness, Product, Breadcrumb, FAQPage).
- **Rich Results / JSON-LD**:
  - Global LocalBusiness & WebSite schema di `app/layout.tsx`
  - Area LocalBusiness + Product + Breadcrumb + FAQ schema di `app/kota/[area]/page.tsx`
  - Article Schema di `app/blog/[slug]/page.tsx`
  - Product Service review schema di `app/page.tsx` & `app/layanan/page.tsx`
- **Indexing Otomatis**:
  - Dynamic XML Sitemap generator di `app/sitemap.ts`
  - IndexNow post-build automation di `scripts/indexnow.js`
  - SEO Master bot scheduler di `scripts/seo-bot.js` & `.github/workflows/seo-scheduler.yml`

## 🚀 Perintah Cepat
```bash
# Menjalankan development server
npm run dev

# Membangun project production + auto IndexNow submission
npm run build

# Menjalankan bot monitoring SEO
npm run seo-bot
npm run seo-test
```

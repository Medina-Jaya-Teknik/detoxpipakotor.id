import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaArrowRight,
  FaWater,
  FaBroom,
  FaSink,
  FaTint,
} from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Jasa Detox Pipa Kotor Bandung Terdekat - Cuci Pipa Air Bersih",
  },
  description:
    "Jasa detox pipa kotor Bandung terdekat, cuci pipa air bersih tanpa bongkar & tanpa zat kimia korosif. Bersih tuntas. Hubungi ☎️ 0851-2277-7253.",
  keywords: [
    "jasa detox pipa kotor bandung",
    "detox pipa kotor bandung",
    "cuci pipa air bersih bandung",
    "pembersihan pipa kotor bandung",
    "jasa pembersih pipa kotor bandung",
    "pipa air kuning berkarat",
    "cuci pipa toren bandung",
    "biaya detox pipa bandung",
    "jasa saluran pipa air bandung",
  ],
  alternates: {
    canonical: `${siteConfig.domain}/layanan/detox-pipa-kotor-bandung`,
  },
  openGraph: {
    title: "Jasa Detox Pipa Kotor Bandung Terdekat - Cuci Pipa Air Bersih",
    description:
      "Jasa detox pipa kotor Bandung terdekat, cuci pipa air bersih tanpa bongkar & tanpa zat kimia korosif. Bersih tuntas. Hubungi ☎️ 0851-2277-7253.",
    url: `${siteConfig.domain}/layanan/detox-pipa-kotor-bandung`,
    siteName: siteConfig.brandName,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/images/detox-pipa-kotor-hero.png`,
        width: 850,
        height: 850,
        alt: `${siteConfig.brandName} - Jasa Detox Pipa Kotor Bandung`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Detox Pipa Kotor Bandung Terdekat 24 Jam",
    description:
      "Jasa cuci detox pipa kotor Bandung tanpa bongkar & aman tanpa bahan kimia korosif. Hubungi ☎️ 0851-2277-7253.",
    images: [`${siteConfig.domain}/images/detox-pipa-kotor-hero.png`],
  },
};

export default function DetoxPipaKotorBandungPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteConfig.domain}/layanan/detox-pipa-kotor-bandung#plumber`,
    name: `${siteConfig.brandName} - Jasa Detox Pipa Kotor Bandung`,
    alternateName: "Jasa Cuci Pipa Air Bersih Bandung",
    description:
      "Layanan profesional detox pencucian pipa saluran air bersih dan pembuangan di Bandung tanpa bongkar keramik, membersihkan lumut, karat pipa, dan kerak lemak membandel.",
    url: `${siteConfig.domain}/layanan/detox-pipa-kotor-bandung`,
    telephone: siteConfig.phoneRaw,
    priceRange: "Rp150.000 - Rp450.000",
    image: `${siteConfig.domain}/images/detox-pipa-kotor-hero.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    areaServed: siteConfig.areas.map((a) => ({
      "@type": "AdministrativeArea",
      name: `${a.name}, Bandung`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "172",
      bestRating: "5",
    },
  };

  const faqs = [
    {
      question: "Apa itu jasa detox pipa kotor?",
      answer:
        "Detox pipa kotor adalah proses pembersihan intensif bagian dalam pipa saluran air bersih maupun air buangan menggunakan mesin khusus (hydro pressure flushing dan sikat spiral). Metode ini merontokkan kerak lumut, endapan zat kapur, lumpur, dan karat yang menempel di dinding pipa tanpa perlu membongkar keramik lantai atau dinding rumah.",
    },
    {
      question: "Kapan instalasi pipa air di rumah perlu di-detox?",
      answer:
        "Tanda utama pipa perlu di-detox antara lain: air keran mulai keruh kekuningan atau kecokelatan, air berbau karat/lumpur, debit air keran mengecil meskipun pompa normal, serta wastafel atau kamar mandi sering mampet berulang akibat tumpukan kerak kotoran lama.",
    },
    {
      question: "Apakah metode detox pipa ini menggunakan bahan kimia berbahaya?",
      answer:
        "Tidak sama sekali! Kami tidak menggunakan bahan kimia keras seperti asam korosif atau soda api yang bisa merusak sambungan lem dan memecahkan pipa PVC. Kami menggunakan metode mekanis murni dan tekanan air terukur yang 100% aman bagi pipa lama maupun baru.",
    },
    {
      question: "Berapa lama proses pengerjaan detox pipa di lokasi?",
      answer:
        "Untuk rumah tinggal standar 1-2 lantai, pengerjaan biasanya memakan waktu 1,5 hingga 3 jam tergantung panjang instalasi pipa dan tingkat ketebalan kerak kotoran yang menempel.",
    },
    {
      question: "Berapa biaya jasa detox pipa kotor di Bandung?",
      answer:
        "Biaya jasa detox pipa mulai dari Rp450.000 untuk paket pembersihan jalur pipa air bersih rumah tinggal, dan mulai Rp150.000 untuk pelancaran titik pipa mampet. Seluruh estimasi disampaikan transparan di awal dengan sistem garansi lancar.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Layanan", url: "/layanan" },
    { name: "Detox Pipa Kotor Bandung", url: "/layanan/detox-pipa-kotor-bandung" },
  ]);

  const bookingWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Halo DetoxPipaKotor.id, saya ingin konsultasi dan pesan jasa detox pipa kotor di Bandung."
  )}`;

  const detoxBenefits = [
    {
      title: "Rontokkan Kerak & Endapan Lumut",
      desc: "Menghilangkan lapisan lendir biofilm, endapan zat kapur, dan lumut yang mengendap di dalam dinding pipa PVC bertahun-tahun.",
      icon: <FaWater className="text-2xl text-cyan-600" />,
    },
    {
      title: "Air Keran Kembali Jernih & Segar",
      desc: "Menghilangkan aroma bau besi, karat, atau bau busuk dari keran dapur dan shower mandi sehingga air kembali higienis.",
      icon: <FaTint className="text-2xl text-blue-600" />,
    },
    {
      title: "Debit Aliran Air Kembali Deras",
      desc: "Pipa yang bersih dari sumbatan kerak mengembalikan diameter pipa secara maksimal sehingga aliran air keran mengalir deras.",
      icon: <FaBroom className="text-2xl text-emerald-600" />,
    },
    {
      title: "100% Aman Tanpa Bongkar Keramik",
      desc: "Seluruh pengerjaan dilakukan melalui titik kran air dan bak kontrol tanpa perlu membongkar lantai atau merusak dinding rumah.",
      icon: <FaShieldAlt className="text-2xl text-emerald-600" />,
    },
  ];

  return (
    <>
      {/* Schema Markup JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-cyan-400 transition">Beranda</Link>
            <span>/</span>
            <Link href="/layanan" className="hover:text-cyan-400 transition">Layanan</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">Detox Pipa Kotor Bandung</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wide uppercase mb-4">
              <FaClock className="text-cyan-400 animate-pulse" />
              <span>Respon Cepat 24 Jam • Bandung Raya & Cimahi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5">
              Jasa Detox Pipa Kotor Bandung Terdekat & Cuci Pipa Air Bersih
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Pembersihan tuntas pipa saluran air bersih, toren, dan pembuangan dari kerak lumut, endapan lumpur, karat, serta lemak membandel. Dikerjakan <span className="text-cyan-400 font-bold">100% tanpa bongkar keramik</span> dan bebas bahan kimia korosif perusak pipa PVC.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={bookingWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-base shadow-lg shadow-cyan-500/25 transition active:scale-95"
              >
                <FaWhatsapp className="text-xl" />
                <span>Konsultasi & Jadwal via WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition"
              >
                <FaPhoneAlt className="text-cyan-400 text-sm" />
                <span>Telepon: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Tanpa Bongkar Keramik</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Tanpa Asam Kimia Bahaya</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Air Kembali Bening</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Garansi Tuntas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Mengapa Pipa Air di Rumah Anda Wajib Di-Detox?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Pipa yang tertanam di balik dinding selama bertahun-tahun menampung tumpukan endapan kotoran yang menurunkan kualitas air keluarga Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detoxBenefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400 hover:shadow-md transition group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Chemicals Section */}
      <section className="py-16 bg-amber-50/60 border-y border-amber-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 text-3xl shadow-lg shadow-amber-500/20">
              <FaTools />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-900 mb-1">
                <FaExclamationTriangle className="text-amber-600" />
                <span>Peringatan Keamanan Instalasi Pipa</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Bahaya Soda Api & Bahan Kimia untuk Pipa Air Bersih
              </h2>
              <p className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                Penggunaan zat kimia keras seperti soda api pada pipa air bersih sangat berbahaya. Reaksi panasnya dapat <strong>melunakkan lem PVC hingga bocor rembes ke tembok</strong>, dan sisa bahan kimia beracun sulit dinetralkan sehingga mencemari air mandi dan cuci piring.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-amber-300 shadow-sm">
                  ✔ Hydro Flushing Mekanis 100% Bebas Racun Kimia
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-amber-300 shadow-sm">
                  ✔ Aman untuk Pipa Toren & Saluran Konsumsi Rumah Tangga
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <FaMapMarkerAlt className="text-cyan-600" />
              <span>Wilayah Operasional Bandung</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Pangkalan Teknisi Detox Pipa di Seluruh Kota Bandung
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Siap melayani rumah tinggal, ruko, cafe, restoran, dan hotel di seluruh kecamatan Bandung Raya.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {siteConfig.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/kota/${area.slug}`}
                className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/40 transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-cyan-700 group-hover:underline block">
                    Kecamatan
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-cyan-700 transition mt-0.5">
                    {area.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                    {area.landmark || "Bandung"}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 group-hover:text-cyan-600 font-semibold mt-3 flex items-center gap-1">
                  <span>Lihat Area Pos</span>
                  <FaArrowRight className="text-[9px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Pertanyaan Umum Seputar Jasa Detox Pipa Kotor Bandung
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Informasi lengkap seputar metode, keamanan pipa, dan tarif layanan DetoxPipaKotor.id.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}

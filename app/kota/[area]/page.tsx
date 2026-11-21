import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { generateAreaPageGraphSchema } from "@/lib/schema";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaShieldAlt,
  FaTools,
  FaBroom,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

interface AreaPageProps {
  params: Promise<{
    area: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.areas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const areaData = siteConfig.areas.find((a) => a.slug === resolvedParams.area);

  if (!areaData) {
    return {
      title: "Area Tidak Ditemukan",
    };
  }

  const areaTitle = `Jasa Detox Pipa Kotor ${areaData.name} Bandung Terdekat 24 Jam`;
  const areaDesc = `Jasa cuci detox pipa kotor ${areaData.name} Bandung & pelancar saluran air tanpa bongkar. Pipa higienis bergaransi. Hubungi ☎️ 0851-2277-7253.`;

  return {
    title: {
      absolute: areaTitle,
    },
    description: areaDesc,
    keywords: [
      `jasa saluran mampet ${areaData.name.toLowerCase()}`,
      `pelancar wc mampet ${areaData.name.toLowerCase()}`,
      `detox pipa ${areaData.name.toLowerCase()}`,
      `cuci pipa air bersih ${areaData.name.toLowerCase()}`,
      `saluran wastafel mampet ${areaData.name.toLowerCase()}`,
      `ahli pipa mampet ${areaData.name.toLowerCase()}`,
      `biaya pelancar pipa ${areaData.name.toLowerCase()}`,
      `pembersihan pipa kotor ${areaData.name.toLowerCase()}`,
    ],
    alternates: {
      canonical: `${siteConfig.domain}/kota/${areaData.slug}`,
    },
    openGraph: {
      title: areaTitle,
      description: areaDesc,
      url: `${siteConfig.domain}/kota/${areaData.slug}`,
      type: "website",
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const resolvedParams = await params;
  const areaData = siteConfig.areas.find((a) => a.slug === resolvedParams.area);

  if (!areaData) {
    notFound();
  }

  const areaFaqs = [
    {
      question: `Berapa lama estimasi teknisi tiba di area ${areaData.name}?`,
      answer: `Untuk wilayah ${areaData.name} dan sekitarnya, pos armada siaga kami dapat tiba di lokasi Anda dalam waktu 25 hingga 40 menit setelah pemesanan dikonfirmasi via WhatsApp.`,
    },
    {
      question: `Apakah pengerjaan saluran mampet di ${areaData.name} bergaransi tuntas?`,
      answer: `Tentu saja! Seluruh pengerjaan pelancaran saluran pipa tersumbat dan cuci detox pipa air bersih kami dilindungi garansi lancar dengan jaminan No Cure No Pay.`,
    },
    {
      question: `Bagaimana metode detox pipa air bersih untuk rumah di ${areaData.name}?`,
      answer: `Kami menggunakan teknologi Pulse Hydro Flushing bertekanan terkontrol tanpa bahan kimia beracun, aman menguras habis kerak kotoran, lumpur karat, dan cacing di sepanjang jalur pipa keran Anda.`,
    },
  ];

  const graphSchema = generateAreaPageGraphSchema(areaData.name, areaData.slug, areaFaqs);
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20${encodeURIComponent(siteConfig.name)},%20saya%20butuh%20jasa%20saluran%20mampet%20atau%20cuci%20detox%20pipa%20di%20area%20${encodeURIComponent(areaData.name)}.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />

      {/* Hero Header Area: Clean, High Contrast, Anti-Slop */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Location Badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
            <FaMapMarkerAlt className="text-sm flex-shrink-0" />
            <span>Armada Siaga Wilayah {areaData.name}, Bandung • Estimasi Tiba 25-40 Menit</span>
          </div>

          {/* Clean Editorial Headline (No Gradient Slop) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-4xl">
            Jasa Saluran Mampet & Detox Pipa <span className="text-blue-700">{areaData.name}</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-3xl leading-relaxed">
            {areaData.description || `Layanan pembersihan saluran pipa mampet dan cuci kerak pipa air bersih di area ${areaData.name}.`} Menggunakan mesin spiral fleksibel mekanis dan teknologi hydro flush tanpa bongkar keramik lantai dan tanpa bahan kimia berbahaya.
          </p>

          {/* Quick Value Metrics */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-700" />
              <span>Tarif Mulai Rp150.000 Transparan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-700" />
              <span>Metode Tanpa Bongkar Lantai</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-700" />
              <span>Garansi Lancar Tuntas</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              <span>Konsultasi WhatsApp Area {areaData.name}</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
            >
              <FaPhoneAlt className="text-xs text-slate-300" />
              <span>Hotline 24 Jam: {siteConfig.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* Special Area Content */}
      <section className="py-16 md:py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Problem & Solution Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg">
                <FaTools />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Pelancar Saluran Mampet</h2>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                Mengikis sumbatan lemak beku wastafel dapur, kloset WC tersumbat, dan floor drain berambut menggunakan mesin kabel spiral fleksibel torsi tinggi tanpa merusak pipa PVC Anda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg">
                <FaBroom />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Cuci Detox Pipa Air Bersih</h2>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                Menguras kerak hitam, endapan karat besi, lumpur, dan cacing di jalur pipa air bersih toren dengan metode Pulse Hydro Flushing alami tanpa cairan asam kimia beracun.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg">
                <FaShieldAlt />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Garansi No Cure No Pay</h2>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                Jaminan pengerjaan tuntas lancar. Jika masalah saluran mampet Anda tidak terselesaikan akibat keterbatasan alat kami, Anda tidak dibebani biaya jasa penuh.
              </p>
            </div>
          </div>

          {/* Landmark Coverage Callout */}
          {areaData.landmark && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center text-base flex-shrink-0">
                <FaClock />
              </div>
              <div className="space-y-1.5 text-xs text-slate-700">
                <strong className="block text-sm font-bold text-slate-900">
                  Cakupan Layanan di Sekitar {areaData.name}:
                </strong>
                <p className="leading-relaxed">
                  Kami melayani rumah tinggal, ruko, indekos, kafe, restoran, dan kantor di area <strong>{areaData.landmark}</strong> dan titik sekitarnya. Teknisi berangkat dari pos rute terdekat dengan estimasi kedatangan 25-40 menit.
                </p>
                <p className="text-slate-500 pt-1">
                  Titik Kantor & Armada Pusat: Jl. Baladewa No. 114, Cicendo, Kota Bandung.
                </p>
              </div>
            </div>
          )}

          {/* Quick Services Link Cards with Transparent Pricing */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900 text-white space-y-5">
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Layanan Spesialis & Estimasi Tarif di {areaData.name}
              </h2>
              <p className="text-xs text-slate-400">
                Biaya transparan disepakati di awal sebelum tindakan teknis dimulai:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <Link
                href="/layanan"
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors block space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <strong className="block text-white font-bold">Wastafel Mampet Lemak</strong>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/50">Mulai Rp150rb</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Pembersihan kerak minyak beku kitchen sink dengan kabel spiral baja tanpa soda api.
                </p>
              </Link>

              <Link
                href="/layanan"
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors block space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <strong className="block text-white font-bold">Cuci Detox Pipa Air</strong>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/50">Mulai Rp450rb</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Kuras kerak karat hitam, lumpur, dan cacing air keran dengan hydro pulse bertekanan.
                </p>
              </Link>

              <Link
                href="/layanan"
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors block space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <strong className="block text-white font-bold">Kloset WC & Floor Drain</strong>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/50">Mulai Rp150rb</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Pelancaran leher angsa kloset meluap dan saluran kamar mandi mampet akibat rambut.
                </p>
              </Link>

              <Link
                href="/layanan"
                className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors block space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <strong className="block text-white font-bold">Inspeksi Endoskop HD</strong>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/50">Mulai Rp150rb</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Kamera mikro tahan air untuk memastikan posisi dan kondisi fisik dalam pipa pipa.
                </p>
              </Link>
            </div>
          </div>

          {/* Area Navigation Links */}
          <div className="pt-8 border-t border-slate-200">
            <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
              Jelajahi Area Pelayanan Lain di Bandung Raya:
            </h2>
            <div className="flex flex-wrap gap-2">
              {siteConfig.areas.map((otherArea) => (
                <Link
                  key={otherArea.slug}
                  href={`/kota/${otherArea.slug}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                    otherArea.slug === areaData.slug
                      ? "bg-blue-700 text-white border-blue-700"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-blue-700 border-slate-200"
                  }`}
                >
                  {otherArea.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <FAQSection faqs={areaFaqs} />
      <CTASection />
    </>
  );
}

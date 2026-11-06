import Image from "next/image";
import { siteConfig } from "@/config/site";
import { 
  FaWhatsapp, 
  FaTools, 
  FaSink, 
  FaBroom, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaCalculator, 
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (7 Cols): Copywriting, Focused CTA, Trust Metrics */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Operational Location Context */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200">
              <FaMapMarkerAlt className="text-blue-700 flex-shrink-0" />
              <span>Armada Siaga Bandung Raya: Estimasi Tiba 25 - 40 Menit</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.18]">
              {siteConfig.heroHeading}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              <strong className="text-blue-700 font-bold">{siteConfig.brandName}</strong> adalah layanan pembersihan pipa dan saluran air yang siap mengatasi sumbatan, kerak, lemak, dan kotoran membandel. Menggunakan alat profesional <span className="font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">tanpa bongkar</span> dan <span className="font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">bebas bahan kimia</span>, kami memastikan aliran air kembali lancar, bersih, dan bebas bau.
            </p>

            {/* Focused Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-sm hover:shadow transition-all text-center"
              >
                <FaWhatsapp className="text-2xl" />
                <span>WhatsApp: {siteConfig.phone}</span>
              </a>

              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-700 py-3 px-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-slate-50 transition-colors"
              >
                <FaCalculator className="text-blue-700 text-base" />
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Verified Trust Metrics Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-700 border-t border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                </div>
                <span>Ulasan Pelanggan Terverifikasi</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <FaShieldAlt className="text-blue-700 text-sm" />
                <span>Garansi Pengerjaan Tuntas</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <FaCheckCircle className="text-blue-700 text-sm" />
                <span>Metode Tanpa Bongkar</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Aligned Hotline Callout & Prominent Banner */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Top Operational Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                  Hotline Panggilan Darurat
                </span>
                <strong className="text-base sm:text-lg font-black text-slate-950 block">
                  {siteConfig.phone}
                </strong>
                <span className="text-xs text-slate-600 block">
                  Layanan Cepat Tanggap Bandung Raya
                </span>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Telepon Langsung"
              >
                <FaPhoneAlt className="text-base text-blue-400" />
              </a>
            </div>

            {/* Hero Visual Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
              <Image
                src="/images/detox-pipa-kotor-hero.png"
                alt="Layanan Pembersihan Pipa & Saluran Air Detox Pipa Kotor Bandung"
                width={650}
                height={520}
                priority
                className="w-full h-auto object-cover"
              />
              
              {/* Bottom Feature Micro-bar */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-slate-950">Teknologi Mesin Spiral &amp; Hydro</span>
                  <span className="text-xs text-slate-600">Aman pipa PVC &amp; tanpa merusak keramik</span>
                </div>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded">
                  Mulai Rp150rb
                </span>
              </div>
            </div>

            {/* Fast Dispatch Guarantee */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
              <FaClock className="text-blue-700 text-base flex-shrink-0" />
              <span>Teknisi terdekat langsung diberangkatkan saat pemesanan dikonfirmasi via WhatsApp.</span>
            </div>

          </div>

        </div>

        {/* 3 Quick Cards: Unified Sophisticated Slate & Blue Palette */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 text-lg">
                <FaTools />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-1">Pipa Tersumbat</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Membersihkan pipa mampet tanpa merusak struktur lantai &amp; dinding.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 text-lg">
                <FaSink />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-1">Wastafel</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Cepat tangani saluran air tersumbat lemak beku &amp; sisa kotoran dapur.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 text-lg">
                <FaBroom />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950 mb-1">Saluran Air</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Teknik tanpa bongkar yang efisien untuk floor drain &amp; buangan utama.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

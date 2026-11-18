import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { FaShieldAlt, FaUserShield, FaAward, FaTools, FaBroom } from "react-icons/fa";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Tentang Kami - ${siteConfig.name}`,
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.domain}/tentang`,
  },
};

export default function TentangPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Tentang ${siteConfig.name}`,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Tentang Kami", url: "/tentang" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutSchema, breadcrumbSchema]) }}
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 text-center border-b border-stone-200" style={{ backgroundColor: "#f2f1e6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Tentang {siteConfig.name}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Layanan pembersihan pipa dan saluran air yang siap mengatasi sumbatan, kerak, lemak, dan kotoran membandel di Bandung.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Pembersihan Pipa & Saluran Air Tanpa Bongkar
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-emerald-700 font-bold">{siteConfig.name}</strong> adalah penyedia layanan profesional untuk pembersihan pipa dan saluran air yang berfokus pada penanganan masalah sumbatan, kerak, lemak, dan kotoran membandel tanpa perlu melakukan pembongkaran.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Berbeda dengan penggunaan bahan kimia berbahaya seperti soda api, metode kami menggunakan teknik mekanis dan alat khusus untuk membersihkan bagian dalam dinding pipa secara menyeluruh. Cara ini aman untuk berbagai jenis pipa (PVC, besi, stainless, maupun HDPE) serta aman bagi instalasi lama dan bangunan Anda.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-2xl font-black text-emerald-700">20 - 40 Menit</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">Rata-rata Waktu Pengerjaan</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-2xl font-black text-sky-700">100% Aman</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">Tanpa Bahan Kimia Korosif</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaTools className="text-3xl text-sky-600" />
                <h3 className="text-base font-bold text-slate-900">Mesin Spiral Flexible</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Menjangkau kelokan pipa PVC untuk menghancurkan sumbatan lemak dan rambut tanpa merusak dinding pipa.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaBroom className="text-3xl text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">Hydro Pressure Detox</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Pembersihan kerak lumut, endapan kotoran, dan sedimen pipa air bersih hingga aliran jernih kembali.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaShieldAlt className="text-3xl text-amber-600" />
                <h3 className="text-base font-bold text-slate-900">Garansi Pengerjaan</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Jaminan saluran air kembali lancar tuntas tanpa risiko kebocoran akibat bahan kimia.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaUserShield className="text-3xl text-sky-600" />
                <h3 className="text-base font-bold text-slate-900">Teknisi Berpengalaman</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Tim profesional terlatih dengan peralatan pembersih pipa standar industri modern.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}

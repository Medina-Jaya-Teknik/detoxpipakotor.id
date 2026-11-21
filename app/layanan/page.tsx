import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateBreadcrumbSchema, generateProductServiceSchema } from "@/lib/schema";
import { FaCheckCircle, FaWhatsapp, FaShieldAlt, FaStar } from "react-icons/fa";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Layanan Detox Pipa Kotor Bandung Terdekat & Saluran Mampet",
  },
  description:
    "Layanan cuci detox pipa air bersih & pelancar saluran mampet Bandung tanpa bongkar. Bersih, higienis & bergaransi. Hubungi ☎️ 0851-2277-7253.",
  alternates: {
    canonical: `${siteConfig.domain}/layanan`,
  },
};

export default function LayananPage() {
  const serviceSchema = generateServiceSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Layanan", url: "/layanan" },
  ]);
  const productServiceSchema = generateProductServiceSchema({
    name: `${siteConfig.name} - Layanan Pembersihan Pipa`,
    description: `Detox pipa kotor siap atasi saluran mampet dengan cepat, bersih, tanpa bongkar, dan harga terjangkau di Bandung.`,
    url: `${siteConfig.domain}/layanan`,
    image: "/images/detox-pipa-kotor-hero.png",
    price: "150000",
  });

  const waUrl = `https://api.whatsapp.com/send/?phone=6285122777253&text=Halo+DetoxPipaKotor.id,+saya+butuh+layanan+pembersihan+pipa+dan+saluran+air.&type=phone_number&app_absent=0`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, productServiceSchema]),
        }}
      />

      {/* Header Banner matching original style */}
      <section className="py-16 md:py-24 text-center border-b border-stone-200" style={{ backgroundColor: "#f2f1e6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Layanan Kami
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Membersihkan pipa tersumbat dengan cepat dan tanpa ribet. Solusi tanpa bongkar dengan peralatan khusus berstandar profesional.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.services.map((service, idx) => (
              <div
                key={service.id || idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg mb-5">
                    0{idx + 1}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {service.name}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <FaCheckCircle className="text-sky-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-center text-sm bg-sky-600 hover:bg-sky-700 text-white transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center text-amber-400 gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-lg" />
            ))}
          </div>
          <p className="text-lg md:text-xl font-medium text-slate-800 italic max-w-2xl mx-auto leading-relaxed mb-4">
            &ldquo;Pelayanan cepat dan hasilnya memuaskan, pipa mampet langsung lancar tanpa ribet!&rdquo;
          </p>
          <div className="text-sm font-bold text-slate-900">Ibu Ani</div>
          <div className="text-xs text-slate-500">Pelanggan Rumah Tangga di Bandung</div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}

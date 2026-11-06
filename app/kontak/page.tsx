import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaShieldAlt,
} from "react-icons/fa";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Hubungi Kami & Lokasi Workshop | ${siteConfig.name}`,
  description: `Hubungi tim teknisi Detox Pipa Kotor Bandung. Pos armada pusat di Jl. Baladewa No. 114, Cicendo, Kota Bandung. Respon 25-40 menit ke seluruh Bandung Raya.`,
  alternates: {
    canonical: `${siteConfig.domain}/kontak`,
  },
};

export default function KontakPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Kontak ${siteConfig.name}`,
    description: siteConfig.description,
    mainEntity: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
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
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Kontak", url: "/kontak" },
  ]);

  const waUrl = `https://api.whatsapp.com/send/?phone=6285122777253&text=Halo+DetoxPipaKotor.id,+saya+butuh+informasi+layanan+pembersihan+pipa+atau+saluran+mampet.&type=phone_number&app_absent=0`;
  const gmapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.address.geo.latitude},${siteConfig.address.geo.longitude}`;
  const gmapsEmbedUrl = `https://www.google.com/maps?q=${siteConfig.address.geo.latitude},${siteConfig.address.geo.longitude}&hl=id&z=16&output=embed`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactSchema, breadcrumbSchema]),
        }}
      />

      {/* Header Banner */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
            <FaMapMarkerAlt />
            <span>Pusat Operasional & Armada Bandung</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Kami & Lokasi Workshop
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Armada siaga melayani pembersihan pipa saluran mampet dan cuci detox pipa air bersih di seluruh wilayah Bandung Raya.
          </p>
        </div>
      </section>

      {/* Contact Cards & Map Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* 3 Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Alamat Workshop */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto text-xl">
                <FaMapMarkerAlt />
              </div>
              <h2 className="text-base font-bold text-slate-900">Alamat Workshop</h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {siteConfig.address.full}
              </p>
              <p className="text-slate-500 text-xs">
                (Pamoyanan, Cicendo, Kota Bandung 40173)
              </p>
            </div>

            {/* Jam Operasional */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto text-xl">
                <FaClock />
              </div>
              <h2 className="text-base font-bold text-slate-900">Jam Layanan</h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                {siteConfig.openingHoursText}
              </p>
              <p className="text-slate-500 text-xs">
                Siaga 24 Jam Panggilan Darurat via WhatsApp
              </p>
            </div>

            {/* Telepon / WhatsApp */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl">
                <FaWhatsapp />
              </div>
              <h2 className="text-base font-bold text-slate-900">Hotline & WhatsApp</h2>
              <p className="text-slate-900 text-sm sm:text-base leading-relaxed font-bold">
                {siteConfig.phone}
              </p>
              <div className="pt-1">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  <FaWhatsapp className="text-sm" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="p-4 sm:p-6 bg-white border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    Peta Lokasi Workshop & Pos Armada Bandung
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Jl. Baladewa No. 114, Pamoyanan, Cicendo, Kota Bandung (-6.902389, 107.590422)
                  </p>
                </div>
              </div>

              <a
                href={gmapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-sm flex-shrink-0"
              >
                <span>Petunjuk Arah Google Maps</span>
                <FaExternalLinkAlt className="text-[11px]" />
              </a>
            </div>

            {/* Google Maps iFrame Embed */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100">
              <iframe
                title="Peta Lokasi Detox Pipa Kotor Bandung"
                src={gmapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Map Card Footer Info */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-blue-700 flex-shrink-0" />
                <span>Teknisi resmi terverifikasi dengan armada motor/mobil servis khusus.</span>
              </div>
              <span className="font-semibold text-slate-900">Estimasi Jangkauan: 25-40 Menit Seluruh Bandung</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <CTASection />
    </>
  );
}

"use client";

import { siteConfig } from "@/config/site";
import { FaTools, FaBroom, FaWater, FaCheckCircle, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    FaTools: <FaTools className="text-3xl text-emerald-600" />,
    FaBroom: <FaBroom className="text-3xl text-sky-600" />,
    FaWater: <FaWater className="text-3xl text-cyan-600" />,
    FaSink: <FaTools className="text-3xl text-amber-600" />,
  };

  const bgIconMap: Record<string, string> = {
    FaTools: "bg-emerald-100 border-emerald-200",
    FaBroom: "bg-sky-100 border-sky-200",
    FaWater: "bg-cyan-100 border-cyan-200",
    FaSink: "bg-amber-100 border-amber-200",
  };

  const serviceImageMap: Record<string, string> = {
    "pipa-tersumbat": "/images/layanan-saluran-mampet.webp",
    "saluran-air": "/images/layanan-deteksi-bocor.webp",
    "wastafel": "/images/layanan-inspeksi-kamera.webp",
    "detox-pipa-kotor": "/images/layanan-detox-pipa.webp",
  };

  return (
    <section id="layanan" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title matching detoxpipakotor.id */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Pembersihan Pipa & Saluran Air
          </h2>
          <p className="text-slate-600 text-base">
            Solusi cepat dan profesional mengatasi pipa mampet, wastafel tersumbat, saluran air kotor, dan detox kerak pipa tanpa perlu membongkar struktur bangunan.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.map((service) => {
            const bookingWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20${encodeURIComponent(siteConfig.name)},%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(service.name)}.`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {serviceImageMap[service.id] && (
                    <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 -mx-1 -mt-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={serviceImageMap[service.id]}
                        alt={`${service.heading} - ${siteConfig.name}`}
                        title={`${service.heading} tanpa bongkar`}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={337}
                        className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-all ${bgIconMap[service.iconName] || "bg-emerald-100 border-emerald-200"}`}>
                    {iconComponents[service.iconName] || <FaTools className="text-3xl text-emerald-600" />}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    <Link href={service.id === "detox-pipa-kotor" ? "/layanan/detox-pipa-kotor-bandung" : "/layanan"}>
                      {service.heading}
                    </Link>
                  </h3>

                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-3">
                    {service.subheading}
                  </p>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <FaCheckCircle className="text-emerald-600 text-sm mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">Estimasi Biaya:</span>
                    <span className="text-sm font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-xl">
                      {service.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={bookingWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Pesan Jasa</span>
                    </a>

                    <Link
                      href="/layanan"
                      className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                      title="Detail Layanan"
                    >
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

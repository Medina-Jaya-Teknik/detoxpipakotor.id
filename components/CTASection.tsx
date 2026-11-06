import React from "react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTASection() {
  const waUrl = `https://api.whatsapp.com/send/?phone=6285122777253&text=Halo+DetoxPipaKotor.id,+saya+butuh+bantuan+pembersihan+saluran+pipa+kotor.&type=phone_number&app_absent=0`;

  return (
    <section className="py-20 md:py-24 text-center bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Butuh Bantuan Detox Pipa Sekarang?
        </h2>

        <div className="space-y-2 text-slate-300 text-base sm:text-lg">
          <p>Konsultasikan masalah saluran air mampet dan pipa kotor Anda tanpa biaya:</p>
          <p>
            Tim teknisi kami siap membantu Anda kapan saja dari pukul{" "}
            <strong className="text-white font-bold">08.00 - 22.00 WIB</strong>.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-lg transition-all"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp: {siteConfig.phone}</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
          >
            <FaPhoneAlt className="text-blue-400" />
            <span>Telepon Hotline Langsung</span>
          </a>
        </div>

      </div>
    </section>
  );
}

"use client";

import { siteConfig } from "@/config/site";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function MobileBottomBar() {
  const waUrl = `https://api.whatsapp.com/send/?phone=6285122777253&text=Halo+DetoxPipaKotor.id,+saya+butuh+bantuan+darurat+pembersihan+pipa+saluran+mampet.&type=phone_number&app_absent=0`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs tracking-tight shadow active:scale-95 transition-transform"
          aria-label="Telepon Teknisi Langsung"
        >
          <FaPhoneAlt className="text-sky-400 text-sm flex-shrink-0" />
          <span>Telepon Hotline</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-tight shadow-md shadow-emerald-600/30 active:scale-95 transition-transform relative overflow-hidden"
          aria-label="Konsultasi WhatsApp Cepat"
        >
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
          <FaWhatsapp className="text-white text-base flex-shrink-0" />
          <span>Chat WhatsApp</span>
        </a>
      </div>
    </div>
  );
}


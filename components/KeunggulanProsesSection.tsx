import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { 
  FaCheckCircle, 
  FaTools, 
  FaUserCheck, 
  FaTag, 
  FaStopwatch, 
  FaShieldAlt,
  FaSearchLocation,
  FaCogs,
  FaWater,
  FaGraduationCap
} from "react-icons/fa";

export default function KeunggulanProsesSection() {
  const primaryAdvantage = siteConfig.advantages[0]; // Tanpa Bongkar
  const secondaryAdvantages = siteConfig.advantages.slice(1); // 4 items

  const secondaryIcons = [
    <FaUserCheck key={2} className="text-blue-700 text-xl" />,
    <FaTag key={3} className="text-blue-700 text-xl" />,
    <FaStopwatch key={4} className="text-blue-700 text-xl" />,
    <FaShieldAlt key={5} className="text-blue-700 text-xl" />,
  ];

  return (
    <>
      {/* SECTION 6: Keunggulan Kami */}
      <section id="keunggulan" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Keunggulan Kami
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Alasan utama mengapa warga dan pelaku usaha di Bandung Raya mempercayakan saluran pipa kepada kami:
            </p>
          </div>

          {/* Balanced 1 + 4 Asymmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Flagship Card (5 Cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-50 border-2 border-blue-700 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-6 shadow-sm">
                  <FaTools className="text-xl" />
                </div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
                  Pilar Utama Layanan
                </span>
                <h3 className="text-2xl font-bold text-slate-950 mb-4">
                  {primaryAdvantage.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {primaryAdvantage.desc}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-800 font-medium">
                  <li className="flex items-center gap-2.5">
                    <FaCheckCircle className="text-blue-700 text-sm flex-shrink-0" />
                    <span>Tanpa merusak keramik lantai atau dinding</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FaCheckCircle className="text-blue-700 text-sm flex-shrink-0" />
                    <span>Aman untuk instalasi pipa PVC lama</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FaCheckCircle className="text-blue-700 text-sm flex-shrink-0" />
                    <span>Rumah tetap bersih dan bebas debu bongkaran</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-800 font-semibold">
                Teknologi kawat spiral torsi tinggi dan hydro pressure
              </div>
            </div>

            {/* 4 Supporting Pillars Grid (7 Cols: 2x2) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {secondaryAdvantages.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                      {secondaryIcons[idx]}
                    </div>
                    <h3 className="text-base font-bold text-slate-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: Proses Pengerjaan Detox Pipa */}
      <section id="proses" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Proses Pengerjaan Detox Pipa
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Standar operasional bertahap untuk menjamin pipa air Anda bersih total dan lancar tanpa risiko:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Step list (Left: 7 Cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              {siteConfig.prosesPengerjaan.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                    0{step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-950 text-sm mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-700 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual (Right: 5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 max-w-sm w-full bg-white">
                <Image
                  src="/images/detox-pipa-kotor-hero.png"
                  alt="Proses Detox Pipa Kotor Mesin Khusus"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-950 block mb-1">
                    Pembersihan Mekanis Khusus
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Aliran air kembali optimal dalam rata-rata waktu pengerjaan 20 - 40 menit.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

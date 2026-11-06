import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaExclamationCircle, FaCalendarCheck, FaClock } from "react-icons/fa";

export default function TujuanKapanSection() {
  const gejalaDarurat = siteConfig.kapanDetox.slice(0, 4);
  const jadwalRutin = siteConfig.kapanDetox.slice(4);

  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 4: Tujuan Dilakukannya Detox Pipa */}
        <div>
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Tujuan Dilakukannya Detox Pipa
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Menjaga kebersihan dan kelancaran instalasi pipa saluran air jangka panjang tanpa merusak struktur bangunan Anda:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.tujuanDetox.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-black text-blue-700 mb-3 tracking-tight">
                    0{item.no}.
                  </div>
                  <h3 className="text-base font-bold text-slate-950 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
            >
              <FaWhatsapp className="text-base" />
              <span>Konsultasi Pembersihan Pipa via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Section 5: Kapan Detox Pipa Sebaiknya Dilakukan? */}
        <div className="pt-12 border-t border-slate-200">
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Kapan Detox Pipa Sebaiknya Dilakukan?
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Kenali gejala darurat pada saluran air dan jadwal pemeliharaan berkala untuk mencegah sumbatan fatal:
            </p>
          </div>

          {/* Differentiated Layout: Diagnostic Warning Signs vs Periodic Schedules */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 4 Warning Signs (8 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <FaExclamationCircle className="text-blue-700" />
                <span>Gejala Pipa Butuh Penanganan Segera:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gejalaDarurat.map((kapan, kIdx) => (
                  <div
                    key={kIdx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-blue-700 block mb-1">
                        Tanda #{kapan.no}
                      </span>
                      <h4 className="text-sm font-bold text-slate-950 mb-2">
                        {kapan.title}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {kapan.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 Maintenance Schedules (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <FaCalendarCheck className="text-blue-700" />
                <span>Jadwal Pemeliharaan Rutin Ideal:</span>
              </h3>

              <div className="space-y-4">
                {jadwalRutin.map((jadwal, jIdx) => (
                  <div
                    key={jIdx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <span className="text-xs font-bold text-blue-700 block mb-1">
                      Rekomendasi #{jadwal.no}
                    </span>
                    <h4 className="text-sm font-bold text-slate-950 mb-2">
                      {jadwal.title}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {jadwal.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-8">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
            >
              <FaClock className="text-slate-300" />
              <span>Jadwalkan Kunjungan Teknisi Bandung</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

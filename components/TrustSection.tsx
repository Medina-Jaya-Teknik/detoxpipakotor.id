import { siteConfig } from "@/config/site";
import { FaTools, FaCheckCircle, FaBroom, FaUserShield, FaCheck, FaStar, FaQuoteLeft } from "react-icons/fa";

export default function TrustSection() {
  const iconMap: Record<string, React.ReactNode> = {
    FaTools: <FaTools className="text-2xl text-emerald-600" />,
    FaCheckCircle: <FaCheckCircle className="text-2xl text-sky-600" />,
    FaBroom: <FaBroom className="text-2xl text-amber-600" />,
    FaUserShield: <FaUserShield className="text-2xl text-purple-600" />,
  };

  const bgIconMap: Record<string, string> = {
    FaTools: "bg-emerald-100 border-emerald-200",
    FaCheckCircle: "bg-sky-100 border-sky-200",
    FaBroom: "bg-amber-100 border-amber-200",
    FaUserShield: "bg-purple-100 border-purple-200",
  };

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header: Kenapa Memilih Detox Pipa Kotor? */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              Keunggulan Layanan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kenapa Memilih Detox Pipa Kotor?
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Menggunakan alat profesional tanpa bongkar, kami memastikan aliran air kembali lancar, bersih, dan bebas bau.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.advantages.map((adv, index) => (
              <div
                key={index}
                className="bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-all ${bgIconMap[adv.icon] || "bg-emerald-100 border-emerald-200"}`}>
                    {iconMap[adv.icon] || <FaCheck className="text-2xl text-emerald-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <FaCheck /> <span>Standar Profesional & Bergaransi</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimoni Pelanggan Section */}
        {siteConfig.testimonials && siteConfig.testimonials.length > 0 && (
          <div className="pt-8 border-t border-slate-100">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider">
                Ulasan Nyata Pelanggan
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Apa Kata Pelanggan Kami?
              </h3>
              <p className="text-slate-600 text-sm">
                Kepercayaan dan kepuasan pelanggan adalah prioritas utama setiap kunjungan teknisi kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.testimonials.map((testi, tIdx) => (
                <div
                  key={tIdx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500 text-sm">
                        {[...Array(testi.rating)].map((_, r) => (
                          <FaStar key={r} />
                        ))}
                      </div>
                      <FaQuoteLeft className="text-slate-300 text-xl" />
                    </div>
                    <p className="text-slate-700 text-sm italic leading-relaxed">
                      &ldquo;{testi.comment}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <strong className="text-slate-900 font-bold">{testi.name}</strong>
                    <span className="text-slate-500 font-medium">{testi.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

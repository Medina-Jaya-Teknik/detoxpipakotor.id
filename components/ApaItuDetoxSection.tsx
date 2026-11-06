import { siteConfig } from "@/config/site";
import { FaCheckCircle, FaTimesCircle, FaWhatsapp } from "react-icons/fa";

export default function ApaItuDetoxSection() {
  const metodePenggunaan = [
    "Pipa dapur / kitchen sink",
    "Pipa kamar mandi",
    "Wastafel cuci tangan",
    "Floor drain lantai",
    "Saluran pembuangan rumah",
    "Pipa restoran / kafe / hotel",
  ];

  const layananList = [
    "Saluran kamar mandi",
    "Pipa dapur / kitchen sink",
    "Pipa cuci piring",
    "Saluran lantai (floor drain)",
    "Pipa pembuangan AC",
    "Pipa rumah & bangunan kecil",
    "Pipa vertikal & horizontal",
  ];

  const comparisons = [
    {
      title: "Soda Api / Cairan Kimia",
      badge: "Risiko Kerusakan",
      bad: true,
      points: [
        "Reaksi panas >100°C melumerkan lem sambungan PVC",
        "Uap menyengat berbahaya bagi saluran pernapasan",
        "Mengubah lemak menjadi sabun kapur keras seperti batu",
        "Hanya melubangi sedikit, mampet berulang dalam hitungan hari",
      ],
    },
    {
      title: "Bongkar / Bobok Keramik",
      badge: "Biaya Tinggi & Ribet",
      bad: true,
      points: [
        "Biaya perbaikan keramik jutaan rupiah",
        "Rumah kotor, berdebu, dan bising berhari-hari",
        "Motif keramik lama sering sulit dicari penggantinya",
        "Waktu pengerjaan lama dan mengganggu aktivitas rumah",
      ],
    },
    {
      title: "Detox Pipa Mesin Khusus",
      badge: "Metode Tanpa Bongkar",
      bad: false,
      points: [
        "100% Tanpa bongkar keramik lantai atau tembok",
        "Aman untuk semua pipa PVC, besi, & pipa lama",
        "Mengangkat kerak lemak & kotoran hingga ke dinding pipa",
        "Pengerjaan kilat 20 - 40 menit langsung lancar bergaransi",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 2: Apa Itu Detox Pipa? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Apa Itu Detox Pipa?
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              <strong>Detox pipa</strong> adalah proses pembersihan menyeluruh pada bagian dalam pipa saluran air menggunakan metode mekanis, spiral torsi tinggi, atau jetting tekanan terukur untuk menghilangkan kotoran, kerak, lemak beku, pasir, rambut, dan endapan yang menumpuk.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Berbeda dengan cara biasa seperti soda api atau pembersih kimia keras, <strong>detox pipa tidak menggunakan bahan berbahaya</strong>, sehingga aman untuk pipa PVC, pipa lama, maupun instalasi rumah dan bisnis Anda.
            </p>

            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Metode ini efektif untuk:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {metodePenggunaan.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <FaCheckCircle className="text-blue-700 text-sm flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-medium leading-relaxed shadow-2xs">
              Detox pipa adalah solusi <strong>tanpa bongkar</strong>, cepat, dan terbukti efektif untuk mengembalikan aliran pipa ke kondisi optimal bebas bau.
            </div>
          </div>

          {/* Section 3: Layanan Kami Box */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-xl font-bold text-slate-950">
                Layanan Detox Pipa Bandung
              </h3>
              <span className="px-3 py-1 rounded bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                Bergaransi
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              Kami melayani pembersihan pipa mampet untuk berbagai titik saluran air:
            </p>

            <ul className="space-y-2.5">
              {layananList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                  <span className="w-5 h-5 rounded bg-blue-50 text-blue-700 flex items-center justify-center text-[10px] font-bold border border-blue-200">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-200">
              <p className="text-xs text-slate-600 mb-4">
                Semua proses dilakukan <strong>tanpa bongkar</strong>, aman untuk jenis pipa: PVC, stainless, besi, dan HDPE.
              </p>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide uppercase transition-all shadow flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-base" />
                <span>Konsultasikan Masalah Saluran</span>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Comparison Matrix */}
        <div className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Perbandingan Metode Pembersihan Saluran
            </h3>
            <p className="text-slate-700 text-sm">
              Pertimbangan teknis dan risiko sebelum memilih solusi untuk saluran pipa rumah Anda:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisons.map((col, cIdx) => (
              <div
                key={cIdx}
                className={`rounded-xl p-6 border transition-all ${
                  col.bad
                    ? "bg-white border-slate-200 shadow-2xs"
                    : "bg-white border-2 border-blue-700 shadow-sm relative"
                }`}
              >
                {!col.bad && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 bg-blue-700 text-white text-xs font-bold rounded">
                    {col.badge}
                  </span>
                )}

                <div className="mb-4">
                  {col.bad && (
                    <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold mb-2 border border-slate-200">
                      {col.badge}
                    </span>
                  )}
                  <h4 className="text-base font-bold text-slate-950">{col.title}</h4>
                </div>

                <ul className="space-y-3">
                  {col.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-800">
                      {col.bad ? (
                        <FaTimesCircle className="text-slate-400 text-sm mt-0.5 flex-shrink-0" />
                      ) : (
                        <FaCheckCircle className="text-blue-700 text-sm mt-0.5 flex-shrink-0" />
                      )}
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

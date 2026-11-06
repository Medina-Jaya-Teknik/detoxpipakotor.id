import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaCheckCircle, FaStar, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Harga Terjangkau Detox Pipa Kotor Bandung | ${siteConfig.name}`,
  description: `Layanan pembersihan pipa tersumbat di Bandung dengan harga yang ramah di kantong mulai Rp150.000, tanpa bongkar dan cepat selesai. Hubungi 0851-2277-7253.`,
  alternates: {
    canonical: `${siteConfig.domain}/harga`,
  },
};

export default function HargaPage() {
  const waUrl = `https://api.whatsapp.com/send/?phone=6285122777253&text=Halo+DetoxPipaKotor.id,+saya+ingin+tanya+harga+pembersihan+pipa+saluran+air.&type=phone_number&app_absent=0`;

  const pricingPackages = [
    {
      name: "Detox Wastafel / Cuci Piring",
      price: "Mulai Rp150.000",
      desc: "Solusi mudah untuk wastafel & kitchen sink bermasalah agar air mengalir lancar kembali.",
      features: [
        "Metode tanpa bongkar",
        "Pembersihan kerak & sisa minyak",
        "Waktu pengerjaan 20 - 40 menit",
        "Garansi pengerjaan",
      ],
      popular: false,
    },
    {
      name: "Detox Pipa Kamar Mandi / WC",
      price: "Mulai Rp200.000",
      desc: "Penanganan cepat pipa tersumbat tanpa ribet, harga bersahabat untuk kenyamanan hunian Anda.",
      features: [
        "Alat khusus tanpa bahan kimia",
        "Atasi sumbatan rambut & sabun",
        "Menghilangkan bau tidak sedap",
        "Uji kelancaran air tuntas",
        "Garansi pengerjaan",
      ],
      popular: true,
    },
    {
      name: "Detox Saluran Utama & Drainase",
      price: "Mulai Rp250.000",
      desc: "Pembersihan total endapan lemak tebal dan pasir pada pipa pembuangan rumah tangga & bisnis.",
      features: [
        "Spiral cleaner / mesin otomatis",
        "Aman untuk pipa PVC & pipa lama",
        "Aliran optimal bebas endapan",
        "Edukasi & tips perawatan",
        "Garansi pengerjaan",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Ibu Ani",
      location: "Cicendo, Bandung",
      comment: "Pelayanan cepat dan hasilnya memuaskan, pipa mampet langsung lancar tanpa ribet!",
    },
    {
      name: "Budi",
      location: "Sukajadi, Bandung",
      comment: "Pelayanan cepat dan bersih, pipa mampet langsung lancar tanpa ribet.",
    },
    {
      name: "Dewi",
      location: "Antapani, Bandung",
      comment: "Teknisi ramah dan harga masuk akal, sangat puas dengan hasilnya!",
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Header */}
      <section className="py-16 md:py-24 text-center border-b border-stone-200" style={{ backgroundColor: "#f2f1e6" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Harga Terjangkau
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Layanan cepat dan profesional untuk pipa tersumbat di Bandung, tanpa bongkar dengan harga yang ramah di kantong.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${
                pkg.popular
                  ? "border-sky-500 shadow-xl ring-2 ring-sky-500/20 bg-white relative"
                  : "border-slate-200 shadow-sm bg-slate-50/50 hover:shadow-md"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded-full">
                  Paling Banyak Dipilih
                </span>
              )}

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h2>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 mb-3">
                  {pkg.price}
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{pkg.desc}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <FaCheckCircle className="text-sky-600 text-base flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-center text-sm transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? "bg-sky-600 hover:bg-sky-700 text-white shadow-md"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                <FaWhatsapp className="text-lg" />
                <span>Pesan Sekarang</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          *Harga menyesuaikan dengan kondisi pipa, panjang instalasi, dan tingkat keparahan sumbatan. Konsultasi & survey gratis via WhatsApp.
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Bukti kepuasan pelanggan yang telah mempercayakan pembersihan pipa kepada DetoxPipaKotor.id
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, tIdx) => (
              <div
                key={tIdx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic mb-4 leading-relaxed">
                    &ldquo;{testi.comment}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-900 text-sm">{testi.name}</div>
                  <div className="text-xs text-slate-500">{testi.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 text-center" style={{ backgroundColor: "#f2f1e6" }}>
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Pipa Mampet Mengganggu Kenyamanan Rumah?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Hubungi kami sekarang untuk penanganan cepat tanpa bongkar di seluruh wilayah Bandung.
          </p>
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm shadow hover:opacity-95"
              style={{ backgroundColor: "rgb(53, 125, 249)" }}
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FaMapMarkerAlt, FaCheck, FaCarSide, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function AreaSection() {
  const primaryAreas = [
    { name: "Bandung Kota", slug: "bandung", detail: "Pusat armada & layanan cepat" },
    { name: "Cicendo", slug: "cicendo", detail: "Pamoyanan, Pasirkaliki, Arjuna" },
    { name: "Sukajadi", slug: "sukajadi", detail: "Pasteur, Cipedes, Gegerkalong" },
    { name: "Antapani", slug: "antapani", detail: "Antapani Wetan, Tengah, Kulon" },
    { name: "Cibiru", slug: "cibiru", detail: "Cipadung, Pasirbiru, Palasari" },
    { name: "Buah Batu", slug: "buah-batu", detail: "Margasari, Sekejati, Cijawura" },
    { name: "Kiaracondong", slug: "kiaracondong", detail: "Babakan Surabaya, Kebon Kangkung" },
    { name: "Pasteur", slug: "pasteur", detail: "Kawasan komersial, ruko & hotel" },
    { name: "Bandung Barat", slug: "bandung-barat", detail: "Padalarang, Lembang, KBP" },
    { name: "Cimahi", slug: "cimahi", detail: "Cimahi Utara, Tengah, Selatan" },
  ];

  return (
    <section id="area" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Area Layanan
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            Kami melayani jasa detox pipa dan pelancaran saluran mampet di seluruh wilayah Bandung dan sekitarnya:
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Operational Snapshot (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-lg">
                <FaCarSide />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Pos Armada Siaga</h3>
                <p className="text-xs text-slate-700">Respons Cepat Seluruh Bandung</p>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              Tim teknisi kami ditempatkan di beberapa titik rute strategis Kota Bandung dan Cimahi untuk menjamin kedatangan yang cepat ke hunian, kafe, ruko, restoran, maupun perkantoran Anda.
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-200 text-xs">
              <div className="flex items-center gap-2.5 text-slate-800">
                <FaClock className="text-emerald-700 text-sm flex-shrink-0" />
                <span>Estimasi tiba di lokasi: <strong>25-40 Menit</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800">
                <FaMapMarkerAlt className="text-sky-700 text-sm flex-shrink-0" />
                <span>Titik Workshop: <strong>Jl. Baladewa No. 114, Cicendo</strong></span>
              </div>
            </div>

            {/* Mini Interactive Map Embed */}
            <div className="relative w-full h-[160px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
              <iframe
                title="Peta Pos Armada Siaga Bandung"
                src={`https://www.google.com/maps?q=${siteConfig.address.geo.latitude},${siteConfig.address.geo.longitude}&hl=id&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <FaPhoneAlt className="text-sky-400" />
                <span>Telepon Darurat: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Area Grid (7 Cols) */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {primaryAreas.map((area, idx) => (
                <li key={idx}>
                  <Link
                    href={`/kota/${area.slug}`}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50/40 transition-colors flex items-start gap-3 group"
                  >
                    <span className="w-6 h-6 rounded bg-sky-100 text-sky-800 flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                      <FaCheck />
                    </span>
                    <div>
                      <strong className="text-sm font-bold text-slate-900 group-hover:text-sky-900 block">
                        {area.name}
                      </strong>
                      <span className="text-xs text-slate-600 block">
                        {area.detail}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-slate-700 font-medium">
              Siap datang cepat kapan pun Anda membutuhkan bantuan saluran pipa.
            </p>
          </div>

        </div>

        {/* Programmatic All-Area Links for SEO */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Daftar Lengkap Kecamatan Bandung Raya:
          </p>
          <div className="flex flex-wrap gap-2">
            {siteConfig.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/kota/${area.slug}`}
                className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-900 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

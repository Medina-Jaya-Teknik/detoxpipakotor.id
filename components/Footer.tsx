import { siteConfig } from "@/config/site";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Column 1: Brand Info & Original Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-dpk-grey.png"
                alt={siteConfig.name}
                width={200}
                height={45}
                className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              {siteConfig.heroSubtitle}
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-blue-400 flex-shrink-0" />
                <span>Telepon: {siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-amber-400 flex-shrink-0" />
                <span>Email: {siteConfig.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-blue-400 transition-colors">Layanan</Link>
              </li>
              <li>
                <Link href="/harga" className="hover:text-blue-400 transition-colors">Harga</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-blue-400 transition-colors">Kontak</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog & Tips</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Partner Kami (sesuai original web) (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Partner Kami</h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              {siteConfig.partners.map((p, idx) => (
                <li key={idx}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors block text-slate-300"
                  >
                    • {p.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-1">Jam Pelayanan:</span>
              <span className="text-xs font-bold text-emerald-400">Pukul 08.00 - 22.00 WIB</span>
            </div>
          </div>

          {/* Column 4: Area Bandung (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Area Layanan</h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {siteConfig.areas.slice(0, 10).map((area) => (
                <Link
                  key={area.slug}
                  href={`/kota/${area.slug}`}
                  className="hover:text-blue-400 transition-colors truncate"
                >
                  • {area.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-4">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>detoxpipakotor.id: Ahli Pembersihan Pipa & Saluran Air Mampet</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

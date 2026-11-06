"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Harga", href: "/harga" },
    { name: "Area Layanan", href: "/#area" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-200"
          : "bg-white py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching detoxpipakotor.id */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-dpk-blue.png"
            alt="detox pipa kotor"
            width={220}
            height={52}
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Quick Contact Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-[#25d366] hover:bg-[#20ba59] shadow-sm hover:shadow transition-all"
          >
            <FaWhatsapp className="text-base" />
            <span>WhatsApp: 0851-2277-7253</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#25d366]"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp: 0851-2277-7253</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-100"
              >
                <FaPhoneAlt />
                <span>Telepon: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

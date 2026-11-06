"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  FaCalculator,
  FaSearchLocation,
  FaBroom,
  FaTools,
  FaVideo,
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

interface ProblemOption {
  id: string;
  name: string;
  icon: typeof FaSearchLocation;
  desc: string;
  basePrice: number;
  tool: string;
  duration: string;
}

const problemOptions: ProblemOption[] = [
  {
    id: "saluran-mampet",
    name: "Saluran Pipa Mampet (WC/Wastafel/Got)",
    icon: FaTools,
    desc: "Air kamar mandi menggenang, kloset meluap, atau wastafel penuh lemak.",
    basePrice: 150000,
    tool: "Mesin Kawat Spiral Rigid Fleksibel Torsi Tinggi",
    duration: "20 - 40 Menit Lancar Tuntas",
  },
  {
    id: "detox-pipa",
    name: "Cuci Detox Pipa Air Bersih",
    icon: FaBroom,
    desc: "Air keran kuning, keruh, berbau besi, atau keluar cacing & kerak.",
    basePrice: 450000,
    tool: "Hydro Pressure Pulsed Flushing (Alami Tanpa Kimia)",
    duration: "1 - 2 Jam Pembersihan Menyeluruh",
  },
  {
    id: "talang-saluran-luar",
    name: "Talang Air Hujan & Saluran Pembuangan Luar",
    icon: FaTools,
    desc: "Air talang meluap, got tersumbat daun, pasir, atau endapan lumpur padat.",
    basePrice: 250000,
    tool: "Mesin Spiral Baja Torsi Tinggi & Jetting",
    duration: "30 - 60 Menit Lancar Tuntas",
  },
  {
    id: "kamera-endoskop",
    name: "Inspeksi Visual Kamera CCTV Pipa",
    icon: FaVideo,
    desc: "Pengecekan kondisi internal pipa, mendeteksi keretakan atau sumbatan dalam.",
    basePrice: 150000,
    tool: "Kamera Endoskop Mikro Tahan Air HD",
    duration: "30 Menit Pemeriksaan Visual",
  },
];

const buildingTypes = [
  { id: "rumah-1", name: "Rumah 1 Lantai", multiplier: 1.0 },
  { id: "rumah-2", name: "Rumah 2 Lantai", multiplier: 1.2 },
  { id: "ruko", name: "Ruko / Kantor", multiplier: 1.35 },
  { id: "restoran", name: "Restoran / Kafe", multiplier: 1.5 },
];

export default function CostEstimatorSection() {
  const [selectedProblem, setSelectedProblem] = useState<string>("saluran-mampet");
  const [selectedBuilding, setSelectedBuilding] = useState<string>("rumah-1");
  const [selectedArea, setSelectedArea] = useState<string>("cicendo");

  const currentProblem = problemOptions.find((p) => p.id === selectedProblem) || problemOptions[0];
  const currentBuilding = buildingTypes.find((b) => b.id === selectedBuilding) || buildingTypes[0];
  const currentArea = siteConfig.areas.find((a) => a.slug === selectedArea) || siteConfig.areas[0];

  // Calculate estimated price
  const estimatedMin = Math.round((currentProblem.basePrice * currentBuilding.multiplier) / 50000) * 50000;
  const estimatedMax = Math.round((estimatedMin * 1.25) / 50000) * 50000;

  const formattedPrice = `Rp${estimatedMin.toLocaleString("id-ID")} - Rp${estimatedMax.toLocaleString("id-ID")}`;

  const waMessage = `Halo ${siteConfig.name}, saya telah melakukan estimasi online untuk kendala *${currentProblem.name}* pada *${currentBuilding.name}* di area *${currentArea.name}*. Mohon info ketersediaan teknisi dan konfirmasi jadwal pengerjaan.`;
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="kalkulator" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Kalkulator Diagnosa &amp; Estimasi Biaya
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            Pilih jenis permasalahan pipa, tipe properti, dan wilayah Anda di Bandung untuk estimasi tarif transparan sebelum teknisi meluncur:
          </p>
        </div>

        {/* Interactive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            
            {/* Step 1: Jenis Kendala */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-950 uppercase tracking-wider block">
                1. Pilih Jenis Permasalahan Pipa:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problemOptions.map((opt) => {
                  const isSelected = selectedProblem === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedProblem(opt.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-white border-2 border-blue-700 shadow-sm"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className={`p-2 rounded-lg text-base ${isSelected ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-700"}`}>
                          <Icon />
                        </div>
                        <strong className="text-xs font-bold text-slate-950 leading-tight">
                          {opt.name}
                        </strong>
                      </div>
                      <p className="text-xs text-slate-700 line-clamp-2">
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Tipe Bangunan */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-slate-950 uppercase tracking-wider block">
                2. Pilih Jenis Bangunan / Properti:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {buildingTypes.map((b) => {
                  const isSelected = selectedBuilding === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBuilding(b.id)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-bold text-center transition-colors ${
                        isSelected
                          ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                          : "bg-white border-slate-200 text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      {b.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Area Bandung */}
            <div className="space-y-2 pt-2">
              <label htmlFor="area-select" className="text-xs font-bold text-slate-950 uppercase tracking-wider block">
                3. Lokasi Area di Bandung &amp; Sekitarnya:
              </label>
              <select
                id="area-select"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                {siteConfig.areas.map((a) => (
                  <option key={a.slug} value={a.slug}>
                    {a.name} (Armada Siaga)
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border-2 border-slate-300 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <FaCalculator className="text-blue-700 text-lg" />
                <h3 className="text-base font-bold text-slate-950">Ringkasan Estimasi</h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-xs font-bold">
                Garansi Tuntas
              </span>
            </div>

            {/* Price Box */}
            <div className="space-y-1">
              <span className="text-xs text-slate-600 font-medium">Estimasi Kisaran Biaya:</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {formattedPrice}
              </div>
              <p className="text-xs text-slate-600">
                *Tarif final transparan selalu disepakati bersama sebelum teknisi mulai bekerja di lokasi.
              </p>
            </div>

            {/* Diagnosis Details */}
            <div className="space-y-3 pt-2 text-xs border-t border-slate-200">
              <div className="flex items-start gap-2.5">
                <FaShieldAlt className="text-blue-700 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-950">Teknologi Penanganan:</strong>
                  <span className="text-slate-700">{currentProblem.tool}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaClock className="text-blue-700 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-950">Durasi Pengerjaan &amp; Kedatangan:</strong>
                  <span className="text-slate-700">Tiba di {currentArea.name} 25-40 mnt • {currentProblem.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaCheckCircle className="text-blue-700 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-950">Keamanan Bangunan:</strong>
                  <span className="text-slate-700">Tanpa pembongkaran sembarangan, menjaga keutuhan keramik rumah Anda.</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                <span>Kirim Hasil Diagnosa via WhatsApp</span>
              </a>
              <span className="block text-center text-xs text-slate-600 mt-2">
                Respon Cepat Siaga • Konsultasi Gratis
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

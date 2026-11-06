import Hero from "@/components/Hero";
import ApaItuDetoxSection from "@/components/ApaItuDetoxSection";
import TujuanKapanSection from "@/components/TujuanKapanSection";
import KeunggulanProsesSection from "@/components/KeunggulanProsesSection";
import CostEstimatorSection from "@/components/CostEstimatorSection";
import AreaSection from "@/components/AreaSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { generateFAQSchema, generateProductServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";
import { defaultFaqs } from "@/lib/faq-data";

export default function Home() {
  const faqSchema = generateFAQSchema(defaultFaqs);
  const homeProductSchema = generateProductServiceSchema({
    name: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.domain,
    image: "/images/detox-pipa-kotor-hero.png",
    price: "150000",
  });

  return (
    <>
      {/* Homepage Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, homeProductSchema]),
        }}
      />

      {/* 1. Hero: Hook, Masalah Cepat & WhatsApp CTA */}
      <Hero />

      {/* 2. Edukasi: Apa Itu Detox Pipa & Komparasi Bebas Risiko */}
      <ApaItuDetoxSection />

      {/* 3. Diagnosa: Tujuan & Kapan Waktu Ideal Detox */}
      <TujuanKapanSection />

      {/* 4. Kapabilitas: 5 Keunggulan & 5 Tahap Proses Pengerjaan */}
      <KeunggulanProsesSection />

      {/* 5. Transparansi: Kalkulator Diagnosa & Estimasi Biaya */}
      <CostEstimatorSection />

      {/* 6. Jangkauan: Area Layanan & Rute Armada Bandung */}
      <AreaSection />

      {/* 7. Klarifikasi: FAQ Accordion Seputar Pipa & Garansi */}
      <FAQSection />

      {/* 8. Konversi: CTA Jam Operasional & Konsultasi Langsung */}
      <CTASection />
    </>
  );
}

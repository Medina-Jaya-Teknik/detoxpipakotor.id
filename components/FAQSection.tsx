"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

import { defaultFaqs, type FAQItem } from "@/lib/faq-data";
export type { FAQItem };

export default function FAQSection({ faqs = defaultFaqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan Seputar Detox Pipa &amp; Saluran Mampet Bandung
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto">
            Jawaban lengkap mengenai metode pembersihan tanpa bongkar, alat spiral khusus, keamanan pipa PVC, tarif biaya, dan garansi.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "bg-white border-2 border-blue-700 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-slate-950"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <FaQuestionCircle className={`text-xl flex-shrink-0 ${isOpen ? "text-blue-700" : "text-slate-400"}`} />
                    <span>{faq.question}</span>
                  </div>
                  <FaChevronDown
                    className={`text-sm text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-blue-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-700 text-sm leading-relaxed border-t border-slate-100 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

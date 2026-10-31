"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CalendarCheck2,
  ScanLine,
  Shield,
  FileCheck2,
  HardHat,
  Sparkles,
  Award,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";
import { ServiceDetail, FAQItem } from "@/utils/servicesData";
import { areasData } from "@/utils/areasData";
import { CLAIMS } from "@/data/claims";

// 4-Stage Precision Installation Sequence
export function ServiceTimeline() {
  const installationStages = [
    {
      stepNumber: "01",
      title: "Schedule Consultation",
      icon: <CalendarCheck2 className="w-5 h-5" />,
      detail: "Reach us via call or WhatsApp. We confirm a convenient doorstep appointment slot.",
    },
    {
      stepNumber: "02",
      title: "On-Site Laser Measurement",
      icon: <ScanLine className="w-5 h-5" />,
      detail: "Our technician measures perimeter dimensions and examines masonry lintels.",
    },
    {
      stepNumber: "03",
      title: "Precision Anchoring",
      icon: <HardHat className="w-5 h-5" />,
      detail: "We drill solid concrete framing, fasten marine-grade hardware, and secure the barriers.",
    },
    {
      stepNumber: "04",
      title: "Load Test & Warranty Handover",
      icon: <FileCheck2 className="w-5 h-5" />,
      detail: `We verify mesh tension under weight, vacuum all drill dust, and issue your ${CLAIMS.warrantyLabel} card.`,
    },
  ];

  return (
    <section className="bg-white py-20 scroll-mt-12" id="process-timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center font-sans">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
            Our 4-Stage Installation Sequence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {installationStages.map((stage, idx) => (
            <motion.div
              key={stage.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#FAF5ED]/40 border border-stone-200/80 rounded-2xl p-6 flex flex-col items-start relative group hover:border-[#E0A526]/50 transition-all"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#4A2C2A] text-[#FFF4DC] group-hover:bg-[#E0A526] group-hover:text-[#1A1A1A] flex items-center justify-center transition-colors duration-300">
                  {stage.icon}
                </div>
                <span className="text-xs font-extrabold text-[#E0A526] font-heading tracking-wider">
                  STAGE {stage.stepNumber}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#4A2C2A] mb-2 font-heading">
                {stage.title}
              </h3>
              <p className="text-[#666666] text-xs leading-relaxed font-sans">
                {stage.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// The Bhagavath Standards of Service
export function ServiceWhyChoose() {
  const servicePillars = [
    {
      title: "Engineered Masonry Anchoring",
      icon: <HardHat className="w-5 h-5 text-[#E0A526]" />,
      description: "Trained technicians anchor exclusively into solid lintels and structural slabs using heavy-duty hardware.",
    },
    {
      title: "Tested Virgin Materials",
      icon: <Shield className="w-5 h-5 text-[#E0A526]" />,
      description: "UV-treated virgin polymers and marine-grade SS316 wire cables designed to endure Bengaluru monsoons.",
    },
    {
      title: "Clear Upfront Estimates",
      icon: <Award className="w-5 h-5 text-[#E0A526]" />,
      description: "Detailed per-square-foot estimates with zero hidden costs, finalized after precise on-site inspection.",
    },
    {
      title: "Immaculate Worksite Cleanup",
      icon: <Sparkles className="w-5 h-5 text-[#E0A526]" />,
      description: "Every drilling residue particle is vacuumed and wiped before our team hands over your protected space.",
    },
  ];

  return (
    <section className="bg-[#FAF5ED]/50 py-20 scroll-mt-12" id="why-choose-bhagavath">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center font-sans">
            Guaranteed Quality
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
            The Bhagavath Standard of Craftsmanship
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md hover:border-[#E0A526]/50 transition-all duration-300 flex flex-col items-start gap-3"
            >
              <div className="p-3 bg-[#FAF5ED] rounded-xl">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-bold text-[#4A2C2A] font-heading">{pillar.title}</h3>
              <p className="text-[#666666] text-xs leading-relaxed font-sans">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Complementary Protective Options & Bengaluru Localities
interface ServiceCrossLinksProps {
  related: ServiceDetail[];
  categoryName: string;
  currentServiceSlug?: string;
}

export function ServiceRelated({ related, categoryName }: ServiceCrossLinksProps) {
  const servedAreas = Object.values(areasData).map((area) => ({
    areaTitle: area.name,
    areaPath: area.slug,
  }));

  return (
    <section className="bg-white py-20 scroll-mt-12" id="related-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Related Services */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <h3 className="text-lg font-bold text-[#4A2C2A] font-heading border-b border-stone-100 pb-3">
              Explore More {categoryName} Solutions
            </h3>
            <div className="flex flex-col gap-3">
              {related.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between p-4 bg-[#FAF5ED]/40 hover:bg-[#FFF4DC]/70 border border-stone-200/70 rounded-2xl hover:border-[#E0A526]/40 transition-all group"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-[#4A2C2A] group-hover:text-[#6B4340] transition-colors font-heading">
                      {service.name}
                    </span>
                    <span className="text-[11px] text-[#666666] font-sans">
                      Doorstep installation across Bengaluru
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-[#E0A526] transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bengaluru Service Localities */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <h3 className="text-lg font-bold text-[#4A2C2A] font-heading border-b border-stone-100 pb-3">
              Bengaluru Neighborhoods We Serve
            </h3>
            <p className="text-xs text-[#666666] font-sans">
              Our mobile installation crews carry precision laser kits across these primary Bengaluru residential sectors:
            </p>
            <div className="flex flex-wrap gap-2">
              {servedAreas.map((area) => (
                <Link
                  key={area.areaPath}
                  href={`/areas/${area.areaPath}`}
                  className="text-xs font-semibold px-3 py-1.5 bg-[#FAF5ED]/60 hover:bg-[#FFF4DC] border border-stone-200 hover:border-[#E0A526]/40 rounded-xl text-[#3A3A3A] hover:text-[#4A2C2A] transition-all flex items-center gap-1.5 font-sans"
                >
                  <span>{area.areaTitle}</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Service FAQs Accordion
export interface ServiceAccordionProps {
  faqs?: FAQItem[];
  items?: FAQItem[];
  serviceName?: string;
  serviceTitle?: string;
}

export function ServiceFAQs({
  faqs,
  items,
  serviceName,
  serviceTitle,
}: ServiceAccordionProps) {
  const faqList = faqs || items || [];
  const displayTitle = serviceName || serviceTitle || "Service";
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (slot: number) => {
    setActiveAccordion((current) => (current === slot ? null : slot));
  };

  const dynamicFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };

  return (
    <section className="bg-[#FAF5ED]/40 py-20 scroll-mt-12" id="faqs-service">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicFaqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center font-sans">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
            {displayTitle} - Common Queries
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqList.map((entry, idx) => {
            const isExpanded = activeAccordion === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isExpanded ? "border-[#E0A526]/50 bg-white shadow-xs" : "border-stone-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-hidden"
                >
                  <span className="flex items-start gap-3.5 text-sm sm:text-base font-bold text-[#4A2C2A] hover:text-[#6B4340] transition-colors font-heading">
                    <HelpCircle className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" />
                    <span>{entry.question}</span>
                  </span>
                  <span className="p-1.5 bg-[#FAF5ED] rounded-lg text-[#4A2C2A] shrink-0 ml-4">
                    {isExpanded ? <Minus className="w-4 h-4 text-[#E0A526]" /> : <Plus className="w-4 h-4 text-[#4A2C2A]" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-[#3A3A3A] text-xs sm:text-sm leading-relaxed pl-[46px] border-t border-stone-100 font-sans">
                        {entry.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

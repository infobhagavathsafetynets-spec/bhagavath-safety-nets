"use client";

import { motion } from "framer-motion";
import { PhoneCall, Ruler, Wrench, ShieldCheck, Sparkles } from "lucide-react";
import { CLAIMS } from "@/data/claims";

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <PhoneCall className="w-6 h-6 text-[#1A1A1A]" />,
    title: "1. Rapid Booking & Consultation",
    description: "Connect via phone or WhatsApp. We assign a dedicated local technician for a complimentary site evaluation at your preferred time.",
  },
  {
    id: 2,
    icon: <Ruler className="w-6 h-6 text-[#1A1A1A]" />,
    title: "2. Precision Laser Evaluation",
    description: "Our technicians examine masonry anchor points, record exact laser dimensions, and present physical wire/mesh material samples.",
  },
  {
    id: 3,
    icon: <Wrench className="w-6 h-6 text-[#1A1A1A]" />,
    title: "3. Calibrated Anchor & Cable Mounting",
    description: "Using low-vibration diamond core drilling, we anchor stainless fixtures, tension cables or netting securely, and seal perimeters cleanly.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-6 h-6 text-[#1A1A1A]" />,
    title: "4. Load Verification & Handover",
    description: `We conduct multi-point tension checks, vacuum drilling dust with dust extractors, and hand over your written ${CLAIMS.warrantyLabel} card.`,
  },
];

export default function InstallationProcess() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#E0A526]" />
            Execution Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Our 4-Stage Precision Installation Methodology
          </h2>
          <p className="text-[#666666] text-sm leading-relaxed font-sans">
            From initial measurement to structural tension testing and dust-free cleanup, discover how Bhagavath Safety Nets ensures flawless execution across Bengaluru.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[32px] left-[12%] right-[12%] h-0.5 bg-stone-200 -z-0 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-2xl bg-[#E0A526] group-hover:bg-[#4A2C2A] text-[#1A1A1A] group-hover:text-[#E0A526] flex items-center justify-center shadow-lg transition-colors duration-300 mb-6 shrink-0 relative border border-[#E0A526]">
                {step.icon}
                {/* Step micro-badge */}
                <div className="absolute -top-1.5 -right-1.5 bg-[#4A2C2A] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs transition-colors duration-300">
                  {step.id}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-[#4A2C2A] font-heading mb-2.5 group-hover:text-[#E0A526] transition-colors">
                {step.title}
              </h3>
              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed max-w-xs font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

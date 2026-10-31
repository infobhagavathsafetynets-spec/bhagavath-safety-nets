"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Ruler, Wrench, HeartHandshake, Sparkles } from "lucide-react";
import Link from "next/link";
import { CLAIMS } from "@/data/claims";
import { PRICING_DISCLAIMER } from "@/data/pricing";

export default function WhyChooseUs() {
  const foundations = [
    {
      icon: ShieldCheck,
      title: "Material Certification",
      heading: "SS316 Marine Metallurgy & Virgin HDPE",
      desc: "We install authentic SS316 marine stainless steel cables and 100% virgin copolymer netting designed to withstand intense sun exposure and seasonal rainfall without brittle degradation or rusting.",
    },
    {
      icon: Award,
      title: "Official Guarantee",
      heading: `Backed by Our ${CLAIMS.warrantyLabel}`,
      desc: `Every installation includes our written ${CLAIMS.warrantyLabel} certificate covering tensile retention, knot stability, and anchoring hardware under standard domestic usage.`,
      link: CLAIMS.warrantyTerms.termsUrl,
      linkLabel: "Read warranty terms",
    },
    {
      icon: Ruler,
      title: "Honest Estimation",
      heading: "Complimentary Doorstep Laser Sizing",
      desc: "Our technicians measure your balcony and window perimeters on-site with calibrated digital laser tools and bring physical samples, delivering an itemized quote with zero advance payment obligations.",
    },
    {
      icon: Wrench,
      title: "Structural Discipline",
      heading: "Low-Vibration Concrete Anchoring",
      desc: "We use precision rotary diamond core equipment and heavy-duty expansion fasteners that anchor deeply into concrete slabs without causing cosmetic plaster cracks or structural tile damage.",
    },
    {
      icon: HeartHandshake,
      title: "Ethical Standards",
      heading: "Humane, Non-Lethal Bird Barriers",
      desc: "Our netting and blunt-tip spikes create physical deterrents that prevent pigeons from nesting without injuring birds, fully aligning with animal welfare guidelines.",
    },
    {
      icon: Sparkles,
      title: "Site Courtesy",
      heading: "Thorough Dust Vacuuming Before Handover",
      desc: "Our technicians capture masonry dust during drilling and clean up all work areas before final inspection, leaving your balcony neat, secure, and ready to enjoy.",
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="advantage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAF5ED] text-[#4A2C2A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#EAD9C8]">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
            <span>Installation Discipline • {CLAIMS.warrantyLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1816] tracking-tight leading-tight">
            The Foundations of Bhagavath Safety
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Whether for high-rise apartments in Whitefield and Bellandur or homes in Koramangala and Indiranagar, we engineer perimeter protection that prioritizes safety, durability, and transparent communication. <span className="font-semibold">{PRICING_DISCLAIMER}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-[#FAF5ED]/50 border border-[#EAD9C8] hover:border-[#E0A526] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#4A2C2A] group-hover:bg-[#E0A526] flex items-center justify-center text-[#E0A526] group-hover:text-[#1A1A1A] transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A2C2A] bg-[#FFF4DC] px-2.5 py-1 rounded-md border border-[#E0A526]/30">
                      {item.title}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#2C1816] mb-3 group-hover:text-[#4A2C2A] transition-colors leading-snug">
                    {item.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.link && (
                  <div className="mt-6 pt-4 border-t border-[#EAD9C8]">
                    <Link
                      href={item.link}
                      className="text-xs font-bold text-[#4A2C2A] hover:text-[#E0A526] hover:underline flex items-center gap-1"
                    >
                      <span>{item.linkLabel}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

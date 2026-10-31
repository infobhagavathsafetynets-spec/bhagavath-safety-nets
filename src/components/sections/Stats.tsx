"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Wrench, Award, MapPin } from "lucide-react";
import { CLAIMS } from "@/data/claims";

export default function Stats() {
  // If stats are confirmed by the client, display the verified numerical metrics
  if (CLAIMS.stats.isConfirmed && CLAIMS.stats.completedProjects) {
    const verifiedStats = [
      {
        icon: Shield,
        value: `${CLAIMS.stats.completedProjects.toLocaleString("en-IN")}+`,
        label: "Installations Completed",
        desc: "Balconies, windows, and shafts secured across Bengaluru",
      },
      ...(CLAIMS.stats.customerRating
        ? [
            {
              icon: Award,
              value: `${CLAIMS.stats.customerRating} / 5.0`,
              label: "Verified Rating",
              desc: `Based on Google Business Profile reviews`,
            },
          ]
        : []),
      {
        icon: Award,
        value: CLAIMS.warrantyLabel,
        label: "Replacement Warranty",
        desc: "Direct replacement warranty on materials and marine hardware",
        link: CLAIMS.warrantyTerms.termsUrl,
      },
      {
        icon: MapPin,
        value: "Bengaluru",
        label: "Complete City Coverage",
        desc: "Doorstep service across all major residential corridors",
      },
    ];

    return (
      <section className="py-16 bg-[#2C1816] text-white border-b border-[#4A2C2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {verifiedStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E0A526]/20 flex items-center justify-center text-[#E0A526] mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-[#E0A526] tracking-tight font-heading">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-white mt-1 font-heading">{stat.label}</span>
                  <p className="text-[11px] text-stone-300 mt-1 leading-snug font-sans">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // When stats are unconfirmed [CONFIRM WITH CLIENT], hide invented numbers completely
  // and display factual engineering commitments
  const structuralAssurances = [
    {
      icon: Shield,
      title: "Virgin HDPE Polymer",
      desc: "100% UV-stabilized copolymer netting engineered for continuous Bengaluru solar exposure.",
    },
    {
      icon: Wrench,
      title: "SS316 Marine Hardware",
      desc: "Molybdenum-enriched stainless cables and fasteners resistant to outdoor moisture and rust.",
    },
    {
      icon: Award,
      title: CLAIMS.warrantyLabel,
      desc: "Written replacement warranty covering netting tensile strength and cable anchor tension.",
      link: CLAIMS.warrantyTerms.termsUrl,
      linkLabel: "Warranty terms",
    },
    {
      icon: MapPin,
      title: "Complimentary Site Visit",
      desc: "Doorstep laser measurement and material demo across our Bengaluru service coverage areas.",
    },
  ];

  return (
    <section className="py-16 bg-[#2C1816] text-white border-b border-[#4A2C2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {structuralAssurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E0A526]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E0A526]/20 flex items-center justify-center text-[#E0A526] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed font-sans">
                  {item.desc}
                </p>
                {item.link && (
                  <Link
                    href={item.link}
                    className="text-xs font-semibold text-[#E0A526] underline mt-3 hover:text-[#D4951E] transition-colors"
                  >
                    {item.linkLabel}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

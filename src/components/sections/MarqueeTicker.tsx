"use client";

import Link from "next/link";
import { ShieldCheck, Award, Ruler, Sparkles, CheckCircle2 } from "lucide-react";
import { CLAIMS } from "@/data/claims";

export default function MarqueeTicker() {
  const tickerItems = [
    { text: "Marine Grade SS316 Stainless Wire", icon: ShieldCheck },
    { text: `${CLAIMS.warrantyLabel} Backed`, icon: Award, link: CLAIMS.warrantyTerms.termsUrl },
    { text: "100% Virgin UV-Stabilized Polymer Netting", icon: Sparkles },
    { text: "Complimentary Doorstep Laser Measurement", icon: Ruler },
    { text: "Humane Bird Exclusion Technology", icon: CheckCircle2 },
    { text: "Serving 10 Key Bengaluru Service Areas", icon: ShieldCheck },
  ];

  return (
    <div className="bg-[#4A2C2A] text-white py-3.5 overflow-hidden border-y border-[#5A3633] select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-wide shrink-0">
              <Icon className="w-4 h-4 text-[#E0A526] shrink-0" />
              <span>{item.text}</span>
              {item.link ? (
                <Link
                  href={item.link}
                  className="text-[#E0A526] font-bold bg-black/30 px-2.5 py-0.5 rounded border border-[#E0A526]/40 shadow-xs hover:underline text-xs"
                >
                  Warranty terms
                </Link>
              ) : (
                <span className="text-[#E0A526]">•</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

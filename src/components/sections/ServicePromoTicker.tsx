"use client";

import Link from "next/link";
import { Sparkles, Shield, Award, CheckCircle2 } from "lucide-react";
import { CLAIMS } from "@/data/claims";
import { PRICING_DISCLAIMER } from "@/data/pricing";

export interface ServicePromoTickerProps {
  className?: string;
  serviceName?: string;
}

export default function ServicePromoTicker({ className = "", serviceName }: ServicePromoTickerProps) {
  const highlights = [
    {
      badge: "WARRANTY",
      text: `${CLAIMS.warrantyLabel} Included on All Installations`,
      link: CLAIMS.warrantyTerms.termsUrl,
      linkLabel: "View terms",
    },
    {
      badge: "MATERIALS",
      text: "Genuine SS316 Marine Cable & UV-Stabilized HDPE Mesh",
      link: null,
      linkLabel: null,
    },
    {
      badge: "ESTIMATES",
      text: PRICING_DISCLAIMER,
      link: null,
      linkLabel: null,
    },
    {
      badge: "SITE VISIT",
      text: "Complimentary Laser Measurement Across 10 Bengaluru Areas",
      link: "/contact",
      linkLabel: "Book visit",
    },
  ];

  return (
    <div className={`overflow-hidden rounded-2xl bg-gradient-to-r from-[#2C1816] via-[#4A2C2A] to-[#2C1816] text-white py-3 px-2 shadow-lg border border-[#E0A526]/30 my-6 select-none ${className}`}>
      <div className="flex items-center">
        {/* Static Lead Chip */}
        <div className="hidden sm:flex items-center gap-2 bg-[#E0A526] text-[#1A1A1A] font-extrabold px-3.5 py-1.5 rounded-xl text-xs uppercase tracking-wider shrink-0 mr-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
          <span>Our Standards</span>
        </div>

        {/* Ticker Stream */}
        <div className="flex items-center gap-8 text-xs font-semibold overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap">
          {highlights.map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2">
              <span className="bg-[#FFF4DC] text-[#4A2C2A] text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide">
                {item.badge}
              </span>
              <span className="text-stone-100">{item.text}</span>
              {item.link && (
                <Link
                  href={item.link}
                  className="text-[#E0A526] hover:text-[#FFF4DC] underline font-bold ml-1"
                >
                  {item.linkLabel}
                </Link>
              )}
              <span className="text-stone-500 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

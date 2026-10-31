"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";
import {
  PRICING_CONFIRMED,
  PRICING_DISCLAIMER,
  FINAL_QUOTE_NOTICE,
  getPriceEstimate,
} from "@/data/pricing";
import { CURRENT_OFFER, isOfferActive } from "@/data/offers";
import { CLAIMS } from "@/data/claims";

interface ServiceOption {
  key: string;
  name: string;
  unit: string;
  description: string;
}

const serviceOptions: ServiceOption[] = [
  {
    key: "safety-nets",
    name: "Balcony & Window Safety Nets",
    unit: "sq. ft.",
    description: "UV-stabilized virgin polymer netting with stainless concrete expansion anchor fasteners.",
  },
  {
    key: "invisible-grills",
    name: "SS316 Marine Invisible Grills",
    unit: "sq. ft.",
    description: "High-tensile stainless steel marine cables with structural powder-coated tracks.",
  },
  {
    key: "cloth-hangers",
    name: "Ceiling Cloth Drying Hangers",
    unit: "system",
    description: "Smooth dual-pulley SS304 individual rod hoists for space optimization.",
  },
];

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(serviceOptions[0]);
  const [areaSqFt, setAreaSqFt] = useState<number>(120);

  const offerActive = isOfferActive();
  const discountPercent = offerActive ? CURRENT_OFFER.discountPercentage : 0;
  const estimate = getPriceEstimate(selectedService.key, areaSqFt, discountPercent);

  const whatsappMessage = encodeURIComponent(
    `Hi Bhagavath Safety Nets, I would like to get an estimate for ${selectedService.name} (approx. ${areaSqFt} ${selectedService.unit}) in Bengaluru. Please arrange a free site visit.`
  );

  return (
    <section className="bg-white py-20 scroll-mt-12" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5ED] text-[#4A2C2A] border border-[#EAD9C8] text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Calculator className="w-4 h-4 text-[#E0A526]" /> Instant Estimate Request
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C1816] tracking-tight leading-tight mb-4">
            Calculate Your Area &amp; Request Quote
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your preferred safety solution and approximate dimensions below.{" "}
            <span className="font-semibold text-[#4A2C2A]">{PRICING_DISCLAIMER}</span> Final quotation is provided after our free doorstep site inspection.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls (Left Column) */}
          <div className="lg:col-span-7 bg-[#FAF5ED]/50 rounded-3xl p-6 sm:p-8 border border-[#EAD9C8] shadow-xs space-y-6">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                1. Select Solution
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {serviceOptions.map((opt) => {
                  const isSelected = selectedService.key === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setSelectedService(opt)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#4A2C2A] text-white border-[#4A2C2A] shadow-sm"
                          : "bg-white text-slate-800 border-[#EAD9C8] hover:border-[#E0A526]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold">{opt.name}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#E0A526] shrink-0" />}
                      </div>
                      <p className={`text-[11px] leading-relaxed ${isSelected ? "text-slate-200" : "text-slate-500"}`}>
                        {opt.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Approximate Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Approximate Area ({selectedService.unit})
                </label>
                <span className="text-sm font-extrabold text-[#4A2C2A] bg-white px-3 py-1 rounded-lg border border-[#EAD9C8]">
                  {areaSqFt} {selectedService.unit}
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={500}
                step={10}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#4A2C2A]"
                aria-label={`Approximate area in ${selectedService.unit}`}
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>30 {selectedService.unit} (Small Window/Balcony)</span>
                <span>250 {selectedService.unit}</span>
                <span>500 {selectedService.unit} (Large Multi-Balcony)</span>
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="pt-4 border-t border-[#EAD9C8] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E0A526] shrink-0" />
                <span>Complimentary On-Site Laser Measurement</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E0A526] shrink-0" />
                <span>
                  Backed by{" "}
                  <Link href={CLAIMS.warrantyTerms.termsUrl} className="font-bold underline text-[#4A2C2A]">
                    {CLAIMS.warrantyLabel}
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Results Summary Box (Right Column) */}
          <div className="lg:col-span-5 bg-[#2C1816] text-white rounded-3xl p-6 sm:p-8 border border-[#5A3633] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#E0A526] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E0A526]" /> Estimate Summary
                </span>
                {offerActive && (
                  <span className="text-xs font-bold text-[#E0A526] bg-[#E0A526]/20 border border-[#E0A526]/40 px-2.5 py-0.5 rounded-full">
                    {CURRENT_OFFER.title}
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">
                {selectedService.name}
              </h3>
              <p className="text-xs text-[#FAF5ED]/80 mb-6">
                Selected Area: <strong>{areaSqFt} {selectedService.unit}</strong> across Bengaluru.
              </p>

              {/* Conditional Pricing Display */}
              {PRICING_CONFIRMED && estimate ? (
                <div className="bg-[#1A1A1A] rounded-2xl p-5 border border-white/10 mb-6 text-center">
                  <span className="text-xs uppercase tracking-wider text-slate-300 block mb-1">
                    Approximate Estimate Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E0A526] tracking-tight">
                    ₹{estimate.min.toLocaleString()} – ₹{estimate.max.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2">
                    Approximate estimate. Final quote after a free site visit.
                  </p>
                </div>
              ) : (
                <div className="bg-[#1A1A1A] rounded-2xl p-5 border border-white/10 mb-6 text-left">
                  <h4 className="text-sm font-bold text-[#E0A526] mb-1">
                    Custom Quote on Free Doorstep Inspection
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {FINAL_QUOTE_NOTICE}
                  </p>
                  <p className="text-[11px] text-slate-400 italic">
                    {PRICING_DISCLAIMER}
                  </p>
                </div>
              )}
            </div>

            {/* Direct CTAs */}
            <div className="space-y-3 pt-4 border-t border-white/15">
              <a
                href={`https://wa.me/919900552179?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Get Your Estimate on WhatsApp</span>
              </a>

              <a
                href="tel:+919900552179"
                className="w-full flex items-center justify-center gap-2 bg-[#E0A526] hover:bg-[#EDB943] text-[#1A1A1A] font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call +91 99005 52179</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

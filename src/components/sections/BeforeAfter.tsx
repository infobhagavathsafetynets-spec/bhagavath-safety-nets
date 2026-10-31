"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldAlert, CheckCircle, ShieldCheck } from "lucide-react";
import { CLAIMS } from "@/data/claims";

export default function BeforeAfter() {
  return (
    <section className="bg-[#FAF5ED]/50 py-24 scroll-mt-12" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center">
            Protection Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Safety Transformation: Protection Without Clutter
          </h2>
          <p className="text-[#666666] text-sm leading-relaxed font-sans">
            How our high-tensile balcony netting and architectural SS316 invisible wire grills eliminate fall hazards and bird roosting while preserving natural light.
          </p>
        </div>

        {/* Before / After Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 text-xs font-bold uppercase px-3 py-1.5 rounded-full mb-6 border border-rose-200">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                <span>Unprotected Perimeter</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A2C2A] font-heading mb-4">
                Before Professional Installation
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#666666] font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Open balcony railing gaps create high fall vulnerability for young children and household pets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Pigeons roost in utility shafts and balcony corners, accumulating unsanitary debris and foul droppings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Accidental falling of items, toys, and utensils down building facades into common areas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Heavy traditional wrought-iron grills obstruct sunlight, view, and fire exit safety.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
              Vulnerable high-rise balcony perimeter
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-md border-2 border-[#E0A526]/50 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFF4DC] text-[#4A2C2A] text-xs font-bold uppercase px-3 py-1.5 rounded-full mb-6 border border-[#E0A526]/30">
                <CheckCircle className="w-3.5 h-3.5 text-[#E0A526]" />
                <span>Bhagavath Certified Installation</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A2C2A] font-heading mb-4">
                After Precision Rigging &amp; Tensioning
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#3A3A3A] font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>High-tensile virgin copolymer or SS316 wire barriers anchored into concrete lintels.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>100% humane, zero-harm bird exclusion that keeps balconies clean, hygienic, and pigeon-free.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Full preservation of daylight, cross-ventilation, and unhindered skyline vistas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Backed by our written {CLAIMS.warrantyLabel} card and complimentary doorstep inspection.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-emerald-700 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified high-rise safety standard</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

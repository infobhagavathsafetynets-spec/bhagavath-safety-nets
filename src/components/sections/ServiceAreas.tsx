"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Clock, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";
import { areasList } from "@/utils/areasData";

export default function ServiceAreas() {
  return (
    <section className="bg-[#FAF5ED]/50 py-20 lg:py-24 scroll-mt-12" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Text (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4A2C2A] bg-white border border-stone-200 px-3.5 py-1.5 rounded-full self-start shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
              <span>Bengaluru Service Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#4A2C2A] font-heading tracking-tight leading-tight">
              Rapid Doorstep Service Across Bengaluru
            </h2>
            <p className="text-[#666666] text-sm leading-relaxed font-sans">
              Headquartered in Koramangala with direct doorstep service across major high-rise residential hubs in Bengaluru. We provide complimentary laser measurements and physical material samples at your home.
            </p>
            <div className="flex items-center gap-3 text-[#4A2C2A] text-xs sm:text-sm font-bold mt-1">
              <Globe className="w-4 h-4 text-[#E0A526]" />
              <span>Complimentary Doorstep Laser Measurement</span>
            </div>
            <div className="pt-2">
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 bg-[#4A2C2A] hover:bg-[#6B4340] text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md group cursor-pointer"
              >
                <span>View All 110 Service Areas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bengaluru Areas Cards Grid (Right) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {areasList.slice(0, 10).map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2, delay: (index % 4) * 0.04 }}
                >
                  <Link
                    href={`/areas/${area.slug}`}
                    className={`flex flex-col justify-between p-4 rounded-2xl transition-all duration-300 group shadow-2xs h-full border ${
                      area.isHeadOffice
                        ? "bg-[#FFF4DC]/60 border-[#E0A526] hover:border-[#4A2C2A]"
                        : "bg-[#FAF5ED]/40 hover:bg-[#FFF4DC] border-stone-200 hover:border-[#E0A526]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#E0A526] shrink-0" />
                          <span className="text-sm font-black text-[#4A2C2A] font-heading">
                            {area.name}
                          </span>
                        </div>
                        {area.isHeadOffice && (
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#4A2C2A] text-white">
                            Head Office
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#666666] leading-snug line-clamp-2 font-sans">
                        {area.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-stone-200/60 text-[11px] font-bold">
                      <span className="flex items-center gap-1 text-[#666666] font-medium">
                        <Clock className="w-3 h-3 text-[#E0A526]" />
                        <span>Doorstep Visit</span>
                      </span>
                      <span className="text-[#4A2C2A] group-hover:text-[#E0A526] flex items-center gap-1 transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

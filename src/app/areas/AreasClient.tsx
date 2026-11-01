"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Home,
  MapPin,
  ArrowRight,
  Search,
  Building2,
  Sparkles,
  Phone,
} from "lucide-react";
import { areasList } from "@/utils/areasData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";
import { CLAIMS } from "@/data/claims";

export default function AreasClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAreas = useMemo(() => {
    return areasList.filter((area) => {
      const q = searchQuery.toLowerCase();
      return (
        area.name.toLowerCase().includes(q) ||
        area.overview.toLowerCase().includes(q) ||
        area.localities.some((loc) => loc.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#4A2C2A] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#2C1816] font-bold">Service Areas</span>
        </nav>

        {/* Page Header */}
        <div className="text-left max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF5ED] text-[#4A2C2A] border border-[#EAD9C8] text-xs font-bold rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
            <span>Bengaluru Coverage • Free Doorstep Inspection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C1816] tracking-tight leading-tight">
            Our 110 Service Areas in Bengaluru
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Bhagavath Safety Nets operates dedicated mobile installation teams across 110 residential and commercial neighborhoods in Bengaluru. Headquartered in Koramangala, we provide complimentary on-site measurements and certified installations backed by our {CLAIMS.warrantyLabel}.
          </p>
        </div>

        {/* Ticker */}
        <ServicePromoTicker />

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAD9C8] shadow-xs mb-10 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by neighborhood, area, or locality..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#EAD9C8] text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#E0A526] focus:ring-1 focus:ring-[#E0A526]"
            />
          </div>
          <span className="text-xs font-bold text-slate-500">
            Showing {filteredAreas.length} of {areasList.length} Key Hubs
          </span>
        </div>

        {/* Areas Grid (10 Quality Hubs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAreas.map((area) => (
            <div
              key={area.slug}
              className={`rounded-3xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between ${
                area.isHeadOffice
                  ? "bg-[#FAF5ED] border-[#E0A526] shadow-md ring-1 ring-[#E0A526]/50"
                  : "bg-white border-[#EAD9C8] shadow-xs hover:border-[#E0A526] hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E0A526]" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {area.isHeadOffice ? "Head Office Area" : "Service Area"}
                    </span>
                  </div>
                  {area.isHeadOffice && (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-[#E0A526] text-white px-2.5 py-0.5 rounded-full">
                      Head Office
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="hover:text-[#4A2C2A] transition-colors"
                  >
                    {area.name}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed font-normal">
                  {area.tagline}
                </p>

                {/* Localities Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {area.localities.slice(0, 4).map((loc) => (
                    <span
                      key={loc}
                      className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                    >
                      {loc}
                    </span>
                  ))}
                  {area.localities.length > 4 && (
                    <span className="text-[11px] font-medium text-slate-400 self-center">
                      +{area.localities.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#E0A526]" />
                  <span>Doorstep Inspection</span>
                </div>
                <Link
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4A2C2A] hover:text-[#E0A526] transition-colors"
                >
                  <span>Explore Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#2C1816] via-[#4A2C2A] to-[#6B4340] text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full text-xs font-bold text-[#FFF4DC] mb-4 border border-white/15">
            <Building2 className="w-4 h-4 text-[#E0A526]" />
            <span>Serving 10 Key Residential Sectors Across Bengaluru</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">
            Need a Doorstep Measurement in Your Locality?
          </h2>
          <p className="text-sm text-stone-200 max-w-xl mx-auto mb-6 leading-relaxed font-normal">
            Our technicians carry sample swatches of virgin copolymer netting and marine-grade SS316 cable wire. We provide free doorstep laser inspections across all 10 areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919900552179"
              className="inline-flex items-center justify-center gap-2 bg-[#E0A526] text-[#1A1A1A] font-extrabold px-6 py-3.5 rounded-full hover:bg-[#D4951E] text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#1A1A1A]" />
              <span>Call Technician: +91 99005 52179</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm border border-white/20 transition-all hover:scale-105"
            >
              <span>Book Site Visit Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

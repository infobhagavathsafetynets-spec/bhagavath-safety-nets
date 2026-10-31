"use client";

import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF5ED]/40 flex items-center justify-center p-6 text-center select-none">
      <div className="max-w-md bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-lg flex flex-col items-center gap-6">
        <div className="p-4 bg-[#FFF4DC] text-[#4A2C2A] rounded-2xl shadow-xs border border-[#E0A526]/30">
          <ShieldAlert className="w-12 h-12 text-[#E0A526]" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-4xl font-extrabold text-[#4A2C2A] tracking-tight font-heading">
            404
          </span>
          <h1 className="text-xl font-bold text-[#4A2C2A] font-heading">
            Page Not Found | Bhagavath Safety Nets Bengaluru
          </h1>
        </div>

        <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-sans">
          The page or installation guide you requested is unavailable or has moved. Return to our homepage or connect directly with our Bengaluru advisors.
        </p>

        <div className="flex flex-col w-full gap-3 pt-2">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-[#4A2C2A] hover:bg-[#6B4340] text-white font-bold py-3.5 rounded-xl transition-all shadow-xs text-xs font-sans"
          >
            <Home className="w-4 h-4 text-[#E0A526]" />
            <span>Return to Homepage</span>
          </Link>
          <a
            href="tel:+919900552179"
            className="w-full flex items-center justify-center gap-2 bg-[#FAF5ED] hover:bg-[#FFF4DC] text-[#4A2C2A] border border-stone-200 font-bold py-3 rounded-xl transition-all text-xs font-sans"
          >
            <Phone className="w-4 h-4 text-[#E0A526]" />
            <span>Call: +91 99005 52179</span>
          </a>
        </div>
      </div>
    </div>
  );
}

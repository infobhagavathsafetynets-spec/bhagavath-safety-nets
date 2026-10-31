"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("bhagavath_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("bhagavath_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("bhagavath_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-20 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-40 bg-[#4A2C2A] text-white p-5 rounded-2xl shadow-2xl border border-[#6B4340] backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" />
        <div className="text-xs text-stone-200 leading-relaxed font-sans">
          <p className="font-bold text-white mb-1 font-heading">Privacy &amp; Cookie Policy</p>
          <p>
            We use essential cookies to enhance site functionality and measure security. Read our{" "}
            <Link href="/privacy-policy" className="text-[#FFF4DC] hover:text-[#E0A526] underline font-bold">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2.5 mt-4 pt-3 border-t border-[#6B4340] font-sans">
        <button
          onClick={declineCookies}
          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          Decline
        </button>
        <button
          onClick={acceptCookies}
          className="px-4 py-1.5 rounded-lg text-xs font-black bg-[#E0A526] hover:bg-[#D4951E] text-[#1A1A1A] transition-colors shadow-xs cursor-pointer"
        >
          Accept
        </button>
      </div>
    </aside>
  );
}

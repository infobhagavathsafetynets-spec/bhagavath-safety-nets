"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Award,
  Clock4,
  CheckCircle,
  Sparkles,
  MapPin,
} from "lucide-react";
import { CLAIMS } from "@/data/claims";

export interface ServiceHeroProps {
  name: string;
  categoryName: string;
  title: string;
  subtitle: string;
  aiOverview: string;
  image: string;
}

export function ServiceHero({
  name,
  categoryName,
  title,
  subtitle,
  aiOverview,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-[#2C1816] text-white overflow-hidden py-16 lg:py-28">
      {/* Visual Scrim Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={`Bhagavath Safety Nets - ${name} installation view in Bengaluru`}
          fill
          priority
          sizes="100vw"
          className="object-cover filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1816]/95 via-[#2C1816]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1816]/90 via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl flex flex-col gap-5 items-start">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#E0A526] text-[#1A1A1A] text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md font-sans">
              Limited Period Offer
            </span>
            <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full font-sans">
              {CLAIMS.warrantyLabel} Card
            </span>
            <span className="bg-[#4A2C2A] text-[#FFF4DC] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#E0A526]/30 font-sans">
              Category: {categoryName}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-heading tracking-tight">
            {title}
          </h1>

          <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
            {subtitle}
          </p>

          {/* Technical Specs Callout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 max-w-2xl flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#E0A526] tracking-wider uppercase font-sans">
              <span className="w-2 h-2 rounded-full bg-[#E0A526] animate-pulse"></span>
              <span>Engineering & Specification Summary</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans font-medium">
              {aiOverview}
            </p>
          </motion.div>

          {/* Direct CTA Group */}
          <div className="flex flex-wrap gap-3.5 mt-2 w-full sm:w-auto">
            <a
              href="tel:+919900552179"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E0A526] text-[#1A1A1A] font-extrabold px-6 py-3.5 rounded-xl hover:bg-[#D4951E] transition-all shadow-md text-sm font-sans"
            >
              <PhoneCall className="w-4 h-4 text-[#1A1A1A]" />
              <span>Call Technician: +91 99005 52179</span>
            </a>

            <a
              href={`https://wa.me/919900552179?text=${encodeURIComponent(
                `Hello Bhagavath Safety Nets! I would like to schedule a site measurement for ${name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#1EBE5D] transition-all shadow-md text-sm font-sans"
            >
              <MessageCircle className="w-4 h-4 fill-white/10" />
              <span>WhatsApp Estimate</span>
            </a>

            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3.5 rounded-xl transition-all border border-white/30 backdrop-blur-xs text-sm font-sans"
            >
              <span>Book Site Survey</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceStickyBar({ name }: { name: string }) {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBar(window.scrollY > 450);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {showBar && (
        <motion.aside
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-2xl border-t border-stone-200 py-2.5 block"
          aria-label="Quick Action Bar"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm font-bold text-[#4A2C2A] tracking-tight font-heading">
                {name} Installation
              </span>
              <span className="bg-[#FFF4DC] text-[#4A2C2A] text-xs font-bold px-2 py-0.5 rounded-full border border-[#E0A526]/30">
                {CLAIMS.warrantyLabel}
              </span>
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto">
              <a
                href="tel:+919900552179"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 bg-[#E0A526] text-[#1A1A1A] font-extrabold px-4 py-2.5 rounded-lg hover:bg-[#D4951E] text-xs shadow-xs font-sans"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Advisor</span>
              </a>

              <a
                href={`https://wa.me/919900552179?text=${encodeURIComponent(
                  `Hello Bhagavath Safety Nets! I would like to schedule a survey for ${name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#1EBE5D] text-xs shadow-xs font-sans"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="#contact"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-1 bg-[#4A2C2A] hover:bg-[#6B4340] text-white font-bold px-4 py-2.5 rounded-lg text-xs shadow-xs font-sans"
              >
                <span>Book Survey</span>
              </Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export function ServiceTrustBar() {
  const trustCards = [
    { label: "New Booking Discount", icon: <Award className="w-4 h-4 text-[#E0A526]" /> },
    { label: `${CLAIMS.warrantyLabel} Certificate`, icon: <ShieldCheck className="w-4 h-4 text-[#E0A526]" /> },
    { label: "High-Rise Rigging Specialist", icon: <Sparkles className="w-4 h-4 text-[#E0A526]" /> },
    { label: "Fast Doorstep Inspection", icon: <Clock4 className="w-4 h-4 text-[#E0A526]" /> },
    { label: "10 Bengaluru Coverage Hubs", icon: <MapPin className="w-4 h-4 text-[#E0A526]" /> },
    { label: "Precision Laser Survey", icon: <CheckCircle className="w-4 h-4 text-[#E0A526]" /> },
  ];

  return (
    <section className="bg-[#FAF5ED] py-5 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {trustCards.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-2 bg-white rounded-xl shadow-xs border border-stone-200/70 justify-center md:justify-start"
            >
              <div className="p-1 bg-[#FFF4DC] rounded-lg shrink-0">
                {item.icon}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-[#3A3A3A] truncate font-sans">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

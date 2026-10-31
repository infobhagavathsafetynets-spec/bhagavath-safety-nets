"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, ChevronLeft, ChevronRight, Phone, MessageSquare, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { CLAIMS } from "@/data/claims";
import { CURRENT_OFFER, isOfferActive } from "@/data/offers";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  altText: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "High-Tensile Safety Netting &",
    highlight: "Balcony Protection in Bengaluru",
    subtitle: "Safeguard your family with UV-stabilized copolymer safety netting anchored into concrete slabs. Clean installation for multi-story apartment balconies across Bengaluru.",
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    altText: "Safety net fitted on a high-rise apartment balcony in Bengaluru",
    ctaText: "Explore Safety Nets",
    ctaLink: "/services/balcony-safety-nets",
    badge: "UV-Stabilized Copolymer • High Breaking Tension",
  },
  {
    id: 2,
    title: "Marine SS316 Invisible Grills &",
    highlight: "Unobstructed Skyline Views",
    subtitle: "High-tensile stainless steel wire cable systems fitted inside structural aluminium channels. Certified fall prevention with complete architectural transparency.",
    image: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    altText: "SS316 marine-grade invisible wire grills on high-rise apartment balcony in Bengaluru",
    ctaText: "Explore Invisible Grills",
    ctaLink: "/services/balcony-invisible-grills",
    badge: "SS316 Marine Grade • 100% Unhindered Views",
  },
  {
    id: 3,
    title: "Humane Bird Barrier &",
    highlight: "Pigeon Exclusion Netting",
    subtitle: "Prevent pigeon nesting and droppings on balconies and utility airshafts with translucent, weather-resistant barrier netting that complies with animal protection standards.",
    image: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    altText: "Humane anti-pigeon netting installed over apartment balcony in Bengaluru",
    ctaText: "Pigeon Netting Solutions",
    ctaLink: "/services/pigeon-safety-nets",
    badge: "Humane Bird Exclusion • Translucent Mesh",
  },
  {
    id: 4,
    title: "Ceiling Pulley Hoist Systems &",
    highlight: "Stainless Cloth Drying Racks",
    subtitle: "Dual-pulley stainless steel drying pipes that hoist laundry up to ceiling level effortlessly, reclaiming 100% of your usable balcony and utility floor area.",
    image: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    altText: "Ceiling-mounted stainless steel pulley cloth drying hoist system in Bengaluru home",
    ctaText: "Explore Cloth Hangers",
    ctaLink: "/services/ceiling-cloth-hangers",
    badge: "SS304 Rustproof Tubes • Reclaims Full Floor Space",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] bg-[#2C1816] overflow-hidden flex items-center">
      {/* Background Image Carousel with Smooth Fade */}
      {slides.map((s, idx) => {
        const isVisible = idx === current;
        const shouldLoadImage = idx === 0 || isVisible || Math.abs(idx - current) <= 1;

        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10"
            }`}
          >
            {shouldLoadImage && (
              <Image
                src={s.image}
                alt={s.altText}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
                quality={75}
              />
            )}
            {/* Espresso Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1816]/90 via-[#4A2C2A]/50 to-transparent sm:via-[#2C1816]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1816]/80 via-transparent to-black/30" />
          </div>
        );
      })}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-5 text-left">
            {/* Top Badges: Offer + 10-Year Warranty */}
            <div className="flex flex-wrap items-center gap-2.5">
              {isOfferActive() && (
                <div className="inline-flex items-center gap-1.5 bg-[#E0A526] text-[#1A1A1A] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  <span>{CURRENT_OFFER.title} on Installation</span>
                </div>
              )}
              <Link
                href={CLAIMS.warrantyTerms.termsUrl}
                className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/55 backdrop-blur-md border border-white/20 text-[#FFF4DC] px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm transition-colors group"
              >
                <Award className="w-4 h-4 text-[#E0A526]" />
                <span>{CLAIMS.warrantyLabel}</span>
                <span className="text-white/70 group-hover:text-white underline text-[11px] ml-1">Warranty terms</span>
              </Link>
            </div>

            {/* Dynamic Main Headline */}
            <div className="flex flex-col gap-1 transition-all duration-300">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-md">
                {slide.title}{" "}
                <span className="text-[#E0A526]">
                  {slide.highlight}
                </span>
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed drop-shadow-sm font-normal">
              {slide.subtitle}
            </p>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-white/95 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0A526] shrink-0" />
                <span>Free On-Site Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0A526] shrink-0" />
                <Link href={CLAIMS.warrantyTerms.termsUrl} className="font-bold text-[#FFF4DC] hover:underline">
                  {CLAIMS.warrantyLabel}
                </Link>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#E0A526] shrink-0" />
                <span className="text-slate-200">SS316 Marine Hardware</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-4">
              {/* Primary Action Button (Mustard with Dark Text for WCAG AAA) */}
              <Link
                href="/contact"
                className="bg-[#E0A526] hover:bg-[#EDB943] text-[#1A1A1A] font-extrabold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-[0_8px_20px_rgba(224,165,38,0.35)] flex items-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Site Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+919900552179"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-md border border-white/25 transition-all duration-300 flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#E0A526]" />
                <span>Call +91 99005 52179</span>
              </a>

              {/* WhatsApp Quick Quote */}
              <a
                href="https://wa.me/919900552179?text=Hi%20Bhagavath%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20a%20free%20site%20visit%20for%20safety%20nets."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold p-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="WhatsApp Inquiry"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Floating Specifications Card (Right Column Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="bg-[#2C1816]/80 backdrop-blur-xl border border-white/15 p-6 rounded-3xl text-white shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 border border-white/10 rounded-2xl text-[#E0A526]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">Certified Standards</div>
                  <p className="text-xs text-[#FAF5ED]/80">Bengaluru High-Rise Safety Specialist</p>
                </div>
              </div>

              {/* Verified Warranty Callout in Card */}
              <div className="bg-[#E0A526]/15 border border-[#E0A526]/40 rounded-2xl p-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#FFF4DC]">Official Guarantee</span>
                <Link href={CLAIMS.warrantyTerms.termsUrl} className="text-xs font-bold text-[#E0A526] hover:underline">
                  {CLAIMS.warrantyLabel}
                </Link>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-slate-200">
                <div className="flex justify-between items-center">
                  <span>Hardware Metallurgy</span>
                  <span className="font-bold text-[#E0A526] text-sm">SS316 Marine Grade</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Netting Polymer</span>
                  <span className="font-bold text-[#E0A526] text-sm">UV-Stabilized HDPE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Site Assessment</span>
                  <span className="font-bold text-[#E0A526] text-sm">Free Doorstep Visit</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Service Areas</span>
                  <span className="font-bold text-[#E0A526] text-sm">10 Key Bengaluru Hubs</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full text-center bg-[#E0A526] hover:bg-[#EDB943] text-[#1A1A1A] font-extrabold text-xs py-3 rounded-xl transition-all shadow-md"
              >
                Book Doorstep Measurement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 z-20 flex items-center gap-1">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrent(idx);
            }}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 cursor-pointer transition-transform hover:scale-110"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-300 block ${
                idx === current ? "w-8 bg-[#E0A526]" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

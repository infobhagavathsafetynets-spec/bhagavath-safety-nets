"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Award,
} from "lucide-react";
import { CLAIMS } from "@/data/claims";
import ContactForm from "@/components/forms/ContactForm";

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  serviceCategory: string;
  image: string;
  altText: string;
  challenge: string;
  solution: string;
  result: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Balcony Perimeter Safety for High-Rise Apartment",
    location: "Whitefield, Bengaluru",
    serviceCategory: "Balcony Safety Nets",
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    altText: "Safety net fitted on a high-rise apartment balcony in Bengaluru",
    challenge:
      "A high-rise corner apartment had wide railing openings that presented a fall hazard for toddlers and small pets without blocking air circulation.",
    solution:
      "Installed high-density UV-stabilized copolymer safety netting anchored with stainless expansion eyebolts directly into concrete pillars at uniform tension intervals.",
    result:
      "Provided continuous edge protection with zero balcony view hindrance, securely tensioned and inspected for child safety compliance.",
  },
  {
    id: 2,
    title: "Skyline View Invisible Grills for Apartment Balcony",
    location: "Koramangala, Bengaluru",
    serviceCategory: "Balcony Invisible Grills",
    image: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    altText: "SS316 marine-grade invisible wire grills on high-rise apartment balcony in Bengaluru",
    challenge:
      "Homeowners sought complete fall protection for children while maintaining an unobstructed skyline view, avoiding bulky and restrictive traditional iron grills.",
    solution:
      "Installed marine-grade SS316 multi-strand stainless steel cable invisible grills spaced at child-safe 2-inch intervals within structural aluminium track channels.",
    result:
      "Maintained clear, unhindered architectural visibility while delivering high tensile strength and long-term rust resistance.",
  },
  {
    id: 3,
    title: "Plumbing Duct Shaft Pigeon Intrusion Exclusion",
    location: "Indiranagar, Bengaluru",
    serviceCategory: "Pigeon Safety Nets",
    image: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-2.webp",
    altText: "Humane anti-pigeon netting installed over apartment building duct shaft in Bengaluru",
    challenge:
      "Pigeons roosting across open vertical plumbing shafts were creating persistent sanitation and odor issues near bathroom vents and utility spaces.",
    solution:
      "Fitted translucent, heavy-gauge anti-bird netting from rooftop anchors downward, sealing open duct perimeters without restricting natural airflow.",
    result:
      "Completely excluded bird roosting across the vertical opening while preserving full maintenance access and natural ventilation.",
  },
  {
    id: 4,
    title: "Balcony Space Optimization with Ceiling Cloth Drying System",
    location: "HSR Layout, Bengaluru",
    serviceCategory: "Ceiling Cloth Hangers",
    image: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    altText: "Ceiling-mounted stainless steel pulley cloth drying hoist system in Bengaluru home",
    challenge:
      "A residential balcony was cluttered with folding floor stands that consumed walking space and blocked natural light into the living room.",
    solution:
      "Mounted an independent 6-pipe stainless steel ceiling cloth drying hoist system featuring nylon pulley bearings and stainless steel ropes.",
    result:
      "Restored 100% of usable floor area by hoisting wet laundry smoothly up to ceiling level where airflow dries clothes faster.",
  },
];

export default function CaseStudiesClient() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-800 transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4 text-[#E0A526]" />
            <span>Home</span>
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-[#4A2C2A] font-semibold">Case Studies</span>
        </nav>

        {/* Hero Banner Header */}
        <div className="bg-gradient-to-r from-[#2C1816] via-[#4A2C2A] to-[#2C1816] text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden border border-[#5A3633]">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-[#E0A526]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E0A526] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E0A526]/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" /> Technical Execution
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Installation Projects &amp; Case Studies in Bengaluru
          </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
              Review how Bhagavath Safety Nets implements structural fall-prevention barriers, bird exclusion systems, and space-saving cloth drying hoists across Bengaluru residences.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/15 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E0A526]" />
                <span>{CLAIMS.warrantyLabel} Backed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E0A526]" />
                <span>SS316 &amp; High-Density Copolymer Materials</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12 mb-16">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAD9C8] shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Case Study Image */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[380px] bg-slate-100 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.altText}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#4A2C2A]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm self-start">
                    {study.serviceCategory}
                  </span>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E0A526]" />
                    <span>{study.location}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-6">
                    {study.title}
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* The Problem */}
                    <div className="bg-[#FAF5ED] border border-[#EAD9C8] rounded-2xl p-4 flex gap-3 text-slate-700">
                      <AlertTriangle className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2C1816] block mb-1">Site Challenge:</strong>
                        <p className="leading-relaxed">{study.challenge}</p>
                      </div>
                    </div>

                    {/* The Solution */}
                    <div className="bg-[#FAF5ED] border border-[#EAD9C8] rounded-2xl p-4 flex gap-3 text-slate-700">
                      <Lightbulb className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2C1816] block mb-1">Installation Method:</strong>
                        <p className="leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* The Result */}
                    <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-2xl p-4 flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2C1816] block mb-1">Technical Outcome:</strong>
                        <p className="leading-relaxed">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Backed by {CLAIMS.warrantyLabel}</span>
                  <Link href="/terms-and-conditions#warranty" className="text-[#4A2C2A] font-semibold hover:underline">
                    Warranty terms
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Inclusion */}
        <ContactForm />
      </div>
    </div>
  );
}

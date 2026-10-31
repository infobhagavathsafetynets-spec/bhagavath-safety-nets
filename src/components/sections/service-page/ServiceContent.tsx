"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ShieldAlert, Wrench, ShieldCheck, HelpCircle } from "lucide-react";
import { SpecItem } from "@/utils/servicesData";

interface AboutProps {
  name: string;
  longDescription: string;
  benefits: string[];
}

export function ServiceAbout({ name, longDescription, benefits }: AboutProps) {
  return (
    <section className="bg-white py-20 scroll-mt-12" id="about-service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Narrative (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start font-sans">
                Technical Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
                Architectural Integration &amp; Fall Protection
              </h2>
            </div>
            <p className="text-[#3A3A3A] text-sm sm:text-base leading-relaxed font-sans">
              {longDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <div className="flex flex-col gap-2.5 bg-[#FAF5ED]/60 p-5 rounded-2xl border border-stone-200">
                <div className="flex items-center gap-2 font-bold text-[#4A2C2A] text-sm font-heading">
                  <ShieldAlert className="w-4.5 h-4.5 text-[#E0A526]" />
                  <span>Target Applications</span>
                </div>
                <p className="text-[#666666] text-xs leading-relaxed font-sans">
                  Recommended for multi-story residential towers, homes with toddlers or energetic pets, and balconies facing active pigeon flyways.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 bg-[#FAF5ED]/60 p-5 rounded-2xl border border-stone-200">
                <div className="flex items-center gap-2 font-bold text-[#4A2C2A] text-sm font-heading">
                  <Wrench className="w-4.5 h-4.5 text-[#E0A526]" />
                  <span>Care &amp; Longevity</span>
                </div>
                <p className="text-[#666666] text-xs leading-relaxed font-sans">
                  Crafted with UV-stabilized copolymer or nylon-coated SS316 wire. Wipe down periodically with water; anchor points remain maintenance-free.
                </p>
              </div>
            </div>
          </div>

          {/* Bulleted Capabilities (Right) */}
          <div className="lg:col-span-5 bg-[#FAF5ED]/70 rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col gap-5">
            <h3 className="text-lg font-bold text-[#4A2C2A] font-heading flex items-center gap-2 border-b border-stone-200 pb-3">
              <ShieldCheck className="w-5 h-5 text-[#E0A526]" />
              <span>Functional Advantages</span>
            </h3>
            <ul className="space-y-3.5">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#3A3A3A] font-sans">
                  <div className="p-1 bg-[#FFF4DC] text-[#4A2C2A] rounded-md shrink-0 mt-0.5 border border-[#E0A526]/30">
                    <Check className="w-3.5 h-3.5 text-[#E0A526]" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ImageCollageProps {
  name: string;
  image: string;
  supportingImages: string[];
}

export function ServiceImages({ name, image, supportingImages }: ImageCollageProps) {
  const imagesList = [image, ...supportingImages].slice(0, 5);

  return (
    <section className="bg-[#FAF5ED]/40 py-20 scroll-mt-12" id="collage-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center font-sans">
            Workmanship Views
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
            On-Site Installation Showcase
          </h2>
        </div>

        {/* 5-Image Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[560px]">
          {/* Main Primary View */}
          <div className="md:col-span-1 relative h-80 md:h-full rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
            <Image
              src={imagesList[0]}
              alt={`Bhagavath Safety Nets - ${name} installation overview in Bengaluru`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
              quality={80}
            />
            <div className="absolute bottom-4 left-4 bg-[#2C1816]/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 font-sans">
              Main Elevation View
            </div>
          </div>

          {/* 4 Detail Snaps */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6 h-full">
            {imagesList.slice(1, 5).map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-40 md:h-full rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100"
              >
                <Image
                  src={imgUrl}
                  alt={`Bhagavath Safety Nets - ${name} technical detail ${idx + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={80}
                />
                <div className="absolute bottom-3 left-3 bg-[#2C1816]/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded-md capitalize border border-white/10 font-sans">
                  {idx === 0 ? "Mesh Caliber" : idx === 1 ? "Concrete Anchor" : idx === 2 ? "Tension Gauge" : "Finished Edge"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitsProps {
  benefits: string[];
}

export function ServiceBenefits({ benefits }: BenefitsProps) {
  return (
    <section className="bg-white py-20 scroll-mt-12" id="benefits-service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center font-sans">
            Value Delivered
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
            Key Installation Attributes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#FAF5ED]/50 p-6 rounded-2xl border border-stone-200 flex items-start gap-4 hover:shadow-md hover:border-[#E0A526]/50 transition-all duration-300 group"
            >
              <div className="p-2.5 bg-white border border-stone-200 text-[#E0A526] rounded-xl shrink-0 group-hover:bg-[#E0A526] group-hover:text-[#1A1A1A] transition-colors duration-300">
                <Check className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-[#4A2C2A] font-heading">{benefit}</h3>
                <p className="text-[#666666] text-xs leading-relaxed font-sans">
                  Crafted to withstand high wind loads while safeguarding family members and property.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SpecsProps {
  specsTable: SpecItem[];
}

export function ServiceSpecs({ specsTable }: SpecsProps) {
  return (
    <section className="bg-[#FAF5ED]/40 py-20 scroll-mt-12" id="specs-service">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center font-sans">
            Engineering Data
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
            Hardware &amp; Quality Parameters
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
            <thead>
              <tr className="bg-[#4A2C2A] text-white font-bold">
                <th className="p-4 sm:p-5 font-heading">Structural Metric</th>
                <th className="p-4 sm:p-5 font-heading">Certified Specification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {specsTable.map((spec, idx) => (
                <tr key={idx} className="hover:bg-[#FAF5ED]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#4A2C2A] uppercase tracking-wide text-[10px] sm:text-xs">
                    {spec.label}
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#3A3A3A]">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

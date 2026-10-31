"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Phone,
  MessageSquare,
  Shield,
  Eye,
  Settings,
} from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";
import { CLAIMS } from "@/data/claims";
import { PRICING_DISCLAIMER } from "@/data/pricing";

const verticalClusters = [
  {
    id: "safety-nets",
    title: "Balcony & Perimeter Netting",
    tagline: "Virgin Copolymer Fall Defense & Bird Exclusion",
    summary:
      "Engineered for high-rise apartment living, toddler security, companion animal safety, and humane bird management across Bengaluru.",
    icon: Shield,
    services: [
      servicesData["balcony-safety-nets"],
      servicesData["children-safety-nets"],
      servicesData["pet-safety-nets"],
      servicesData["pigeon-safety-nets"],
      servicesData["duct-area-safety-nets"],
    ].filter(Boolean),
  },
  {
    id: "invisible-grills",
    title: "Marine SS316 Wire Grills",
    tagline: "Minimalist High-Tensile Stainless Cable Barriers",
    summary:
      "Unobstructed panoramic exterior views paired with heavy load-bearing tension for balconies and sliding window casements.",
    icon: Eye,
    services: [
      servicesData["balcony-invisible-grills"],
      servicesData["window-invisible-grills"],
    ].filter(Boolean),
  },
  {
    id: "cloth-hangers",
    title: "Ceiling Laundry Hoists",
    tagline: "Space-Saving Overhead Pulley Systems",
    summary:
      "Reclaim full floor area on your utility balcony using smooth dual-rope pulley mechanisms and rust-resistant stainless pipes.",
    icon: Settings,
    services: [
      servicesData["ceiling-cloth-drying-hangers"],
    ].filter(Boolean),
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF5ED]/50 scroll-mt-12" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFF4DC] text-[#4A2C2A] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#E0A526]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A526]" />
            <span>Primary Service Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1816] font-heading tracking-tight leading-tight">
            Specialized Installation Catalog
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#666666] leading-relaxed font-sans">
            Explore our confirmed installation options across Bengaluru. Every installation includes a complimentary doorstep measurement, genuine hardware, and our official {CLAIMS.warrantyLabel}. {PRICING_DISCLAIMER}
          </p>

          {/* Quick Jump Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {verticalClusters.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <a
                  key={cluster.id}
                  href={`#${cluster.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 hover:border-[#E0A526] text-[#3A3A3A] hover:text-[#4A2C2A] text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer font-sans"
                >
                  <Icon className="w-3.5 h-3.5 text-[#E0A526]" />
                  <span>{cluster.title}</span>
                  <span className="bg-[#FAF5ED] text-[#4A2C2A] text-[10px] font-bold px-2 py-0.5 rounded-full border border-stone-200">
                    {cluster.services.length}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Promo Ticker */}
        <ServicePromoTicker />

        {/* Category Clusters */}
        <div className="space-y-16 mt-8">
          {verticalClusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div key={cluster.id} id={cluster.id} className="scroll-mt-24">
                {/* Header Bar */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#4A2C2A] text-[#E0A526] flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#2C1816] font-heading">
                          {cluster.title}
                        </h3>
                        <span className="bg-[#FFF4DC] text-[#4A2C2A] border border-[#E0A526]/40 text-xs font-bold px-2.5 py-0.5 rounded-full">
                          {cluster.services.length} Services
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#666666] font-medium mt-1 font-sans">
                        {cluster.tagline}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/services/${cluster.id}`}
                    aria-label={`View ${cluster.title} services`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A2C2A] hover:text-[#E0A526] transition-colors self-start md:self-auto font-sans"
                  >
                    <span>View Category Details</span>
                    <ArrowRight className="w-4 h-4 text-[#E0A526]" />
                  </Link>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cluster.services.map((service, idx) => (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (idx % 3) * 0.05 }}
                      className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl hover:border-[#E0A526] transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Card Image */}
                        <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                          <Image
                            src={service.image}
                            alt={`${service.name} installation for apartments in Bengaluru`}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            quality={80}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3 bg-[#2C1816]/90 backdrop-blur-xs text-[#FFF4DC] text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 border border-white/10">
                            <ShieldCheck className="w-3 h-3 text-[#E0A526]" />
                            <span>{service.categoryName}</span>
                          </div>

                          <Link
                            href={CLAIMS.warrantyTerms.termsUrl}
                            className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#4A2C2A] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 hover:text-[#E0A526] transition-colors border border-stone-200"
                            title="View warranty terms"
                          >
                            <Shield className="w-3 h-3 text-[#E0A526]" />
                            <span>{CLAIMS.warrantyLabel}</span>
                          </Link>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h4 className="text-base font-bold text-[#4A2C2A] font-heading mb-2 group-hover:text-[#6B4340] transition-colors leading-snug">
                            <Link href={`/services/${service.slug}`}>
                              {service.name}
                            </Link>
                          </h4>
                          <p className="text-xs text-[#666666] leading-relaxed mb-4 line-clamp-2 font-sans">
                            {service.description}
                          </p>

                          {/* 3 Key Benefits */}
                          <ul className="space-y-1.5 mb-4">
                            {service.benefits.slice(0, 3).map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-medium text-[#3A3A3A] font-sans">
                                <Check className="w-3.5 h-3.5 text-[#E0A526] shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer CTAs */}
                      <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between gap-3 mt-auto">
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-1 text-xs font-bold text-[#4A2C2A] hover:text-[#E0A526] transition-colors font-sans"
                        >
                          <span>Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <a
                          href={`https://wa.me/919900552179?text=${encodeURIComponent(
                            `Hello Bhagavath Safety Nets! I would like to get a quote for ${service.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-xs"
                          aria-label={`WhatsApp quote for ${service.name}`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

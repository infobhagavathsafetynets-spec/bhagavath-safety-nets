import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Home, ShieldCheck, Tag } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";
import { CLAIMS } from "@/data/claims";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Nets in Bengaluru | Bhagavath Safety Nets",
  description:
    "High-tensile UV copolymer safety nets for balconies, pigeons, children, and pets. Expert installation in Bengaluru with our written 10-year warranty.",
  alternates: {
    canonical: "/services/safety-nets",
  },
  openGraph: {
    title: "Safety Nets in Bengaluru | Bhagavath Safety Nets",
    description:
      "High-tensile UV copolymer safety nets for balconies, pigeons, children, and pets across Bengaluru with written warranty.",
    url: "https://bhagavathsafetynets.com/services/safety-nets",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Balcony and Pigeon Safety Nets Bengaluru - Bhagavath Safety Nets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets in Bengaluru | Bhagavath Safety Nets",
    description:
      "High-tensile UV copolymer safety nets for apartment balconies and windows in Bengaluru.",
    images: ["/images/og-image.webp"],
  },
};

export default function SafetyNetsHub() {
  const safetySolutions = [
    servicesData["balcony-safety-nets"],
    servicesData["pigeon-safety-nets"],
    servicesData["children-safety-nets"],
    servicesData["pet-safety-nets"],
  ].filter(Boolean);

  const hubBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bhagavathsafetynets.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://bhagavathsafetynets.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Safety Nets",
        "item": "https://bhagavathsafetynets.com/services/safety-nets",
      },
    ],
  };

  return (
    <div className="bg-[#FAF5ED]/30 min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubBreadcrumbs) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Path */}
        <nav className="flex items-center gap-1.5 text-xs font-medium text-stone-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#4A2C2A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link href="/services" className="hover:text-[#4A2C2A] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[#4A2C2A] font-bold">Safety Nets</span>
        </nav>

        {/* Section Header */}
        <header className="max-w-3xl mb-8 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4A2C2A] bg-[#FFF4DC] border border-[#E0A526]/30 px-3.5 py-1.5 rounded-full inline-block self-start font-sans">
            High-Rise Protective Barrier Mesh
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Balcony Safety Nets & Bird Netting in Bengaluru
          </h1>
          <p className="text-[#3A3A3A] text-sm sm:text-base leading-relaxed font-sans">
            Secure high-rise apartment openings, open utility balconies, and building ducts against accidental falls and invasive urban birds. We anchor weather-tested nylon polymer filaments using stainless hardware across Bengaluru communities, certified with our official {CLAIMS.warrantyLabel} card.
          </p>
        </header>

        {/* Highlight Banner */}
        <ServicePromoTicker />

        {/* Solution Cards */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] font-heading mb-6">
            Available Protective Netting Options
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetySolutions.map((item) => (
              <article
                key={item.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-stone-200/90 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-56 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Bhagavath Safety Nets - ${item.name} installation view in Bengaluru`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    quality={80}
                  />
                  <div className="absolute top-3 right-3 bg-[#E0A526] text-[#1A1A1A] text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs flex items-center gap-1 font-sans">
                    <Tag className="w-3 h-3" />
                    <span>Special Offer</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#4A2C2A] text-[10px] font-bold px-2.5 py-1 rounded shadow-xs flex items-center gap-1 border border-stone-200 font-sans">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E0A526]" />
                    <span>{CLAIMS.warrantyLabel}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-[#4A2C2A] font-heading mb-2 group-hover:text-[#6B4340] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#666666] text-xs leading-relaxed mb-5 flex-grow font-sans">
                    {item.description}
                  </p>
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A2C2A] group-hover:text-[#E0A526] transition-colors pt-3 border-t border-stone-100 mt-auto font-sans"
                  >
                    <span>Read Details & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

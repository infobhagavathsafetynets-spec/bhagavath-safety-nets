import Link from "next/link";
import Image from "next/image";
import { Shield, Eye, Settings, ArrowRight, Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";
import { CLAIMS } from "@/data/claims";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Safety Nets & Grills Services in Bengaluru | Bhagavath",
  },
  description:
    "Balcony safety nets, anti-pigeon netting, SS316 invisible grills & ceiling cloth drying systems installed across Bengaluru by Bhagavath.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Installation Services | Bhagavath Safety Nets Bengaluru",
    description:
      "Explore balcony safety nets, SS316 invisible wire grills, and ceiling cloth drying systems across Bengaluru with written warranty.",
    url: "https://bhagavathsafetynets.com/services",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Services | Bhagavath Safety Nets Bengaluru",
    description:
      "Explore balcony safety nets, SS316 invisible wire grills, and ceiling cloth drying systems across Bengaluru.",
    images: ["/images/og-image.webp"],
  },
};

export default function ServicesPage() {
  const activeCatalog = Object.values(servicesData);
  const totalNetCount = activeCatalog.filter((item) => item.category === "safety-nets").length;
  const totalGrillCount = activeCatalog.filter((item) => item.category === "invisible-grills").length;
  const totalHangerCount = activeCatalog.filter((item) => item.category === "cloth-hangers").length;

  const verticalSections = [
    {
      id: "safety-nets",
      label: `Safety Netting (${totalNetCount} Services)`,
      icon: <Shield className="w-5 h-5 text-[#E0A526]" />,
      summary: "UV-stabilized virgin copolymer meshes providing fall security and humane bird exclusion for apartment balconies and open shafts.",
      items: activeCatalog.filter((item) => item.category === "safety-nets"),
    },
    {
      id: "invisible-grills",
      label: `SS316 Invisible Grills (${totalGrillCount} Services)`,
      icon: <Eye className="w-5 h-5 text-[#E0A526]" />,
      summary: "Architectural marine-grade stainless cable barriers delivering high tensile fall protection while keeping panoramic views open.",
      items: activeCatalog.filter((item) => item.category === "invisible-grills"),
    },
    {
      id: "cloth-hangers",
      label: `Cloth Drying Systems (${totalHangerCount} Services)`,
      icon: <Settings className="w-5 h-5 text-[#E0A526]" />,
      summary: "Ceiling-mounted pulley mechanisms and stainless drying pipes engineered to maximize balcony floor space utility.",
      items: activeCatalog.filter((item) => item.category === "cloth-hangers"),
    },
  ];

  const breadcrumbSchema = {
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
    ],
  };

  return (
    <div className="bg-[#FAF5ED]/30 min-h-screen py-12">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation UI */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#666666] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#4A2C2A] font-bold">Services</span>
        </nav>

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start font-sans">
            Specialized Installation Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Balcony Safety Nets &amp; Invisible Grills in Bengaluru
          </h1>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
            Browse our 19 verified residential installations across Bengaluru. Backed by complimentary laser measurements, physical material samples, and our official {CLAIMS.warrantyLabel} card.
          </p>
        </div>

        {/* Scrolling Ticker */}
        <ServicePromoTicker />

        {/* Category Verticals Loop */}
        <div className="flex flex-col gap-16 mt-8">
          {verticalSections.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              {/* Category Header */}
              <div className="border-b border-stone-200 pb-5 mb-8">
                <h2 className="text-2xl font-extrabold text-[#4A2C2A] font-heading flex items-center gap-3">
                  <span className="p-2.5 bg-white rounded-2xl shadow-xs border border-stone-200 shrink-0">
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </h2>
                <p className="text-[#666666] text-sm mt-2 max-w-2xl font-sans">{cat.summary}</p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((service) => (
                  <div
                    key={service.slug}
                    className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-lg border border-stone-200/80 transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="relative h-60 w-full bg-stone-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`Bhagavath Safety Nets - ${service.name} installation view in Bengaluru`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        quality={80}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E0A526] block mb-1 font-sans">
                        {service.categoryName}
                      </span>
                      <h3 className="text-lg font-bold text-[#4A2C2A] font-heading mb-2 group-hover:text-[#6B4340] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-[#666666] text-xs leading-relaxed mb-6 flex-grow font-sans">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A2C2A] group-hover:text-[#E0A526] transition-colors group/btn pt-4 border-t border-stone-100 mt-auto font-sans"
                      >
                        <span>View Engineering Specs</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

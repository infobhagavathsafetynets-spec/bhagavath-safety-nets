import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Home, ShieldCheck, Tag } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";
import { CLAIMS } from "@/data/claims";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloth Drying Hangers in Bengaluru | Bhagavath Nets",
  description:
    "Space-saving ceiling cloth drying hangers and pulley systems for apartment balconies in Bengaluru. Stainless steel rods with our 10-year warranty.",
  alternates: {
    canonical: "/services/cloth-hangers",
  },
  openGraph: {
    title: "Cloth Drying Hangers in Bengaluru | Bhagavath Nets",
    description:
      "Space-saving ceiling cloth drying hangers and pulley systems for apartment balconies in Bengaluru.",
    url: "https://bhagavathsafetynets.com/services/cloth-hangers",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ceiling Cloth Hangers Bengaluru - Bhagavath Safety Nets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloth Drying Hangers in Bengaluru | Bhagavath Nets",
    description:
      "Space-saving ceiling cloth drying hangers installed across Bengaluru with written warranty.",
    images: ["/images/og-image.webp"],
  },
};

export default function ClothHangersHub() {
  const hangerSolutions = Object.values(servicesData).filter((s) => s.category === "cloth-hangers");

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
        "name": "Cloth Hangers",
        "item": "https://bhagavathsafetynets.com/services/cloth-hangers",
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
          <span className="text-[#4A2C2A] font-bold">Cloth Hangers</span>
        </nav>

        {/* Section Header */}
        <header className="max-w-3xl mb-8 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4A2C2A] bg-[#FFF4DC] border border-[#E0A526]/30 px-3.5 py-1.5 rounded-full inline-block self-start font-sans">
            Balcony Floor Space Recovery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Ceiling Cloth Drying Hangers in Bengaluru
          </h1>
          <p className="text-[#3A3A3A] text-sm sm:text-base leading-relaxed font-sans">
            Free up 100% of your balcony walking area by moving daily laundry upwards. Our heavy-duty ceiling-hung individual pulley hoists utilize high-tensile nylon cords and rust-free stainless steel rods to accelerate drying in natural ceiling airflow, backed by our {CLAIMS.warrantyLabel} card.
          </p>
        </header>

        {/* Banner */}
        <ServicePromoTicker />

        {/* Options Grid */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] font-heading mb-6">
            Ceiling-Mounted Pulley Drying Systems
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hangerSolutions.map((item) => (
              <article
                key={item.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-stone-200/90 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-60 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Bhagavath Safety Nets - ${item.name} installation view in Bengaluru`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#4A2C2A] font-heading mb-2 group-hover:text-[#6B4340] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#666666] text-xs leading-relaxed mb-6 flex-grow font-sans">
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

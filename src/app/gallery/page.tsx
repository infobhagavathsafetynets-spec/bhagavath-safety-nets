import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import GalleryFilterClient from "./GalleryFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Installation Gallery | Bhagavath Safety Nets Bengaluru",
  },
  description:
    "Visual portfolio of safety nets, invisible grills, and ceiling cloth hangers installed across high-rise apartments in Bengaluru.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Installation Gallery | Bhagavath Safety Nets Bengaluru",
    description:
      "Visual portfolio of safety nets, invisible grills, and ceiling cloth hangers installed across high-rise apartments in Bengaluru.",
    url: "https://bhagavathsafetynets.com/gallery",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Installation Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Gallery | Bhagavath Safety Nets Bengaluru",
    description:
      "Visual portfolio of safety nets, invisible grills, and ceiling cloth hangers installed across high-rise apartments in Bengaluru.",
    images: ["/images/og-image.webp"],
  },
};

export default function GalleryPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Gallery", item: "/gallery" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Photo Gallery | Bhagavath Safety Nets",
    url: "https://bhagavathsafetynets.com/gallery",
    description: "Visual portfolio of safety netting, invisible grills, and ceiling cloth hangers across residential apartments in Bengaluru.",
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Gallery</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start">
            Visual Proof
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Safety Nets &amp; Invisible Grills Gallery in Bengaluru
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Browse through real photographs of Bhagavath Safety Nets installations across Bengaluru. Includes balcony safety nets, SS316 invisible wire grills, ceiling cloth drying hoists, and hardware details.
          </p>
        </div>

        {/* Dynamic client filter page */}
        <GalleryFilterClient />
      </div>
    </div>
  );
}

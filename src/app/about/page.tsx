import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, Wrench, Sparkles, CheckCircle2, Building, HeartHandshake } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import { SITE_URL } from "@/utils/constants";
import { CLAIMS } from "@/data/claims";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | Bhagavath Safety Nets Bengaluru",
  },
  description:
    "Learn about Bhagavath Safety Nets in Bengaluru. Specialist balcony fall prevention, pigeon nets, and SS316 invisible grills with 10-year warranty.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Bhagavath Safety Nets | Bengaluru Balcony Specialists",
    description:
      "Specialized balcony safety netting, SS316 marine wire grills, and ceiling cloth drying systems installed across Bengaluru.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About Bhagavath Safety Nets Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bhagavath Safety Nets | Bengaluru Balcony Specialists",
    description:
      `Specialized balcony safety netting, SS316 marine wire grills, and ceiling cloth drying systems installed across Bengaluru.`,
    images: ["/images/og-image.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-[#FAF5ED]/30 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#666666] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#4A2C2A] font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-14 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#E0A526]/30 font-sans">
            Our Purpose &amp; Craft
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Protecting Urban Balconies Across Bengaluru
          </h1>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
            Bhagavath Safety Nets delivers dependable residential perimeter security. We help families in multi-tier apartment communities enjoy open outdoor living spaces with complete peace of mind.
          </p>
        </div>

        {/* Split Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Main Narrative (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-[#4A2C2A] font-heading border-b border-stone-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E0A526] shrink-0" />
                <span>Engineered for High-Rise Peace of Mind</span>
              </h2>
              <p className="text-[#3A3A3A] text-sm leading-relaxed font-sans">
                Modern apartment towers throughout Bengaluru feature wide, picturesque balconies and tall fenestrations designed to welcome natural daylight and cross-ventilation. However, these elevated spaces also introduce genuine safety concerns for households with toddlers, curious pets, or visiting elders. Concurrently, urban pigeon populations frequently claim balcony corners, generating unsanitary droppings and health hazards.
              </p>
              <p className="text-[#3A3A3A] text-sm leading-relaxed font-sans">
                Bhagavath Safety Nets was created to resolve these vulnerabilities through clean, non-obtrusive engineering. Rather than installing heavy iron barriers that darken living areas and evoke an enclosed cage feeling, we utilize translucent UV-stabilized copolymer safety netting and architectural SS316 multi-strand stainless invisible wire grills. Our installations maintain 100% natural ventilation and panoramic city views while establishing robust, anchor-certified protection.
              </p>
            </div>

            {/* Guiding Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FFF4DC] rounded-xl text-[#4A2C2A] self-start border border-[#E0A526]/30">
                  <Wrench className="w-5 h-5 text-[#E0A526]" />
                </div>
                <h3 className="text-sm font-bold text-[#4A2C2A] font-heading">Secure Anchoring</h3>
                <p className="text-[#666666] text-xs leading-relaxed font-sans">
                  We use stainless expansion eyebolts driven securely into concrete lintels to ensure unwavering perimeter hold under lateral tension.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FFF4DC] rounded-xl text-[#4A2C2A] self-start border border-[#E0A526]/30">
                  <Sparkles className="w-5 h-5 text-[#E0A526]" />
                </div>
                <h3 className="text-sm font-bold text-[#4A2C2A] font-heading">Marine SS316 Grade</h3>
                <p className="text-[#666666] text-xs leading-relaxed font-sans">
                  Our invisible grills feature authentic molybdenum-bearing marine stainless cable wrapped in protective nylon to prevent surface oxidation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FFF4DC] rounded-xl text-[#4A2C2A] self-start border border-[#E0A526]/30">
                  <HeartHandshake className="w-5 h-5 text-[#E0A526]" />
                </div>
                <h3 className="text-sm font-bold text-[#4A2C2A] font-heading">Clean Workmanship</h3>
                <p className="text-[#666666] text-xs leading-relaxed font-sans">
                  We arrive equipped with dust collectors to vacuum masonry drilling residues, leaving your balcony clean, tidy, and ready for immediate use.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Pillars (Right) */}
          <div className="lg:col-span-4 bg-[#2C1816] text-white rounded-3xl p-6 sm:p-8 border border-[#4A2C2A] flex flex-col gap-6 shadow-xl">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2 font-heading">
              <Building className="w-4 h-4 text-[#E0A526]" />
              <span>Service Integrity</span>
            </h3>

            {/* Factual Commitments */}
            <div className="flex flex-col gap-5 text-left font-sans">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-stone-300">Materials Deployed</span>
                <span className="text-xs font-bold text-[#E0A526] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  SS316 Stainless &amp; Virgin HDPE
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-stone-300">Warranty Backing</span>
                <span className="text-xs font-bold text-[#E0A526] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  {CLAIMS.warrantyLabel} Written Card
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-stone-300">Site Measurement</span>
                <span className="text-xs font-bold text-[#E0A526] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  Complimentary Doorstep Visit
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-stone-300">Geographic Focus</span>
                <span className="text-xs font-bold text-[#E0A526] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  Bengaluru Residential Corridors
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <a
                href="tel:+919900552179"
                className="w-full text-center block bg-[#E0A526] text-[#1A1A1A] font-extrabold text-xs py-3 rounded-full hover:bg-[#D4951E] transition-colors shadow-md"
              >
                Call +91 99005 52179
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </div>
  );
}

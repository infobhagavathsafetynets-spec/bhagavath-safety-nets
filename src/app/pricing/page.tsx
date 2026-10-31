import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Ruler,
  Compass,
  FileSpreadsheet,
  Layers,
  Scale,
  Building,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { CLAIMS } from "@/data/claims";
import { PRICING_CONFIRMED, PRICING_DISCLAIMER, FINAL_QUOTE_NOTICE, SERVICE_PRICING } from "@/data/pricing";
import { CURRENT_OFFER, isOfferActive } from "@/data/offers";
import ContactForm from "@/components/forms/ContactForm";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

export const metadata: Metadata = {
  title: {
    absolute: "Pricing & Estimates | Bhagavath Safety Nets",
  },
  description:
    "Transparent price estimation guide for safety nets, invisible grills, and ceiling cloth hangers in Bengaluru. Free site visit and quote.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing Philosophy & Estimation Guide | Bhagavath Safety Nets Bengaluru",
    description:
      `Transparent cost estimation for balcony safety nets, SS316 invisible grills & cloth drying systems in Bengaluru. Complimentary doorstep inspections & ${CLAIMS.warrantyLabel}.`,
    url: "https://bhagavathsafetynets.com/pricing",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Pricing Approach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Philosophy & Estimation Guide | Bhagavath Safety Nets Bengaluru",
    description:
      `Transparent cost estimation for safety nets and invisible grills across Bengaluru. Complimentary doorstep visits & ${CLAIMS.warrantyLabel}.`,
    images: ["/images/og-image.webp"],
  },
};

export default function PricingPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" },
  ];

  const offerActive = isOfferActive();

  const estimateMilestones = [
    {
      step: "Step 1",
      icon: <Compass className="w-6 h-6 text-[#E0A526]" />,
      title: "Schedule Consultation",
      description:
        "Connect via WhatsApp or phone call. Share your balcony requirements and pick a time slot convenient for your family.",
    },
    {
      step: "Step 2",
      icon: <Ruler className="w-6 h-6 text-[#E0A526]" />,
      title: "Doorstep Laser Survey",
      description:
        "Our technician visits your home with physical swatches of netting and SS316 cables, measuring exact boundary dimensions with laser tools.",
    },
    {
      step: "Step 3",
      icon: <FileSpreadsheet className="w-6 h-6 text-[#E0A526]" />,
      title: "Itemized Cost Estimate",
      description:
        "Get a transparent, clear quote detailing material grade, square footage, and fixing fixtures. Absolutely zero hidden fees or obligations.",
    },
  ];

  const quotationVariables = [
    {
      icon: <Layers className="w-5 h-5 text-[#E0A526]" />,
      title: "Perimeter Dimensions",
      description:
        "Total length and height of the balcony, window frame, or utility shaft opening requiring coverage.",
    },
    {
      icon: <Scale className="w-5 h-5 text-[#E0A526]" />,
      title: "Material Specifications",
      description:
        "Selection between UV-treated virgin copolymer netting, nylon bird mesh, or architectural SS316 multi-strand wire cables.",
    },
    {
      icon: <Building className="w-5 h-5 text-[#E0A526]" />,
      title: "Floor Height & Anchoring Substrate",
      description:
        "Installation elevation, concrete lintel conditions, and exterior structural access considerations.",
    },
  ];

  const whatsappInquiryMessage = encodeURIComponent(
    `Hello Bhagavath Safety Nets! I would like to request an estimate for balcony safety nets / invisible grills in Bengaluru.`
  );

  return (
    <div className="bg-[#FAF5ED]/30 min-h-screen py-12">
      {/* Dynamic Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#666666] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#4A2C2A] font-bold">Pricing</span>
        </nav>

        {/* Page Hero */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#E0A526]/30 font-sans">
            Transparent Estimates
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Safety Nets &amp; Invisible Grills Cost Estimates in Bengaluru
          </h1>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
            Every apartment balcony in Bengaluru has distinct structural spans, railing alignments, and floor elevations. We provide fair, transparent pricing derived from on-site measurements rather than arbitrary flat-rate packages.
          </p>
        </div>

        {/* Promotional Banner */}
        <ServicePromoTicker />

        {/* Official Disclaimers Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-14 mt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E0A526] block mb-1">
                Pricing Policy
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#4A2C2A] font-heading">
                {PRICING_DISCLAIMER}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF4DC] text-[#4A2C2A] text-xs font-bold rounded-full border border-[#E0A526]/30 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E0A526]" />
              <span>Doorstep Visits</span>
            </span>
          </div>

          <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mt-4 font-sans">
            {FINAL_QUOTE_NOTICE} We do not publish fixed price-per-square-foot amounts without surveying your site because factors like floor elevation, masonry hardness, and perimeter mounting geometry directly affect material consumption and anchor hardware.
          </p>

          {/* Active Promotion Chip */}
          {offerActive && (
            <div className="mt-4 p-4 bg-[#FFF4DC] rounded-2xl border border-[#E0A526]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-extrabold text-[#4A2C2A] block font-heading">
                  Current Special: {CURRENT_OFFER.title}
                </span>
                <span className="text-[11px] text-[#666666] font-sans">
                  {CURRENT_OFFER.description} Valid for new bookings with free doorstep laser measurement.
                </span>
              </div>
              <a
                href={`https://wa.me/919900552179?text=${whatsappInquiryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#1EBE5D] transition-colors shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Claim Offer</span>
              </a>
            </div>
          )}
        </div>

        {/* 3-Step Quotation Flow */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block mb-2 font-sans">
              Survey Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
              Our 3-Step Quotation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {estimateMilestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#FFF4DC] rounded-2xl border border-[#E0A526]/30">
                      {item.icon}
                    </div>
                    <span className="text-xs font-black uppercase text-[#E0A526] font-heading">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#4A2C2A] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Variables Breakdown */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs mb-16">
          <div className="border-b border-stone-100 pb-4 mb-6">
            <h3 className="text-xl font-bold text-[#4A2C2A] font-heading">
              Key Factors Influencing Your Final Quote
            </h3>
            <p className="text-xs text-[#666666] mt-1 font-sans">
              These structural considerations determine hardware selection and labor allocation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotationVariables.map((variable, idx) => (
              <div key={idx} className="p-5 bg-[#FAF5ED]/50 rounded-2xl border border-stone-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-[#4A2C2A] text-sm font-heading">
                  {variable.icon}
                  <span>{variable.title}</span>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed font-sans">
                  {variable.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Card */}
        <div className="bg-gradient-to-br from-[#2C1816] via-[#4A2C2A] to-[#6B4340] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl border border-[#4A2C2A] text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Need an Immediate Cost Assessment?
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-sans">
              Send us rough dimensions or a short video clip of your balcony over WhatsApp, and our technical supervisor will provide an immediate budgetary range.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <a
                href={`https://wa.me/919900552179?text=${whatsappInquiryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-extrabold px-6 py-3.5 rounded-full hover:bg-[#1EBE5D] text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp for Immediate Estimate</span>
              </a>
              <a
                href="tel:+919900552179"
                className="inline-flex items-center gap-2 bg-[#E0A526] text-[#1A1A1A] font-extrabold px-6 py-3.5 rounded-full hover:bg-[#D4951E] text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 text-[#1A1A1A]" />
                <span>Call +91 99005 52179</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Home,
  MapPin,
  Shield,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Building2,
  Sparkles,
  HelpCircle,
  Clock,
} from "lucide-react";
import { areasData } from "@/utils/areasData";
import { servicesData } from "@/utils/servicesData";
import { CLAIMS } from "@/data/claims";
import { CURRENT_OFFER } from "@/data/offers";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQPageSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const areaDetail = areasData[resolvedParams.area];

  if (!areaDetail) {
    return {
      title: "Area Not Found | Bhagavath Safety Nets Bengaluru",
    };
  }

  const baseTitle = `Safety Nets in ${areaDetail.name}, Bengaluru | Bhagavath`;
  const cleanTitle = baseTitle.length <= 60
    ? baseTitle
    : `Safety Nets in ${areaDetail.name.replace(" Corridor", "").replace(" (ORR)", "")} | Bhagavath`.length <= 60
    ? `Safety Nets in ${areaDetail.name.replace(" Corridor", "").replace(" (ORR)", "")} | Bhagavath`
    : `Safety Nets in ${areaDetail.name.slice(0, 20)} | Bhagavath`;
  const title = { absolute: cleanTitle };
  const description = `Balcony safety nets, bird netting & SS316 invisible grills installed in ${areaDetail.name}, Bengaluru. Free site visit & ${CLAIMS.warrantyLabel}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/areas/${resolvedParams.area}`,
    },
    openGraph: {
      title,
      description,
      url: `https://bhagavathsafetynets.com/areas/${resolvedParams.area}`,
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: `Safety Nets in ${areaDetail.name} - Bhagavath Safety Nets`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.webp"],
    },
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({
    area: slug,
  }));
}

export default async function AreaDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const areaDetail = areasData[resolvedParams.area];

  if (!areaDetail) {
    notFound();
  }

  // Other areas in Bangalore (featured subset for clean sidebar layout)
  const otherAreas = Object.values(areasData).filter((a) => a.slug !== areaDetail.slug).slice(0, 8);

  // All confirmed services
  const allServices = Object.values(servicesData);

  // Breadcrumb links
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Areas We Serve", item: "/areas" },
    { name: areaDetail.name, item: `/areas/${areaDetail.slug}` },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Bhagavath Safety Nets! I would like to request a free site measurement for safety nets / invisible grills in ${areaDetail.name}, Bengaluru.`
  );

  return (
    <div className="bg-[#FAF5ED]/30 min-h-screen py-8 md:py-12">
      {/* Dynamic JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(areaDetail.name)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQPageSchema(areaDetail.faqs)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#666666] mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/areas" className="hover:text-[#E0A526] transition-colors">
            Areas
          </Link>
          <span>/</span>
          <span className="text-[#4A2C2A] font-bold">{areaDetail.name}</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2C1816] via-[#4A2C2A] to-[#6B4340] text-white p-8 sm:p-12 mb-12 shadow-xl border border-[#4A2C2A]/20">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#FFF4DC] border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-[#E0A526]" />
              <span>
                {areaDetail.isHeadOffice
                  ? "Our Head Office Area • Rapid Doorstep Response"
                  : `Doorstep Service Area across ${areaDetail.name}, Bengaluru`}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-heading">
              Safety Nets &amp; Invisible Grills in <span className="text-[#E0A526]">{areaDetail.name}</span>, Bengaluru
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-sans">
              {areaDetail.tagline} Professional balcony netting, pigeon bird exclusion, and SS316 stainless invisible wire grills installed with our standard {CLAIMS.warrantyLabel}.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="tel:+919900552179"
                className="inline-flex items-center justify-center gap-2 bg-[#E0A526] text-[#1A1A1A] font-extrabold px-6 py-3.5 rounded-full hover:bg-[#D4951E] text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4 text-[#1A1A1A]" />
                <span>Call +91 99005 52179</span>
              </a>
              <a
                href={`https://wa.me/919900552179?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold px-6 py-3.5 rounded-full hover:bg-[#1EBE5D] text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Free Measurement</span>
              </a>
            </div>
          </div>
        </div>

        {/* Localities & Sectors Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b border-stone-100 pb-4 gap-2">
            <div>
              <h2 className="text-xl font-bold text-[#4A2C2A] font-heading">
                Neighborhoods &amp; Sectors Served in {areaDetail.name}
              </h2>
              <p className="text-xs text-[#666666] mt-1">
                Complimentary doorstep inspection available across all apartment complexes and independent homes.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF4DC] text-[#4A2C2A] text-xs font-bold rounded-full border border-[#E0A526]/30 self-start sm:self-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E0A526]" />
              <span>Doorstep Visits</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {areaDetail.localities.map((loc, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#FAF5ED]/50 border border-stone-200 rounded-xl text-xs font-semibold text-[#3A3A3A] flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E0A526] shrink-0" />
                <span className="truncate">{loc}</span>
              </div>
            ))}
          </div>

          {areaDetail.landmarks && areaDetail.landmarks.length > 0 && (
            <div className="mt-6 pt-4 border-t border-stone-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#666666] block mb-2">
                Prominent Landmarks in the Area:
              </span>
              <div className="flex flex-wrap gap-2">
                {areaDetail.landmarks.map((landmark, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-white text-stone-600 px-3 py-1 rounded-full border border-stone-200"
                  >
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content & Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Local Overview & Services */}
          <div className="lg:col-span-8 space-y-8">
            {/* Architectural Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                <Building2 className="w-5 h-5 text-[#E0A526]" />
                <h2 className="text-xl font-bold text-[#4A2C2A] font-heading">
                  Living &amp; Building Architecture in {areaDetail.name}
                </h2>
              </div>
              <p className="text-[#3A3A3A] text-sm leading-relaxed">{areaDetail.overview}</p>
              <p className="text-[#3A3A3A] text-sm leading-relaxed">{areaDetail.housingProfile}</p>
            </div>

            {/* Balcony & Window Needs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                <Shield className="w-5 h-5 text-[#E0A526]" />
                <h3 className="text-lg font-bold text-[#4A2C2A] font-heading">
                  Balcony &amp; Window Safety Considerations
                </h3>
              </div>
              <p className="text-[#3A3A3A] text-sm leading-relaxed">{areaDetail.balconyWindowNeeds}</p>
              <p className="text-[#3A3A3A] text-sm leading-relaxed">{areaDetail.recommendedServices}</p>
            </div>

            {/* Confirmed Services in this Area */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <h3 className="text-lg font-bold text-[#4A2C2A] font-heading">
                  Specialized Safety Solutions for {areaDetail.name}
                </h3>
                <p className="text-xs text-[#666666] mt-1">
                  Click any service below to explore specifications, materials, and warranty information.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {allServices.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={`/services/${srv.slug}`}
                    className="p-4 bg-[#FAF5ED]/50 hover:bg-[#FFF4DC]/70 border border-stone-200/80 rounded-2xl flex flex-col justify-between group transition-all"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E0A526] block mb-1">
                        {srv.categoryName}
                      </span>
                      <h4 className="text-sm font-bold text-[#4A2C2A] group-hover:text-[#6B4340] transition-colors">
                        {srv.name}
                      </h4>
                      <p className="text-xs text-[#666666] line-clamp-2 mt-1">
                        {srv.description}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-[#4A2C2A] group-hover:text-[#E0A526] transition-colors">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Map & Other Areas */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs">
              <h3 className="text-xs font-bold text-[#666666] uppercase tracking-wider mb-4">
                Local Service Zone
              </h3>
              <MapFrame areaName={areaDetail.name} />
            </div>

            {/* Other Areas in Bengaluru */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs">
              <h3 className="text-base font-bold text-[#4A2C2A] font-heading border-b border-stone-100 pb-3 mb-4">
                Other Service Hubs in Bengaluru
              </h3>
              <div className="space-y-2">
                {otherAreas.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/${city.slug}`}
                    className="flex items-center justify-between p-3 bg-[#FAF5ED]/40 hover:bg-[#FFF4DC] rounded-xl border border-stone-200 text-xs font-bold text-[#3A3A3A] hover:text-[#4A2C2A] transition-colors"
                  >
                    <span>{city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  </Link>
                ))}
                <Link
                  href="/areas"
                  className="flex items-center justify-center gap-1.5 p-3 mt-3 bg-[#4A2C2A] hover:bg-[#6B4340] text-white rounded-xl text-xs font-bold transition-colors shadow-2xs"
                >
                  <span>Explore All 110 Bengaluru Areas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Area FAQs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Local Guidance
            </span>
            <h2 className="text-2xl font-bold text-[#4A2C2A] font-heading">
              Frequently Asked Questions in {areaDetail.name}
            </h2>
          </div>
          <div className="space-y-4">
            {areaDetail.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 bg-[#FAF5ED]/40 rounded-2xl border border-stone-200">
                <h4 className="text-sm font-bold text-[#4A2C2A] mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#E0A526] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-[#3A3A3A] leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}

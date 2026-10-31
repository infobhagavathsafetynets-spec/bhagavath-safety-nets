import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, ShieldCheck, XCircle, CheckCircle } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import { ServiceHero, ServiceStickyBar, ServiceTrustBar } from "@/components/sections/service-page/ServiceHero";
import { ServiceAbout, ServiceImages, ServiceBenefits, ServiceSpecs } from "@/components/sections/service-page/ServiceContent";
import { ServiceTimeline, ServiceWhyChoose, ServiceRelated, ServiceFAQs } from "@/components/sections/service-page/ServiceProcess";
import LightboxGallery from "@/components/ui/lightbox-gallery";
import ContactForm from "@/components/forms/ContactForm";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";
import { CLAIMS } from "@/data/claims";

import { generateBreadcrumbSchema, generateServiceSchema } from "@/utils/schema";

interface PageProps {
  params: Promise<{ service: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    return {
      title: "Service Not Found | Bhagavath Safety Nets Bengaluru",
    };
  }

  const title = { absolute: `${serviceDetail.name} in Bengaluru | Bhagavath` };
  const description = `${serviceDetail.description.slice(0, 110)}... Installed in Bengaluru with ${CLAIMS.warrantyLabel}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${resolvedParams.service}`,
    },
    openGraph: {
      title,
      description,
      url: `https://bhagavathsafetynets.com/services/${resolvedParams.service}`,
      images: [
        {
          url: serviceDetail.image,
          width: 1200,
          height: 630,
          alt: `Bhagavath Safety Nets - ${serviceDetail.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [serviceDetail.image],
    },
  };
}

// Generate static params for Next.js static page generation (SSG)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    service: slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    notFound();
  }

  // Related Services from same category or complementary
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.slug !== serviceDetail.slug)
    .slice(0, 5);

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: serviceDetail.categoryName, item: `/services/${serviceDetail.category}` },
    { name: serviceDetail.name, item: `/services/${serviceDetail.slug}` },
  ];

  // Dynamic Service Schema details
  const serviceSchema = generateServiceSchema(
    serviceDetail.name,
    serviceDetail.categoryName,
    serviceDetail.description
  );

  return (
    <div className="bg-[#FAF5ED]/30 min-h-screen">
      {/* Inject Dynamic Service and Breadcrumb Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Sticky Contact Bar */}
      <ServiceStickyBar name={serviceDetail.name} />

      {/* Hero Section */}
      <ServiceHero
        name={serviceDetail.name}
        categoryName={serviceDetail.categoryName}
        title={serviceDetail.title}
        subtitle={serviceDetail.description}
        aiOverview={serviceDetail.aiOverview}
        image={serviceDetail.image}
      />

      {/* Trust Badges Bar */}
      <ServiceTrustBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Scrolling Ticker */}
        <ServicePromoTicker serviceName={serviceDetail.name} />

        {/* Localized Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#666666] mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#E0A526] transition-colors">
            Services
          </Link>
          <span>/</span>
          <Link href={`/services/${serviceDetail.category}`} className="hover:text-[#E0A526] capitalize transition-colors">
            {serviceDetail.categoryName}
          </Link>
          <span>/</span>
          <span className="text-[#4A2C2A] font-bold truncate max-w-[200px]">
            {serviceDetail.name}
          </span>
        </nav>
      </div>

      {/* About Section */}
      <ServiceAbout
        name={serviceDetail.name}
        longDescription={serviceDetail.longDescription}
        benefits={serviceDetail.benefits}
      />

      {/* Collage Gallery Section */}
      <ServiceImages
        name={serviceDetail.name}
        image={serviceDetail.image}
        supportingImages={serviceDetail.supportingImages}
      />

      {/* Benefits Card Grid */}
      <ServiceBenefits benefits={serviceDetail.benefits} />

      {/* 6-Step Installation Process Timeline */}
      <ServiceTimeline />

      {/* Technical Specifications Table */}
      <ServiceSpecs specsTable={serviceDetail.specsTable} />

      {/* Why Choose Bhagavath Safety Nets Section */}
      <ServiceWhyChoose />

      {/* Before & After Text Transformation Cards (Step 7: Photos shown only when client confirms real job photos) */}
      <section className="bg-white py-20 scroll-mt-12" id="comparison-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center">
              The Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
              Before vs. After Protection
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm">
              See the direct safety and quality-of-life differences for your family and balcony space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Card */}
            <div className="bg-[#FAF5ED]/60 border border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-rose-500" />
                  <h3 className="text-lg font-bold text-[#4A2C2A] font-heading">
                    Without Protection
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#666666]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Constant anxiety regarding toddlers or pets near high-rise balcony railings</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Pigeon roosting, nesting debris, foul odor, and health risks from bird droppings</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Accidental dropping of phones, toys, and household articles from balconies</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>Heavy traditional iron grills that cage the balcony and obstruct daylight</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500 font-medium">
                Vulnerable balcony and window perimeters
              </div>
            </div>

            {/* After Card */}
            <div className="bg-white border-2 border-[#E0A526]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-lg font-bold text-[#4A2C2A] font-heading">
                    After Bhagavath Safety Nets Installation
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#3A3A3A]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Complete fall protection anchored into concrete with high-tensile SS316 or virgin HDPE</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Clean, pigeon-free balconies with 100% humane, zero-harm bird exclusion netting</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Unobstructed panoramic skyline views and unhindered natural air circulation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Backed by our written {CLAIMS.warrantyLabel} card and complimentary doorstep inspection</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Protected &amp; certified installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery & Close-Ups */}
      <section className="bg-[#FAF5ED]/40 py-20 scroll-mt-12" id="lightbox-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center">
              Material Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] font-heading">
              Photo Portfolio &amp; Close-Ups
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm">
              Click on any thumbnail below to expand the image in high resolution.
            </p>
          </div>
          <LightboxGallery images={serviceDetail.gallery} serviceName={serviceDetail.name} />
        </div>
      </section>

      {/* Voice Search Friendly FAQs Accordion */}
      <ServiceFAQs faqs={serviceDetail.faqs} serviceName={serviceDetail.name} />

      {/* Related Services and Areas */}
      <ServiceRelated
        related={relatedServices}
        categoryName={serviceDetail.categoryName}
        currentServiceSlug={serviceDetail.slug}
      />

      {/* Inquiry Contact Form */}
      <ContactForm />
    </div>
  );
}

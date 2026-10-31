import HeroCarousel from "@/components/sections/HeroCarousel";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import Stats from "@/components/sections/Stats";
import ServiceCategories from "@/components/sections/ServiceCategories";
import CostCalculator from "@/components/sections/CostCalculator";
import FeaturedServices from "@/components/sections/FeaturedServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InstallationProcess from "@/components/sections/InstallationProcess";
import Materials from "@/components/sections/Materials";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Team from "@/components/sections/Team";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CustomerReviews from "@/components/sections/CustomerReviews";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ContactForm from "@/components/forms/ContactForm";

export default function Home() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bhagavath Safety Nets",
    "url": "https://bhagavathsafetynets.com",
    "description": "Professional balcony safety netting, SS316 marine invisible wire grills, and ceiling cloth drying systems across Bengaluru.",
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />

      {/* Reordered Unique Homepage Flow */}
      <HeroCarousel />
      <MarqueeTicker />
      <Stats />
      <WhyChooseUs />
      <FeaturedServices />
      <ServiceCategories />
      <BeforeAfter />
      <Materials />
      <CostCalculator />
      <InstallationProcess />
      <CustomerReviews />
      <ServiceAreas />
      <FAQAccordion />
      <Team />
      <ContactForm />
    </main>
  );
}

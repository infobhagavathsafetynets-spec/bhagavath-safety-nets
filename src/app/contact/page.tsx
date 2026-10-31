import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, CalendarCheck } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { SITE_URL } from "@/utils/constants";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | Bhagavath Safety Nets Bengaluru",
  },
  description:
    "Book a complimentary doorstep inspection in Bengaluru or call +91 99005 52179 for balcony safety nets, invisible grills & cloth hangers.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Bhagavath Safety Nets | Free Balcony Inspection Bengaluru",
    description:
      "Book a complimentary doorstep laser measurement or speak with our installation advisors in Bengaluru. Call +91 99005 52179 for prompt assistance.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Bhagavath Safety Nets Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bhagavath Safety Nets | Free Balcony Inspection Bengaluru",
    description:
      "Schedule a complimentary doorstep visit for safety netting and invisible wire grills across Bengaluru.",
    images: ["/images/og-image.webp"],
  },
};

export default function ContactPage() {
  const contactNavTrail = [
    { name: "Homepage", item: "/" },
    { name: "Contact Bhagavath", item: "/contact" },
  ];

  return (
    <div className="bg-[#FAF5ED]/30 min-h-screen py-12">
      {/* Inject Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(contactNavTrail)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#666666] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#4A2C2A] font-bold">Contact Us</span>
        </nav>

        {/* Hero Title */}
        <div className="text-left max-w-3xl mb-14 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#E0A526]/30 font-sans">
            Free Consultation &amp; Booking
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Schedule Your Doorstep Site Visit in Bengaluru
          </h1>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
            Ready to secure your balcony or install pigeon protection netting? Connect with our team for complimentary laser measurements, physical material samples, and on-the-spot quotes.
          </p>
        </div>

        {/* Contact Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          {/* Contact Details Card (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col gap-6 text-left">
            <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#4A2C2A] font-heading">
                Direct Communication Hub
              </h2>
              <span className="text-[10px] font-bold uppercase bg-[#FFF4DC] text-[#4A2C2A] px-2.5 py-1 rounded-full border border-[#E0A526]/30">
                Bengaluru Central
              </span>
            </div>

            <div className="flex flex-col gap-5 font-sans">
              {/* Telephone & WhatsApp */}
              <div className="flex gap-3.5 p-3.5 bg-[#FAF5ED]/50 rounded-2xl border border-stone-200">
                <div className="p-2.5 bg-[#FFF4DC] rounded-xl text-[#4A2C2A] shrink-0 h-fit">
                  <Phone className="w-5 h-5 text-[#E0A526]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#666666] tracking-wider">
                    Instant Call &amp; WhatsApp
                  </span>
                  <a
                    href="tel:+919900552179"
                    className="text-sm font-bold text-[#4A2C2A] hover:text-[#E0A526] transition-colors"
                  >
                    +91 99005 52179
                  </a>
                  <span className="text-[11px] text-[#666666]">
                    Immediate response for new appointments
                  </span>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex gap-3.5 p-3.5 bg-[#FAF5ED]/50 rounded-2xl border border-stone-200">
                <div className="p-2.5 bg-[#FFF4DC] rounded-xl text-[#4A2C2A] shrink-0 h-fit">
                  <MapPin className="w-5 h-5 text-[#E0A526]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#666666] tracking-wider">
                    Registered Headquarters
                  </span>
                  <span className="text-xs font-bold text-[#4A2C2A]">
                    Koramangala, Bengaluru, Karnataka
                  </span>
                  <span className="text-[11px] text-[#666666]">
                    Doorstep technician dispatch across all city sectors
                  </span>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex gap-3.5 p-3.5 bg-[#FAF5ED]/50 rounded-2xl border border-stone-200">
                <div className="p-2.5 bg-[#FFF4DC] rounded-xl text-[#4A2C2A] shrink-0 h-fit">
                  <Mail className="w-5 h-5 text-[#E0A526]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#666666] tracking-wider">
                    Customer Support Email
                  </span>
                  <a
                    href="mailto:info.bhagavathsafetynets@gmail.com"
                    className="text-xs font-bold text-[#4A2C2A] hover:text-[#E0A526] transition-colors"
                  >
                    info.bhagavathsafetynets@gmail.com
                  </a>
                  <span className="text-[11px] text-[#666666]">
                    Send balcony photos or architectural blueprints
                  </span>
                </div>
              </div>

              {/* Operating Timings */}
              <div className="flex gap-3.5 p-3.5 bg-[#FAF5ED]/50 rounded-2xl border border-stone-200">
                <div className="p-2.5 bg-[#FFF4DC] rounded-xl text-[#4A2C2A] shrink-0 h-fit">
                  <Clock className="w-5 h-5 text-[#E0A526]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#666666] tracking-wider">
                    Daily Service Hours
                  </span>
                  <span className="text-xs font-bold text-[#4A2C2A]">
                    8:00 AM – 8:00 PM (Monday through Sunday)
                  </span>
                  <span className="text-[11px] text-[#666666]">
                    Weekend visits available upon request
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Map Container (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-[#4A2C2A] font-heading uppercase tracking-wider">
                  Doorstep Service Coverage Map
                </h3>
                <span className="text-xs text-[#666666] font-medium">
                  Covering 10 Major Residential Hubs
                </span>
              </div>
              <MapFrame areaName="Bangalore, Karnataka" className="h-[360px]" />
            </div>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}

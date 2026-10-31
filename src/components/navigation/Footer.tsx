import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Logo from "../ui/Logo";
import { CLAIMS } from "@/data/claims";
import { PRICING_DISCLAIMER } from "@/data/pricing";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
    { label: "Children Safety Nets", href: "/services/children-safety-nets" },
    { label: "Pet Safety Nets", href: "/services/pet-safety-nets" },
    { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
    { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
    { label: "Window Invisible Grills", href: "/services/window-invisible-grills" },
    { label: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
    { label: "Balcony Cloth Hangers", href: "/services/balcony-cloth-hangers" },
  ];

  const areasList = [
    { name: "Koramangala (Head Office)", slug: "koramangala" },
    { name: "HSR Layout", slug: "hsr-layout" },
    { name: "BTM Layout", slug: "btm-layout" },
    { name: "Bellandur", slug: "bellandur" },
    { name: "Marathahalli", slug: "marathahalli" },
    { name: "Whitefield", slug: "whitefield" },
    { name: "Sarjapur Road", slug: "sarjapur-road" },
    { name: "Yelahanka", slug: "yelahanka" },
    { name: "Hebbal", slug: "hebbal" },
    { name: "Indiranagar", slug: "indiranagar" },
  ];

  return (
    <footer className="bg-[#2C1816] text-slate-300 pt-16 pb-8 border-t border-[#6B4340]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Logo light={true} />
            <p className="text-[#D1D5DB] text-sm leading-relaxed mt-2">
              Bhagavath Safety Nets delivers certified high-tensile safety nets, marine-grade SS316 invisible wire grills, and stainless cloth drying systems across Bengaluru. All installations are backed by our {CLAIMS.warrantyLabel}.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <Link href="/terms-and-conditions#warranty" className="underline hover:text-white transition-colors">
                Read our {CLAIMS.warrantyLabel} Terms &amp; Conditions
              </Link>
            </div>
            <div className="flex flex-col gap-3 mt-1 text-sm text-[#D1D5DB]">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E0A526] shrink-0" />
                <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#E0A526]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "All Services", href: "/services" },
                { label: "Pricing Approach", href: "/pricing" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Coverage Areas", href: "/areas" },
                { label: "Latest Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#E0A526] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E0A526] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View (8 client-confirmed services) */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#E0A526]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesList.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#E0A526] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E0A526] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#E0A526]">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-[#D1D5DB]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E0A526] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Head Office Area</span>
                  <span className="block text-sm text-[#D1D5DB] mt-1">
                    Koramangala, Bengaluru
                    {/* [CONFIRM WITH CLIENT]: Exact street address pending GBP match */}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E0A526] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white block">Phone</span>
                  <a
                    href="tel:+919900552179"
                    className="hover:text-[#E0A526] transition-colors text-white font-semibold flex items-center gap-1.5 min-h-[44px] py-1"
                    aria-label="Call +91 99005 52179"
                  >
                    <span>+91 99005 52179</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#E0A526] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Email</span>
                  <a href="mailto:info.bhagavathsafetynets@gmail.com" className="hover:text-[#E0A526] transition-colors">
                    info.bhagavathsafetynets@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing disclaimer note */}
        <div className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 mb-8 text-center text-xs text-slate-300">
          <p>{PRICING_DISCLAIMER}</p>
        </div>

        {/* Bangalore Localities Local SEO Footer Links (10 Quality Areas) */}
        <div className="py-6 border-t border-[#6B4340] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold shrink-0">
            <MapPin className="w-4 h-4 text-[#E0A526]" />
            <span>Service Areas Across Bengaluru:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[#D1D5DB]">
            {areasList.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="hover:text-[#E0A526] transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="text-[#E0A526] font-bold hover:underline flex items-center gap-1"
            >
              <span>View All 10 Areas</span>
            </Link>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#6B4340] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1D5DB] gap-4">
          <p>© {currentYear} Bhagavath Safety Nets. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#E0A526] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#E0A526] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/terms-and-conditions#warranty" className="hover:text-[#E0A526] transition-colors">
              Warranty Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

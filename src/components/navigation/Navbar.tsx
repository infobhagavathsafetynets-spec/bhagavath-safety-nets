"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Shield,
  Eye,
  Settings,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import { CLAIMS } from "@/data/claims";
import { CURRENT_OFFER, isOfferActive } from "@/data/offers";

const safetyNetsServices = [
  { name: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
  { name: "Children Safety Nets", href: "/services/children-safety-nets" },
  { name: "Pet Safety Nets", href: "/services/pet-safety-nets" },
  { name: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
  { name: "Monkey Safety Nets", href: "/services/monkey-safety-nets" },
  { name: "Cricket Practice Nets", href: "/services/cricket-nets" },
  { name: "Sports Netting", href: "/services/sports-nets" },
  { name: "Construction Safety Nets", href: "/services/construction-safety-nets" },
  { name: "Duct Area Safety Nets", href: "/services/duct-area-safety-nets" },
  { name: "Anti-Bird Spikes", href: "/services/anti-bird-spikes" },
  { name: "Mosquito Nets for Windows", href: "/services/mosquito-nets" },
];

const invisibleGrillsServices = [
  { name: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
  { name: "Children Invisible Grills", href: "/services/children-invisible-grills" },
  { name: "Pet Invisible Grills", href: "/services/pet-invisible-grills" },
  { name: "Window Invisible Grills", href: "/services/window-invisible-grills" },
  { name: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
];

const clothHangersServices = [
  { name: "Ceiling Cloth Drying Hangers", href: "/services/ceiling-cloth-hangers" },
  { name: "Balcony Cloth Drying Hangers", href: "/services/balcony-cloth-hangers" },
  { name: "Wall Mounted Cloth Hangers", href: "/services/wall-mounted-cloth-hangers" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", isMegaMenu: true },
  { label: "Pricing & Estimates", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Completed Projects", href: "/projects" },
  { label: "Service Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnterServices = () => {
    if (megaMenuHoverTimeout.current) clearTimeout(megaMenuHoverTimeout.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    megaMenuHoverTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <div id="complete-header-sentinel" className="absolute top-0 left-0 w-full h-[1px] pointer-events-none" />

      {/* TOP BAR: Dark Espresso #2C1816 with Mustard Accents */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#2C1816] text-[#FAF5ED] text-xs font-medium py-1.5 px-3 sm:px-4 shadow-xs border-b border-[#4A2C2A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left phone & offer */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919900552179"
              className="flex items-center gap-1.5 hover:text-[#E0A526] transition-colors"
              aria-label="Call +91 99005 52179"
            >
              <Phone className="w-3.5 h-3.5 text-[#E0A526]" />
              <span className="font-bold text-white">+91 99005 52179</span>
            </a>

            {/* Offer rendered only if active */}
            {isOfferActive() && (
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-[#FAF5ED]">
                <Sparkles className="w-3 h-3 text-[#E0A526]" />
                <span>
                  Limited Offer: <strong className="text-[#E0A526]">{CURRENT_OFFER.title}</strong> on installation
                </span>
                <span className="bg-[#E0A526] text-[#1A1A1A] font-extrabold px-2 py-0.5 rounded-full text-[10px] uppercase shadow-xs ml-1">
                  New Bookings
                </span>
              </span>
            )}
          </div>

          {/* Right badges & WhatsApp */}
          <div className="flex items-center gap-3">
            <Link
              href="/terms-and-conditions#warranty"
              className="hidden lg:flex items-center gap-1.5 hover:text-[#E0A526] transition-colors text-[#FAF5ED]/90"
            >
              <Shield className="w-3.5 h-3.5 text-[#E0A526]" />
              <span>{CLAIMS.warrantyLabel}</span>
            </Link>

            <a
              href="https://wa.me/919900552179?text=Hi%20Bhagavath%20Safety%20Nets,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20safety%20nets."
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:hidden items-center gap-1.5 bg-[#25D366] text-white px-2.5 py-0.5 rounded text-[11px] font-bold shadow-xs transition-all"
            >
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:info.bhagavathsafetynets@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#E0A526] transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-[#E0A526]" />
              <span>info.bhagavathsafetynets@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <header
        className={`fixed top-[34px] left-0 right-0 z-40 transition-all duration-300 ease-in-out bg-white border-b border-[#EAD9C8] ${
          isScrolled ? "shadow-md py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 lg:gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.isMegaMenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative group"
                      onMouseEnter={handleMouseEnterServices}
                      onMouseLeave={handleMouseLeaveServices}
                    >
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`flex items-center gap-1 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                          pathname.startsWith("/services")
                            ? "text-[#E0A526]"
                            : "text-[#4A2C2A] hover:text-[#E0A526]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isMegaMenuOpen ? "rotate-180 text-[#E0A526]" : "text-slate-400 group-hover:text-[#E0A526]"
                          }`}
                        />
                      </button>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#E0A526] transition-all duration-300 ${
                          pathname.startsWith("/services") ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />

                      {/* Mega Menu Dropdown */}
                      <AnimatePresence>
                        {isMegaMenuOpen && (
                          <motion.div
                            ref={megaMenuRef}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="fixed left-0 right-0 top-[100%] w-full bg-white shadow-2xl border-t border-[#EAD9C8] py-8 px-4 sm:px-8 rounded-b-3xl z-50 pointer-events-auto"
                          >
                            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 text-left">
                              {/* Column 1: Safety Nets (4 services) */}
                              <div className="col-span-5 bg-[#FAF5ED] p-6 rounded-2xl border border-[#EAD9C8]">
                                <div className="flex items-center gap-2 mb-4 border-b border-[#EAD9C8] pb-3">
                                  <Shield className="w-5 h-5 text-[#E0A526]" />
                                  <h3 className="text-base font-extrabold text-[#4A2C2A]">
                                    Safety Netting Solutions
                                  </h3>
                                </div>
                                <ul className="space-y-2.5">
                                  {safetyNetsServices.map((service) => (
                                    <li key={service.href}>
                                      <Link
                                        href={service.href}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className="text-xs font-semibold text-slate-700 hover:text-[#4A2C2A] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#E0A526] group-hover:scale-125 transition-transform"></span>
                                        <span>{service.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Column 2: Invisible Grills (2 services) */}
                              <div className="col-span-4 bg-[#FAF5ED] p-6 rounded-2xl border border-[#EAD9C8]">
                                <div className="flex items-center gap-2 mb-4 border-b border-[#EAD9C8] pb-3">
                                  <Eye className="w-5 h-5 text-[#E0A526]" />
                                  <h3 className="text-base font-extrabold text-[#4A2C2A]">
                                    Invisible Grills (SS316)
                                  </h3>
                                </div>
                                <ul className="space-y-2.5">
                                  {invisibleGrillsServices.map((service) => (
                                    <li key={service.href}>
                                      <Link
                                        href={service.href}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className="text-xs font-semibold text-slate-700 hover:text-[#4A2C2A] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#E0A526] group-hover:scale-125 transition-transform"></span>
                                        <span>{service.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Column 3: Cloth Hangers (2 services) + Free Site Visit Box */}
                              <div className="col-span-3 flex flex-col justify-between">
                                <div className="bg-[#FAF5ED] p-5 rounded-2xl border border-[#EAD9C8] mb-4">
                                  <div className="flex items-center gap-2 mb-3 border-b border-[#EAD9C8] pb-2">
                                    <Settings className="w-4 h-4 text-[#E0A526]" />
                                    <h3 className="text-sm font-extrabold text-[#4A2C2A]">
                                      Cloth Drying Systems
                                    </h3>
                                  </div>
                                  <ul className="space-y-2">
                                    {clothHangersServices.map((service) => (
                                      <li key={service.href}>
                                        <Link
                                          href={service.href}
                                          onClick={() => setIsMegaMenuOpen(false)}
                                          className="text-xs font-semibold text-slate-700 hover:text-[#4A2C2A] hover:translate-x-1 transition-all duration-200 py-1 flex items-center gap-1.5 group"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#E0A526] group-hover:scale-125 transition-transform"></span>
                                          <span>{service.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="bg-[#FFF4DC] p-5 rounded-2xl border border-[#E0A526]/50 flex flex-col gap-2.5">
                                  <span className="text-[10px] font-bold text-[#4A2C2A] uppercase tracking-wider">Free Site Inspection</span>
                                  <h4 className="text-xs font-bold text-[#2C1816] leading-snug">Need expert measurements on-site?</h4>
                                  <p className="text-[11px] text-slate-600">Our team visits with physical samples at zero obligation.</p>
                                  <Link
                                    href="/contact"
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className="mt-1 bg-[#4A2C2A] hover:bg-[#3B211F] text-white font-bold rounded-xl text-xs py-2 px-3 flex items-center justify-center gap-1.5 transition-all"
                                  >
                                    <span>Book Measurement</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className={`py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                        isActive ? "text-[#E0A526]" : "text-[#4A2C2A] hover:text-[#E0A526]"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#E0A526] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-[#E0A526] hover:bg-[#EDB943] text-[#1A1A1A] font-extrabold flex items-center gap-2 px-5 py-2.5 rounded-full text-xs shadow-md transition-all cursor-pointer"
              >
                <span>Book Free Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/919900552179?text=Hi%20Bhagavath%20Safety%20Nets,%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-4 py-2.5 rounded-full shadow-md transition-all text-xs"
                aria-label="Chat on WhatsApp"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href="tel:+919900552179"
                className="sm:hidden p-2 rounded-xl text-white bg-[#4A2C2A]"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 text-[#E0A526]" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-[#4A2C2A] hover:bg-[#FAF5ED] transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[96px] sm:top-[102px] left-0 right-0 z-40 bg-white border-b border-[#EAD9C8] shadow-2xl xl:hidden max-h-[calc(100vh-96px)] sm:max-h-[calc(100vh-102px)] overflow-y-auto"
            >
              <div className="px-6 py-6 flex flex-col gap-4 text-left">
                {/* Offer alert in mobile drawer */}
                {isOfferActive() && (
                  <div className="bg-[#FFF4DC] border border-[#E0A526]/50 p-3 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-[#4A2C2A]">
                      🔥 {CURRENT_OFFER.title} on Installation
                    </span>
                    <Link
                      href="/terms-and-conditions#warranty"
                      onClick={closeMobileMenu}
                      className="text-[11px] font-bold bg-[#E0A526] text-[#1A1A1A] px-2.5 py-1 rounded-full"
                    >
                      {CLAIMS.warrantyLabel}
                    </Link>
                  </div>
                )}

                {/* Mobile Nav Links */}
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    if (link.isMegaMenu) {
                      return (
                        <div key={link.label} className="border-b border-slate-100 pb-2">
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="w-full flex items-center justify-between py-2 text-base font-bold text-[#4A2C2A]"
                          >
                            <span>Our 8 Services</span>
                            <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180 text-[#E0A526]" : ""}`} />
                          </button>

                          {mobileServicesOpen && (
                            <div className="pl-4 py-2 space-y-3 border-l-2 border-[#E0A526] my-1 bg-[#FAF5ED] rounded-r-xl p-3">
                              <div className="font-bold text-xs text-[#E0A526] uppercase">Safety Nets</div>
                              {safetyNetsServices.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={closeMobileMenu}
                                  className="block text-xs font-medium text-slate-700 hover:text-[#4A2C2A] py-1"
                                >
                                  {service.name}
                                </Link>
                              ))}

                              <div className="font-bold text-xs text-[#E0A526] uppercase pt-2">Invisible Grills</div>
                              {invisibleGrillsServices.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={closeMobileMenu}
                                  className="block text-xs font-medium text-slate-700 hover:text-[#4A2C2A] py-1"
                                >
                                  {service.name}
                                </Link>
                              ))}

                              <div className="font-bold text-xs text-[#E0A526] uppercase pt-2">Cloth Hangers</div>
                              {clothHangersServices.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={closeMobileMenu}
                                  className="block text-xs font-medium text-slate-700 hover:text-[#4A2C2A] py-1"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`py-2 text-base font-bold transition-colors ${
                          pathname === link.href ? "text-[#E0A526]" : "text-[#4A2C2A]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile Drawer Actions */}
                <div className="pt-4 border-t border-[#EAD9C8] flex flex-col gap-2.5">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="bg-[#E0A526] hover:bg-[#EDB943] text-[#1A1A1A] py-3 text-center rounded-full text-sm font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Book Free Site Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/919900552179?text=Hi%20Bhagavath%20Safety%20Nets,%20I%20would%20like%20to%20request%20a%20free%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white py-3 text-center rounded-full text-sm font-extrabold flex items-center justify-center gap-2"
                  >
                    <span>WhatsApp Booking</span>
                  </a>

                  <a
                    href="mailto:info.bhagavathsafetynets@gmail.com"
                    className="bg-slate-100 hover:bg-slate-200 text-[#4A2C2A] py-3 text-center rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#4A2C2A]" />
                    <span>info.bhagavathsafetynets@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

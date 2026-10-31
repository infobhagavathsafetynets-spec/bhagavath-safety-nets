"use client";

import Link from "next/link";
import {
  Home,
  Star,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building2,
  Clock,
} from "lucide-react";
import { CLAIMS } from "@/data/claims";
import ContactForm from "@/components/forms/ContactForm";

export default function TestimonialsClient() {
  const hasRealReviews = CLAIMS.testimonials.hasRealReviews && CLAIMS.testimonials.reviews.length > 0;

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#4A2C2A] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Reviews &amp; Quality</span>
        </nav>

        {/* Page Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A2C2A] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#E8D5B5]">
            Client Assurance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Customer Assurance &amp; Quality Standards in Bengaluru
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Bhagavath Safety Nets is committed to authentic service, transparent communication, and engineering-grade installation backed by our {CLAIMS.warrantyLabel}.
          </p>
        </div>

        {hasRealReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {CLAIMS.testimonials.reviews.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs mb-16 text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 bg-sky-50 text-sky-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              Direct Customer References Available
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              We provide genuine customer references and completed project demonstrations in your apartment community upon request during your complimentary site measurement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-xs text-slate-900 block mb-1">Physical Samples</span>
                <span className="text-[11px] text-slate-500">Inspect real SS316 wire and HDPE mesh samples at your doorstep.</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-xs text-slate-900 block mb-1">Written Guarantee</span>
                <span className="text-[11px] text-slate-500">{CLAIMS.warrantyLabel} card provided upon installation signoff.</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-xs text-slate-900 block mb-1">Local Experience</span>
                <span className="text-[11px] text-slate-500">Trained technicians across high-rise residential societies in Bengaluru.</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919900552179?text=Hi%20Bhagavath%20Safety%20Nets,%20I%20would%20like%20to%20request%20references%20and%20schedule%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request References on WhatsApp</span>
              </a>
              <Link
                href="/projects"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>View Recent Projects</span>
              </Link>
            </div>
          </div>
        )}

        {/* Lead Form */}
        <ContactForm />
      </div>
    </div>
  );
}

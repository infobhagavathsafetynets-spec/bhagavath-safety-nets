import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, Award, HeartHandshake, CheckCircle2, Clock, FileCheck, Phone, Mail, AlertCircle } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { CLAIMS } from "@/data/claims";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | Bhagavath Safety Nets",
  },
  description:
    "Terms and conditions, warranty guidelines, and installation service policies for Bhagavath Safety Nets customers in Bengaluru.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Bhagavath Safety Nets",
    description:
      `Review terms of service, warranty commitments (${CLAIMS.warrantyLabel}), and installation policies for Bhagavath Safety Nets across Bengaluru.`,
    url: "https://bhagavathsafetynets.com/terms-and-conditions",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Terms & Conditions",
      },
    ],
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Terms & Conditions", item: "/terms-and-conditions" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-16">
      {/* Breadcrumbs Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-bold">Terms &amp; Conditions</span>
        </nav>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xs">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3">
                <Award className="w-4 h-4" />
                <span>Fair, Transparent &amp; Ethical Service Standards</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Terms &amp; Conditions | Bhagavath Safety Nets Bengaluru
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Effective: 2026 | Bhagavath Safety Nets Bengaluru
              </p>
            </div>
            <div className="text-right sm:border-l sm:border-slate-100 sm:pl-6 hidden sm:block">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Service Guarantee</span>
              <span className="text-sm font-bold text-emerald-600">{CLAIMS.warrantyLabel}</span>
            </div>
          </div>

          {/* Key Standards Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-emerald-50/40 border border-emerald-100 rounded-2xl mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Complimentary Site Visits</h4>
                <p className="text-xs text-slate-600 mt-0.5">Doorstep measurement and material samples before any work begins.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-[#4A2C2A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Humane Deterrence</h4>
                <p className="text-xs text-slate-600 mt-0.5">Non-lethal physical barrier netting that keeps birds away without harm.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Official Warranty Card</h4>
                <p className="text-xs text-slate-600 mt-0.5">{CLAIMS.warrantyLabel} provided upon installation signoff.</p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">1</span>
                Agreement to Terms
              </h2>
              <p>
                Welcome to Bhagavath Safety Nets. By visiting our website, submitting an inquiry form, or booking our safety netting, invisible grills, or cloth drying hanger installation services across Bengaluru, you agree to be bound by these Terms and Conditions. These terms ensure a transparent, safe, and professional service relationship between Bhagavath Safety Nets (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) and the customer (&ldquo;you&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">2</span>
                Site Measurement &amp; Quotation Policy
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Complimentary Inspections:</strong> We provide site visits and laser measurements across our coverage areas in Bengaluru.</li>
                <li><strong>Material Samples:</strong> Our technician carries physical material samples (high-density copolymer netting, SS316 marine-grade cables, stainless steel hangers) so you can inspect material strength and gauge before deciding.</li>
                <li><strong>Transparent Estimates:</strong> Quotes are calculated based on measured dimensions, structural anchoring requirements, and selected materials. Prices vary with size, material, and site access. Final quotation is given after the free site visit.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">3</span>
                Humane &amp; Non-Lethal Bird Deterrence Standard
              </h2>
              <p className="mb-2">
                Bhagavath Safety Nets installs strictly non-cruel, humane barrier netting:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 space-y-2">
                <p><strong>✓ Physical Barrier Only:</strong> Netting acts as a visual and physical barrier to prevent pigeons and birds from entering or nesting in balconies and duct shafts without trapping or harming them.</p>
                <p><strong>✓ Zero Poisons / Glue:</strong> We do not use chemical poisons, glue boards, or toxic substances.</p>
              </div>
            </section>

            {/* SECTION 4: WARRANTY CARD (Anchor #warranty) */}
            <section id="warranty" className="scroll-mt-24 p-6 bg-amber-50/60 border-2 border-amber-300/80 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center text-xs font-bold">4</span>
                  {CLAIMS.warrantyLabel} Terms &amp; Scope of Coverage
                </h2>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-amber-100 text-amber-900 rounded-full border border-amber-200">
                  Official Terms
                </span>
              </div>
              <p className="mb-4 text-xs text-slate-700">
                Every qualifying installation by Bhagavath Safety Nets is backed by our {CLAIMS.warrantyLabel}. Below is the summary of coverage:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
                <div className="p-4 bg-white rounded-xl border border-emerald-200 shadow-xs">
                  <strong className="text-emerald-900 flex items-center gap-1.5 mb-2 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    What is Covered:
                  </strong>
                  <ul className="list-disc pl-4 space-y-1.5 text-slate-600">
                    {CLAIMS.warrantyTerms.covered.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-rose-200 shadow-xs">
                  <strong className="text-rose-900 flex items-center gap-1.5 mb-2 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    What is Excluded:
                  </strong>
                  <ul className="list-disc pl-4 space-y-1.5 text-slate-600">
                    {CLAIMS.warrantyTerms.excluded.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-slate-700">
                <strong>Who to Call for Warranty Service:</strong>
                <p className="mt-1">
                  Contact our support team at{" "}
                  <a href={`tel:${CLAIMS.warrantyTerms.whoToCall.phone.replace(/\s+/g, "")}`} className="font-bold text-sky-700 underline">
                    {CLAIMS.warrantyTerms.whoToCall.phone}
                  </a>{" "}
                  or email{" "}
                  <a href={`mailto:${CLAIMS.warrantyTerms.whoToCall.email}`} className="font-bold text-sky-700 underline">
                    {CLAIMS.warrantyTerms.whoToCall.email}
                  </a>
                  . {CLAIMS.warrantyTerms.whoToCall.notice}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">5</span>
                Pricing &amp; Payment Terms
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs">
                <li><strong>Transparent Estimates:</strong> Quotations itemize materials and anchoring hardware. There are no hidden fees. Prices vary with size, material, and site access.</li>
                <li><strong>Post-Installation Payment:</strong> For standard residential apartments, payment is settled upon successful installation and customer inspection of tension and workmanship.</li>
                <li><strong>Payment Modes:</strong> UPI (Google Pay, PhonePe, Paytm), Bank Transfer (IMPS/NEFT), or Cash upon receipt of invoice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">6</span>
                Site Access &amp; Safety Compliance
              </h2>
              <p className="text-xs text-slate-600">
                The client agrees to provide safe access to balconies, windows, or shafts, and obtain any required apartment society permissions. Our technicians are trained in safety protocols to protect property and adhere to height safety norms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">7</span>
                Governing Law &amp; Jurisdiction
              </h2>
              <p className="text-xs text-slate-600">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with our services shall be subject to the jurisdiction of the competent courts in Bengaluru, Karnataka.
              </p>
            </section>

            {/* Quick Contact Box */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mt-10">
              <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                Customer Support &amp; Warranty Assistance
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Need to book a warranty inspection, request re-tensioning, or clarify terms? Our customer support desk is available:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Direct Line</span>
                    <a href="tel:+919900552179" className="font-bold text-white hover:text-emerald-300">
                      +91 99005 52179
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Support Email</span>
                    <a href="mailto:info.bhagavathsafetynets@gmail.com" className="font-bold text-white hover:text-emerald-300">
                      info.bhagavathsafetynets@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Working Hours</span>
                    <span className="font-bold text-white">8:00 AM – 8:00 PM (Mon - Sun)</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

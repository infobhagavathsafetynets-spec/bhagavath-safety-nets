"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { CLAIMS } from "@/data/claims";
import { PRICING_DISCLAIMER, FINAL_QUOTE_NOTICE } from "@/data/pricing";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much time does a typical installation take?",
      answer:
        "For a standard apartment balcony or set of windows, installation is usually completed within 2 to 3 hours. Our technicians arrive with all drilling rigs, safety harnesses, and pre-cut hardware, and vacuum masonry dust before concluding the visit.",
    },
    {
      question: "Do gated communities and apartment associations in Bengaluru permit these installations?",
      answer:
        "Yes. High-rise apartment societies across Bengaluru routinely approve invisible grills and safety nets because they do not alter structural elevations or block building uniformity like traditional iron window bars. We can provide hardware specification sheets for your facility management or RWA if requested.",
    },
    {
      question: "What maintenance is required after safety netting or invisible grills are installed?",
      answer:
        "Maintenance is very straightforward. Safety nets require an annual visual inspection to verify perimeter tension. Invisible wire grills can be wiped with a soft damp cloth every few months to remove outdoor street dust from the clear protective nylon jacket.",
    },
    {
      question: "How does the doorstep laser measurement process work?",
      answer:
        "You can schedule a visit by phone or WhatsApp. A qualified technician visits your home with precision digital laser measurement tools and physical material samples. We measure your perimeter, discuss spacing options, and hand you an itemized estimate with zero booking advance or obligation.",
    },
    {
      question: "How is pricing calculated for safety solutions?",
      answer: `${PRICING_DISCLAIMER} ${FINAL_QUOTE_NOTICE} Pricing is determined by total square footage, building floor elevation, anchor substrate characteristics, and whether you select HDPE netting, SS316 invisible wire grills, or ceiling clothes hoists.`,
    },
    {
      question: `What is covered under your ${CLAIMS.warrantyLabel}?`,
      answer: `Every qualifying installation by Bhagavath Safety Nets is accompanied by our official ${CLAIMS.warrantyLabel} card. It covers premature UV degradation, knot slippage, anchor tension loss, and corrosion under normal residential weather. Details can be reviewed in our warranty terms.`,
    },
    {
      question: "How secure are these installations for energetic children and household pets?",
      answer:
        "Our HDPE copolymer nets are heat-set and double-knotted with high tensile breaking resistance. Our marine SS316 invisible cables are rated for over 400kg tensile load per wire and spaced at child-safe 2-inch intervals, preventing climbing or slipping through.",
    },
    {
      question: "Does your bird control netting harm pigeons or birds?",
      answer:
        "No. Our bird exclusion systems are 100% humane and non-lethal. The netting acts solely as a physical barrier that prevents birds from entering balconies, AC ledges, or vertical plumbing shafts without trapping or injuring them.",
    },
    {
      question: "Can invisible wire grills be cut during an emergency fire escape?",
      answer:
        "Yes. While invisible grills are extremely tough against daily impact, individual cables can be severed quickly with a standard wire cutter during a building fire evacuation, providing immediate emergency exit access.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF5ED]/50 scroll-mt-12" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAF5ED] text-[#4A2C2A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#EAD9C8]">
            <HelpCircle className="w-3.5 h-3.5 text-[#E0A526]" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1816] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Transparent answers regarding our safety netting, invisible grills, warranty commitments, and installation processes across Bengaluru.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#EAD9C8] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-[#2C1816] hover:text-[#4A2C2A] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E0A526] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                    {index === 5 && (
                      <div className="mt-3">
                        <Link
                          href={CLAIMS.warrantyTerms.termsUrl}
                          className="text-[#4A2C2A] font-bold underline hover:text-[#E0A526]"
                        >
                          View {CLAIMS.warrantyLabel} Terms &amp; Scope
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help card */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAD9C8] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="text-base font-bold text-[#2C1816]">Have a specific architectural requirement?</h4>
            <p className="text-xs text-slate-500 mt-1">Our safety specialists are available to answer queries daily from 8:00 AM to 8:00 PM.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+919900552179"
              className="bg-[#4A2C2A] hover:bg-[#3B211F] text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#E0A526]" />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919900552179?text=Hi%20Bhagavath%20Safety%20Nets,%20I%20have%20a%20question%20about%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

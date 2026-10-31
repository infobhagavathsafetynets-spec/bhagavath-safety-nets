"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react";
import { CLAIMS } from "@/data/claims";

export default function CustomerReviews() {
  // Only display real Google reviews when supplied by the client
  if (!CLAIMS.testimonials.hasRealReviews || CLAIMS.testimonials.items.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-[#2C1816] text-white scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E0A526]/20 border border-[#E0A526]/40 text-[#E0A526] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <span>Verified Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-heading">
            Customer Reviews
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Read verified reviews from apartment owners across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLAIMS.testimonials.items.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="p-7 rounded-3xl bg-[#4A2C2A]/60 border border-[#4A2C2A] flex flex-col justify-between hover:border-[#E0A526] transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E0A526]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-500 group-hover:text-[#E0A526] transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mb-6 italic font-sans">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#4A2C2A] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">{review.author}</h3>
                  <div className="flex items-center gap-1 text-stone-300 text-xs mt-0.5">
                    <MapPin className="w-3 h-3 text-[#E0A526]" />
                    <span>{review.locality}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#E0A526] bg-[#E0A526]/10 px-2 py-1 rounded-md block">
                    {review.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { trackFormSubmit, trackPhoneClick, trackWhatsAppClick } from "@/utils/analytics";
import { CLAIMS } from "@/data/claims";
import { CURRENT_OFFER, isOfferActive } from "@/data/offers";

// Zod Validation Schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Enter a valid 10-digit Indian mobile number (starts with 6-9).",
  }),
  area: z.string().min(2, { message: "Please specify your Bengaluru neighborhood." }),
  service: z.string().min(1, { message: "Please select a service category." }),
  message: z.string().optional(),
  botfield: z.string().optional(), // Honeypot spam block field
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  gclid: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const servicesList = [
  { value: "balcony-safety-nets", label: "Balcony Safety Nets" },
  { value: "children-safety-nets", label: "Children Safety Nets" },
  { value: "pet-safety-nets", label: "Pet Safety Nets" },
  { value: "pigeon-safety-nets", label: "Pigeon Safety Nets" },
  { value: "duct-area-safety-nets", label: "Duct Area Safety Nets" },
  { value: "balcony-invisible-grills", label: "Balcony Invisible Grills" },
  { value: "window-invisible-grills", label: "Window Invisible Grills" },
  { value: "ceiling-cloth-drying-hangers", label: "Ceiling Cloth Drying Hangers" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const offerActive = isOfferActive();

  const [trackingParams, setTrackingParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = new URLSearchParams(window.location.search);
      setTrackingParams({
        utm_source: search.get("utm_source") || "",
        utm_medium: search.get("utm_medium") || "",
        utm_campaign: search.get("utm_campaign") || "",
        utm_term: search.get("utm_term") || "",
        utm_content: search.get("utm_content") || "",
        gclid: search.get("gclid") || "",
      });
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      area: "",
      service: "",
      message: "",
      botfield: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    // Honeypot spam check
    if (data.botfield) {
      setStatus("success");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          location: data.area,
          service: data.service,
          message: data.message || `Inquiry from ${data.area} for ${data.service}`,
          utm_source: trackingParams.utm_source,
          utm_medium: trackingParams.utm_medium,
          utm_campaign: trackingParams.utm_campaign,
          utm_term: trackingParams.utm_term,
          utm_content: trackingParams.utm_content,
          gclid: trackingParams.gclid,
          page_path: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      if (response.ok) {
        // Track success event only
        trackFormSubmit(data.service, data.area, typeof window !== "undefined" ? window.location.pathname : "");
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#2C1816] text-white py-24 scroll-mt-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Side (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div>
              {offerActive ? (
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#E0A526] px-3.5 py-1.5 rounded-full inline-block shadow-md font-sans">
                    {CURRENT_OFFER.title} on Installation
                  </span>
                </div>
              ) : (
                <span className="text-xs font-bold uppercase tracking-wider text-[#E0A526] bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/20 mb-4 font-sans">
                  Free Doorstep Inspection
                </span>
              )}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Schedule Your Free On-Site Measurement
              </h2>
              <p className="mt-3 text-sm text-[#FAF5ED]/80 leading-relaxed font-sans font-normal">
                Our technicians visit your apartment with laser tools and physical material samples. We provide an itemized quote with zero advance payment obligations.
              </p>
            </div>

            <div className="flex flex-col gap-4 font-sans">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/15 hover:border-[#E0A526]/50 transition-all">
                <div className="p-3 bg-[#E0A526] text-[#1A1A1A] rounded-xl shrink-0 font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-stone-300 uppercase tracking-wider font-semibold">Direct Customer Support</h4>
                  <a
                    href="tel:+919900552179"
                    onClick={() => trackPhoneClick("contact_form_sidebar")}
                    className="text-lg font-bold text-white hover:text-[#E0A526] transition-colors"
                  >
                    +91 99005 52179
                  </a>
                  <p className="text-[11px] text-stone-300">Mon - Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>

              <a
                href="mailto:info.bhagavathsafetynets@gmail.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/15 hover:border-[#E0A526]/50 transition-all group"
              >
                <div className="p-3 bg-[#E0A526] text-[#1A1A1A] rounded-xl shrink-0 group-hover:bg-[#D4951E] transition-colors duration-300 font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-stone-300 uppercase tracking-wider font-semibold">Email Inquiry</h4>
                  <span className="text-sm font-bold text-white group-hover:text-[#E0A526] transition-colors">
                    info.bhagavathsafetynets@gmail.com
                  </span>
                  <p className="text-[11px] text-stone-300">Fast response on all estimates</p>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-white/15 text-xs text-stone-300 font-sans">
              <p className="font-bold text-[#E0A526]">Head Office: Koramangala, Bengaluru</p>
              <p className="mt-1 leading-relaxed">
                Service coverage: Koramangala, Whitefield, HSR Layout, Electronic City, Marathahalli, Bellandur, JP Nagar, BTM Layout, Hebbal, and Indiranagar.
              </p>
            </div>
          </div>

          {/* Form Side (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-200 text-[#3A3A3A]">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A2C2A] font-heading">Inspection Request Confirmed!</h3>
                  <p className="text-sm text-[#666666] max-w-sm mx-auto font-sans">
                    Thank you. Our safety specialist will call you shortly to confirm your preferred site visit time slot.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 bg-[#4A2C2A] hover:bg-[#E0A526] hover:text-[#1A1A1A] text-white text-xs font-bold px-6 py-3 rounded-full cursor-pointer transition-colors font-sans"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    {...register("botfield")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Hidden UTM & gclid tracking inputs */}
                  <input type="hidden" name="utm_source" value={trackingParams.utm_source} />
                  <input type="hidden" name="utm_medium" value={trackingParams.utm_medium} />
                  <input type="hidden" name="utm_campaign" value={trackingParams.utm_campaign} />
                  <input type="hidden" name="utm_term" value={trackingParams.utm_term} />
                  <input type="hidden" name="utm_content" value={trackingParams.utm_content} />
                  <input type="hidden" name="gclid" value={trackingParams.gclid} />

                  {status === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>Something went wrong sending your request. Please call us directly at +91 99005 52179.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#4A2C2A] uppercase tracking-wider mb-2 font-heading">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        {...register("name")}
                        className={`w-full bg-[#FAF5ED]/50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E0A526]/30 transition-all ${
                          errors.name ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#E0A526]"
                        }`}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-sans">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#4A2C2A] uppercase tracking-wider mb-2 font-heading">
                        WhatsApp / Mobile *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 98765 43210"
                        maxLength={10}
                        {...register("phone")}
                        className={`w-full bg-[#FAF5ED]/50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E0A526]/30 transition-all ${
                          errors.phone ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#E0A526]"
                        }`}
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 font-sans">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Locality Input */}
                    <div>
                      <label htmlFor="area" className="block text-xs font-bold text-[#4A2C2A] uppercase tracking-wider mb-2 font-heading">
                        Apartment &amp; Locality *
                      </label>
                      <input
                        id="area"
                        type="text"
                        placeholder="e.g. Koramangala / Whitefield"
                        {...register("area")}
                        className={`w-full bg-[#FAF5ED]/50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E0A526]/30 transition-all ${
                          errors.area ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#E0A526]"
                        }`}
                        aria-invalid={errors.area ? "true" : "false"}
                      />
                      {errors.area && (
                        <p className="mt-1 text-xs text-red-500 font-sans">{errors.area.message}</p>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-[#4A2C2A] uppercase tracking-wider mb-2 font-heading">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className={`w-full bg-[#FAF5ED]/50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E0A526]/30 transition-all appearance-none cursor-pointer ${
                          errors.service ? "border-red-500 focus:border-red-500" : "border-stone-200 focus:border-[#E0A526]"
                        }`}
                        aria-invalid={errors.service ? "true" : "false"}
                      >
                        <option value="">Select a Service...</option>
                        {servicesList.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-500 font-sans">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#4A2C2A] uppercase tracking-wider mb-2 font-heading">
                      Balcony Details / Floor Level (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="e.g. 5th floor balcony, need pigeon netting and invisible grill measurement..."
                      {...register("message")}
                      className="w-full bg-[#FAF5ED]/50 border border-stone-200 focus:border-[#E0A526] px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E0A526]/30 transition-all resize-y font-sans"
                    ></textarea>
                  </div>

                  {/* Submit Button (Mustard with Dark Text) */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#E0A526] hover:bg-[#D4951E] text-[#1A1A1A] font-extrabold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm font-sans"
                  >
                    {status === "loading" ? (
                      <div className="w-5 h-5 border-2 border-[#1A1A1A] border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Schedule Free Site Inspection</span>
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-[11px] text-[#666666] font-sans">
                      Zero advance booking fee. Backed by our{" "}
                      <Link href={CLAIMS.warrantyTerms.termsUrl} className="font-bold underline text-[#4A2C2A] hover:text-[#E0A526]">
                        {CLAIMS.warrantyLabel}
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

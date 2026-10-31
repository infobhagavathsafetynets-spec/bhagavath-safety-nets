/**
 * SINGLE SOURCE OF TRUTH: Pricing Estimates
 * Estimates only - never fixed prices.
 * While PRICING_CONFIRMED is false, no numbers are displayed;
 * customers are directed to request a free site measurement and WhatsApp quote.
 */

export const PRICING_CONFIRMED = false;

export interface ServicePricingRange {
  id: string;
  name: string;
  unit: string;
  estimateMinPerSqFt: number | null; // [CONFIRM WITH CLIENT]
  estimateMaxPerSqFt: number | null; // [CONFIRM WITH CLIENT]
  notes: string;
}

export const PRICING_DISCLAIMER = "Prices vary with size, material and access.";
export const FINAL_QUOTE_NOTICE = "Approximate estimate. Final quote after a free site visit.";

export const SERVICE_PRICING: Record<string, ServicePricingRange> = {
  "safety-nets": {
    id: "safety-nets",
    name: "Balcony & Safety Netting",
    unit: "sq. ft.",
    estimateMinPerSqFt: null, // [CONFIRM WITH CLIENT]
    estimateMaxPerSqFt: null, // [CONFIRM WITH CLIENT]
    notes: "UV-stabilized HDPE copolymer mesh; pricing depends on perimeter dimensions and rigging heights.",
  },
  "invisible-grills": {
    id: "invisible-grills",
    name: "Invisible Grills",
    unit: "sq. ft.",
    estimateMinPerSqFt: null, // [CONFIRM WITH CLIENT]
    estimateMaxPerSqFt: null, // [CONFIRM WITH CLIENT]
    notes: "Marine-grade SS316 stainless cables with track mounting; depends on spacing and structure.",
  },
  "cloth-hangers": {
    id: "cloth-hangers",
    name: "Cloth Drying Hangers",
    unit: "system",
    estimateMinPerSqFt: null, // [CONFIRM WITH CLIENT]
    estimateMaxPerSqFt: null, // [CONFIRM WITH CLIENT]
    notes: "SS304 ceiling pulley mechanisms; price depends on rod count (4 to 8 rods) and length.",
  },
};

export function getPriceEstimate(
  serviceKey: string,
  sqFt: number,
  discountPercentage: number = 0
): {
  min: number;
  max: number;
  discountedMin: number;
  discountedMax: number;
} | null {
  if (!PRICING_CONFIRMED) {
    return null;
  }

  const service = SERVICE_PRICING[serviceKey];
  if (!service || service.estimateMinPerSqFt === null || service.estimateMaxPerSqFt === null) {
    return null;
  }

  const rawMin = Math.round(service.estimateMinPerSqFt * sqFt);
  const rawMax = Math.round(service.estimateMaxPerSqFt * sqFt);

  const discountMultiplier = Math.max(0, 1 - discountPercentage / 100);
  const discountedMin = Math.round(rawMin * discountMultiplier);
  const discountedMax = Math.round(rawMax * discountMultiplier);

  return {
    min: rawMin,
    max: rawMax,
    discountedMin,
    discountedMax,
  };
}

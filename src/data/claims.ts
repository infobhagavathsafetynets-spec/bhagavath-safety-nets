/**
 * SINGLE SOURCE OF TRUTH: Business Claims, Warranty, and Statistics
 * Nothing invented: no unverified stats, testimonials, installs, ratings or branch offices.
 * Unconfirmed items are marked [CONFIRM WITH CLIENT] and hidden from live visitors.
 */

export const CLAIMS = {
  // Standard warranty across all Bhagavath Safety Nets services
  warrantyYears: 10,
  warrantyLabel: "10-Year Warranty",

  // Warranty card terms
  warrantyTerms: {
    title: "10-Year Warranty Terms",
    summary: "10-year replacement warranty on high-tensile safety netting and SS316 marine invisible grills.",
    covered: [
      "[CONFIRM WITH CLIENT: Manufacturing defects in copolymer filaments and SS316 cables]",
      "[CONFIRM WITH CLIENT: Premature UV degradation and loss of tensile strength under normal weather]",
      "[CONFIRM WITH CLIENT: Structural anchor loosening under regular residential loads]",
    ],
    excluded: [
      "[CONFIRM WITH CLIENT: Intentional physical cutting, blade damage, or burning]",
      "[CONFIRM WITH CLIENT: Building structural modifications, facade remodeling, or masonry dismantling]",
      "[CONFIRM WITH CLIENT: Re-rigging or alterations performed by unauthorized third parties]",
    ],
    whoToCall: {
      phone: "+91 99005 52179",
      email: "info.bhagavathsafetynets@gmail.com",
      notice: "[CONFIRM WITH CLIENT: Have your physical warranty card and installation receipt ready for expedited inspection]",
    },
    termsUrl: "/terms-and-conditions#warranty",
  },

  // Stats: hidden until confirmed and supplied by client
  stats: {
    isConfirmed: false,
    yearsInBusiness: null as number | null, // [CONFIRM WITH CLIENT]
    completedProjects: null as number | null, // [CONFIRM WITH CLIENT]
    customerRating: null as number | null, // [CONFIRM WITH CLIENT]
    reviewCount: null as number | null, // [CONFIRM WITH CLIENT]
    apartmentsCovered: null as number | null, // [CONFIRM WITH CLIENT]
  },

  // Testimonials: hidden until real Google Reviews are provided
  testimonials: {
    hasRealReviews: false, // Set true once verified Google Business Profile reviews are connected
    reviews: [] as Array<{
      name: string;
      location: string;
      rating: number;
      comment: string;
      date: string;
      service: string;
    }>,
    items: [] as Array<{
      id: string | number;
      author: string;
      locality: string;
      rating: number;
      date: string;
      service: string;
      content: string;
      source: "Google";
    }>,
  },
} as const;

export type ClaimsConfig = typeof CLAIMS;

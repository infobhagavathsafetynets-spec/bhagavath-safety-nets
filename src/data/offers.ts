/**
 * SINGLE SOURCE OF TRUTH: Promotional Offers
 * Only displayed in: Top Bar, Hero Chip, and Quote Form.
 * Automatically hidden if expired or set to inactive.
 */

export interface PromotionalOffer {
  id: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  terms: string;
  discountPercentage: number;
  startDate: string; // ISO date string (YYYY-MM-DD)
  endDate: string; // ISO date string (YYYY-MM-DD) - [CONFIRM END DATE WITH CLIENT]
  active: boolean;
}

export const CURRENT_OFFER: PromotionalOffer = {
  id: "bhagavath-launch-20",
  title: "20% OFF",
  badge: "Limited Period Offer",
  headline: "20% OFF on Installation Charges",
  description: "Receive a 20% savings on labor and installation for all residential safety netting and invisible grill bookings.",
  terms: "Valid for new bookings until [END DATE]. Free site measurement. Cannot be combined with other offers. [CONFIRM END DATE WITH CLIENT]",
  discountPercentage: 20,
  startDate: "2026-10-01",
  endDate: "2026-12-31", // [CONFIRM END DATE WITH CLIENT]
  active: true,
};

/**
 * Returns true if the offer is marked active and has not expired.
 */
export function isOfferActive(offer: PromotionalOffer = CURRENT_OFFER): boolean {
  if (!offer.active) return false;
  if (!offer.endDate) return true;

  const now = new Date();
  const expiry = new Date(offer.endDate);
  // Compare end of day in local time
  expiry.setHours(23, 59, 59, 999);
  return now <= expiry;
}

/**
 * Telemetry and Analytics Helper
 * Reads GA4 and Ads IDs from environment variables.
 * Emits required GA4 / GTM events: phone_click, whatsapp_click, form_submit
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5QW9WHMW";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
export const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || "";
export const SEARCH_CONSOLE_VERIFICATION = process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION || "VCYBi4SFvPqOOSHzVR7GJnj30WHh7w35YhdJpt9TZ8A";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

interface EventParams {
  page?: string;
  service?: string;
  area?: string;
  [key: string]: unknown;
}

function sendEvent(eventName: "phone_click" | "whatsapp_click" | "form_submit", params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const currentPath = params.page || window.location.pathname;
  const enrichedParams = {
    page: currentPath,
    service: params.service || "general",
    ...params,
  };

  // 1. Google Tag (gtag.js)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, enrichedParams);
  }

  // 2. DataLayer push (GTM / fallback)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...enrichedParams,
  });
}

export function trackPhoneClick(service?: string, page?: string) {
  sendEvent("phone_click", { service, page });
}

export function trackWhatsAppClick(service?: string, page?: string) {
  sendEvent("whatsapp_click", { service, page });
}

export function trackFormSubmit(service: string, area?: string, page?: string) {
  sendEvent("form_submit", { service, area, page });
}

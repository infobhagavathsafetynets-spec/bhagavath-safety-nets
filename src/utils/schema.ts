import { SITE_URL } from "@/utils/constants";
import { bangaloreAreasList, areasData } from "@/utils/areasData";

export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export const CITIES_BANGALORE = Object.values(areasData).map((a) => a.name);
export const CITIES_ANDHRA_PRADESH = CITIES_BANGALORE; // Backwards compatibility alias

export const ALL_19_SERVICES = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Pigeon Safety Nets",
  "Monkey Safety Nets",
  "Cricket Practice Nets",
  "Sports Netting",
  "Construction Safety Nets",
  "Duct Area Safety Nets",
  "Anti-Bird Spikes",
  "Mosquito Nets for Windows & Balconies",
  "Balcony Invisible Grills",
  "Children Invisible Grills",
  "Pet Invisible Grills",
  "Window Invisible Grills",
  "Staircase & Duplex Invisible Grills",
  "Ceiling Cloth Drying Hangers",
  "Balcony Cloth Drying Hangers",
  "Wall Mounted Cloth Hangers",
];

export const ALL_8_SERVICES = ALL_19_SERVICES; // Backwards compatibility alias
export const ALL_18_SERVICES = ALL_19_SERVICES; // Backwards compatibility alias

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bhagavath Safety Nets",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo/bhagavath-logo.webp`,
    "image": `${SITE_URL}/images/og-image.webp`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 99005 52179",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
      },
    ],
  };
}

/**
 * LocalBusiness JSON-LD Schema
 * Meets Step 8 strict requirements:
 * - name, url, telephone, email, logo
 * - areaServed (the 10 areas)
 * - address with the locality only (streetAddress/postalCode omitted until client confirms)
 * - openingHours omitted until confirmed
 * - sameAs omitted until Google Business Profile link is supplied
 * - NO AggregateRating or Review schema
 */
export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName
    ? [areaName]
    : CITIES_BANGALORE;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": areaName ? `Bhagavath Safety Nets - ${areaName}` : "Bhagavath Safety Nets",
    "url": areaName
      ? `${SITE_URL}/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}`
      : SITE_URL,
    "telephone": "+91 99005 52179",
    "email": "info.bhagavathsafetynets@gmail.com",
    "image": `${SITE_URL}/images/og-image.webp`,
    "logo": `${SITE_URL}/images/logo/bhagavath-logo.webp`,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaName || "Koramangala, Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN",
    },
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Bengaluru, Karnataka`,
    })),
  };
}

export function generateServiceProductSchema(serviceName: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${serviceName} in Bengaluru`,
    "description": `Professional ${serviceName.toLowerCase()} installation by Bhagavath Safety Nets across Bengaluru, Karnataka.`,
    "brand": {
      "@type": "Brand",
      "name": "Bhagavath Safety Nets",
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `${SITE_URL}/services/${serviceSlug}`,
      "description": "Approximate estimate. Final quote after a free site visit.",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bhagavath Safety Nets",
    "url": SITE_URL,
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `${SITE_URL}${crumb.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName?: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": categoryName || serviceName,
    "name": serviceName,
    "description": description || `${serviceName} by Bhagavath Safety Nets in Bengaluru, Karnataka.`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Bhagavath Safety Nets",
      "telephone": "+91 99005 52179",
      "email": "info.bhagavathsafetynets@gmail.com",
      "url": SITE_URL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Koramangala, Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": "Bengaluru, Karnataka",
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export const generateFAQPageSchema = generateFAQSchema;

export function generateArticleSchema(
  articleOrTitle:
    | string
    | {
        title: string;
        description: string;
        slug?: string;
        datePublished: string;
        authorName?: string;
        image?: string;
      },
  description?: string,
  image?: string,
  datePublished?: string
) {
  if (typeof articleOrTitle === "object") {
    const article = articleOrTitle;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "mainEntityOfPage": article.slug ? `${SITE_URL}/blog/${article.slug}` : SITE_URL,
      "datePublished": article.datePublished,
      "dateModified": article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.authorName || "Bhagavath Safety Nets",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bhagavath Safety Nets",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/images/logo/bhagavath-safety-nets-logo-light.svg`,
        },
      },
      "image": article.image || `${SITE_URL}/images/og-image.webp`,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleOrTitle,
    "description": description || "",
    "mainEntityOfPage": SITE_URL,
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Bhagavath Safety Nets",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bhagavath Safety Nets",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/logo/bhagavath-safety-nets-logo-light.svg`,
      },
    },
    "image": image || `${SITE_URL}/images/og-image.webp`,
  };
}

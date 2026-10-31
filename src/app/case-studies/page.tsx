import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: {
    absolute: "Installation Portfolio in Bengaluru | Bhagavath",
  },
  description:
    "Real-world installation projects for balcony safety netting, invisible grills, and cloth drying systems in Bengaluru apartments.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Bhagavath Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Explore case studies & real installation projects by Bhagavath Safety Nets across Bangalore, including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    url: "https://bhagavathsafetynets.com/case-studies",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Bhagavath Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Explore case studies & real installation projects by Bhagavath Safety Nets across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function CaseStudiesPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <CaseStudiesClient />
    </>
  );
}

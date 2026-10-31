import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: {
    absolute: "Customer Assurance & Quality | Bhagavath Safety Nets",
  },
  description:
    "Customer assurance framework, quality standards, and verified project references for residential apartments across Bengaluru.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Reviews & Quality Assurance | Bhagavath Safety Nets Bengaluru, Karnataka",
    description:
      "Learn about Bhagavath Safety Nets' commitment to quality installation of safety nets, invisible grills, and cloth hangers across Bengaluru.",
    url: "https://bhagavathsafetynets.com/testimonials",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Quality Assurance | Bhagavath Safety Nets Bengaluru, Karnataka",
    description:
      "Learn about Bhagavath Safety Nets' commitment to quality installation of safety nets, invisible grills, and cloth hangers across Bengaluru.",
    images: ["/images/og-image.webp"],
  },
};

export default function TestimonialsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Testimonials", item: "/testimonials" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <TestimonialsClient />
    </>
  );
}

import { Metadata } from "next";
import AreasClient from "./AreasClient";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Service Areas in Bengaluru | Bhagavath Safety Nets",
  },
  description:
    "Explore our 10 primary service areas in Bengaluru for balcony safety nets, SS316 invisible grills, and cloth hangers. Free doorstep visit.",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Service Areas in Bengaluru | Bhagavath Safety Nets",
    description:
      "Explore our 10 primary service areas in Bengaluru for balcony safety nets, SS316 invisible grills, and cloth hangers.",
    url: "https://bhagavathsafetynets.com/areas",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Service Areas in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas in Bengaluru | Bhagavath Safety Nets",
    description:
      "Explore our 10 primary service areas in Bengaluru for balcony safety nets and invisible wire grills.",
    images: ["/images/og-image.webp"],
  },
};

export default function AreasPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Areas We Serve", item: "/areas" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)),
        }}
      />
      <AreasClient />
    </>
  );
}

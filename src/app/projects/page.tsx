import { Metadata } from "next";
import Link from "next/link";
import ProjectsFilterClient from "./ProjectsFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Completed Projects | Bhagavath Safety Nets Bengaluru",
  },
  description:
    "Portfolio of completed safety net and invisible grill installations across residential apartment communities in Bengaluru.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Completed Projects | Bhagavath Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "View completed safety net and invisible grill installation projects by Bhagavath Safety Nets across Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    url: "https://bhagavathsafetynets.com/projects",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bhagavath Safety Nets Installation Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Completed Projects | Bhagavath Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "View completed safety net and invisible grill installation projects by Bhagavath Safety Nets across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function ProjectsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E0A526] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Projects</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-start">
            Visual Proof
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Safety Nets &amp; Invisible Grills Projects in Bengaluru
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Review case profiles of completed safety netting systems and invisible grills installed by Bhagavath Safety Nets in residential blocks and factories across Bangalore.
          </p>
        </div>

        {/* Client filter and search panel */}
        <ProjectsFilterClient />
      </div>
    </div>
  );
}

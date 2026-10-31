"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Settings, ArrowRight } from "lucide-react";
import { CLAIMS } from "@/data/claims";

interface Category {
  id: number;
  name: string;
  count: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Safety Net Solutions",
    count: "5 Specialized Services",
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    icon: <Shield className="w-6 h-6 text-white" />,
    description: `Fortify balconies, windows, and open duct shafts with UV-stabilized copolymer netting for child, pet, and pigeon safety backed by our ${CLAIMS.warrantyLabel}.`,
    slug: "safety-nets",
  },
  {
    id: 2,
    name: "SS316 Invisible Grills",
    count: "2 Architectural Options",
    image: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    icon: <Eye className="w-6 h-6 text-white" />,
    description: `Preserve panoramic outdoor skyline views while securing balconies and windows with marine SS316 stainless wire cables backed by our ${CLAIMS.warrantyLabel}.`,
    slug: "invisible-grills",
  },
  {
    id: 3,
    name: "Cloth Drying Systems",
    count: "Ceiling Pulley Solutions",
    image: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    icon: <Settings className="w-6 h-6 text-white" />,
    description: `Maximize balcony floor utility with smooth pulley stainless steel ceiling drying systems backed by our ${CLAIMS.warrantyLabel}.`,
    slug: "cloth-hangers",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="bg-white py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Core Verticals
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            High-Altitude Protection &amp; Space Optimization
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-sans">
            Engineered specifically for high-rise apartment living in Bengaluru, providing fall security and bird exclusion without sacrificing architectural style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#E0A526] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                <Image
                  src={category.image}
                  alt={`Bhagavath Safety Nets - ${category.name} in Bengaluru`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-[#4A2C2A] p-3 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:rotate-12 border border-[#E0A526]/40">
                  <div className="text-[#E0A526]">{category.icon}</div>
                </div>

                {/* Service count label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-black/50 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                    {category.count}
                  </div>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A] font-heading mb-3 group-hover:text-[#6B4340] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6 font-sans">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href={`/services/${category.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A2C2A] group-hover:text-[#E0A526] transition-colors"
                  >
                    <span>Explore Category</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

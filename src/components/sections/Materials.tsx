"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Sparkles, Check } from "lucide-react";

interface Material {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const materials: Material[] = [
  {
    id: 1,
    name: "UV-Stabilized Virgin HDPE Copolymer Netting",
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    specs: [
      "100% Virgin High-Density Polyethylene with UV inhibitors",
      "Calibrated square safety aperture for balcony & bird protection",
      "High knot-breaking tensile endurance for fall prevention",
      "Withstands continuous Bengaluru solar exposure & monsoon rains",
    ],
  },
  {
    id: 2,
    name: "Marine-Grade SS316 Stainless Wire Cables",
    image: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    specs: [
      "Genuine 316 marine-grade molybdenum alloy multi-strand wire core",
      "Crystal-clear transparent nylon protective coating",
      "High tensile load capacity per cable line",
      "Slim architectural profile preserving 100% panoramic views",
    ],
  },
  {
    id: 3,
    name: "Child & Pet High-Tenacity Balcony Mesh",
    image: "/images/bhagavath/bhagavath-children-safety-net-bengaluru-1.webp",
    specs: [
      "Multi-filament braided knot reinforcement technology",
      "Non-abrasive texture safe for children and indoor pets",
      "Discreet visual profile preserving high-rise building aesthetics",
      "Close anchor pitch eliminating dangerous bottom perimeter gaps",
    ],
  },
  {
    id: 4,
    name: "Structural Powder-Coated Aluminium Track Mounts",
    image: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-2.webp",
    specs: [
      "Heavy-gauge extruded structural aluminium mounting channels",
      "Electrostatically powder-coated weather-shield barrier",
      "Concealed internal locking mechanism and stainless anchors",
      "Miter-cut precision alignment to match balcony and window lintels",
    ],
  },
];

export default function Materials() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#E0A526]" />
            Material Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Certified Structural Grade Materials
          </h2>
          <p className="text-[#666666] text-sm leading-relaxed font-sans">
            Every net, cable, and anchor is selected for tensile strength, non-corrosive longevity, and weather endurance in Bengaluru&apos;s climate.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((mat, index) => (
            <motion.div
              key={mat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#FAF5ED]/50 rounded-3xl overflow-hidden border border-stone-200 hover:border-[#E0A526]/50 transition-all duration-300 flex flex-col sm:flex-row group"
            >
              <div className="relative h-56 sm:h-auto sm:w-2/5 shrink-0 bg-stone-100 overflow-hidden">
                <Image
                  src={mat.image}
                  alt={`Bhagavath Safety Nets - ${mat.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  quality={80}
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-bold text-[#4A2C2A] font-heading mb-3">
                    {mat.name}
                  </h3>
                  <ul className="space-y-2">
                    {mat.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-[#666666] font-sans">
                        <Check className="w-3.5 h-3.5 text-[#E0A526] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  category: string;
}

const teamWorkGallery: GalleryItem[] = [
  {
    id: 1,
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    caption: "Balcony Mesh Anchoring",
    category: "Safety Netting",
  },
  {
    id: 2,
    image: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    caption: "SS316 Wire Cable Tensioning",
    category: "Invisible Grills",
  },
  {
    id: 3,
    image: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    caption: "Ceiling Pulley Hoist Mounting",
    category: "Cloth Hangers",
  },
  {
    id: 4,
    image: "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-1.webp",
    caption: "Duct Shaft Protection Netting",
    category: "Safety Netting",
  },
  {
    id: 5,
    image: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-2.webp",
    caption: "Window Frame Track Alignment",
    category: "Invisible Grills",
  },
  {
    id: 6,
    image: "/images/bhagavath/bhagavath-children-safety-net-bengaluru-1.webp",
    caption: "Child Safety Balcony Barrier",
    category: "Safety Netting",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="craftsmanship">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E0A526] bg-[#FFF4DC] px-3.5 py-1.5 rounded-full inline-block self-center">
            Precision Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C2A] font-heading tracking-tight leading-tight">
            Workmanship &amp; Installation Technique
          </h2>
          <p className="text-[#666666] text-sm leading-relaxed font-sans">
            Our installation crews specialize in high-rise building safety, rope access, and secure concrete masonry anchoring.
          </p>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamWorkGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-200 hover:border-[#E0A526] transition-all duration-300 h-80 bg-stone-100"
            >
              <Image
                src={item.image}
                alt={`Bhagavath Safety Nets - ${item.caption} in Bengaluru`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={80}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Floating Content Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                <div className="flex flex-col gap-0.5 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#E0A526] font-bold">
                    {item.category}
                  </span>
                  <span className="text-sm font-bold font-heading">{item.caption}</span>
                </div>
                <div className="bg-[#4A2C2A] p-2.5 rounded-full text-white shadow-md border border-[#E0A526]/30">
                  <Wrench className="w-4 h-4 text-[#E0A526]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

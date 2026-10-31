"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import MasonryGrid from "@/components/ui/masonry-grid";
import LightboxGallery from "@/components/ui/lightbox-gallery";

interface GalleryPhoto {
  image: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers" | "materials";
  categoryLabel: string;
  location: string;
  serviceName: string;
  description: string;
}

const galleryData: GalleryPhoto[] = [
  {
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Koramangala, Bengaluru",
    serviceName: "Balcony Safety Nets",
    description: "UV-stabilized copolymer safety netting anchored into concrete balcony pillars.",
  },
  {
    image: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Whitefield, Bengaluru",
    serviceName: "Balcony Invisible Grills",
    description: "SS316 marine wire invisible grills providing fall protection with panoramic view.",
  },
  {
    image: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Indiranagar, Bengaluru",
    serviceName: "Ceiling Cloth Hangers",
    description: "Dual-pulley ceiling-mounted drying hoist system for utility balcony.",
  },
  {
    image: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "HSR Layout, Bengaluru",
    serviceName: "Pigeon Safety Nets",
    description: "Translucent anti-bird barrier mesh preventing pigeon roosting on balcony ledge.",
  },
  {
    image: "/images/bhagavath/bhagavath-children-safety-net-bengaluru-1.webp",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "Electronic City, Bengaluru",
    serviceName: "Children Safety Nets",
    description: "Close-mesh child containment netting secured along railing perimeter.",
  },
  {
    image: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Bellandur, Bengaluru",
    serviceName: "Window Invisible Grills",
    description: "Vertical stainless steel cable barrier mounted across bedroom window frame.",
  },
  {
    image: "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-1.webp",
    category: "cloth-hangers",
    categoryLabel: "Cloth Hangers",
    location: "Marathahalli, Bengaluru",
    serviceName: "Balcony Cloth Hangers",
    description: "Ceiling-mounted stainless steel drying rods operated with individual nylon cords.",
  },
  {
    image: "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-1.webp",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "JP Nagar, Bengaluru",
    serviceName: "Pet Safety Nets",
    description: "Bite-resistant, claw-proof safety net protecting dogs and cats on high-rise balcony.",
  },
  {
    image: "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-1.webp",
    category: "safety-nets",
    categoryLabel: "Safety Nets",
    location: "BTM Layout, Bengaluru",
    serviceName: "Duct Area Safety Nets",
    description: "Heavy-gauge building shaft net preventing bird entry into interior utility ducts.",
  },
  {
    image: "/images/bhagavath/bhagavath-mesh-material-demo-bengaluru-1.webp",
    category: "materials",
    categoryLabel: "Materials",
    location: "Bengaluru Central",
    serviceName: "Virgin Copolymer Mesh",
    description: "Close-up of double-knotted UV-stabilized copolymer filament netting.",
  },
  {
    image: "/images/bhagavath/bhagavath-wire-cable-demo-bengaluru-1.webp",
    category: "materials",
    categoryLabel: "Materials",
    location: "Bengaluru Central",
    serviceName: "SS316 Marine Cable Wire",
    description: "High-tensile multi-strand SS316 wire rope sheathed in transparent nylon.",
  },
  {
    image: "/images/bhagavath/bhagavath-pulley-hardware-demo-bengaluru-1.webp",
    category: "materials",
    categoryLabel: "Materials",
    location: "Bengaluru Central",
    serviceName: "Stainless Pulley Hardware",
    description: "Heavy-duty dual pulley wheel bearings and stainless ceiling anchors.",
  },
];

const filters = [
  { value: "all", label: "All Photos" },
  { value: "safety-nets", label: "Safety Nets" },
  { value: "invisible-grills", label: "Invisible Grills" },
  { value: "cloth-hangers", label: "Cloth Hangers" },
  { value: "materials", label: "Materials & Hardware" },
];

export default function GalleryFilterClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = galleryData.filter(
    (photo) => activeFilter === "all" || photo.category === activeFilter
  );

  const imagesList = filteredPhotos.map((p) => p.image);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Toolbar */}
      <div className="flex flex-wrap gap-2.5 bg-white p-5 rounded-3xl border border-stone-200 shadow-xs justify-center sm:justify-start">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`text-xs sm:text-sm font-bold px-4.5 py-2.5 rounded-full cursor-pointer transition-all ${
              activeFilter === filter.value
                ? "bg-[#4A2C2A] text-white shadow-xs"
                : "bg-[#FAF5ED] hover:bg-[#FFF4DC] text-[#4A2C2A] border border-stone-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <MasonryGrid>
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setPhotoIndex(index)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-stone-200 transition-all duration-300 cursor-pointer w-full"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-stone-100">
              <Image
                src={photo.image}
                alt={`Bhagavath Safety Nets - ${photo.serviceName} - ${photo.description}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
                quality={75}
              />
              {/* Zoom hover glass overlay */}
              <div className="absolute inset-0 bg-[#2C1816]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full text-[#4A2C2A] backdrop-blur-xs scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-4.5 h-4.5" />
                </div>
              </div>
            </div>

            {/* Meta Footer */}
            <div className="p-5 border-t border-stone-100 font-sans">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#E0A526] font-bold uppercase mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E0A526]" />
                <span>{photo.location}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#4A2C2A] mb-1 font-heading group-hover:text-[#6B4340] transition-colors">
                {photo.serviceName}
              </h3>
              <p className="text-[#666666] text-[11px] leading-relaxed line-clamp-2">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </MasonryGrid>

      {/* Lightbox Trigger Modal */}
      {photoIndex !== null && (
        <LightboxGallery
          images={imagesList}
          serviceName={filteredPhotos[photoIndex].serviceName}
        />
      )}
    </div>
  );
}

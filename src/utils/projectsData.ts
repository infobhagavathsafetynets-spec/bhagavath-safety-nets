import { SpecItem } from "./servicesData";
import { CLAIMS } from "@/data/claims";

export interface ProjectDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  service: string;
  serviceName: string;
  location: string;
  locationSlug: string;
  date: string;
  description: string;
  problem: string;
  solution: string;
  materialsUsed: string[];
  process: string[];
  image: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  specs: SpecItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "balcony-safety-nets-whitefield": {
    slug: "balcony-safety-nets-whitefield",
    name: "Balcony Perimeter Safety Netting in Whitefield",
    category: "safety-nets",
    service: "balcony-safety-nets",
    serviceName: "Balcony Safety Nets",
    location: "Whitefield, Bengaluru",
    locationSlug: "whitefield",
    date: "Residential Project",
    description: "Perimeter containment netting fitted for a high-rise apartment balcony along the IT corridor in Whitefield.",
    problem: "The resident moved into a high-rise apartment with children and an indoor cat. The open horizontal railing design presented fall risks, while pigeons frequented balcony ledges.",
    solution: "Installed high-tenacity UV-stabilized copolymer netting anchored with stainless steel eyebolts spaced at regular intervals along the concrete ceiling and floor parapet, delivering child safety without blocking light.",
    materialsUsed: [
      "Virgin UV-Stabilized HDPE Copolymer Knotted Mesh",
      "Marine Grade 304 Stainless Steel Expansion Eye-Bolts",
      "High-Tension Braided Perimeter Core Ropes",
      "Non-Corrosive Anchoring Sleeves",
    ],
    process: [
      "Conducted on-site laser measurement of the three-sided balcony perimeter.",
      "Drilled anchor sockets using low-vibration diamond core bits.",
      "Interlaced perimeter boundary cord through the HDPE safety mesh.",
      "Tensioned all anchor points to verify load capacity.",
      "Cleaned masonry residue with vacuum and delivered official warranty card.",
    ],
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    gallery: [
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-mesh-material-demo-bengaluru-1.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-2.webp",
    specs: [
      { label: "Mesh Specification", value: "30mm x 30mm Copolymer HDPE" },
      { label: "Anchor Pitch", value: "Regular interval precision spacing" },
      { label: "Static Load Resistance", value: "High tensile load bearing" },
      { label: "Warranty Issued", value: CLAIMS.warrantyLabel },
    ],
  },

  "invisible-grills-koramangala": {
    slug: "invisible-grills-koramangala",
    name: "Marine-Grade SS316 Invisible Grills in Koramangala",
    category: "invisible-grills",
    service: "balcony-invisible-grills",
    serviceName: "Balcony Invisible Grills",
    location: "Koramangala, Bengaluru",
    locationSlug: "koramangala",
    date: "Residential Project",
    description: "Unobstructed view invisible grill installation across high-rise balconies in Koramangala.",
    problem: "Homeowners needed robust edge protection for their family while maintaining an unblocked panoramic skyline view without traditional heavy iron cages.",
    solution: "Installed marine-grade SS316 cable invisible grills with transparent nylon sheathing, secured by anodized structural aluminium guide channels to guarantee rust resistance.",
    materialsUsed: [
      "SS316 Marine-Grade Multi-Strand Stainless Steel Wire Core (7x7)",
      "High-Elasticity Clear Protective Nylon Coating",
      "Structural Grade T6 Powder-Coated Aluminium Mounting Profiles",
      "Internal Stainless Lock-Bush Fasteners",
    ],
    process: [
      "Assessed balcony structural slab and wind exposure variables.",
      "Securely anchored heavy aluminium base tracks into reinforced ceiling and floor slabs.",
      "Fed SS316 marine cables continuously through precision-spaced tracks.",
      "Applied calibrated tensioning across all vertical lines.",
      "Verified tension alignment across the entire balcony span.",
    ],
    image: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    gallery: [
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-2.webp",
    specs: [
      { label: "Cable Composition", value: "SS316 Marine Stainless Steel" },
      { label: "Cable Pitch", value: "50mm / 75mm Architectural Spacing" },
      { label: "Breaking Force", value: "400+ kg tensile limit per cable" },
      { label: "Corrosion Protection", value: "100% Weather Resistant" },
      { label: "Warranty Issued", value: CLAIMS.warrantyLabel },
    ],
  },

  "ceiling-hangers-indiranagar": {
    slug: "ceiling-hangers-indiranagar",
    name: "Ceiling Pulley Cloth Drying System in Indiranagar",
    category: "cloth-hangers",
    service: "ceiling-cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    location: "Indiranagar, Bengaluru",
    locationSlug: "indiranagar",
    date: "Residential Project",
    description: "Installation of a 6-pipe independent dual-pulley drying hoist system inside an apartment utility balcony in Indiranagar.",
    problem: "A residential family struggled with folding drying stands that occupied the entire balcony walkway and blocked access to the washing machine.",
    solution: "Installed an independent 6-rod SS304 ceiling pulley drying system, allowing the homeowner to lower rods individually to chest height and hoist laundry to the ceiling slab.",
    materialsUsed: [
      "SS304 Rustproof Seamless Stainless Steel Drying Tubes",
      "Low-Friction Nylon Pulley Wheels",
      "High-Tensile Braided Nylon Hoist Cords",
      "Wall-Mounted Locking Cleat Plate",
    ],
    process: [
      "Mapped ceiling runs to establish secure anchor points.",
      "Bolted dual-bearing ceiling pulley brackets firmly into concrete ceiling slab.",
      "Threaded tangle-free nylon cords and secured stainless steel rods.",
      "Calibrated individual cord locks and tested with wet laundry weight.",
      "Demonstrated daily operation to the homeowner.",
    ],
    image: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    gallery: [
      "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-2.webp",
    specs: [
      { label: "Rod Configuration", value: "6 Independent SS304 Tubes" },
      { label: "Drying Capacity", value: "Heavy Wet Laundry Load Support" },
      { label: "Pulley Hardware", value: "Sealed Nylon Bearings" },
      { label: "Warranty Issued", value: CLAIMS.warrantyLabel },
    ],
  },
};

import { CLAIMS } from "@/data/claims";
import { PRICING_DISCLAIMER, FINAL_QUOTE_NOTICE } from "@/data/pricing";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  categoryName: string;
  title: string;
  description: string;
  longDescription: string;
  aiOverview: string;
  image: string;
  supportingImages: string[];
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  benefits: string[];
  specsTable: SpecItem[];
  faqs: FAQItem[];
}

function getCommonServiceFAQs(serviceName: string, category: string): FAQItem[] {
  return [
    {
      question: `How is the price calculated for ${serviceName}?`,
      answer: `${PRICING_DISCLAIMER} Pricing depends on the square footage, floor height, chosen wire/mesh grade, and structural anchoring requirements. ${FINAL_QUOTE_NOTICE}`,
    },
    {
      question: `What warranty coverage applies to ${serviceName}?`,
      answer: `All installations by Bhagavath Safety Nets include our ${CLAIMS.warrantyLabel}. It covers structural anchor tightness, material integrity, and UV resistance under normal weather conditions. Details are documented in our written warranty card.`,
    },
    {
      question: `How long does the installation take?`,
      answer: `A standard apartment balcony or window setup typically takes 2 to 3 hours. Our technicians arrive with all tools, hardware, and safety harnesses, and clean up masonry drill dust before leaving.`,
    },
    {
      question: `Do I need permission from my apartment society / RWA?`,
      answer: `Most residential apartment complexes across Bengaluru allow invisible grills and safety nets because they do not alter the building facade or damage structural concrete. We recommend notifying your building management or facility desk prior to the visit.`,
    },
    {
      question: `What maintenance is required after installation?`,
      answer: `Very minimal. For safety nets, simply inspect tension once a year. For invisible wire grills, wipe the nylon-sheathed cables with a damp microfiber cloth occasionally to clear outdoor urban dust.`,
    },
    {
      question: `How does the free site measurement process work?`,
      answer: `You can schedule a site visit by phone or WhatsApp. A technician visits your home with physical material samples, measures the exact perimeter with a laser distance meter, and provides an itemized quote on the spot with zero obligation.`,
    },
    {
      question: `How does ${serviceName} withstand Bengaluru weather and monsoon rains?`,
      answer: category === "invisible-grills"
        ? `Our invisible grills use marine-grade SS316 multi-strand wire rope sheathed in transparent nylon, making them impervious to rust, moisture, and intense UV exposure.`
        : `We use UV-stabilized high-density virgin copolymer polyethylene that does not become brittle, crack, or lose tension during seasonal downpours or hot afternoon sun.`,
    },
  ];
}

export const servicesData: Record<string, ServiceDetail> = {
  "balcony-safety-nets": {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Balcony Safety Nets Installation in Bengaluru",
    description:
      "Heavy-duty UV-stabilized copolymer balcony netting designed to prevent accidental falls while keeping pigeons and birds out of your home.",
    longDescription:
      "Bhagavath Safety Nets installs structural-grade balcony safety nets across high-rise residential towers and independent homes in Bengaluru. Using 100% virgin high-density copolymer filaments, our netting creates a secure barrier along balcony railings, open utility zones, and outdoor decks. Anchored securely with stainless expansion hooks into concrete lintels, it keeps children, seniors, and pets completely safe without blocking airflow or ambient daylight.",
    aiOverview:
      "Engineered balcony perimeter safety netting constructed with knot-interlocked, UV-resistant HDPE polymer. Withstands high wind loads and outdoor weather, installed with stainless concrete eyebolts.",
    image: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-3.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-2.webp",
    benefits: [
      "Reliable perimeter protection for toddlers, children, and elderly family members",
      "UV-stabilized virgin polymer resistant to brittle sun degradation",
      "Discreet visual profile that preserves natural light and ventilation",
      "High breaking tension tested for heavy impact containment",
      `Backed by our written ${CLAIMS.warrantyLabel} card`,
    ],
    specsTable: [
      { label: "Material Composition", value: "Virgin HDPE High-Density Copolymer" },
      { label: "Mesh Aperture Size", value: "25mm to 30mm Square Grid" },
      { label: "Wire / Twine Gauge", value: "1.0mm - 1.5mm braided multi-filament" },
      { label: "Fastening Hardware", value: "SS304 Rustproof Expansion Anchors" },
      { label: "Warranty Guarantee", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Free Doorstep Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Balcony Safety Nets", "safety-nets"),
      {
        question: "Can birds still nest on the balcony with this net installed?",
        answer: "No. The 25mm to 30mm mesh size completely blocks pigeons and larger birds from squeezing through or perching on your balcony ledges.",
      },
      {
        question: "Will the net sag or loosen after heavy winds?",
        answer: "Our technicians tension the net perimeter with high-tensile perimeter tie ropes and stainless expansion hooks every foot, ensuring firm tension that prevents sagging.",
      },
    ],
  },

  "children-safety-nets": {
    slug: "children-safety-nets",
    name: "Children Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Children Safety Nets for High-Rise Apartments in Bengaluru",
    description:
      "Reinforced child-proofing nets for apartment balconies, open window ledges, and staircases to eliminate fall hazards for curious toddlers.",
    longDescription:
      "For parents living in multi-story apartments in Bengaluru, curious toddlers and low balcony railings can create constant worry. Bhagavath Safety Nets specializes in child safety containment systems engineered specifically to block climbing points and open railing gaps. Our netting is tightly spaced, non-abrasive, and anchored with heavy-duty structural fixings capable of absorbing sudden impacts.",
    aiOverview:
      "Specialized child fall-prevention barrier systems designed for residential apartment railings, stair voids, and low window sills with close mesh spacing and structural wall anchors.",
    image: "/images/bhagavath/bhagavath-children-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-children-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-children-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-children-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-children-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-children-safety-net-bengaluru-2.webp",
    benefits: [
      "Prevents children from squeezing through horizontal railing slats",
      "Smooth, non-abrasive polymer knots safe for toddler hands",
      "Closely-spaced anchor points for zero sag or give under weight",
      "Custom installation for stairwells, mezzanine floors, and windows",
      `Certified installation backed by our ${CLAIMS.warrantyLabel}`,
    ],
    specsTable: [
      { label: "Recommended Mesh", value: "25mm Micro-Aperture Child Safety Mesh" },
      { label: "Impact Rating", value: "High-tensile load absorbing knotted construction" },
      { label: "Anchor Pitch", value: "Stainless concrete anchor every 25cm" },
      { label: "Chemical Safety", value: "Non-toxic, lead-free virgin polymer" },
      { label: "Warranty Guarantee", value: CLAIMS.warrantyLabel },
      { label: "Measurement", value: "Free Laser Site Inspection" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Children Safety Nets", "safety-nets"),
      {
        question: "Can a child cut or untie the net?",
        answer: "The net is constructed with heat-set, double-knotted copolymer that cannot unravel by hand. The perimeter is secured with stainless steel fasteners and locked perimeter cords.",
      },
    ],
  },

  "pet-safety-nets": {
    slug: "pet-safety-nets",
    name: "Pet Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Pet & Cat Safety Nets for Balconies & Windows Bengaluru",
    description:
      "Tear-resistant, bite-proof safety nets tailored to safeguard playful cats and dogs from accidental slips across balconies and window sills.",
    longDescription:
      "Domestic pets love watching birds and outdoor movement from high balconies, but open railings present life-threatening fall risks. Bhagavath Safety Nets provides specialized pet-proof netting fabricated from dense, abrasion-resistant polymer strands. The net prevents felines and canines from slipping through railing bars or leaping after insects, giving pet parents complete peace of mind.",
    aiOverview:
      "High-durability pet barrier netting designed for balcony and window containment, featuring bite-resistant, claw-proof copolymer mesh and tight perimeter anchors.",
    image: "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-2.webp",
    benefits: [
      "Claw-resistant and chew-resistant reinforced polymer weave",
      "Eliminates high-rise fall risks for indoor cats and small dogs",
      "Preserves full outdoor visibility and fresh air flow",
      "Fitted tightly from floor slab to ceiling lintel with zero escape gaps",
      `Long-term durability backed by our ${CLAIMS.warrantyLabel}`,
    ],
    specsTable: [
      { label: "Material Type", value: "Abrasion-Resistant Virgin HDPE" },
      { label: "Mesh Pitch", value: "20mm - 25mm fine square grid" },
      { label: "Anchor Type", value: "Full-perimeter SS304 eyebolts with tension cord" },
      { label: "Pet Suitability", value: "Cats, Kittens, Puppies, Small & Medium Dogs" },
      { label: "Warranty", value: CLAIMS.warrantyLabel },
      { label: "Inspection", value: "Free On-Site Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Pet Safety Nets", "safety-nets"),
      {
        question: "Can my cat climb the net safely without tearing it?",
        answer: "Yes. The high-density polymer filaments are designed to support a cat's climbing weight without tearing or breaking. We tension the net tightly so there are no loose pockets.",
      },
    ],
  },

  "pigeon-safety-nets": {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Pigeon & Anti-Bird Safety Nets in Bengaluru",
    description:
      "Humane bird exclusion netting and stainless spike deterrents for balconies, utility spaces, and building plumbing ducts.",
    longDescription:
      "Pigeons are a major hygiene concern across residential towers in Bengaluru, carrying pathogens, nesting in AC ledges, and staining balcony floors. Bhagavath Safety Nets provides humane, non-lethal bird proofing solutions that block pigeons from entering your balcony or utility area without harming them. We also install heavy-gauge netting over large plumbing duct shafts and fix blunt-tipped stainless spikes along narrow ledges.",
    aiOverview:
      "Humane anti-pigeon netting and stainless ledge deterrents engineered to keep balconies, AC outdoor units, and open vertical plumbing shafts bird-free and sanitary.",
    image: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-pigeon-spikes-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-pigeon-spikes-bengaluru-1.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-pigeon-spikes-bengaluru-1.webp",
    benefits: [
      "100% humane, non-cruel physical barrier that complies with animal welfare norms",
      "Keeps balcony floors, railings, and drying clothes clean from bird droppings",
      "Covers open balconies, AC ledges, and multi-story plumbing shafts",
      "Translucent material virtually disappears against the sky",
      `Protected by our official ${CLAIMS.warrantyLabel}`,
    ],
    specsTable: [
      { label: "Mesh Specification", value: "25mm - 35mm Anti-Bird Square Mesh" },
      { label: "Color Tone", value: "Translucent White / Forest Green / Black" },
      { label: "Ledge Deterrents", value: "SS304 Blunt-Tip Spikes on Polycarbonate Base" },
      { label: "Duct Shaft Capability", value: "Rope-access rigging for multi-floor shafts" },
      { label: "Warranty", value: CLAIMS.warrantyLabel },
      { label: "Doorstep Visit", value: "Free Site Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Pigeon Safety Nets", "safety-nets"),
      {
        question: "Do bird nets harm or trap pigeons?",
        answer: "No. Our netting forms a taut, physical barrier that prevents pigeons from landing or entering. The mesh size ensures birds cannot get tangled or trapped.",
      },
      {
        question: "Can you install netting on deep plumbing shafts?",
        answer: "Yes. Our skilled technicians are trained in rope-access techniques to install heavy-duty netting across high-rise plumbing ducts from the rooftop parapet down.",
      },
    ],
  },

  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Balcony Invisible Grills Installation in Bengaluru",
    description:
      "Modern marine-grade SS316 stainless steel cable grills providing unblocked panoramic skyline views with certified high-rise fall protection.",
    longDescription:
      "Upgrade your apartment balcony with architectural invisible grills from Bhagavath Safety Nets. Unlike bulky cast-iron cages that block light and make homes feel caged, our invisible grills utilize ultra-thin, high-tensile SS316 marine-grade stainless steel cables sheathed in clear nylon. Installed at 2-inch child-safety intervals inside structural aluminium tracks, they provide superior fall prevention while keeping your view 100% open.",
    aiOverview:
      "Architectural balcony fall-prevention system using high-tensile SS316 marine stainless steel cables fixed inside structural aluminium channels. Delivers unobstructed skyline views.",
    image: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-2.webp",
    benefits: [
      "100% panoramic skyline view with zero cage-like obstruction",
      "Marine-grade SS316 multi-strand wire impervious to rust and weathering",
      "High tensile breaking strength supporting over 400kg load per cable",
      "Child-safe 2-inch (50mm) or 3-inch (75mm) vertical cable pitch",
      `Supported by our written ${CLAIMS.warrantyLabel} certificate`,
    ],
    specsTable: [
      { label: "Cable Metallurgy", value: "Aerospace Marine-Grade SS316 Multi-Strand Wire" },
      { label: "Cable Diameter", value: "2.5mm / 3.0mm with transparent DuPont nylon" },
      { label: "Mounting Profile", value: "T6 Powder-Coated Structural Aluminium Track" },
      { label: "Wire Spacing", value: "2-Inch (50mm) Child Safe or 3-Inch Standard" },
      { label: "Corrosion Warranty", value: CLAIMS.warrantyLabel },
      { label: "Measurement", value: "Free Doorstep Inspection" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Balcony Invisible Grills", "invisible-grills"),
      {
        question: "Can invisible grill cables be cut during an emergency?",
        answer: "Invisible grills are designed for fall protection while remaining cuttable with standard wire cutters during an emergency fire escape, complying with safety codes.",
      },
      {
        question: "Will the cables rust or lose tension over time?",
        answer: "No. We use genuine SS316 marine-grade stainless steel with molybdenum alloy and nylon protective coating. Each line is individually calibrated with tensioners to maintain alignment.",
      },
    ],
  },

  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Window Invisible Grills Installation in Bengaluru",
    description:
      "Sleek stainless steel invisible wire grills custom-fitted to bedroom and living room sliding windows for child safety and ventilation.",
    longDescription:
      "Modern apartment windows in Bengaluru often feature large sliding glass panels that present significant fall hazards when open. Bhagavath Safety Nets custom-fabricates window invisible grills that mount neatly inside or outside your window frame. By utilizing fine SS316 stainless cables, our window grills keep children safe, maintain cross-ventilation, and preserve your architectural aesthetics without intrusive iron bars.",
    aiOverview:
      "Precision-fitted window safety cable grills using marine-grade stainless wire mounted inside aluminium framing profiles, allowing safe window opening on high floors.",
    image: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-2.webp",
    benefits: [
      "Allows opening bedroom windows fully for fresh breeze with complete safety",
      "Matches contemporary window frames without damaging plaster or paint",
      "Rust-free SS316 cables suitable for rain-exposed outer window frames",
      "Minimalist design that enhances property appeal",
      `Covered by our comprehensive ${CLAIMS.warrantyLabel}`,
    ],
    specsTable: [
      { label: "Cable Metallurgy", value: "Genuine SS316 Multi-Strand Stainless Steel" },
      { label: "Track Options", value: "Anodized or Powder-Coated Aluminium to match frame" },
      { label: "Cable Orientation", value: "Vertical or Horizontal alignment" },
      { label: "Tensile Strength", value: "400kg+ breaking load capacity" },
      { label: "Warranty", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Free Laser Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Window Invisible Grills", "invisible-grills"),
      {
        question: "Can I clean the outer window glass with invisible grills installed?",
        answer: "Yes. The slim 2-inch cable pitch provides ample room for hand access and microfiber squeegees to clean exterior glass panes comfortably.",
      },
    ],
  },

  "ceiling-cloth-hangers": {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Ceiling Cloth Drying Hangers Installation in Bengaluru",
    description:
      "Space-saving 6-pipe stainless steel pulley cloth drying systems mounted to ceiling slabs to reclaim 100% of your balcony floor area.",
    longDescription:
      "Cluttered floor stands consume valuable balcony space and block walking areas. Bhagavath Safety Nets installs premium ceiling-mounted cloth drying pulley systems engineered with rustproof SS304 stainless steel pipes. Each tube lowers independently with smooth nylon pulleys, allowing you to hang laundry at comfortable chest height and hoist it up to ceiling level where warmer air accelerates drying.",
    aiOverview:
      "Ceiling-mounted pulley hoist laundry drying system with independent stainless steel tubes, smooth nylon bearing pulleys, and heavy-duty ceiling slab fasteners.",
    image: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-2.webp",
    benefits: [
      "Reclaims 100% of usable balcony and utility floor walkway area",
      "Independent dual-pulley ropes allow lowering one pipe at a time effortlessly",
      "Takes advantage of natural ceiling-level warmth and airflow for faster drying",
      "Heavy-duty SS304 stainless tubes that never stain wet clothes with rust",
      `Backed by our dependable ${CLAIMS.warrantyLabel}`,
    ],
    specsTable: [
      { label: "Number of Tubes", value: "6 Independent SS304 Stainless Steel Pipes" },
      { label: "Available Pipe Lengths", value: "4 ft, 5 ft, 6 ft, 7 ft, 8 ft custom sizes" },
      { label: "Pulley Hardware", value: "Friction-Free Nylon Bearings with Metal Brackets" },
      { label: "Rope Specification", value: "Heavy-Duty Braided Nylon / Stainless Core" },
      { label: "Warranty", value: CLAIMS.warrantyLabel },
      { label: "Installation", value: "Turnkey Setup by Trained Technicians" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Ceiling Cloth Hangers", "cloth-hangers"),
      {
        question: "How much laundry weight can each pipe hold?",
        answer: "Each stainless steel pipe is engineered to support up to 5kg of wet laundry, accommodating heavy jeans, towels, and king-size bedsheets effortlessly.",
      },
    ],
  },

  "balcony-cloth-hangers": {
    slug: "balcony-cloth-hangers",
    name: "Balcony Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Balcony Cloth Drying Systems & Hangers in Bengaluru",
    description:
      "Versatile ceiling-pulley and foldable wall-mounted drying systems designed for apartment balconies and compact wash utility areas.",
    longDescription:
      "Drying laundry in modern Bengaluru apartments requires smart spatial solutions. Bhagavath Safety Nets provides tailored balcony cloth drying systems, including ceiling hoists and foldable wall brackets. Constructed from heavy-gauge stainless steel, these systems withstand outdoor humidity, keep wet laundry organized, and keep your balcony floor clear for relaxing.",
    aiOverview:
      "Multi-option balcony and utility clothes drying fixtures including ceiling-pulley hoists and folding stainless wall brackets for space-constrained apartments.",
    image: "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-2.webp",
    benefits: [
      "Optimized for small apartment utility balconies and washing machine alcoves",
      "Foldable and retractable designs that tuck away when not in use",
      "100% rustproof SS304 stainless construction",
      "Safe from rain splatter when hoisted close to balcony ceiling slabs",
      `Included under our official ${CLAIMS.warrantyLabel}`,
    ],
    specsTable: [
      { label: "Mounting Style", value: "Ceiling Pulley or Foldable Wall-Mount" },
      { label: "Material Grade", value: "Rustproof SS304 Stainless Steel" },
      { label: "Weight Capacity", value: "25kg - 35kg Total Laundry Load" },
      { label: "Fastening", value: "Heavy-duty expansion fasteners in masonry" },
      { label: "Warranty", value: CLAIMS.warrantyLabel },
      { label: "Inspection", value: "Free Doorstep Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Balcony Cloth Hangers", "cloth-hangers"),
      {
        question: "Can these hangers be installed if my balcony has a false ceiling?",
        answer: "If you have a decorative false ceiling, we anchor through to the concrete slab using extended threaded rods to ensure structural stability.",
      },
    ],
  },
};

export const serviceCategories = [
  {
    slug: "safety-nets",
    name: "Safety Nets",
    title: "High-Tensile Balcony, Child & Pigeon Safety Nets",
    description:
      "UV-stabilized copolymer netting engineered to prevent falls and humane bird intrusion across Bengaluru apartments.",
    services: [
      "balcony-safety-nets",
      "children-safety-nets",
      "pet-safety-nets",
      "pigeon-safety-nets",
    ],
  },
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
    title: "Marine-Grade SS316 Architectural Invisible Grills",
    description:
      "Modern stainless steel wire cable systems offering panoramic city views with robust child and high-rise fall protection.",
    services: [
      "balcony-invisible-grills",
      "window-invisible-grills",
    ],
  },
  {
    slug: "cloth-hangers",
    name: "Cloth Hangers",
    title: "Ceiling & Balcony Stainless Cloth Drying Systems",
    description:
      "Space-saving 6-pipe pulley hoist drying systems that reclaim 100% of your balcony and utility floor space.",
    services: [
      "ceiling-cloth-hangers",
      "balcony-cloth-hangers",
    ],
  },
];

export const allServicesList = Object.values(servicesData);

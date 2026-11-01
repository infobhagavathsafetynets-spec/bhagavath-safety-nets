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
    title: "Balcony Safety Nets in Bengaluru | Bhagavath",
    description: "Heavy-duty UV-stabilized copolymer balcony netting designed to prevent accidental falls while keeping pigeons and birds out of your home.",
    longDescription: "Bhagavath Safety Nets installs structural-grade balcony safety nets across high-rise residential towers and independent homes in Bengaluru. Using 100% virgin high-density copolymer filaments, our netting creates a secure barrier along balcony railings, open utility zones, and outdoor decks. Anchored securely with stainless expansion hooks into concrete lintels, it keeps children, seniors, and pets completely safe without blocking airflow or ambient daylight.",
    aiOverview: "Engineered balcony perimeter safety netting constructed with knot-interlocked, UV-resistant HDPE polymer. Withstands high wind loads and outdoor weather, installed with stainless concrete eyebolts.",
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
      "Complimentary doorstep laser measurement and itemized quote",
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
    title: "Children Safety Nets in Bengaluru | Bhagavath",
    description: "Reinforced child-proofing nets for apartment balconies, open window ledges, and staircases to eliminate fall hazards for curious toddlers.",
    longDescription: "For parents living in multi-story apartments in Bengaluru, curious toddlers and low balcony railings can create constant worry. Bhagavath Safety Nets specializes in child safety containment systems engineered specifically to block climbing points and open railing gaps. Our netting is tightly spaced, non-abrasive, and anchored with heavy-duty structural fixings capable of absorbing sudden impacts.",
    aiOverview: "Specialized child fall-prevention barrier systems designed for residential apartment railings, stair voids, and low window sills with close mesh spacing and structural wall anchors.",
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
      "Free site assessment with physical safety netting samples",
    ],
    specsTable: [
      { label: "Core Material", value: "High-Tensile Virgin Copolymer Monofilament" },
      { label: "Grid Density", value: "25mm Square Safety Grid" },
      { label: "Tensile Threshold", value: "Tested for high point impact resistance" },
      { label: "Anchoring System", value: "Stainless Steel SS304 Concrete Fasteners" },
      { label: "Warranty Protection", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Complimentary Laser Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Children Safety Nets", "safety-nets"),
      {
        question: "Can toddlers cut or untie the mesh knots?",
        answer: "No. The net is fabricated with heat-set machine knots that cannot be picked or untied by hand, and the high-density polymer resists tearing.",
      },
      {
        question: "Can this be installed on wooden or glass staircase balustrades?",
        answer: "Yes, our installation crews use specialized, surface-safe mounting brackets suitable for wood, aluminium, or concrete balustrades.",
      },
    ],
  },

  "pet-safety-nets": {
    slug: "pet-safety-nets",
    name: "Pet Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Pet Safety Nets in Bengaluru | Bhagavath",
    description: "Tough, claw-resistant safety nets for balconies and windows, providing complete protection for active cats and dogs in high-rise flats.",
    longDescription: "High-rise balcony edges pose extreme danger to agile cats and curious dogs. Bhagavath Safety Nets provides claw-resistant pet safety netting designed to enclose open balconies, utility zones, and window ledges. Constructed from heavy-gauge multi-filament polymers, our pet nets withstand scratching, pawing, and sudden impacts while allowing your pets to enjoy fresh air and sunshine safely.",
    aiOverview: "Durable, high-tensile pet safety enclosures built with abrasion-resistant copolymer mesh to safeguard indoor cats and dogs from accidental falls.",
    image: "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-2.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-pet-safety-net-bengaluru-2.webp",
    benefits: [
      "Protects indoor cats from high-rise syndrome and accidental falls",
      "Claw-resistant and tear-proof braided multi-filament structure",
      "Tight mesh sizing prevents paws from getting trapped or tangled",
      "UV-fortified fibers that stay strong under direct Bengaluru sun",
      `Includes official written ${CLAIMS.warrantyLabel}`,
      "Safe, humane environment for companion pets on balconies",
    ],
    specsTable: [
      { label: "Twine Type", value: "Braided High-Density Polyethylene" },
      { label: "Aperture Dimension", value: "25mm to 30mm Square Pattern" },
      { label: "Claw Resistance", value: "High-tenacity knot configuration" },
      { label: "Hardware Anchor", value: "Corrosion-resistant SS304 eyebolts" },
      { label: "Warranty Period", value: CLAIMS.warrantyLabel },
      { label: "Visit Policy", value: "Free Doorstep Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Pet Safety Nets", "safety-nets"),
      {
        question: "Can cats chew through the safety netting?",
        answer: "The braided virgin copolymer cords are tough and non-fibrous, which discourages chewing. For aggressive chewers, we also offer stainless invisible wire grills.",
      },
      {
        question: "Does the netting obstruct outdoor viewing for pets?",
        answer: "Not at all. The translucent cords maintain excellent visibility so your pets can watch birds and daylight without any hazard.",
      },
    ],
  },

  "pigeon-safety-nets": {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Pigeon Safety Nets in Bengaluru | Bhagavath",
    description: "Humane, translucent pigeon exclusion netting to protect balconies, utility shafts, and AC ledges from bird droppings and health hazards.",
    longDescription: "Pigeons in Bengaluru pose serious health and sanitation challenges for apartment residents. Bhagavath Safety Nets installs premium, humane anti-pigeon netting that cleanly encloses balconies, duct shafts, and AC ledges. Our translucent nets provide a physical barrier without hurting birds or altering your building's exterior aesthetics, keeping your home clean, hygienic, and free of bird droppings.",
    aiOverview: "Humane bird exclusion netting fabricated with UV-resistant translucent copolymer filaments to permanently prevent pigeon nesting on apartment ledges.",
    image: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-anti-bird-spikes-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-2.webp",
    benefits: [
      "Permanently eliminates pigeon roosting, droppings, and foul odors",
      "Humane bird deterrent that does not harm or trap avian species",
      "Translucent design blends naturally with building elevations",
      "Allows 100% natural ventilation and uninterrupted sunlight",
      `Comes with our comprehensive ${CLAIMS.warrantyLabel}`,
      "Fast, dust-controlled installation by trained technicians",
    ],
    specsTable: [
      { label: "Material Blend", value: "UV-Treated Virgin Copolymer" },
      { label: "Mesh Pitch", value: "25mm to 35mm Pigeon Aperture" },
      { label: "Color Tone", value: "Translucent White or Charcoal Black" },
      { label: "Mounting Fixings", value: "SS304 Anchor Hooks & Tie Cables" },
      { label: "Warranty Guarantee", value: CLAIMS.warrantyLabel },
      { label: "Site Measurement", value: "Complimentary Doorstep Visit" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Pigeon Safety Nets", "safety-nets"),
      {
        question: "Does pigeon netting trap or injure the birds?",
        answer: "No. The smooth copolymer mesh forms an impenetrable physical barrier that simply prevents them from landing or entering your balcony space.",
      },
      {
        question: "Can pigeon netting be installed on deep utility duct areas?",
        answer: "Yes, our technicians are trained in rope access and safety harnesses to seal multi-floor building duct shafts cleanly and securely.",
      },
    ],
  },

  "monkey-safety-nets": {
    slug: "monkey-safety-nets",
    name: "Monkey Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Monkey Safety Nets in Bengaluru | Bhagavath",
    description: "Heavy-duty reinforced perimeter nets to keep monkeys away from balconies, terraces, and windows across Bengaluru neighborhoods.",
    longDescription: "In green corridors and suburban developments across Bengaluru, monkeys often invade apartment balconies, damaging plants, utility lines, and household goods. Bhagavath Safety Nets installs heavy-gauge monkey safety netting engineered with thicker copolymer twine and heavy-duty structural anchors to resist the aggressive pulling, swinging, and weight of primates while keeping your family safe.",
    aiOverview: "Extra-tensile monkey defense netting fabricated with heavy-gauge braided polymer and industrial structural anchors for high-load barrier defense.",
    image: "/images/bhagavath/bhagavath-monkey-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-monkey-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-monkey-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-monkey-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-monkey-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-monkey-safety-net-bengaluru-2.webp",
    benefits: [
      "Heavy-gauge twine withstands intense pulling and primate body weight",
      "Tight mesh spacing blocks entry without injuring animals",
      "Anchored into concrete perimeter with heavy-duty stainless hardware",
      "Protects terrace gardens, drying clothes, and solar heating equipment",
      `Backed by our reliable written ${CLAIMS.warrantyLabel}`,
      "Free site evaluation by experienced structural installers",
    ],
    specsTable: [
      { label: "Twine Thickness", value: "2.5mm Braided Virgin Copolymer" },
      { label: "Mesh Opening", value: "35mm to 40mm Reinforced Grid" },
      { label: "Load Resistance", value: "High impact resistance > 180kg" },
      { label: "Anchor Type", value: "Heavy-duty SS304 expansion bolts" },
      { label: "Warranty Label", value: CLAIMS.warrantyLabel },
      { label: "Doorstep Visit", value: "Complimentary Inspection" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Monkey Safety Nets", "safety-nets"),
      {
        question: "Can monkeys tear or bite through this heavier net?",
        answer: "The 2.5mm braided copolymer twine is specifically manufactured to withstand sharp teeth, claws, and aggressive pulling without snapping.",
      },
      {
        question: "Is it suitable for open terrace areas as well as balconies?",
        answer: "Yes, we build custom structural support pipes and wire cable spans to enclose open rooftop terraces and utility shafts safely.",
      },
    ],
  },

  "cricket-nets": {
    slug: "cricket-nets",
    name: "Cricket Practice Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cricket Practice Nets in Bengaluru | Bhagavath",
    description: "Custom outdoor and terrace cricket practice nets engineered for box cricket, sports clubs, and villas across Bengaluru.",
    longDescription: "Whether for rooftop box cricket, residential apartment sports arenas, or school coaching academies, Bhagavath Safety Nets constructs professional cricket practice netting enclosures. Built using UV-stabilized, high-density polyethylene with double-knotted corner reinforcements, our nets absorb high-velocity cricket ball impacts while containing balls safely within the practice pitch.",
    aiOverview: "Professional cricket practice enclosures built with high-velocity shock-absorbing knotted copolymer mesh and galvanized steel cable frameworks.",
    image: "/images/bhagavath/bhagavath-cricket-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-cricket-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-sports-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-cricket-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-cricket-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-cricket-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-cricket-net-bengaluru-2.webp",
    benefits: [
      "Absorbs powerful leather and tennis ball hits without tearing",
      "Custom pitch dimensions for rooftops, backyards, and clubs",
      "High UV resistance protects against sun wear during outdoor play",
      "Turnkey installation including wire cable suspension and anchors",
      `Comes with our standard ${CLAIMS.warrantyLabel}`,
      "Itemized estimate following free on-site pitch measurement",
    ],
    specsTable: [
      { label: "Yarn Material", value: "High-Tenacity Polyethylene (HDPE)" },
      { label: "Mesh Dimension", value: "40mm to 45mm Square Aperture" },
      { label: "Impact Rating", value: "Engineered for hard leather and tennis balls" },
      { label: "Suspension", value: "Galvanized / SS Wire Rope Framework" },
      { label: "Warranty", value: CLAIMS.warrantyLabel },
      { label: "Site Assessment", value: "Free Doorstep Pitch Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Cricket Practice Nets", "safety-nets"),
      {
        question: "Can cricket practice nets be set up on an apartment terrace?",
        answer: "Yes, rooftop terrace cricket enclosures are very popular in Bengaluru. We erect custom steel pipe posts with secure counterweights or chemical concrete anchors.",
      },
      {
        question: "Does the net withstand monsoon wind storms?",
        answer: "The open grid permits high wind speeds to blow straight through without generating excessive sail pressure on the frame.",
      },
    ],
  },

  "sports-nets": {
    slug: "sports-nets",
    name: "Sports Netting",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Sports Netting Installation in Bengaluru | Bhagavath",
    description: "All-weather boundary and perimeter netting for football, basketball, badminton courts, and school sports grounds in Bengaluru.",
    longDescription: "Bhagavath Safety Nets delivers comprehensive sports boundary and containment netting for residential societies, schools, corporate campuses, and private sports arenas in Bengaluru. Our nets prevent stray balls from hitting nearby windows, vehicles, and pedestrians while keeping play continuous and secure across multi-sport turf courts.",
    aiOverview: "Multi-sport perimeter containment systems installed with weather-resistant copolymer netting to enclose football turfs, tennis courts, and playgrounds.",
    image: "/images/bhagavath/bhagavath-sports-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-sports-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-cricket-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-sports-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-sports-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-sports-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-sports-net-bengaluru-2.webp",
    benefits: [
      "Prevents sports balls from flying into neighboring properties and streets",
      "UV-stabilized virgin polymer suited for all-weather outdoor turf",
      "Custom heights and spans tailored to court specifications",
      "High break strength with reinforced border edging cords",
      `Backed by our official ${CLAIMS.warrantyLabel}`,
      "Professional rigging with stainless hardware and turnbuckles",
    ],
    specsTable: [
      { label: "Polymer Type", value: "100% Virgin UV Copolymer" },
      { label: "Mesh Size", value: "40mm to 50mm Square Matrix" },
      { label: "Border Reinforcement", value: "6mm - 8mm Braided Perimeter Rope" },
      { label: "Hardware Support", value: "High-Tensile Wire Rope Rigging" },
      { label: "Warranty Card", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Free Laser Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Sports Netting", "safety-nets"),
      {
        question: "What sports can these nets accommodate?",
        answer: "Our netting solutions cater to football turfs, basketball courts, badminton courts, tennis courts, and volleyball setups.",
      },
      {
        question: "How do you secure netting on tall perimeter poles?",
        answer: "We use heavy-gauge tensioned wire cables running between poles with stainless steel turnbuckles and carabiner clips to ensure tight, even suspension.",
      },
    ],
  },

  "construction-safety-nets": {
    slug: "construction-safety-nets",
    name: "Construction Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Construction Safety Nets in Bengaluru | Bhagavath",
    description: "Industrial debris containment and personnel fall-arrest safety nets for commercial and residential construction in Bengaluru.",
    longDescription: "On active building construction and renovation sites across Bengaluru, worker safety and pedestrian protection are paramount. Bhagavath Safety Nets provides industrial-grade construction safety netting compliant with safety regulations. Our dual-layer systems combine heavy personnel fall-arrest nets with fine debris mesh to catch falling tools, masonry fragments, and materials.",
    aiOverview: "Heavy-duty construction safety barriers providing worker fall arrest and falling debris containment for multi-story building sites.",
    image: "/images/bhagavath/bhagavath-construction-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-construction-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-construction-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-construction-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-construction-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-construction-safety-net-bengaluru-2.webp",
    benefits: [
      "Certified fall protection for site workers at elevated building levels",
      "Fine secondary mesh layer catches falling tools, bricks, and plaster debris",
      "High energy-absorption capacity minimizes impact shock",
      "Weather-resistant synthetic fibers resist sun, moisture, and site dust",
      `Professional installation backed by our ${CLAIMS.warrantyLabel}`,
      "Rapid deployment across construction projects in Bengaluru",
    ],
    specsTable: [
      { label: "Primary Mesh", value: "High-Tensile Braided Polypropylene / Nylon" },
      { label: "Debris Mesh", value: "Fine-gauge HDPE secondary containment layer" },
      { label: "Load Capacity", value: "Tested for high-energy shock absorption" },
      { label: "Perimeter Roping", value: "12mm High-Tenacity Polyamide Border Rope" },
      { label: "Warranty Standard", value: CLAIMS.warrantyLabel },
      { label: "On-Site Review", value: "Complimentary Safety Assessment" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Construction Safety Nets", "safety-nets"),
      {
        question: "Are your construction nets compliant with safety standards?",
        answer: "Yes, our nets are constructed according to standard industrial safety benchmarks for personnel fall arrest and debris catchment.",
      },
      {
        question: "Can nets be relocated as the building construction progresses upward?",
        answer: "Yes, our modular rigging allows brackets and nets to be climbed to upper floors as structural slabs are cast.",
      },
    ],
  },

  "duct-area-safety-nets": {
    slug: "duct-area-safety-nets",
    name: "Duct Area Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Duct Area Safety Nets in Bengaluru | Bhagavath",
    description: "Building shaft and duct area safety nets to stop pigeon nesting, debris accumulation, and fall risks in Bengaluru apartments.",
    longDescription: "Apartment ventilation ducts and plumbing utility shafts are notorious hotspots for pigeon nesting, foul odors, and accumulated feathers. Bhagavath Safety Nets specializes in sealing building shafts from top to bottom with durable copolymer netting. Our technicians use professional rope-access gear to install vertical barrier nets that keep birds out while maintaining 100% airflow for utility pipes and bathroom vents.",
    aiOverview: "Specialized vertical shaft netting installed across apartment duct openings to eliminate pigeon colonies and maintain hygienic building ventilation.",
    image: "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-duct-area-safety-net-bengaluru-2.webp",
    benefits: [
      "Stops pigeon nesting, foul odor, and feather accumulation in utility ducts",
      "Safeguards plumbing lines and air conditioning conduit pipes",
      "Rope-access specialists capable of servicing any high-rise building height",
      "Maintains unrestricted airflow for kitchen and bathroom exhausts",
      `Comes with our standard written ${CLAIMS.warrantyLabel}`,
      "Free building inspection and shaft dimension measurements",
    ],
    specsTable: [
      { label: "Mesh Polyethylene", value: "UV-Fortified Virgin HDPE" },
      { label: "Aperture Size", value: "25mm to 30mm Anti-Bird Grid" },
      { label: "Hardware Anchor", value: "SS304 Marine Concrete Fasteners" },
      { label: "Technician Cert", value: "Rope-Access High-Altitude Trained" },
      { label: "Warranty Guarantee", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Complimentary Doorstep Visit" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Duct Area Safety Nets", "safety-nets"),
      {
        question: "How do your technicians reach high duct shafts safely?",
        answer: "Our technicians are certified in rope-access descent techniques, full-body safety harnesses, and dual-rope fall-arrest protocols.",
      },
      {
        question: "Will the net block exhaust ventilation from bathrooms?",
        answer: "Not at all. The open mesh allows air to flow freely while creating an impassable barrier for birds.",
      },
    ],
  },

  "anti-bird-spikes": {
    slug: "anti-bird-spikes",
    name: "Anti-Bird Spikes",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Anti-Bird Spikes in Bengaluru | Bhagavath",
    description: "Humane polycarbonate and stainless steel bird spikes for AC outdoor units, window sills, and parapet ledges in Bengaluru.",
    longDescription: "Where netting cannot be easily mounted—such as narrow window ledges, air conditioning compressor units, signboards, and parapet walls—Bhagavath Safety Nets installs humane anti-bird spikes. Built with virgin UV-stabilized polycarbonate bases and marine-grade SS304 blunt stainless pins, our spikes make landing uncomfortable for pigeons without inflicting physical harm.",
    aiOverview: "Humane deterrent spike strips engineered with SS304 stainless pins on a UV-stabilized polycarbonate base to stop pigeons from perching on narrow ledges.",
    image: "/images/bhagavath/bhagavath-anti-bird-spikes-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-anti-bird-spikes-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-anti-bird-spikes-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-anti-bird-spikes-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-anti-bird-spikes-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-anti-bird-spikes-bengaluru-2.webp",
    benefits: [
      "Prevents pigeons from perching and nesting on narrow exterior ledges",
      "Humane blunt-end design prevents physical injury to birds",
      "Marine-grade SS304 stainless rods never rust or stain facade walls",
      "Flexible polycarbonate base easily mounts to curved or flat surfaces",
      `Guaranteed with our written ${CLAIMS.warrantyLabel}`,
      "Fast installation with heavy-duty weather-resistant adhesive or screws",
    ],
    specsTable: [
      { label: "Pin Material", value: "SS304 Marine Grade Stainless Steel" },
      { label: "Base Structure", value: "UV-Resistant Virgin Polycarbonate" },
      { label: "Pin Height", value: "110mm to 120mm Blunt Tips" },
      { label: "Fixing Method", value: "Structural Neutral Silicone / Stainless Screws" },
      { label: "Warranty Coverage", value: CLAIMS.warrantyLabel },
      { label: "Doorstep Visit", value: "Free Laser Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Anti-Bird Spikes", "safety-nets"),
      {
        question: "Do bird spikes hurt or injure pigeons?",
        answer: "No. The rods feature blunt rounded tips that make it physically awkward for birds to land, humanely encouraging them to fly elsewhere.",
      },
      {
        question: "Can bird spikes be installed on AC outdoor compressor units?",
        answer: "Yes, AC units are one of the most common places we install spikes. We secure them without interfering with the condenser fan or cooling airflow.",
      },
    ],
  },

  "mosquito-nets": {
    slug: "mosquito-nets",
    name: "Mosquito Nets for Windows & Balconies",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Mosquito Nets in Bengaluru | Bhagavath",
    description: "Custom magnetic and pleated mosquito mesh screens for sliding windows and balcony doors across Bengaluru homes.",
    longDescription: "Keep mosquitoes, flies, and outdoor insects out of your living space while enjoying Bengaluru's pleasant natural breeze. Bhagavath Safety Nets fabricates precision-engineered insect screening systems for sliding windows, casements, and balcony doors. Featuring micro-aperture fiberglass or stainless steel mesh set in powder-coated aluminium frames, our screens blend invisibly with your home interiors.",
    aiOverview: "Custom-fitted insect protection screens built with micro-aperture fiberglass or stainless mesh in sleek powder-coated aluminium frames.",
    image: "/images/bhagavath/bhagavath-mosquito-net-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-mosquito-net-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-invisible-grill-window-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-mosquito-net-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-mosquito-net-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-mosquito-net-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-mosquito-net-bengaluru-2.webp",
    benefits: [
      "Complete protection against dengue and malaria-carrying mosquitoes",
      "High-transparency mesh maintains clear daylight and outdoor views",
      "Custom powder-coated frame colors match your window aluminium/UPVC",
      "Available in sliding, pleated, magnetic, and roller configurations",
      `Certified product backed by our ${CLAIMS.warrantyLabel}`,
      "Complimentary doorstep window measurement with frame samples",
    ],
    specsTable: [
      { label: "Mesh Material", value: "High-Visibility Fiberglass / SS304" },
      { label: "Frame Construction", value: "Extruded Architectural Aluminium" },
      { label: "Finish Options", value: "White, Off-White, Dark Bronze, Charcoal" },
      { label: "Screen Types", value: "Sliding Track, Magnetic Velcro, or Pleated" },
      { label: "Warranty Label", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Free Doorstep Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Mosquito Nets", "safety-nets"),
      {
        question: "Can mosquito mesh be cleaned easily?",
        answer: "Yes. Our fiberglass and stainless screens can be dusted with a vacuum brush or gently wiped with a wet microfiber sponge.",
      },
      {
        question: "Will the frame fit onto existing UPVC sliding windows?",
        answer: "Yes, our custom track profiles attach seamlessly to existing UPVC, aluminium, or wooden window casements without modifying window hardware.",
      },
    ],
  },

  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Balcony Invisible Grills in Bengaluru | Bhagavath",
    description: "Marine-grade SS316 stainless steel wire grills offering panoramic balcony views combined with high-tensile fall protection.",
    longDescription: "Enjoy uninterrupted sky views and lush greenery while ensuring uncompromising safety for your family. Bhagavath Safety Nets designs and installs modern architectural invisible wire grills for apartment balconies across Bengaluru. Using genuine marine-grade SS316 stainless cables sheathed in clear nylon and anchored into heavy-gauge aluminium tracks, our grills deliver superior fall protection with a minimalist look.",
    aiOverview: "Modern architectural balcony wire barriers built with high-tensile SS316 marine stainless cables and structural aluminium base channels for unobstructed panoramic views.",
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
      "100% unobstructed panoramic views of Bengaluru's cityscape and skyline",
      "Marine-grade SS316 multi-strand wire cables immune to rust and corrosion",
      "Supports over 400kg of tensile load to prevent accidental falls",
      "Sleek architectural profiles fully approved by modern apartment RWAs",
      `Protected by our official written ${CLAIMS.warrantyLabel}`,
      "Free site assessment with physical SS316 cable demonstration",
    ],
    specsTable: [
      { label: "Cable Metallurgy", value: "SS316 Marine Grade Stainless Steel" },
      { label: "Cable Diameter", value: "2.5mm or 3.0mm Multi-Strand Wire" },
      { label: "Protective Layer", value: "UV-Resistant Transparent Nylon Coating" },
      { label: "Mounting Track", value: "Heavy-Gauge Powder-Coated Aluminium" },
      { label: "Spacing Options", value: "2-Inch (50mm) or 3-Inch (75mm) Pitch" },
      { label: "Warranty Standard", value: CLAIMS.warrantyLabel },
    ],
    faqs: [
      ...getCommonServiceFAQs("Balcony Invisible Grills", "invisible-grills"),
      {
        question: "Can invisible wire grills be cut in case of an emergency fire evacuation?",
        answer: "Yes. While impossible to break with manual force, adults can sever the cables within seconds using a standard wire cutter during emergency situations.",
      },
      {
        question: "Do invisible wire grills rust in Bengaluru's monsoon climate?",
        answer: "No. SS316 is a marine-grade molybdenum alloy with superior anti-corrosion properties, further protected by a clear UV-resistant nylon outer sheath.",
      },
    ],
  },

  "children-invisible-grills": {
    slug: "children-invisible-grills",
    name: "Children Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Children Invisible Grills in Bengaluru | Bhagavath",
    description: "Tightly spaced 2-inch SS316 marine-grade invisible wire grills providing uncompromised toddler protection in Bengaluru.",
    longDescription: "Give your family complete peace of mind with our child-safety invisible grills. Bhagavath Safety Nets installs tightly-spaced 2-inch vertical stainless steel cable systems specifically calibrated to eliminate head-entrapment and slip risks for curious toddlers. The slim, nylon-jacketed cables maintain high breaking strength while leaving your balcony light, open, and aesthetically pleasing.",
    aiOverview: "Child-safety calibrated invisible grills featuring dense 2-inch cable intervals and marine-grade SS316 wire ropes to eliminate toddler fall risks.",
    image: "/images/bhagavath/bhagavath-children-invisible-grill-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-children-invisible-grill-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-children-invisible-grill-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-children-invisible-grill-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-children-invisible-grill-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-children-invisible-grill-bengaluru-2.webp",
    benefits: [
      "Dense 2-inch gap spacing prevents toddler head or body pass-through",
      "High tensile breaking strength exceeding 400kg per cable line",
      "Smooth protective nylon coating prevents scratch injuries to gentle hands",
      "Vertical orientation eliminates footholds that children can climb",
      `Certified installation backed by our ${CLAIMS.warrantyLabel}`,
      "Complimentary doorstep laser measurement and safety guidance",
    ],
    specsTable: [
      { label: "Wire Grade", value: "Marine SS316 Stainless Multi-Core" },
      { label: "Cable Diameter", value: "2.5mm or 3.0mm with Nylon Sheath" },
      { label: "Child Safety Gap", value: "Strict 2-Inch (50mm) Spacing" },
      { label: "Anchor Track", value: "Structural Aluminium Extruded Channel" },
      { label: "Warranty Guarantee", value: CLAIMS.warrantyLabel },
      { label: "Inspection Service", value: "Free Doorstep Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Children Invisible Grills", "invisible-grills"),
      {
        question: "Why is 2-inch spacing recommended for young children?",
        answer: "A 2-inch spacing physically prevents infants and toddlers from wedging their heads or bodies through the cables, ensuring certified fall safety.",
      },
      {
        question: "Can children climb invisible grills like traditional iron bars?",
        answer: "No. The vertical cables provide no horizontal footholds or hand purchase, making it impossible for children to climb.",
      },
    ],
  },

  "pet-invisible-grills": {
    slug: "pet-invisible-grills",
    name: "Pet Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Pet Invisible Grills in Bengaluru | Bhagavath",
    description: "Claw-proof and chew-proof SS316 stainless wire grills designed to keep cats and dogs safe on high-rise balconies.",
    longDescription: "Pet owners on high floors in Bengaluru often worry about active cats slipping between railings or dogs leaning too far over balconies. Bhagavath Safety Nets installs pet-proof invisible wire grills built with heavy-gauge SS316 marine cables. Chew-resistant and claw-proof, these grills feature reinforced horizontal stiffener cables to keep cables taut even when animals push against them.",
    aiOverview: "Chew-proof and claw-resistant SS316 stainless cable enclosures equipped with horizontal cross-stabilizers for feline and canine balcony safety.",
    image: "/images/bhagavath/bhagavath-pet-invisible-grill-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-pet-invisible-grill-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-pet-invisible-grill-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-pet-invisible-grill-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-pet-invisible-grill-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-pet-invisible-grill-bengaluru-2.webp",
    benefits: [
      "100% chew-proof and claw-resistant stainless steel wire ropes",
      "Horizontal stabilizer cables prevent pets from squeezing cables apart",
      "Dense 2-inch spacing suitable for kittens and small canine breeds",
      "Maintains open balcony breeze and sunbathing spots for companion pets",
      `Backed by our written ${CLAIMS.warrantyLabel}`,
      "Free doorstep assessment with sample cable demonstration",
    ],
    specsTable: [
      { label: "Core Metal", value: "SS316 Marine Grade Multi-Strand Wire" },
      { label: "Sheathing", value: "Heavy-Duty Transparent Nylon Coating" },
      { label: "Horizontal Stiffener", value: "Stainless cross-cable locking clips" },
      { label: "Interval Pitch", value: "2-Inch (50mm) Pet-Safe Spacing" },
      { label: "Warranty Standard", value: CLAIMS.warrantyLabel },
      { label: "Doorstep Visit", value: "Free Laser Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Pet Invisible Grills", "invisible-grills"),
      {
        question: "Can cats push the cables aside to squeeze through?",
        answer: "We install horizontal cross-stabilizer cables at intermediate heights that lock the vertical wires firmly in place, preventing any gap enlargement.",
      },
      {
        question: "Will dogs chew through the nylon sheathing?",
        answer: "Even if an energetic dog bites into the nylon layer, the interior SS316 marine stainless multi-strand cable is totally impervious to teeth.",
      },
    ],
  },

  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Window Invisible Grills in Bengaluru | Bhagavath",
    description: "Sleek, transparent stainless steel invisible grills for sliding, casement, and French windows across Bengaluru apartments.",
    longDescription: "Replace heavy, cage-like iron window grills with modern, elegant invisible wire grills from Bhagavath Safety Nets. Custom engineered to fit seamlessly inside window reveals, our SS316 marine-grade wire systems preserve natural sunlight and landscape views while preventing accidental falls from elevated bedroom and living room windows.",
    aiOverview: "Minimalist stainless wire grill systems designed for residential sliding and casement windows, offering high-tensile safety with maximum aesthetic clarity.",
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
      "Eliminates the dark, confining feeling of traditional iron security bars",
      "Allows wide window openings for refreshing cross-ventilation",
      "Marine-grade SS316 alloy never rusts, scales, or requires repainting",
      "Custom installation for UPVC, aluminium, and concrete window frames",
      `Backed by our reliable written ${CLAIMS.warrantyLabel}`,
      "Fast, dust-controlled installation by trained technicians",
    ],
    specsTable: [
      { label: "Wire Construction", value: "SS316 Multi-Strand Stainless Cable" },
      { label: "Wire Diameter", value: "2.5mm or 3.0mm with Clear Sheath" },
      { label: "Frame Track", value: "Extruded Aluminium Base Channel" },
      { label: "Tensile Strength", value: "Tested breaking point > 400kg" },
      { label: "Warranty Label", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Complimentary Laser Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Window Invisible Grills", "invisible-grills"),
      {
        question: "Do window invisible grills interfere with window blinds or curtains?",
        answer: "No. The slim aluminium mounting track takes up less than 2 inches within the outer window frame, leaving ample space for blinds and drapery.",
      },
      {
        question: "Can I still reach out to clean window glass panes?",
        answer: "Yes, the flexible 2-inch or 3-inch gap spacing allows your hand and cleaning squeegees to pass through comfortably.",
      },
    ],
  },

  "staircase-invisible-grills": {
    slug: "staircase-invisible-grills",
    name: "Staircase & Duplex Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Staircase Invisible Grills in Bengaluru | Bhagavath",
    description: "Vertical architectural invisible wire grills for duplex staircases, open atrium voids, and internal balconies in Bengaluru.",
    longDescription: "Duplex villas, penthouses, and modern multi-level apartments often feature open stair voids and floating staircase steps that present severe fall hazards. Bhagavath Safety Nets installs floor-to-ceiling vertical invisible wire grills using sleek SS316 stainless cables. They provide comprehensive vertical protection while creating a dramatic, contemporary architectural focal point inside your home.",
    aiOverview: "Floor-to-ceiling vertical wire systems for modern duplex stairways, open atriums, and interior mezzanines delivering fall protection with contemporary design.",
    image: "/images/bhagavath/bhagavath-staircase-invisible-grill-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-staircase-invisible-grill-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-staircase-invisible-grill-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-staircase-invisible-grill-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-staircase-invisible-grill-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-staircase-invisible-grill-bengaluru-2.webp",
    benefits: [
      "Encloses open stair voids from step to ceiling with sleek vertical cables",
      "Maintains the spacious, open-concept feel of duplex living spaces",
      "Marine-grade SS316 stainless steel with clean hidden tension fittings",
      "Completely prevents toddler slips between floating open steps",
      `Guaranteed with our written ${CLAIMS.warrantyLabel}`,
      "Custom fabrication for straight, curved, and spiral staircases",
    ],
    specsTable: [
      { label: "Cable Core", value: "Marine SS316 Stainless Steel Wire" },
      { label: "Rigging Style", value: "Full-Height Floor-to-Ceiling Vertical Tension" },
      { label: "Tension Hardware", value: "Stainless Turnbuckles & Hidden End Caps" },
      { label: "Wire Gap", value: "2-Inch (50mm) to 3-Inch (75mm) Pitch" },
      { label: "Warranty Guarantee", value: CLAIMS.warrantyLabel },
      { label: "Site Measurement", value: "Free Doorstep Laser Assessment" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Staircase Invisible Grills", "invisible-grills"),
      {
        question: "Can staircase grills be installed on wooden or marble steps?",
        answer: "Yes, our technicians use specialized precision drill guides and surface-appropriate anchors to prevent cracking natural marble, granite, or hardwood.",
      },
      {
        question: "Does the tension remain tight over tall duplex heights?",
        answer: "Yes, each cable is individually tensioned with stainless turnbuckle fittings and locked in heavy-gauge structural channels.",
      },
    ],
  },

  "ceiling-cloth-hangers": {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Drying Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Ceiling Cloth Drying Hangers in Bengaluru | Bhagavath",
    description: "Space-saving individual pulley ceiling cloth drying systems made with rustproof SS304 stainless pipes for Bengaluru apartments.",
    longDescription: "Reclaim precious balcony floor space with our ceiling-mounted clothes drying hoists. Bhagavath Safety Nets installs precision individual-rope pulley drying systems built with heavy-gauge SS304 stainless steel tubes. Each pipe lowers individually to your chest level for easy laundry hanging and smoothly hoists back up to the ceiling where clothes dry faster in natural rising warm air.",
    aiOverview: "Space-maximizing overhead laundry hoists featuring individual nylon pulley mechanisms and rust-resistant SS304 stainless drying pipes.",
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
      "Reclaims 100% of your balcony and utility area floor space",
      "Each stainless steel pipe operates independently via smooth pulleys",
      "Dries laundry faster by utilizing rising warm air near ceiling height",
      "Rustproof SS304 stainless pipes never leave rust stains on damp garments",
      `Comes with our standard written ${CLAIMS.warrantyLabel}`,
      "Clean installation with masonry dust collection",
    ],
    specsTable: [
      { label: "Pipe Metallurgy", value: "SS304 Rustproof Stainless Steel" },
      { label: "Pipe Lengths", value: "4 Feet, 5 Feet, 6 Feet, 7 Feet, 8 Feet" },
      { label: "Pipe Capacity", value: "4, 6, or 8 Independent Stainless Pipes" },
      { label: "Pulley System", value: "Heavy-Duty Brass Core with Nylon Cords" },
      { label: "Warranty Period", value: CLAIMS.warrantyLabel },
      { label: "Doorstep Visit", value: "Complimentary Ceiling Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Ceiling Cloth Drying Hangers", "cloth-hangers"),
      {
        question: "How much laundry weight can each stainless rod support?",
        answer: "Each SS304 stainless tube comfortably supports 5kg of wet laundry (heavy bedsheets, jeans, blankets) with a total system capacity exceeding 30kg.",
      },
      {
        question: "Can these be installed if my balcony has a false ceiling?",
        answer: "Yes, our technicians use specialized extension brackets to anchor directly into the RCC ceiling slab above false ceilings.",
      },
    ],
  },

  "balcony-cloth-hangers": {
    slug: "balcony-cloth-hangers",
    name: "Balcony Cloth Drying Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Balcony Cloth Drying Hangers in Bengaluru | Bhagavath",
    description: "Compact ceiling and railing clothes drying hoists designed specifically for small apartment utility balconies in Bengaluru.",
    longDescription: "Compact apartment balconies in Bengaluru require smart space utilization. Bhagavath Safety Nets installs custom balcony clothes drying hoists tailored to compact utility sit-outs. Built with rustproof SS304 tubes and weather-resistant nylon pulley ropes, our systems keep laundry neatly elevated away from view, leaving floor space free for walking and storage.",
    aiOverview: "Ergonomic overhead and railing laundry drying racks engineered for compact apartment balconies to maximize functional living space.",
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
      "Custom sizing fits tight utility and washing machine balconies",
      "Individual pulley cords ensure effortless lowering and hoisting",
      "Rustproof SS304 steel tubes prevent discoloration of clothing",
      "Keeps damp laundry organized and out of children's reach",
      `Certified product backed by our ${CLAIMS.warrantyLabel}`,
      "Free doorstep measurement to determine ideal length and rod count",
    ],
    specsTable: [
      { label: "Mounting Style", value: "Ceiling Pulley Overhead System" },
      { label: "Material Grade", value: "Rustproof SS304 Stainless Steel" },
      { label: "Total Load", value: "25kg - 35kg Wet Laundry Capacity" },
      { label: "Fastening", value: "Heavy-duty expansion fasteners in masonry" },
      { label: "Warranty", value: CLAIMS.warrantyLabel },
      { label: "Inspection", value: "Free Doorstep Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Balcony Cloth Hangers", "cloth-hangers"),
      {
        question: "What length is best for a small 6-foot balcony?",
        answer: "For a 6-foot balcony, our 5-foot or 5.5-foot 6-pipe system is ideal, providing maximum drying capacity while leaving wall margins clear.",
      },
      {
        question: "How long do the pulley ropes last in outdoor conditions?",
        answer: "We use high-tensile braided nylon cords that resist moisture, friction, and UV exposure for years of daily use.",
      },
    ],
  },

  "wall-mounted-cloth-hangers": {
    slug: "wall-mounted-cloth-hangers",
    name: "Wall Mounted Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Wall Mounted Cloth Hangers in Bengaluru | Bhagavath",
    description: "Foldable heavy-duty stainless steel wall-mounted drying racks for utility balconies and laundry areas in Bengaluru.",
    longDescription: "Where ceiling installation is not feasible due to false ceilings or ductwork, Bhagavath Safety Nets installs premium foldable wall-mounted cloth drying racks. Constructed from high-tensile SS304 stainless steel, these accordion-style racks pull outward effortlessly when hanging laundry and fold flush against the wall when not in use.",
    aiOverview: "Space-saving foldable wall-mount drying racks fabricated with heavy-gauge SS304 stainless steel for utility balconies and indoor laundry rooms.",
    image: "/images/bhagavath/bhagavath-wall-cloth-hanger-bengaluru-1.webp",
    supportingImages: [
      "/images/bhagavath/bhagavath-wall-cloth-hanger-bengaluru-2.webp",
      "/images/bhagavath/bhagavath-balcony-cloth-hanger-bengaluru-1.webp",
    ],
    gallery: [
      "/images/bhagavath/bhagavath-wall-cloth-hanger-bengaluru-1.webp",
      "/images/bhagavath/bhagavath-wall-cloth-hanger-bengaluru-2.webp",
    ],
    beforeImage: "/images/bhagavath/bhagavath-wall-cloth-hanger-bengaluru-1.webp",
    afterImage: "/images/bhagavath/bhagavath-wall-cloth-hanger-bengaluru-2.webp",
    benefits: [
      "Folds completely flat against the wall when not drying clothes",
      "Ideal solution when ceiling access is blocked by ducting or false ceilings",
      "High-grade SS304 stainless steel will not rust or bend under heavy towels",
      "Multiple pipe spans available to suit compact and spacious utility walls",
      `Guaranteed by our standard written ${CLAIMS.warrantyLabel}`,
      "Solid anchoring with stainless steel expansion bolts into masonry",
    ],
    specsTable: [
      { label: "Rack Construction", value: "SS304 Stainless Steel Tubular Frame" },
      { label: "Mechanism", value: "Heavy-Duty Accordion Scissor Fold" },
      { label: "Rod Options", value: "4 to 7 Stainless Steel Drying Rods" },
      { label: "Weight Rating", value: "Tested for up to 30kg distributed laundry" },
      { label: "Warranty Standard", value: CLAIMS.warrantyLabel },
      { label: "Site Inspection", value: "Free Doorstep Wall Measurement" },
    ],
    faqs: [
      ...getCommonServiceFAQs("Wall Mounted Cloth Hangers", "cloth-hangers"),
      {
        question: "Can this rack be installed on exterior balcony walls exposed to rain?",
        answer: "Yes. Constructed from 100% SS304 stainless steel, the rack is completely rustproof and withstands rain and sun effortlessly.",
      },
      {
        question: "How far does the rack project from the wall when folded?",
        answer: "When pushed flat against the wall, it projects only 2 to 3 inches, completely opening up walking space.",
      },
    ],
  },
};

export const serviceCategories = [
  {
    slug: "safety-nets",
    name: "Safety Nets",
    title: "High-Tensile Balcony, Child & Pigeon Safety Nets",
    description: "UV-stabilized copolymer netting engineered to prevent falls and humane bird intrusion across Bengaluru apartments.",
    services: [
      "balcony-safety-nets",
      "children-safety-nets",
      "pet-safety-nets",
      "pigeon-safety-nets",
      "monkey-safety-nets",
      "cricket-nets",
      "sports-nets",
      "construction-safety-nets",
      "duct-area-safety-nets",
      "anti-bird-spikes",
      "mosquito-nets",
    ],
  },
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
    title: "Marine-Grade SS316 Architectural Invisible Grills",
    description: "Modern stainless steel wire cable systems offering panoramic city views with robust child and high-rise fall protection.",
    services: [
      "balcony-invisible-grills",
      "children-invisible-grills",
      "pet-invisible-grills",
      "window-invisible-grills",
      "staircase-invisible-grills",
    ],
  },
  {
    slug: "cloth-hangers",
    name: "Cloth Hangers",
    title: "Ceiling & Balcony Stainless Cloth Drying Systems",
    description: "Space-saving 6-pipe pulley hoist drying systems that reclaim 100% of your balcony and utility floor space.",
    services: [
      "ceiling-cloth-hangers",
      "balcony-cloth-hangers",
      "wall-mounted-cloth-hangers",
    ],
  },
];

export const allServicesList = Object.values(servicesData);

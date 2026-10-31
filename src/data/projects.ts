export interface ProjectRecord {
  id: string;
  service: string;
  locality: string;
  city: string;
  photos: string[];
  description: string;
  permissionToPublish: boolean;
  completionDate?: string;
}

/**
 * Single source of truth for Bhagavath client installation projects.
 * Real job photos will be populated here as customer permissions are obtained.
 * All temporary placeholder images are documented in docs/IMAGES-TO-REPLACE.md.
 */
export const BHAGAVATH_PROJECTS: ProjectRecord[] = [
  {
    id: "proj-kor-001",
    service: "Balcony Invisible Grills",
    locality: "Koramangala 4th Block",
    city: "Bengaluru",
    photos: ["/images/bhagavath/bhagavath-invisible-grill-balcony-bengaluru-1.webp"],
    description: "Marine-grade SS316 invisible wire grills fitted across 14th-floor corner balcony.",
    permissionToPublish: false, // [CONFIRM WITH CLIENT]
    completionDate: "2026-08",
  },
  {
    id: "proj-whi-002",
    service: "Balcony Safety Nets",
    locality: "ITPL Road, Whitefield",
    city: "Bengaluru",
    photos: ["/images/bhagavath/bhagavath-balcony-safety-net-bengaluru-1.webp"],
    description: "UV-stabilized HDPE balcony safety netting with stainless concrete expansion anchors.",
    permissionToPublish: false, // [CONFIRM WITH CLIENT]
    completionDate: "2026-07",
  },
  {
    id: "proj-hsr-003",
    service: "Ceiling Cloth Hangers",
    locality: "Sector 2, HSR Layout",
    city: "Bengaluru",
    photos: ["/images/bhagavath/bhagavath-ceiling-cloth-hanger-bengaluru-1.webp"],
    description: "6-pipe independent pulley drying system mounted to ceiling slab in utility balcony.",
    permissionToPublish: false, // [CONFIRM WITH CLIENT]
    completionDate: "2026-08",
  },
  {
    id: "proj-ind-004",
    service: "Pigeon Safety Nets",
    locality: "100 Feet Road, Indiranagar",
    city: "Bengaluru",
    photos: ["/images/bhagavath/bhagavath-pigeon-safety-net-bengaluru-1.webp"],
    description: "Translucent anti-pigeon netting installed across utility balcony and AC outdoor ledge.",
    permissionToPublish: false, // [CONFIRM WITH CLIENT]
    completionDate: "2026-06",
  },
];


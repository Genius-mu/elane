export interface Room {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  size: string; // e.g. "92 m²"
  bed: string;
  occupancy: string;
  view: string;
  floor: string;
  pricePerNight: number;
  featuredImage: string;
  gallery: string[];
  features: string[];
  amenities: string[];
}

export interface DiningVenue {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  atmosphere: string;
  hours: string;
  description: string;
  chef: string;
  image: string;
  menuHighlights: {
    dish: string;
    description: string;
    pairing?: string;
  }[];
}

export interface HotelExperience {
  id: string;
  number: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  duration?: string;
  timing?: string;
  image: string;
  details: string[];
}

export interface JournalArticle {
  id: string;
  slug: string;
  number: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  aspect: "portrait" | "landscape" | "square" | "tall";
  depth: number;
  rotation?: number;
}

export const HOTEL_STATS = [
  { label: "Founded", value: "1987", suffix: "" },
  { label: "Vertical Floors", value: "42", suffix: "" },
  { label: "Private Suites", value: "186", suffix: "" },
  { label: "Culinary Concepts", value: "03", suffix: "" },
];

export const ROOMS: Room[] = [
  {
    id: "residence",
    slug: "the-residence",
    number: "01",
    name: "The Residence",
    tagline: "A private retreat above the city skyline.",
    description: "Suspended on the 40th floor, The Residence is an expansive sanctuary wrapped in fluted stone, smoked oak, and floor-to-ceiling panoramic vistas.",
    longDescription: "Spanning the entire western wing of the 40th floor, The Residence was conceived by studio Kengo & Associates as an urban sanctuary. Custom joinery in dark brushed oak meets hand-honed travertine walls, framing uninterrupted views of the city at dusk. A sunken living salon centers around a bespoke ethanol fireplace, leading seamlessly to an open terrace high above the metropolis.",
    size: "165 m²",
    bed: "1 Custom Emperor King",
    occupancy: "2 to 3 Guests",
    view: "Panoramic Skyline & Sunset",
    floor: "Floors 38–41",
    pricePerNight: 2450,
    featuredImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Private outdoor terrace with heated stone plunge pool",
      "Submerged volcanic basalt soaking bath with skyline perspective",
      "Bespoke bar with curated vintages and reserve spirits",
      "Dedicated butler service and private high-speed lift access"
    ],
    amenities: [
      "Frette custom linen & goose down bedding",
      "Bang & Olufsen bespoke acoustic soundscape",
      "Dyson Supersonic & bespoke botanical amenities",
      "In-suite sommelier consultation"
    ]
  },
  {
    id: "signature-suite",
    slug: "the-signature-suite",
    number: "02",
    name: "The Signature Suite",
    tagline: "Panoramic views, handcrafted interiors, and complete privacy.",
    description: "Generous corner layout with double-aspect vistas, tactile linen drapery, and a sculptured travertine bathroom overlooking the evening lights.",
    longDescription: "Designed for unhurried presence, The Signature Suite celebrates honest materials and tranquil geometry. Natural morning light spills through south and east-facing apertures, illuminating minimalist bronze accents and custom hand-loomed rugs from Oaxaca. The freestanding stone bath sits directly beside double-height glass.",
    size: "118 m²",
    bed: "1 California King",
    occupancy: "2 Guests",
    view: "East River & Harbor Horizon",
    floor: "Floors 28–36",
    pricePerNight: 1680,
    featuredImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Sculptural monolithic travertine tub with skyline outlook",
      "Private library alcove curated with architectural monographs",
      "Walk-in dressing gallery with custom leather millwork",
      "Automated blackout louvers and circadian lighting modes"
    ],
    amenities: [
      "Bespoke ÉLANE cedar & amber bath amenities",
      "Complimentary morning pour-over service by our barista",
      "Steamer and garments hand-pressed on arrival",
      "Curated vinyl selection and turntable"
    ]
  },
  {
    id: "skyline-suite",
    slug: "the-skyline-suite",
    number: "03",
    name: "The Skyline Suite",
    tagline: "A refined vantage point over the vibrant heart of the city.",
    description: "An architectural balance of warm walnut paneling and crisp raw linen, featuring expansive floor-to-ceiling windows and deep soaking quarters.",
    longDescription: "The Skyline Suite commands the northern elevation of the tower, providing an intimate contemplation of the architectural grid below. A dedicated study area with leather desk insets is paired with a deeply plush sleeping chamber engineered for acoustic stillness.",
    size: "92 m²",
    bed: "1 King Bed",
    occupancy: "2 Guests",
    view: "City Lights & Cathedral Spire",
    floor: "Floors 20–27",
    pricePerNight: 1120,
    featuredImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Double vanity wrapped in honed Nero Marquina marble",
      "Rainfall monsoon shower with steam integration",
      "Quiet writing bureau overlooking the urban boulevard",
      "Dual climate control and acoustic glass insulation"
    ],
    amenities: [
      "Pure Egyptian cotton bed linens",
      "Nespresso Vertuo & organic loose-leaf tea selection",
      "High-fidelity Bluetooth sound system",
      "Evening turn-down ritual with native botanical infusions"
    ]
  },
  {
    id: "courtyard-suite",
    slug: "the-courtyard-suite",
    number: "04",
    name: "The Courtyard Suite",
    tagline: "Intimate contemplation amidst tranquil greenery and limestone.",
    description: "Direct visual connection to the protected internal bamboo courtyard, with filtered dappled light and natural stone flooring.",
    longDescription: "Tucked into the garden podium levels, The Courtyard Suite trades towering heights for contemplative zen serenity. Gaze out at thirty-foot bamboo groves, black granite water tables, and whispering stone fountains from your private glazed loggia.",
    size: "86 m²",
    bed: "1 King Bed",
    occupancy: "2 Guests",
    view: "Private Zen Bamboo Garden",
    floor: "Floors 4–8",
    pricePerNight: 890,
    featuredImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Glazed private loggia with daybed overlooking courtyard",
      "Deep ofuro Japanese cedar soaking tub",
      "Honied limestone floors with under-floor thermal heating",
      "Discreet private garden entrance"
    ],
    amenities: [
      "Artisanal matcha whisking set and ceremonial green tea",
      "Silk and linen yukata robes",
      "Aromatherapy diffuser with bespoke cedarwood oil",
      "Twice-daily housekeeping and botanical turndown"
    ]
  },
  {
    id: "atelier-room",
    slug: "the-atelier-room",
    number: "05",
    name: "The Atelier Room",
    tagline: "Essential luxury and architectural proportion for the singular traveler.",
    description: "Carefully proportioned quarters with bespoke built-in furniture, curated photography, and deep acoustic calm.",
    longDescription: "An exercise in restrained luxury. The Atelier Room strips away excess to reveal the perfection of form and material: Belgian linen walls, tactile oiled walnut, hand-cast bronze switchgear, and a deep spa shower lined in grey quartzite.",
    size: "64 m²",
    bed: "1 Queen or King",
    occupancy: "2 Guests",
    view: "Architectural Avenue",
    floor: "Floors 10–18",
    pricePerNight: 680,
    featuredImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      "Built-in walnut desk and reading niche",
      "Walk-in rainfall shower with bench seating",
      "Acoustic triple glazing for absolute silence",
      "Discreet luggage and wardrobe recess"
    ],
    amenities: [
      "Custom goose-down toppers",
      "Aesop bath and body care",
      "Wireless device charging pads",
      "PressReader digital library access"
    ]
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: "origin",
    name: "ORIGIN",
    tagline: "Contemporary cuisine celebrating hyper-seasonal provenance.",
    cuisine: "Modern Seasonal Tasting",
    atmosphere: "Refined, Warm Oak, Candlelit Intimacy",
    hours: "Dinner 18:00 – 23:00 (Tuesday to Sunday)",
    description: "ORIGIN is our culinary centerpiece. Head Chef Sébastien Laurent crafts nine-course narratives informed by organic biodynamic farms and coastal foragers. Every plate explores texture, restraint, and intense clarity of flavor.",
    chef: "Executive Chef Sébastien Laurent",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85",
    menuHighlights: [
      {
        dish: "Line-Caught Turbot",
        description: "Emulsion of charred leek, fermented white asparagus, and coastal sea herbs",
        pairing: "2018 Meursault Premier Cru, Domaine des Comtes Lafon"
      },
      {
        dish: "A5 Miyazaki Wagyu",
        description: "Glazed in 10-year smoked soy, morel mushrooms, and roasted parsnip velouté",
        pairing: "2015 Côte-Rôtie 'La Landonne', E. Guigal"
      },
      {
        dish: "Smoked Sheep's Milk & Honeycomb",
        description: "Crisp bee pollen tuile, pine needle sorbet, and preserved mountain berries",
        pairing: "2017 Château d'Yquem, Sauternes"
      }
    ]
  },
  {
    id: "lumen",
    name: "LUMEN",
    tagline: "Cocktails, rare spirits, and evening dining against the night sky.",
    cuisine: "Bespoke Cocktails & Izakaya-Inspired Small Plates",
    atmosphere: "Dark Bronze, Amber Backlit Glass, Velvet Nooks",
    hours: "17:00 – 02:00 Daily",
    description: "Perched on the mezzanine cantilever, LUMEN is a discreet subterranean-mood salon floating in the clouds. Master mixologists formulate botanical elixirs, accompanied by a cellar of rare Japanese whiskies and curated vintage Champagnes.",
    chef: "Mixology Director Kenji Takahashi",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=85",
    menuHighlights: [
      {
        dish: "Obsidian Martinez",
        description: "Kinobi Kyoto gin, dry vermouth, black walnut bitters, maraschino mist",
      },
      {
        dish: "Hokkaido Scallop Crudo",
        description: "Sudachi juice, white truffle oil, shaved compressed radish, sea salt crisps"
      },
      {
        dish: "Smoked Wagyu Tartare Brioche",
        description: "Oscietra caviar, cured quail yolk, toasted milk brioche batons"
      }
    ]
  },
  {
    id: "terrace",
    name: "TERRACE",
    tagline: "Open-air dining with unrestricted city views and garden firepits.",
    cuisine: "Mediterranean Wood-Fired & Morning Breakfast",
    atmosphere: "Open Sky, Herb Gardens, Fluted Travertine, Morning Sun",
    hours: "Breakfast 07:00 – 11:30 | Lunch 12:00 – 16:00 | Sunset Cocktails 17:00 – 22:00",
    description: "Wrapped in olive trees, rosemary hedges, and limestone wind screens, TERRACE is where mornings begin with artisanal viennoiserie and evenings unwind around fragrant wood smoke and coastal seafood.",
    chef: "Chef de Cuisine Elena Rostova",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
    menuHighlights: [
      {
        dish: "Wood-Roasted Langoustines",
        description: "Meyer lemon butter, wild fennel pollen, sourdough crumbs"
      },
      {
        dish: "Artisanal Brioche French Toast",
        description: "Whipped Normandy crème fraîche, poached orchard figs, aged maple"
      },
      {
        dish: "Heritage Tomato & Stracciatella",
        description: "Castelvetrano olive crumb, cold-pressed Ligurian olive oil, purple basil"
      }
    ]
  }
];

export const HOTEL_FACILITIES: HotelExperience[] = [
  {
    id: "wellness",
    number: "01",
    title: "Wellness",
    category: "Restoration",
    headline: "Make room for stillness.",
    description: "Our holistic wellness philosophy merges ancient hydrotherapy with contemporary restorative medicine. Every ritual is personalized to counteract urban fatigue and recalibrate sleep rhythms.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
    details: [
      "Thermal contrast suites with Finnish sauna and sub-zero plunge",
      "Infrared healing cabins with sound-frequency therapy",
      "On-demand naturopaths and sleep wellness consultants"
    ]
  },
  {
    id: "fitness",
    number: "02",
    title: "Fitness",
    category: "Kinetic Health",
    headline: "Precision movement in natural light.",
    description: "A private training pavilion bathed in morning sunlight, equipped with custom walnut Technogym artisans, Pilates reformers, and personalized biomechanic coaching.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    details: [
      "Custom Technogym Artis series and free-weight floor",
      "Dedicated Pilates reformer studio with private instruction",
      "Biodynamic recovery lounge with pneumatic compression boots"
    ]
  },
  {
    id: "pool",
    number: "03",
    title: "Pool",
    category: "Aquatic Sanctuary",
    headline: "Water suspended in limestone.",
    description: "A 25-meter ozone-purified pool framed by monolithic limestone columns, radiant thermal loungers, and skylights that mirror the slow shifting daylight above.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    details: [
      "25-meter temperature-controlled mineral lap pool (31°C)",
      "Hydromassage vitality alcoves with underwater acoustics",
      "Quiet relaxation mezzanine with complimentary herbal infusions"
    ]
  },
  {
    id: "spa",
    number: "04",
    title: "Spa",
    category: "Aesthetic & Body",
    headline: "Sensory treatments of exceptional restraint.",
    description: "Six private treatment suites lined in textured cedar and acoustic wool. Bespoke body ceremonies utilize cold-pressed alpine extracts, warm river stones, and active cellular therapies.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85",
    details: [
      "Custom Biologique Recherche cellular skincare treatments",
      "Deep vibrational sound baths with Tibetan singing bowls",
      "Couples dual-soaking suite with private terrace access"
    ]
  },
  {
    id: "concierge",
    number: "05",
    title: "Concierge",
    category: "Hospitality & Access",
    headline: "Discreet navigation of the world's premier city.",
    description: "Les Clefs d'Or concierges available at all hours to arrange private gallery viewings after hours, chartered helicopter transit, secure reservations, and bespoke architectural itineraries.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    details: [
      "House fleet of electric Maybach vehicles with private chauffeurs",
      "Direct airside tarmac greeting and expedited immigration protocol",
      "Access to private collector homes and closed architectural monuments"
    ]
  }
];

export const SIGNATURE_EXPERIENCES = [
  {
    title: "Private In-Suite Dining",
    subtitle: "Custom Multi-Course Tasting",
    description: "A chef and dedicated sommelier arrive directly at your residence, preparing an unhurried tasting experience on your private terrace.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
    tag: "Exclusive"
  },
  {
    title: "Architectural Skyline Tours",
    subtitle: "By Private Helicopter",
    description: "Depart directly from the nearby river pad at dusk to trace the evolution of modernist skyscrapers with a renowned architectural historian.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    tag: "Cultural"
  },
  {
    title: "Midnight Pool & Thermal Bath",
    subtitle: "Private Solitude",
    description: "Reserve the monolithic pool and spa pavilion for private midnight access under starlight, accompanied by chilled vintage champagne.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    tag: "Wellness"
  },
  {
    title: "Curator Gallery Evenings",
    subtitle: "Closed-Door Access",
    description: "Private evening access to the city's leading contemporary museums and private vaults without public presence.",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=85",
    tag: "Art & Culture"
  },
  {
    title: "Bespoke Scent Formulation",
    subtitle: "Atelier Consultation",
    description: "Work alongside our master nose in the hotel laboratory to formulate a custom botanical perfume bottle distilled for your stay.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
    tag: "Craftsmanship"
  },
  {
    title: "Chauffeured Maybach Fleet",
    subtitle: "City & Airport Transit",
    description: "Effortless transfers in silent, climate-controlled comfort with our dedicated private driver corps.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85",
    tag: "Mobility"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "The West Horizon Penthouse",
    category: "Architecture",
    caption: "Suspended 40 storeys above the metropolis at blue hour.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    depth: 1.2,
    rotation: -1.5
  },
  {
    id: "g2",
    title: "Monolithic Limestone Atrium",
    category: "Details",
    caption: "Fluted French limestone filtering warm morning daylight.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    depth: 0.8,
    rotation: 1.2
  },
  {
    id: "g3",
    title: "The Thermal Bath & Basin",
    category: "Wellness",
    caption: "Honed basalt bath reflecting quiet water ripples.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
    aspect: "square",
    depth: 1.5,
    rotation: -0.8
  },
  {
    id: "g4",
    title: "ORIGIN Dining Salon",
    category: "Dining",
    caption: "Hand-turned timber tables beneath bronze downlighting.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    depth: 0.9,
    rotation: 0.6
  },
  {
    id: "g5",
    title: "The Bamboo Courtyard",
    category: "Landscape",
    caption: "Thirty-foot bamboo grove buffering urban vibration.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    depth: 1.4,
    rotation: -1.8
  },
  {
    id: "g6",
    title: "Bronze Door Hardware",
    category: "Craft",
    caption: "Hand-cast solid architectural bronze patinated over time.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    aspect: "tall",
    depth: 0.6,
    rotation: 1.0
  },
  {
    id: "g7",
    title: "The 25m Mineral Pool",
    category: "Wellness",
    caption: "Submerged lighting casting reflections across limestone vaults.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    depth: 1.7,
    rotation: -0.4
  },
  {
    id: "g8",
    title: "LUMEN Mezzanine Bar",
    category: "Dining",
    caption: "Evening cocktails formulated with botanical distillations.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    depth: 1.1,
    rotation: 1.6
  },
  {
    id: "g9",
    title: "The Skyline Suite Chamber",
    category: "Rooms",
    caption: "Belgian linen drapery framing twilight skyline geometries.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    depth: 1.3,
    rotation: -1.2
  },
  {
    id: "g10",
    title: "The South Staircase",
    category: "Architecture",
    caption: "Cantilevered stone stairs winding in unbroken spiral grace.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    depth: 0.7,
    rotation: 0.8
  },
  {
    id: "g11",
    title: "TERRACE at Twilight",
    category: "Dining",
    caption: "Wood-fired hearth embers glowing beside olive trees.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
    aspect: "landscape",
    depth: 1.6,
    rotation: -1.4
  },
  {
    id: "g12",
    title: "Private Library Alcove",
    category: "Interior",
    caption: "First editions and monographs bound in dyed linen.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85",
    aspect: "square",
    depth: 1.0,
    rotation: 0.5
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    quote: "Every detail felt considered, from the first arrival to the final morning. ÉLANE does not shout luxury; it surrounds you with an extraordinary, quiet presence.",
    author: "Amelia Carter",
    location: "London",
    stay: "The Residence · 6 nights"
  },
  {
    id: "2",
    quote: "An architectural feat where the city’s frenetic rhythm completely dissolves. You look out over the skyline through double glass and hear only silence.",
    author: "Jean-Philippe Moreau",
    location: "Paris",
    stay: "The Signature Suite · 4 nights"
  },
  {
    id: "3",
    quote: "ORIGIN was the most restrained and transcendent dinner of our year. Nothing was performative; everything on the plate possessed purpose.",
    author: "Elena Vassilieva",
    location: "Zurich",
    stay: "The Courtyard Suite · 5 nights"
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "j1",
    slug: "48-hours-in-the-city",
    number: "01",
    category: "City Itinerary",
    date: "Autumn 2026",
    readTime: "6 min read",
    title: "48 Hours in the City: An Architect's Dispassionate Guide",
    excerpt: "Sidestepping the tourist thoroughfares in search of brutalist concrete halls, quiet courtyard espresso bars, and unseen private collections.",
    content: [
      "To truly perceive a city, one must learn where its inhabitants retreat when the light fades. We begin not with the prominent boulevards, but along the narrow granite passages where 19th-century warehouses meet modern structural glass.",
      "Our itinerary traces the morning path from the East River piers, past discreet private galleries where access is granted only by handwritten note, toward the rooftop terrace at dusk as the glass towers turn to amber and steel blue."
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    author: "Marcus Thorne, Architectural Essayist"
  },
  {
    id: "j2",
    slug: "the-art-of-slow-dining",
    number: "02",
    category: "Gastronomy",
    date: "Late Summer 2026",
    readTime: "5 min read",
    title: "The Art of Slow Dining: Why Restraint Outlasts Spectacle",
    excerpt: "In conversation with Chef Sébastien Laurent on why three extraordinary ingredients will always surpass thirty complex flourishes.",
    content: [
      "'When you cook with the finest ingredients the earth produces,' Laurent explains while gently inspecting a crate of newly harvested mountain chanterelles, 'your primary duty as a cook is simply not to get in their way.'",
      "At ORIGIN, the menu evolves not on a calendar date, but according to rainfall and coastal temperature. If the morning boat returns with only three sea bass, only three portions are prepared."
    ],
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
    author: "Clara Vane, Culinary Critic"
  },
  {
    id: "j3",
    slug: "inside-our-architecture",
    number: "03",
    category: "Design & Form",
    date: "Mid Summer 2026",
    readTime: "8 min read",
    title: "Inside Our Architecture: The Poetry of Heavy Mass and Light",
    excerpt: "How four years of stone sourcing in Burgundy and Kyoto birthed a 42-storey tower that behaves like a timeless monolith.",
    content: [
      "Modern towers are almost exclusively light-weight assemblies of curtain-wall glass and anodized aluminum. They reflect the sky but possess no memory of the earth.",
      "For ÉLANE, the premise was radically opposite: anchor the tower with deep, load-bearing French limestone, carving windows deep into the facade so that shadow becomes a primary architectural material."
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    author: "David Chipperfield Studio Conversation"
  }
];

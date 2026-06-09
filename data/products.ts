// Product Data Structure
// To hide a product, set available to false
// To mark as seasonal, set seasonal to true

export interface ProductSpecifications {
  baleDensity?: string;
  moistureContent?: string;
  baleDimensions?: string;
  baleWeight?: string;
  packaging?: string;
  origin?: string;
}

export interface ContainerInfo {
  baleWeight: string;
  balesPerContainer: string;
  containerType: string;
  approximateNetWeight: string;
  loadingMethod: string;
}

export interface TechnicalProperties {
  // For Fuel Products
  grossCalorificValue?: string;
  netCalorificValue?: string;
  lhv?: string;
  ashContent?: string;
  // For Feed Products
  crudeProtein?: string;
  crudeFiber?: string;
  digestibility?: string;
  nutritionalProfile?: string;
  // Common
  moisture?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Animal Feed" | "Biomass Fuel" | "Bedding" | "Agricultural Residues";
  image: string;
  heroImages: string[];
  shortDescription: string;
  fullDescription: string;
  specifications: ProductSpecifications;
  containerInfo: ContainerInfo;
  technicalProperties: TechnicalProperties;
  applications: string[];
  documents: {
    testingReport?: string;
    productProfile?: string;
    technicalDatasheet?: string;
  };
  // Availability Management - Admins can change these values
  available: boolean; // Set to false to hide product or show unavailable badge
  seasonal: boolean;
  status: "Ready Stock" | "Seasonal Supply" | "Source on Demand";
  productType: "feed" | "fuel" | "both";
}

export const products: Product[] = [
  {
    id: "1",
    slug: "rhode-grass",
    name: "Rhode Grass",
    category: "Animal Feed",
    image: "/images/products/rhode-grass/hero-1.webp",
    heroImages: [
      "/images/products/rhode-grass/hero-1.webp",
      "/images/products/rhode-grass/hero-2.webp",
      "/images/products/rhode-grass/hero-3.webp"
    ],
    shortDescription: "Premium quality Rhode Grass hay, ideal for livestock feed with high nutritional value.",
    fullDescription: "Our Rhode Grass (Chloris gayana) is cultivated under optimal conditions to ensure maximum nutritional content. This versatile grass is widely recognized for its excellent palatability and digestibility, making it a preferred choice for dairy and livestock farmers. Harvested at peak maturity and carefully processed to maintain its nutritional integrity, our Rhode Grass bales provide consistent quality for animal feed applications.",
    specifications: {
      baleDensity: "180-220 kg/m³",
      moistureContent: "12-14%",
      baleDimensions: "100 x 50 x 40 cm",
      baleWeight: "25-30 kg",
      packaging: "Double-strapped compressed bales",
      origin: "Premium agricultural regions"
    },
    containerInfo: {
      baleWeight: "25-30 kg",
      balesPerContainer: "850-900 bales",
      containerType: "40ft High Cube",
      approximateNetWeight: "22-24 MT",
      loadingMethod: "Manual stacking / Forklift"
    },
    technicalProperties: {
      crudeProtein: "8-12%",
      crudeFiber: "28-32%",
      moisture: "12-14%",
      digestibility: "55-60%",
      nutritionalProfile: "Rich in fiber, moderate protein"
    },
    applications: ["Dairy Cattle Feed", "Livestock Feed", "Horse Feed", "Sheep & Goat Feed"],
    documents: {
      testingReport: "#",
      productProfile: "#",
      technicalDatasheet: "#"
    },
    available: true,
    seasonal: false,
    status: "Ready Stock",
    productType: "feed"
  },
  {
    id: "2",
    slug: "alfalfa",
    name: "Alfalfa",
    category: "Animal Feed",
    image: "/images/products/alfalfa/hero-1.webp",
    heroImages: [
      "/images/products/alfalfa/hero-1.webp",
      "/images/products/alfalfa/hero-2.webp",
      "/images/products/alfalfa/hero-3.webp"
    ],
    shortDescription: "High-protein Alfalfa hay, perfect for dairy cattle and premium livestock nutrition.",
    fullDescription: "Our premium Alfalfa (Medicago sativa) is renowned for its exceptional protein content and nutritional profile. Grown in carefully managed fields and harvested at optimal cutting stages, our Alfalfa delivers consistent quality that dairy farmers and livestock producers demand. The high protein and calcium content makes it ideal for lactating animals and growing livestock.",
    specifications: {
      baleDensity: "200-250 kg/m³",
      moistureContent: "10-13%",
      baleDimensions: "100 x 50 x 40 cm",
      baleWeight: "28-35 kg",
      packaging: "Double-strapped compressed bales",
      origin: "Premium agricultural regions"
    },
    containerInfo: {
      baleWeight: "28-35 kg",
      balesPerContainer: "750-800 bales",
      containerType: "40ft High Cube",
      approximateNetWeight: "24-26 MT",
      loadingMethod: "Manual stacking / Forklift"
    },
    technicalProperties: {
      crudeProtein: "16-22%",
      crudeFiber: "22-28%",
      moisture: "10-13%",
      digestibility: "65-70%",
      nutritionalProfile: "High protein, rich in calcium and vitamins"
    },
    applications: ["Dairy Cattle Feed", "Horse Feed", "Premium Livestock Feed", "Camel Feed"],
    documents: {
      testingReport: "#",
      productProfile: "#",
      technicalDatasheet: "#"
    },
    available: true,
    seasonal: true,
    status: "Seasonal Supply",
    productType: "feed"
  },
  {
    id: "3",
    slug: "silage",
    name: "Silage",
    category: "Animal Feed",
    image: "/images/products/silage/hero-1.webp",
    heroImages: [
      "/images/products/silage/hero-1.webp",
      "/images/products/silage/hero-2.webp",
      "/images/products/silage/hero-3.webp"
    ],
    shortDescription: "Fermented high-energy silage for enhanced livestock nutrition and milk production.",
    fullDescription: "Our premium silage is produced through controlled fermentation of fresh forage crops, preserving nutrients and enhancing digestibility. The anaerobic fermentation process creates beneficial organic acids that aid digestion and improve feed efficiency. Ideal for dairy operations seeking to maximize milk production and maintain herd health throughout the year.",
    specifications: {
      baleDensity: "700-800 kg/m³",
      moistureContent: "60-70%",
      baleDimensions: "Wrapped round bales",
      baleWeight: "400-500 kg",
      packaging: "UV-resistant stretch wrap",
      origin: "Premium agricultural regions"
    },
    containerInfo: {
      baleWeight: "400-500 kg",
      balesPerContainer: "44-48 bales",
      containerType: "40ft High Cube",
      approximateNetWeight: "20-22 MT",
      loadingMethod: "Forklift loading"
    },
    technicalProperties: {
      crudeProtein: "10-14%",
      crudeFiber: "24-28%",
      moisture: "60-70%",
      digestibility: "70-75%",
      nutritionalProfile: "High energy, enhanced digestibility"
    },
    applications: ["Dairy Cattle Feed", "Beef Cattle Feed", "Livestock Fattening", "TMR Mixing"],
    documents: {
      testingReport: "#",
      productProfile: "#",
      technicalDatasheet: "#"
    },
    available: true,
    seasonal: true,
    status: "Seasonal Supply",
    productType: "feed"
  },
  {
    id: "4",
    slug: "rice-husk",
    name: "Rice Husk",
    category: "Biomass Fuel",
    image: "/images/products/rice-husk/hero-1.webp",
    heroImages: [
      "/images/products/rice-husk/hero-1.webp",
      "/images/products/rice-husk/hero-2.webp",
      "/images/products/rice-husk/hero-3.webp"
    ],
    shortDescription: "Sustainable rice husk biomass for industrial fuel and energy generation applications.",
    fullDescription: "Rice husk is an abundant agricultural byproduct with excellent fuel properties. Our processed rice husk offers consistent quality for biomass power plants, industrial boilers, and renewable energy facilities. With high calorific value and low ash content, it provides an efficient and sustainable fuel source for various industrial applications.",
    specifications: {
      baleDensity: "100-130 kg/m³",
      moistureContent: "8-12%",
      baleDimensions: "Bulk or bagged",
      baleWeight: "25-30 kg bags",
      packaging: "PP bags or bulk",
      origin: "Rice processing facilities"
    },
    containerInfo: {
      baleWeight: "25-30 kg",
      balesPerContainer: "800-850 bags",
      containerType: "40ft High Cube",
      approximateNetWeight: "22-24 MT",
      loadingMethod: "Bulk loading / Bagged"
    },
    technicalProperties: {
      grossCalorificValue: "3,300-3,600 kcal/kg",
      netCalorificValue: "3,000-3,300 kcal/kg",
      lhv: "12-14 MJ/kg",
      ashContent: "15-20%",
      moisture: "8-12%"
    },
    applications: ["Biomass Power Plants", "Industrial Boilers", "Brick Kilns", "Cement Industry"],
    documents: {
      testingReport: "#",
      productProfile: "#",
      technicalDatasheet: "#"
    },
    available: true,
    seasonal: true,
    status: "Seasonal Supply",
    productType: "fuel"
  },
  {
    id: "5",
    slug: "rice-straw",
    name: "Rice Straw",
    category: "Agricultural Residues",
    image: "/images/products/rice-straw/hero-1.webp",
    heroImages: [
      "/images/products/rice-straw/hero-1.webp",
      "/images/products/rice-straw/hero-2.webp",
      "/images/products/rice-straw/hero-3.webp"
    ],
    shortDescription: "Versatile rice straw bales for animal bedding, biomass fuel, and industrial applications.",
    fullDescription: "Our rice straw bales offer excellent versatility for multiple applications. Sourced from sustainable rice farming operations, this agricultural residue provides cost-effective solutions for animal bedding, biomass fuel, mushroom cultivation, and paper manufacturing. High-density baling ensures efficient transportation and storage.",
    specifications: {
      baleDensity: "150-180 kg/m³",
      moistureContent: "10-14%",
      baleDimensions: "100 x 50 x 40 cm",
      baleWeight: "20-25 kg",
      packaging: "Double-strapped compressed bales",
      origin: "Rice farming regions"
    },
    containerInfo: {
      baleWeight: "20-25 kg",
      balesPerContainer: "950-1000 bales",
      containerType: "40ft High Cube",
      approximateNetWeight: "20-22 MT",
      loadingMethod: "Manual stacking / Forklift"
    },
    technicalProperties: {
      grossCalorificValue: "3,000-3,400 kcal/kg",
      netCalorificValue: "2,700-3,100 kcal/kg",
      lhv: "11-13 MJ/kg",
      ashContent: "12-18%",
      moisture: "10-14%"
    },
    applications: ["Animal Bedding", "Biomass Fuel", "Mushroom Cultivation", "Paper Manufacturing", "Composting"],
    documents: {
      testingReport: "#",
      productProfile: "#",
      technicalDatasheet: "#"
    },
    available: true,
    seasonal: true,
    status: "Seasonal Supply",
    productType: "both"
  },
  {
    id: "6",
    slug: "wheat-straw",
    name: "Wheat Straw",
    category: "Agricultural Residues",
    image: "/images/products/wheat-straw/hero-1.webp",
    heroImages: [
      "/images/products/wheat-straw/hero-1.webp",
      "/images/products/wheat-straw/hero-2.webp",
      "/images/products/wheat-straw/hero-3.webp"
    ],
    shortDescription: "High-quality wheat straw for animal bedding, biomass energy, and industrial use.",
    fullDescription: "Premium wheat straw processed and baled to meet exacting quality standards. Our wheat straw serves diverse applications from comfortable animal bedding to efficient biomass fuel. With excellent absorbency and consistent quality, it is a preferred choice for equestrian facilities, dairy farms, and biomass energy producers.",
    specifications: {
      baleDensity: "160-200 kg/m³",
      moistureContent: "10-14%",
      baleDimensions: "100 x 50 x 40 cm",
      baleWeight: "22-28 kg",
      packaging: "Double-strapped compressed bales",
      origin: "Wheat farming regions"
    },
    containerInfo: {
      baleWeight: "22-28 kg",
      balesPerContainer: "900-950 bales",
      containerType: "40ft High Cube",
      approximateNetWeight: "22-24 MT",
      loadingMethod: "Manual stacking / Forklift"
    },
    technicalProperties: {
      grossCalorificValue: "3,800-4,200 kcal/kg",
      netCalorificValue: "3,400-3,800 kcal/kg",
      lhv: "14-16 MJ/kg",
      ashContent: "5-8%",
      moisture: "10-14%"
    },
    applications: ["Animal Bedding", "Biomass Fuel", "Erosion Control", "Composting", "Industrial Processing"],
    documents: {
      testingReport: "#",
      productProfile: "#",
      technicalDatasheet: "#"
    },
    available: true,
    seasonal: true,
    status: "Seasonal Supply",
    productType: "both"
  },
  {
    id: "7",
    slug: "sugarcane-bagasse",
    name: "Sugarcane Bagasse",
    category: "Biomass Fuel",
    image: "/images/products/bagasse/hero-1.webp",
    heroImages: [
      "/images/products/bagasse/hero-1.webp",
      "/images/products/bagasse/hero-2.webp",
      "/images/products/bagasse/hero-3.webp"
    ],
    shortDescription: "Sustainable sugarcane bagasse for high-efficiency biomass power generation.",
    fullDescription: "Sugarcane bagasse is the fibrous residue remaining after sugarcane stalks are crushed to extract juice. This renewable biomass fuel offers excellent calorific value and is widely used in cogeneration plants, paper mills, and industrial facilities. Our processed bagasse meets strict quality standards for moisture content and particle size.",
    specifications: {
      baleDensity: "120-150 kg/m³",
      moistureContent: "45-52%",
      baleDimensions: "Bulk or baled",
      baleWeight: "300-400 kg bales",
      packaging: "Compressed bales or bulk",
      origin: "Sugar mills"
    },
    containerInfo: {
      baleWeight: "300-400 kg",
      balesPerContainer: "55-60 bales",
      containerType: "40ft High Cube",
      approximateNetWeight: "18-22 MT",
      loadingMethod: "Forklift loading"
    },
    technicalProperties: {
      grossCalorificValue: "4,000-4,400 kcal/kg (dry basis)",
      netCalorificValue: "1,800-2,200 kcal/kg (wet basis)",
      lhv: "7-9 MJ/kg (wet)",
      ashContent: "2-4%",
      moisture: "45-52%"
    },
    applications: ["Biomass Power Plants", "Paper & Pulp Industry", "Cogeneration Plants", "Particle Board Manufacturing"],
    documents: {
      testingReport: "#",
      productProfile: "#",
      technicalDatasheet: "#"
    },
    available: true,
    seasonal: true,
    status: "Seasonal Supply",
    productType: "fuel"
  }
];

// Helper function to get available products only
export const getAvailableProducts = () => products.filter(p => p.available);

// Helper function to get products by category
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.available && p.category === category);

// Helper function to get product by slug
export const getProductBySlug = (slug: string) => 
  products.find(p => p.slug === slug);

// Categories for filtering
export const categories = [
  "All Products",
  "Animal Feed",
  "Biomass Fuel",
  "Bedding",
  "Agricultural Residues"
] as const;

// Industries served
export const industries = [
  {
    name: "Dairy Farms",
    description: "Premium feed solutions for optimal milk production",
    icon: "milk"
  },
  {
    name: "Livestock Farms",
    description: "Nutritious feed for healthy livestock growth",
    icon: "beef"
  },
  {
    name: "Feed Manufacturers",
    description: "Bulk raw materials for feed production",
    icon: "factory"
  },
  {
    name: "Biomass Power Plants",
    description: "Sustainable fuel for clean energy generation",
    icon: "zap"
  },
  {
    name: "Industrial Boilers",
    description: "Efficient biomass fuel for industrial heating",
    icon: "flame"
  },
  {
    name: "Bedding Suppliers",
    description: "Quality straw for comfortable animal bedding",
    icon: "bed"
  },
  {
    name: "Agricultural Businesses",
    description: "Diverse agricultural products and solutions",
    icon: "sprout"
  },
  {
    name: "Renewable Energy Facilities",
    description: "Biomass feedstock for sustainable energy",
    icon: "leaf"
  }
];

// Markets/Countries served
export const markets = [
  { name: "Saudi Arabia", region: "Middle East", flag: "🇸🇦" },
  { name: "United Arab Emirates", region: "Middle East", flag: "🇦🇪" },
  { name: "Qatar", region: "Middle East", flag: "🇶🇦" },
  { name: "Kuwait", region: "Middle East", flag: "🇰🇼" },
  { name: "Bahrain", region: "Middle East", flag: "🇧🇭" },
  { name: "Oman", region: "Middle East", flag: "🇴🇲" },
  { name: "Jordan", region: "Middle East", flag: "🇯🇴" },
  { name: "Egypt", region: "Africa", flag: "🇪🇬" },
  { name: "Pakistan", region: "South Asia", flag: "🇵🇰" }
];

// Company timeline
export const timeline = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Established with a vision to provide quality biomass products"
  },
  {
    year: "2013",
    title: "First Export Shipment",
    description: "Successfully exported to the Middle East market"
  },
  {
    year: "2016",
    title: "Expanded Operations",
    description: "Opened new processing facilities and expanded capacity"
  },
  {
    year: "2019",
    title: "Quality Certification",
    description: "Achieved international quality and sustainability certifications"
  },
  {
    year: "2022",
    title: "Market Expansion",
    description: "Expanded to serve 9 countries across 3 continents"
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description: "Committed to carbon-neutral operations by 2030"
  }
];

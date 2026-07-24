/**
 * Site content, transcribed from the existing Dhruv's Millet Delight home page
 * (the screenshot the client provided as the source of truth for copy).
 *
 * Presented later inside the luxury D'NutriNest cinematic sections — same
 * substance, restrained editorial treatment.
 */

export const BRAND = {
  name: "D'NutriNest",
  tagline: "Nest of Wholesome Millets",
  legalName: "Dhruv's Millet Delight",
};

export const HERO_STATS = [
  { value: "50K+", label: "Happy Customers" },
  { value: "15+", label: "Product Varieties" },
  { value: "5★", label: "Average Rating" },
  { value: "100%", label: "Organic" },
];

export type Product = {
  name: string;
  description: string;
  tags: string[];
  rating: number;
  reviews: number;
  price: number;
  compareAt: number;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Protein Power Mix",
    description: "High-protein millet blend with nuts and seeds",
    tags: ["25g Protein", "Gluten Free", "No Sugar Added"],
    rating: 4.8,
    reviews: 156,
    price: 299,
    compareAt: 399,
    badge: "Bestseller",
  },
  {
    name: "Morning Energy Bars",
    description: "Nutritious breakfast bars made with finger millet",
    tags: ["High Fiber", "Iron Rich", "Natural Sweeteners"],
    rating: 4.9,
    reviews: 203,
    price: 249,
    compareAt: 329,
    badge: "New",
  },
  {
    name: "Crunchy Millet Snacks",
    description: "Roasted millet snacks with Indian spices",
    tags: ["Low Calorie", "Antioxidants", "Heart Healthy"],
    rating: 4.7,
    reviews: 89,
    price: 199,
    compareAt: 259,
    badge: "Popular",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Protein Power Mix", href: "/shop" },
      { label: "Energy Bars", href: "/shop" },
      { label: "Crunchy Snacks", href: "/savory-snacks" },
      { label: "Laddoos & Sweets", href: "/laddoos" },
      { label: "Millet Flour", href: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Press", href: "/about" },
      { label: "Sustainability", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/about" },
      { label: "Shipping Info", href: "/about" },
      { label: "Returns", href: "/about" },
      { label: "Contact Us", href: "/#contact" },
      { label: "Track Order", href: "/shop" },
    ],
  },
  {
    title: "Wellness",
    links: [
      { label: "Nutritional Guide", href: "/#why" },
      { label: "Health Benefits", href: "/#why" },
      { label: "Recipes", href: "/" },
      { label: "Wellness Blog", href: "/" },
      { label: "Expert Tips", href: "/" },
    ],
  },
];

export const FOOTER_BLURB =
  "Committed to bringing you the finest millet-based products that combine ancient wisdom with modern nutrition science for a healthier lifestyle.";

export const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export const MILLET_BENEFITS = [
  {
    title: "Heart Healthy",
    body: "Rich in magnesium and antioxidants that support cardiovascular health and reduce cholesterol levels.",
  },
  {
    title: "Immune Boost",
    body: "Packed with essential vitamins and minerals that strengthen your immune system naturally.",
  },
  {
    title: "Sustained Energy",
    body: "Complex carbohydrates provide steady energy release without blood sugar spikes.",
  },
  {
    title: "Brain Function",
    body: "B-vitamins and omega-3 fatty acids support cognitive function and mental clarity.",
  },
  {
    title: "Digestive Health",
    body: "High fiber content promotes healthy digestion and supports gut microbiome balance.",
  },
  {
    title: "Weight Management",
    body: "Low glycemic index and high protein content help maintain healthy weight goals.",
  },
];

export const NUTRITION = {
  note: "Per 100g serving of our premium millet blend",
  stats: [
    { value: "378", label: "Calories" },
    { value: "11g", label: "Protein" },
    { value: "8.5g", label: "Fiber" },
    { value: "3mg", label: "Iron" },
  ],
};

export const INGREDIENTS = [
  "Whole Millets",
  "Jaggery",
  "Golden Butter",
  "Raisins",
  "Almonds",
  "Pistachios",
];

export const BAKING_JOURNEY = [
  "Ingredient",
  "Mixing",
  "Golden Dough",
  "Shaping",
  "Baking",
  "Cooling",
  "Packaging",
  "Ready to Share",
];

export const CONTACT = {
  email: "info@dhruvsdelights.com",
  phone: "+91 98765 43210",
  location: "Mumbai, Maharashtra",
};

export const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Process", href: "#process" },
  { label: "Collection", href: "#collection" },
  { label: "Contact", href: "#contact" },
];

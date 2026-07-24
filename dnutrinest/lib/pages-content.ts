/**
 * Content for all pages, transcribed from the Dhruv's Millet Delight Figma
 * (UI page: Home, Shop, Laddoos, Savory Snacks, About, 404).
 */
import type { Product } from "./site-content";

export const NAV_ROUTES = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Laddoos", href: "/laddoos" },
  { label: "Savory Snacks", href: "/savory-snacks" },
  { label: "About", href: "/about" },
];

/** Full catalog used on Shop (All Products). */
export const SHOP_PRODUCTS: Product[] = [
  { name: "Protein Power Mix", description: "High-protein millet blend with nuts and seeds", tags: ["25g Protein", "Gluten Free", "No Sugar Added"], rating: 4.8, reviews: 156, price: 299, compareAt: 399, badge: "Bestseller" },
  { name: "Morning Energy Bars", description: "Nutritious breakfast bars made with finger millet", tags: ["High Fiber", "Iron Rich"], rating: 4.9, reviews: 203, price: 249, compareAt: 329, badge: "New" },
  { name: "Crunchy Millet Snacks", description: "Roasted millet snacks with Indian spices", tags: ["Low Calorie", "Antioxidants"], rating: 4.7, reviews: 89, price: 199, compareAt: 259, badge: "Popular" },
  { name: "Ragi Laddoos", description: "Traditional laddoos made with finger millet and jaggery", tags: ["Calcium Rich", "Natural Sweeteners"], rating: 4.6, reviews: 124, price: 279, compareAt: 349 },
  { name: "Bajra Khakhra", description: "Crispy pearl millet crackers with herbs", tags: ["Fiber Rich", "Low Fat"], rating: 4.5, reviews: 87, price: 189, compareAt: 229 },
  { name: "Jowar Namkeen", description: "Crunchy sorghum-based savory snacks", tags: ["Gluten Free", "Heart Healthy"], rating: 4.7, reviews: 98, price: 219, compareAt: 269 },
];

export const SHOP_FILTERS = {
  category: ["Health Mixes", "Breakfast Bars", "Laddoos & Sweets", "Savory Snacks"],
  dietary: ["Gluten Free", "High Protein", "No Sugar Added", "Vegan", "High Fiber"],
  priceMin: 100,
  priceMax: 500,
};

export const SORT_OPTIONS = ["Featured", "Price: Low to High", "Price: High to Low", "Top Rated", "Newest"];

/** Laddoos & Sweets. */
export const LADDOO_PRODUCTS: Product[] = [
  { name: "Ragi Coconut Laddoos", description: "Finger millet laddoos rolled in fresh coconut and jaggery", tags: ["Calcium Rich", "No Refined Sugar"], rating: 4.8, reviews: 176, price: 299, compareAt: 359, badge: "Bestseller" },
  { name: "Bajra Jaggery Laddoos", description: "Pearl millet and jaggery laddoos with roasted ghee", tags: ["Iron Rich", "Energy Boost"], rating: 4.7, reviews: 132, price: 279, compareAt: 339 },
  { name: "Foxtail Dry Fruit Laddoos", description: "Foxtail millet laddoos loaded with almonds and cashews", tags: ["Protein Rich", "Festive"], rating: 4.9, reviews: 148, price: 349, compareAt: 429, badge: "Popular" },
  { name: "Jowar Sesame Laddoos", description: "Sorghum and sesame laddoos with a nutty crunch", tags: ["High Fiber", "Vegan"], rating: 4.6, reviews: 94, price: 259, compareAt: 319 },
  { name: "Little Millet Besan Laddoos", description: "Classic besan laddoos reimagined with little millet", tags: ["Gluten Free", "Slow Energy"], rating: 4.5, reviews: 81, price: 269, compareAt: 329 },
  { name: "Kodo Millet Dates Laddoos", description: "Kodo millet and date laddoos with zero added sugar", tags: ["No Sugar Added", "Kids Favorite"], rating: 4.8, reviews: 110, price: 289, compareAt: 349, badge: "New" },
];

export const LADDOO_FLAVORS = ["All", "Ragi", "Bajra", "Jowar", "Dry Fruit"];

export const LADDOO_CALLOUT = "Handcrafted in small batches with pure jaggery — no refined sugar, ever.";

/** Savory Snacks — list-style rows. */
export const SAVORY_PRODUCTS: Product[] = [
  { name: "Spiced Bajra Khakhra", description: "Crispy pearl millet crackers infused with traditional Indian spices and herbs", tags: ["Fiber Rich", "Low Fat", "Baked"], rating: 4.7, reviews: 142, price: 189, compareAt: 229 },
  { name: "Jowar Namkeen Mix", description: "Crunchy sorghum-based savory mix with peanuts, curry leaves, and spices", tags: ["Gluten Free", "Heart Healthy", "No Palm Oil"], rating: 4.6, reviews: 98, price: 219, compareAt: 289 },
  { name: "Ragi Chakli Spirals", description: "Traditional spiral-shaped finger millet snacks with authentic South Indian flavor", tags: ["Calcium Rich", "Crunchy", "Handmade"], rating: 4.8, reviews: 167, price: 199, compareAt: 259 },
  { name: "Mixed Millet Bhel", description: "Healthy twist on traditional bhel with roasted millets, vegetables, and tangy chutneys", tags: ["Low Calorie", "Fibre Rich", "Tangy"], rating: 4.5, reviews: 89, price: 179, compareAt: 229 },
  { name: "Foxtail Millet Murukku", description: "Traditional South Indian twisted snacks made with foxtail millet flour", tags: ["Protein Rich", "Crispy", "Festive Special"], rating: 4.7, reviews: 134, price: 229, compareAt: 299 },
  { name: "Little Millet Sev", description: "Fine, crispy noodle-like snacks made from little millet with perfect spice blend", tags: ["Gluten Free", "Light & Crispy", "Everyday Snack"], rating: 4.4, reviews: 76, price: 169, compareAt: 219 },
];

/** About page. */
export const ABOUT = {
  hero: {
    pill: "Our Story",
    titleTop: "Nourishing India,",
    titleBottom: "One Millet at a Time",
    body: "What started as a personal wellness journey grew into a mission to bring ancient supergrains back to modern Indian tables — deliciously and honestly.",
    stat: { value: "50K+", label: "Happy Families" },
  },
  mission: {
    title: "Our Mission",
    body: "To make wholesome, millet-based snacking an everyday joy — crafted with integrity, sourced with care, and priced for every Indian family. We believe healthy food should never feel like a compromise.",
  },
  heritage: {
    title: "Our Heritage",
    body: "Millets have nourished the Indian subcontinent for over 5,000 years. We honor that legacy by working directly with small farmers, preserving heirloom varieties, and reviving grandmother's recipes for a new generation.",
  },
  values: {
    pill: "Our Values",
    title: "Values That Guide Every Bite",
    items: [
      { icon: "leaf", title: "Rooted in Tradition", body: "Ancient grains, time-honored recipes, modern craft." },
      { icon: "heart", title: "Health First", body: "Every ingredient earns its place through nutrition." },
      { icon: "shield", title: "Naturally Clean", body: "No preservatives, no shortcuts, no compromises." },
      { icon: "award", title: "Quality Promise", body: "FSSAI-certified kitchens with rigorous standards." },
    ],
  },
  timeline: {
    pill: "Our Journey",
    title: "Milestones Along the Way",
    items: [
      { n: 1, year: "2018", title: "The Idea", body: "Dhruv discovers the power of millets during a wellness retreat." },
      { n: 2, year: "2020", title: "First Kitchen", body: "Launched our first small-batch kitchen in Mumbai." },
      { n: 3, year: "2022", title: "10K Families", body: "Reached 10,000 happy households across India." },
      { n: 4, year: "2024", title: "Going National", body: "Expanded distribution to 50+ cities nationwide." },
    ],
  },
  team: {
    pill: "Our Team",
    title: "The People Behind the Delight",
    body: "A small, passionate team of food lovers, nutritionists, and craftspeople.",
    members: [
      { initials: "DS", name: "Dhruv Sharma", role: "Founder & CEO" },
      { initials: "PP", name: "Priya Patel", role: "Head of Nutrition" },
      { initials: "AM", name: "Arjun Menon", role: "Master Chef" },
      { initials: "NR", name: "Neha Reddy", role: "Community Lead" },
    ],
  },
  cta: {
    title: "Join Our Wellness Journey",
    body: "Taste the difference of honest, millet-first snacking.",
  },
};

export const NOT_FOUND = {
  code: "404",
  title: "Oops! This page seems to have crumbled.",
  body: "The page you're looking for doesn't exist — but our millet snacks certainly do.",
};

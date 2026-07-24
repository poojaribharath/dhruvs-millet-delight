import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep studio backdrops
        cocoa: {
          900: "#1A120D", // primary hero backdrop
          800: "#241710",
          700: "#2B1A13",
        },
        // Accents
        gold: {
          matte: "#C9A05C",
          jaggery: "#B97A32",
        },
        cream: "#F6F0E8",
        // Millet warm design system — logo-derived (60-30-10)
        millet: {
          fg: "#5A3305", // chocolate brown — headers, body text, structure
          primary: "#7B9044", // nature green — CTAs, links, key icons (10% accent)
          glow: "#8CA451",
          gold: "#EAA64A", // golden grain — banners, secondary, badges
          straw: "#D6B579", // warm straw — borders, dividers, sub-headers
          mint: "#EAA64A", // legacy alias -> golden (on-dark accents)
          turmeric: "#EAA64A", // legacy alias -> golden grain
          soft: "#EEDFBC", // light straw — pill / chip backgrounds
          jaggery: "#B97A32",
          bg: "#FAF8F4", // soft off-white — dominant backdrop
          card: "#F4EDDD", // warm cream — cards, chips
          border: "#E6D6B0", // straw border
        },
      },
      fontFamily: {
        // Display serif (Canela / Fraunces / Cormorant feel)
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        // Body grotesk (Inter / Neue Haas feel)
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.24em",
      },
      transitionTimingFunction: {
        // Slow cinematic easing — no bounce, no elastic
        cinema: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "soft-in": "soft-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

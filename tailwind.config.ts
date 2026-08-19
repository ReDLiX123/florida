import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdf9f7",
          100: "#fff5f3",
          200: "#faeae6",
          300: "#f5ded8",
          400: "#ecd0c8",
        },
        florida: {
          powder: "#f5c6d6",
          soft: "#f0a8c2",
          rose: "#e88ca8",
          deep: "#d46886",
          darkRose: "#b84766",
        },
        burgundy: {
          DEFAULT: "#3d2229",
          dark: "#2b161c",
          muted: "#7c5863",
          soft: "#9e7783",
          light: "#c4a9b2",
        },
        gold: {
          light: "#e9d5a1",
          DEFAULT: "#c5a059",
          dark: "#9c7c37",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Fraunces", "Playfair Display", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(calc(-100% - var(--gap, 1.5rem)), 0, 0)" },
        },
        "marquee-vertical": {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(0, calc(-100% - var(--gap, 1.5rem)), 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 30s) linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 8s ease infinite",
      },
      boxShadow: {
        'soft-pink': '0 10px 30px -10px rgba(232, 140, 168, 0.25)',
        'glow-pink': '0 0 25px rgba(240, 168, 194, 0.45)',
        'card-subtle': '0 4px 20px -2px rgba(61, 34, 41, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(212, 104, 134, 0.15)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

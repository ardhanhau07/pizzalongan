import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        syne: ["Syne", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        red: { brand: "#C8272D", dark: "#9E1E23" },
        green: { brand: "#1A5C2C", light: "#2E7D42" },
        cream: { DEFAULT: "#FFF8EE", dark: "#F5E6CC" },
        gold: "#D4A017",
      },
    },
  },
  plugins: [],
};

export default config;

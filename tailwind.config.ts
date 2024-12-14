import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "collection-1-BARR": "var(--collection-1-BARR)",
        "collection-1-black60": "var(--collection-1-black60)",
        "collection-1-main": "var(--collection-1-main)",
        "collection-1-secondary": "var(--collection-1-secondary)",
        "collection-1-white": "var(--collection-1-white)",
        "collection-1-white30": "var(--collection-1-white30)",
        "collection-1-white60": "var(--collection-1-white60)",
        "m-3black": "var(--m-3black)",
        },
            }     
               },

  plugins: [],
} satisfies Config;

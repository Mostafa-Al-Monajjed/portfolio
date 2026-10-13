import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { brand: "#7c5cff" },
      fontFamily: { sans: ["DM Sans", "sans-serif"] },
    },
  },
  plugins: [],
};

export default config;

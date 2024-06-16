import { color } from "@chakra-ui/react";
import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#0058CB',
      background: "#1B1B1F",
      onBackground: "#E3E2E6",
      card: "#6F6F6F",
      onPrimary: {
        light: colors.white,
        DEFAULT: color.white,
        dark: colors.inherit,
      },
      ...colors
    }
  },
  plugins: [],
};
export default config;

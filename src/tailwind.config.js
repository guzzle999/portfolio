/** @type {import('tailwindcss').Config} */

import { magicui } from "magicui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ให้ Tailwind scan ทุกไฟล์ใน src
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [
          "Poppins",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        inter: ["Inter", "sans-serif"],
      },
    keyframes: {
        "shiny-text": {
          "0%": { "background-position": "-300% 0" },
          "100%": { "background-position": "300% 0" },
        },
      },
    animation: {
        "shiny-text": "shiny-text 7s linear infinite",
      },
    },
  },
  plugins: [magicui],
};

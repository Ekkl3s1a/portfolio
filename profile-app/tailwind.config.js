// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: { lineHeight: "1.2", letterSpacing: "-0.02em" },
            h2: { lineHeight: "1.3", letterSpacing: "-0.01em" },
            p: { lineHeight: "1.7", letterSpacing: "0.01em" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};


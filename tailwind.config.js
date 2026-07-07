/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A2A3F", // gulf dusk navy
          deep: "#071E2E",
          soft: "#123B57",
        },
        sand: "#FAF7F1",      // stucco paper, alternate sections
        brass: {
          DEFAULT: "#B08530", // muted hardware brass
          dark: "#8F6B24",
        },
        palm: "#2F6B54",      // mangrove green — "all clear"
        mist: "#A9BDCC",      // muted text on ink
        // legacy aliases so any stragglers still resolve
        brand: {
          primary: "#0A2A3F",
          secondary: "#E8F6F9",
          accent: "#B08530",
        },
      },
      fontFamily: {
        display: ["Marcellus", "Georgia", "serif"],
        sans: ["'Source Sans 3'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
        serif: ["Marcellus", "Georgia", "serif"], // legacy alias
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

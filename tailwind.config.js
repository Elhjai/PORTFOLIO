/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#1c6000",
        dark: "#0a0a0a",
        card: "#111111",
        border: "#1f1f1f",
        muted: "#6b6b6b",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

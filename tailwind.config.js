export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "450px",
    },
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        "helvetica-light": ["Helvetica", "Arial", "sans-serif"],
        "helvetica-bold": ["Helvetica", "Arial", "sans-serif"],
        mont: ["Mont", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-194%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
  },
  plugins: [],
};

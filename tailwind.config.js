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
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

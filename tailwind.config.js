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
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

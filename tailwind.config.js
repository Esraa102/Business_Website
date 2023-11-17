/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#00F6FF",
        textColor: "rgba(255, 255, 255, 0.70);",
        bgColor: "#00040F",
        dimBlur: "rgba(9, 151, 124, 0.1)",
        footerBg: " rgba(11, 10, 12, 0.60)",
      },
    },
  },
  plugins: [],
};

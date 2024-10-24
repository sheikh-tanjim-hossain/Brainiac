/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#536493",
        },
        text: "#FFF1DB",
        secondary: "#D4BDAC",
        third: "#88C273",
      },
    },
  },
  plugins: [],
};

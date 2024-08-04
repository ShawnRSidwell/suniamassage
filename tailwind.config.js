/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cPurple: {
          100: "#F7F2FD",
          200: "#E9D8F7",
          300: "#C9B5E3",
          400: "#A280AE",
          500: "#7B5B9A",
          600: "#663C7A",
          700: "#4C3065",
          800: "#3B1E4F",
          900: "#240336",
        },
        cBlue: {
          100: "#F2F8FF",
          200: "#C9E4FF",
          300: "#87B3F8",
          400: "#7675AA",
          500: "#4C4F9A",
          600: "#2F2F6E",
          700: "#1A1A43",
          800: "#0B0B24",
          900: "#000009",
        },
        cTeal: {
          100: "#F9F9F9",
          200: "#E5F5F5",
          300: "#C1E5C1",
          400: "#7DADB8",
          500: "#4C786C",
          600: "#2F5F4F",
          700: "#1A3B3B",
          800: "#0B2121",
          900: "#000000",
        },
        cGreen: {
          100: "#F7F7F7",
          200: "#C5E1C5",
          300: "#8BC8A8",
          400: "#A3BE9C",
          500: "#5F8A5F",
          600: "#2F5F2F",
          700: "#1A3B1A",
          800: "#0B210B",
          900: "#000000",
        },
        cBeige: {
          100: "#FFF9F9",
          200: "#F5F5DC",
          300: "#C9C4B5",
          400: "#CDC7AA",
          500: "#8B7D6B",
          600: "#5C504F",
          700: "#3B3A3B",
          800: "#2B2A2B",
          900: "#1A1A1A",
        },
        cBrown: {
          100: "#F5F5DC",
          200: "#E5D8B6",
          300: "#C9B5A8",
          400: "#B18380",
          500: "#786C5B",
          600: "#4C403B",
          700: "#2F2B24",
          800: "#1A1614",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};

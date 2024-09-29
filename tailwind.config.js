/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: "quicksand", serif: "lora" },
      colors: {
        cPurple: {
          100: "#ececf3",
          200: "#d2cfe2",
          300: "#b3afcf",
          400: "#958fbc",
          500: "#776fa9",
          600: "#5d5690",
          700: "#484370",
          800: "#343050",
          900: "#1f1d30",
        },
        cBlue: {
          100: "#efeff5",
          200: "#d0d0e2",
          300: "#b1b0ce",
          400: "#7675AA",
          500: "#7271a8",
          600: "#59578e",
          700: "#45446e",
          800: "#31314f",
          900: "#1e1d2f",
        },
        //Change color scheme if needed, teal is not being used here cGreen-500 is  #4C786C normally
        cTeal: {
          100: "#F9F9F9",
          200: "#E5F5F5",
          300: "#C1E5C1",
          400: "#7DADB8",
          500: "#60A76F",
          600: "#2F5F4F",
          700: "#1A3B3B",
          800: "#0B2121",
          900: "#000000",
        },
        //cGreen-500 is  #4C786C normally
        cGreen: {
          100: "#f1f5f0",
          200: "#d4e1d1",
          300: "#b7ccb2",
          400: "#A3BE9C",
          500: "#60A76F",
          600: "#658b5b",
          700: "#4e6c47",
          800: "#384d33",
          900: "#222e1e",
        },
        cBeige: {
          100: "#f6f4ef",
          200: "#e3dfcf",
          300: "#d0caaf",
          400: "#CDC7AA",
          500: "#aaa06f",
          600: "#908655",
          700: "#706842",
          800: "#504b2f",
          900: "#302d1c",
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

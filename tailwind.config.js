/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ["Fira Code"],
        customDark: ["GothicDawn"],
      },
      colors: {
        customPrimary: {
          50: "#740096",
        },
        customWhite: {
          50: "#D1C5C0",
        },
        customLight: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#000000",
        },
        customDark: {
          50: "#000000",
          100: "#212529",
          200: "#343a40",
          300: "#495057",
          400: "#6c757d",
          500: "#adb5bd",
          600: "#ced4da",
          700: "#dee2e6",
          800: "#e9ecef",
          900: "#f8f9fa",
        },
      },
    },
  },
  plugins: [],
};

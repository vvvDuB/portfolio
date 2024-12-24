/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [],
};

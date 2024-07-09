import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          first: "#E7DEC8",
          second: "#CBAF87",
          third: "#7E8A97",
          fourth: "#30475E",
        },
        dark: {
          first: "#4B5563",
          second: "#879E8D",
          third: "#B5C0D0",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

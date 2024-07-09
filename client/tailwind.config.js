import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          first: "#F5EFE7",
          second: "#D8C4B6",
          third: "#4F709C",
          fourth: "#213555",
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

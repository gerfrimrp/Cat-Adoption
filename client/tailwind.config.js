import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          first: "#EEEDEB",
          second: "#CCD3CA",
          third: "#B5C0D0",
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

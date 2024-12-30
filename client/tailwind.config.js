/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
        theme: {
          extend: {
            colors: {
              primary: "#121826",
              secondary: "#5EC269",
              "green": "#5EC269",
              "blue-100": "#4E80EE",
              "white-100": "#E4E4E7",
              "grey-100": "#6C727F",
              "violet-100": "#7C71FF",
              "purple-100": "#9D59EF",
              "red-100": "#DD524C",
              "orange-100": "#E87B35",
              "dark-grey-100": "#394150",
              "grey-black": "#212936",
            },
    
    },
  },
  plugins: [],
}


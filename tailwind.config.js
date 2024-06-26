/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#4433ff",
          accent: "#000000",
          neutral: "#808080",
        },
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#079211",
          accent: "#ffffff",
          neutral: "#808080",
          'base-100': "#101017",
          'base-300': "#313131"
        },
      },
      "light",
      "dark",
      "forest",
    ],
  },
}


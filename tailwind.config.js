/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-bg": "#f4f4f8",
        "light-text": "#333333",
        "dark-bg": "#0F0A1F",
        "dark-text": "#ffffff",
        "accent-light": "#7B61FF",
        "accent-dark": "#A855F7",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // primary: "#6ec1e4",
        primary: "#FFD700",
        // primary_dark: "#1b78b6",
        primary_dark: " #008080",
        // secondary: "#6d7a8c",
        // secondary: "#80C904",
        head_primary: "#16ab98",
      },
      animation: {
        'char-spin': 'char-spin 5s linear infinite',
      },
      keyframes: {
        'char-spin': {
          '0%': {
            transform: 'rotate(0deg) translate(65px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(65px) rotate(-360deg)',
          },
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

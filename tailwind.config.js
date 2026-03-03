/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",   // Soft Royal Navy
        accent: "#F9E8F2",    // Light Blush Pink
      },
    },
  },
  plugins: [],
}
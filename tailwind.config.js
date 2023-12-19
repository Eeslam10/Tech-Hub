/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#000435',
        color: '#ffffff;',
        textColor: '#000435',
        gray: '#e5e7eb',
      }
    },
  },
  plugins: [],
}


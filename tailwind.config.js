/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    brand: {
      bg: '#0a0a0a',
      surface: '#111111',
      border: '#222222',
      green: '#39ff14',
      text: '#ffffff',
      muted: '#888888',
    }
  }
},
  },
  plugins: [],
}
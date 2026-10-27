/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        'accent-sun': '#FFB547',
        'accent-star': '#8FB8FF',
        bg: {
          DEFAULT: '#08080A',
          surface: '#121215',
          card: '#111114',
          subtle: '#18181D',
        },
      },
      boxShadow: {
        'sun-glow': '0 0 20px rgba(255, 181, 71, 0.35)',
        'star-glow': '0 0 20px rgba(143, 184, 255, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(0.95)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
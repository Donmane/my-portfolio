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
        palette: {
          indigo: '#2B2D42',              // Space Indigo (Surfaces, pills, active fills)
          slate: '#ACADBC',               // Pale Slate (Subtitles, body, unselected)
          cerulean: '#0C7489',            // Cerulean (Primary CTA buttons, primary accents)
          aquamarine: '#78FECF',          // Aquamarine (Tech badges, active indicators, highlights)
          'light-aquamarine': '#ACFCD9',  // Light Aquamarine (Hover states, glows, focus rings)
          white: '#F8FAFC',               // Crisp Off-White (Headings, titles)
        },
        brand: {
          bg: '#020617',
          surface: '#2B2D42',
          border: 'rgba(172, 173, 188, 0.15)',
          accent: '#78FECF',
          text: '#F8FAFC',
          muted: '#ACADBC',
        }
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 12px 30px -8px rgba(0, 0, 0, 0.6)',
        'cerulean-glow': '0 0 20px rgba(12, 116, 137, 0.4)',
        'aquamarine-glow': '0 0 20px rgba(120, 254, 207, 0.35)',
        'light-aqua-glow': '0 0 20px rgba(172, 252, 217, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
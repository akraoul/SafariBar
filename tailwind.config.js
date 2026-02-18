/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'anthracite': '#121212',
        'neon-pink': '#FF0055',
        'neon-cyan': '#00F0FF',
        'gold': '#FFD700',
        'copper': '#B87333',
        'forest': '#228B22',
        'sand': '#F4E4C1'
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'neon-pink': '0 0 20px #FF0055, 0 0 40px #FF0055, 0 0 60px #FF0055',
        'neon-cyan': '0 0 20px #00F0FF, 0 0 40px #00F0FF, 0 0 60px #00F0FF',
        'neon-gold': '0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 60px #FFD700'
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        },
        glow: {
          'from': { boxShadow: '0 0 10px #FF0055' },
          'to': { boxShadow: '0 0 20px #FF0055, 0 0 30px #FF0055' }
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f4f7f2',
          100: '#d0dec8',
          200: '#a8c19c',
          300: '#7ba068',
          400: '#5a8347',
          500: '#3d6b2e',
          600: '#305528',
          700: '#24401d',
          800: '#1a2e14',
          900: '#0f1e0b',
        },
        sage: {
          50: '#f0f5ee',
          100: '#e3ecdf',
          200: '#c7d9c0',
          300: '#a8c19c',
          400: '#8ba676',
          500: '#6d8a55',
          600: '#557040',
          700: '#425833',
          800: '#36462b',
          900: '#2d4226',
        },
        ivory: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f5efe0',
          300: '#efe4cc',
          400: '#e6d5b0',
          500: '#dcc491',
        },
        golden: {
          50: '#fdf8ed',
          100: '#f9edca',
          200: '#f3d98e',
          300: '#edc553',
          400: '#e6b032',
          500: '#c9a961',
          600: '#b08d3f',
          700: '#8e6f2e',
          800: '#6f5524',
          900: '#5a441f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

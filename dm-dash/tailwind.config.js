/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        gray: {
          900: '#0F1112',
          800: '#151718',
          700: '#181A1E',
          400: '#55565C'
        }
      }
    }
  },
  plugins: []
}

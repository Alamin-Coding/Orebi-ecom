/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
      },
    },
    fontFamily: {
      'dmsans': ['DM Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-1': "url('/images/slider-1.png')",
        'hero-2': "url('/images/slider-2.png')",
        'phone-sale': "url('/images/image-12.png')"
      },
      colors: {
        'heading': '#262626',
        'paragraph': '#6D6D6D',
      },
    },
  },
  plugins: [],
}


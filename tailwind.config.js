/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '700px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors:{
      'lgrey':'	#959eac',
      'mgray':'	#7c8798',
      'dblue':'	#252d37',
      'vdblue':'	#121417',
      'orange':'	#fb7413',
      'white':'#ffffff'

    },
    fontFamily:{
      'overpass': ['Overpass', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
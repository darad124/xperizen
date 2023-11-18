/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pattern': "url('/background.svg')", // added this line
      },
      backgroundSize: {
        'size': '20%',  // adjust this value to make your pattern smaller or larger
      },
      animation: {  // Add this block
        'underline': 'underline 0.5s forwards'
      },
      keyframes: {  // Add this block
        underline: {
          '0%': { 'width': '0%' },
          '100%': { 'width': '100%' }
        }
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      scale: ['hover', 'focus'],
      animation: ['hover', 'focus'], 
    },
  },
  plugins: [],
  corePlugins: {
    // ... other core plugins
    position: true,
  }
}

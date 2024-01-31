/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./wp-templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {  
      screens: {
        '2xl': '1300px'
      },    
      fontFamily: {
        libre: ['"Libre Baskerville", serif'],
        rammetto: ['"Rammetto One", serif'],
      }
    },
  },
  plugins: [],
}


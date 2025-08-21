/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50:'#f6f7fb',100:'#e9ecf5',200:'#cfd6e6',300:'#a8b4cf',400:'#7a8bb0',
          500:'#5a6e98',600:'#43577f',700:'#344564',800:'#29374f',900:'#212d41'
        },
        valour: {
          50:'#e6f0ff',100:'#cfe1ff',200:'#9fc3ff',300:'#6ea5ff',400:'#3e87ff',
          500:'#1069ff',600:'#0d55cc',700:'#0a4199',800:'#072d66',900:'#041933'
        }
      },
      fontFamily: { sans: ['Outfit','ui-sans-serif','system-ui'] },
    }
  },
  plugins: []
}

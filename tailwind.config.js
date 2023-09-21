/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        "input": '0px 20px 50px white',
        "circle":'-6px 9px 24px #ee4343ad',
        "orange":'0px 40px 50px  rgba(232, 123, 0, 0.30)',
        "card":'0px 60px 100px -10px rgba(86, 0, 0, 0.08)',
        "card2":'0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
        

      },
      boxShadow:{
        "card2":'0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
        "card6":'0px 40px 100px -25px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ],
}


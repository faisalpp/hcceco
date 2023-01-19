/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
   "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors:{
        'b1':'#463196',
        'b2':'#A66CFF',
        'b3':'#C8C1DF',
        'b4':'#EEEEEE',
        't1':'#463196',
        't2':'#7A7880',
        't3':'#707070',
        'prg1':'#F7684A',
        'prg2':'#1BA643',
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
  ],
});

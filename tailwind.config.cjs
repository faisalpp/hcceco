/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"
   ],
  theme: {
    extend: {
      colors:{
        'b1':'#463196',
        'b2':'#A66CFF',
        'b3':'#C8C1DF',
        't1':'#463196',
        't2':'#7A7880',
        't3':'#707070',
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

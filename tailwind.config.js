/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color1': '#7B2334',
        'custom-color2': '#F2F0F1',
        'custom-color3': '#F0F0F0',
        'custom-color4': '#9F3247',
        'custom-color5': 'rgba(159,50,71,0.06)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

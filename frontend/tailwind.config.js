/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"
],
  theme: {
    extend: {
      'height':{
        "h-100vh": "100vh"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}


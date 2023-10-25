/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "brown": {
          "900" : "#634832",
          "600" : "#967259",
          "300" : "#DBC1AC",
          "100" : "#ECE0D1"

        }
      },
      boxShadow:{
        "normal" : "0px 1px 10px rgba(0, 0, 0, 0.05)"
    },
    borderRadius:{
      "4xl" : "2rem"
    },
    fontFamily:{
      "Dana" : "Dana",
      "DanaMedium" : "Dana Medium",
      "DanaDemibold" : "Dana Demibold",
      "MorabbaLight" : "Morabba Light",
      "MorabbaMedium" : "Morabba Medium",
      "MorabbaBold" : "Morabba Bold"
      
    }
  },
  plugins: [],
}
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    fontFamily: {
      sans: ["Quicksand",
        "Source Sans Pro",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif"]
    },
    extend: {
      backgroundImage: {
        hero: "url('assets/bg5.jpg')"
      }
    }

  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}

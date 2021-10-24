module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    darkSelector: ".dark-mode",
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
        hero: "url('assets/bg5.jpg')",
        "hero-dark": "url('assets/bg5-dark.png')"
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.gray.100") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800")
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100") },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800")
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700")
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") }
            }
          }
        };
      }
    }

  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"],
    extend: { typography: ["dark"] }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-dark-mode")()
  ]
}

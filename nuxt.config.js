export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  loading: {
    color: "green",
    height: "5px"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Aza | Blog :)",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Aza, Azaa, Azjargal, Azjargal Gankhuyag" },
      { name: "keywords", content: "aza blog, azaa's blog, azaa's writing, tech-blog, aza tech blog" },
      { hid: "description", name: "description", content: "Azaa's personal blog for sharing tech and non-tech short articles and thoughts, some knowledge sharing activity purpose" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.png" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/styles/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-gtag" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  ssr: false,
  colorMode: {
    preference: "light" // default value of $colorMode.preference
  }
}

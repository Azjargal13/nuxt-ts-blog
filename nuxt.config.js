import readingTime from 'reading-time'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  loading: {
    color: "green",
    height: "5px"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Azaa, Azaa, Azjargal, Azjargal Gankhuyag" },
      { name: "keywords", content: "Azaa blog, azaa's blog, azaa's writing, tech-blog, Azaa tech blog" },
      { hid: "description", name: "description", content: "Azaa's personal blog for sharing tech and non-tech short articles and thoughts, some knowledge sharing activity purpose" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.png" }
    ],
    script: [
      // Google Analytics Code
      {
        src: process.env.NUXT_ENV_GA4_SCRIPT,
        async: true,
      },
      { src: "/js/analytics.js" },
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/styles/style.css"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content"
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.readingTime = readingTime(document.text)
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  ssr: true,
  colorMode: {
    preference: "light" // default value of $colorMode.preference
  },
  target: "static",
  googleAnalytics: {
    id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID,
    autoTracking: {
      screenview: true
    }
  }
}

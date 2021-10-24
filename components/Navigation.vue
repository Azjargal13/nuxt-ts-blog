<template>
  <div class="text-lg p-6  lg:flex lg:justify-center">
    <div class="flex items-center justify-center dark:text-white ">
      <NuxtLink to="/" class="lg:mx-2 ">
        home
      </NuxtLink>
      |
      <NuxtLink to="/techblog" class="lg:mx-4 mx-2">
        tech blog
      </NuxtLink>
      |
      <NuxtLink to="/blog" class="lg:mx-4 mx-2">
        blog
      </NuxtLink>
      |
      <NuxtLink to="/about" class="lg:mx-4 ">
        about
      </NuxtLink>
    </div>
    <div class="flex items-center justify-center p-6">
      <a
        class="group flex items-center mx-2 text-gray-600 dark:text-white hover:text-green-500"
        href="http://www.github.com/Azjargal13"
        target="_blank"
        title="Follow me on github @Azjargal13"
      >
        <span class="inline-block w-4 mr-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </span>
      </a>
      <a
        class="group flex items-center mx-2 text-gray-600 dark:text-white   hover:text-green-400"
        href="https://www.linkedin.com/in/azjargal-gankhuyag/"
        target="_blank"
        title="Connect me on LinkedIn"
      >
        <span class="inline-block w-4 mr-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
            />
          </svg>
        </span>
      </a>
      <a
        class="group flex items-center mx-2 text-gray-600 dark:text-white hover:text-green-400"
        href="mailto:azjargalgankhuyag13@gmail.com"
        target="_blank"
        title="Email me"
      >
        <span class="inline-block w-4 mr-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="hover:text-green-500"
            fill="currentColor"
          >
            <path
              d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"
            />
          </svg>
        </span>
      </a>
      <button
        class="hover:text-green-400 dark:text-white ml-6"
        @click="toggleColor"
      >
        <svg
          v-show="isLight === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          v-show="isLight === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isLight() {
      return this.$colorMode.preference === "light" ? "light" : "dark";
    }
  },
  methods: {
    toggleColor() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    }
  }
};
</script>

<style scoped></style>

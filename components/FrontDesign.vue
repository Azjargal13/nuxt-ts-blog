<template>
  <section
    id="hero"
    class=" text-gray-600 bg-center bg-cover center bg-no-repeat h-full "
  >
    <navigation />
    <h1 class="lg:text-8xl text-6xl p-8  dark:text-gray-400">
      {{ motto }}
    </h1>
    <h2
      class=" dark:text-gray-300 lg:text-4xl sm:text-xl font-medium font-sans p-6 subtitle "
    >
      Helloo, this is Azaa.
    </h2>

    <p
      class=" absolute bottom-1 right-1 p-6 text-green-900 dark:text-white hover:text-green-500"
    >
      *If you like reading, go ahead and visit 'Tech blog' and 'Blog' section.
    </p>

    <footer />
  </section>
</template>
<script>
export default {
  data() {
    return {
      major: [
        "Software engineer",
        "Full stack developer",
        "Front-end developer",
        "Research & Dev",
        "Amateur blogger"
      ],
      motto: "vivero memento"
    };
  },
  computed: {
    isLight() {
      return this.$colorMode.preference === "light";
    }
  },
  mounted() {
    // this.updateMajor(this.major, this.delegate, 3000)
  },

  methods: {}
};
</script>

<style scoped></style>

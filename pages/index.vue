<template>
  <body class="h-screen text-center">
    <front-design />
  </body>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("index").fetch();
    return {
      page
    };
  },
  head() {
    return {
      title: "Azaa | Welcome to Blog :)"
    };
  }
};
</script>

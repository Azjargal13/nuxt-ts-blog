<template>
  <div>
    <navigation />
    <div class="container justify-center flex">
      <Article :article="page" />
    </div>
    <prev-next />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log("param", params);
    const slug = params.slug || "index";
    const page = await $content("interview", slug).fetch();
    const articles = await $content("interview")
      .where({ published: { $ne: false } })
      .sortBy("date", "desc")
      .fetch();
    const [prev, next] = await $content("interview")
      .where({ published: { $ne: false } })
      .sortBy("date", "desc")
      .surround(slug)
      .fetch();

    return {
      page,
      prev,
      next,
      articles,
    };
  },
  head() {
    return {
      title: "Azaa Blog |" + this.$route.params.title,
    };
  },
};
</script>

<style scoped></style>

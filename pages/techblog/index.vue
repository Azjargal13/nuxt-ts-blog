<template>
  <div>
    Hey!!
    <blog-list :articles="articles" />
    <Pagination :next-page="nextPage" :page-no="1" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  async asyncData({ $content, error }) {
    const fiveArticles = await $content("techblog")
      .only(["title", "description", "slug", "tags", "createdAt"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    if (!fiveArticles.length) {
      return error({ statusCode: 404, message: "No articles found!" });
    }
    const nextPage = fiveArticles.length === 5;
    const articles = nextPage ? fiveArticles.slice(0, -1) : fiveArticles;

    return {
      nextPage,
      articles
    };
  },

  head() {
    return { title: "TechBlog | Azaa blog" };
  }
};
</script>

<style scoped></style>

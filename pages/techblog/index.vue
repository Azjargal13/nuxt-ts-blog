<template>
  <div>
    <blog-list path="techblog" :articles="articles" />
    <Pagination :next-page="nextPage" :page-no="1" url-prefix="/techblog" />
  </div>
</template>

<script>
export default {
  layout: "blog",

  async asyncData({ $content }) {
    const fiveArticles = await $content("techblog")
      .only(["title", "description", "slug", "tags", "createdAt"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

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

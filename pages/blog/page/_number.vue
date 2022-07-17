<template>
  <section>
    {{ pageNo }}
    <blog-list path="blog" :articles="articles" />
    <Pagination
      :prev-page="pageNo > 1"
      :next-page="nextPage"
      :page-no="pageNo"
      url-prefix="/blog"
    />
  </section>
</template>
<script>
export default {
  layout: "blog",
  async asyncData({ $content, params, error }) {
    const pageNo = parseInt(params.number);
    const fiveArticles = await $content("blog")
      .only(["createdAt", "path", "title", "tags"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .skip(4 * (pageNo - 1))
      .fetch();
    if (!fiveArticles.length) {
      return error({ statusCode: 404, message: "No articles found!" });
    }
    const nextPage = fiveArticles.length === 5;
    const articles = nextPage ? fiveArticles.slice(0, -1) : fiveArticles;
    return {
      nextPage,
      articles,
      pageNo
    };
  }
};
</script>

<template>
  <div>
    <blog-list path="blog" :articles="articles" />
    <Pagination :next-page="nextPage" :page-no="1" url-prefix="/blog" />
  </div>
</template>

<script>
import fetchBlogArticles from "~/utils/fetchBlogArticles.js";
export default {
  layout: "blog",

  async asyncData({ $content }) {
    const content = await fetchBlogArticles($content);
    return {
      nextPage: content.nextPage,
      articles: content.articles
    };
  },

  head() {
    return { title: "Blog | Azaa blog" };
  }
};
</script>

<style scoped></style>

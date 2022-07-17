<template>
  <div>
    <blog-list path="techblog" :articles="articles" />
    <Pagination :next-page="nextPage" :page-no="1" url-prefix="/techblog" />
  </div>
</template>

<script>
import fetchArticles from "~/utils/fetchArticles.js";
export default {
  layout: "blog",

  async asyncData({ $content }) {
    const content = await fetchArticles($content, "techblog");
    return {
      nextPage: content.nextPage,
      articles: content.articles
    };
  },

  head() {
    return { title: "TechBlog | Azaa blog" };
  }
};
</script>

<style scoped></style>

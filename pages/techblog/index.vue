<template>
  <div class="flex flex-col container">
    <h1 class="text-2xl text-center p-2 font-medium text-green-600 underline">
      Tech Blog: Things I eagerly want to share after learning
    </h1>
    <blockquote
      class="md:w-1/2 mx-auto text-center p-4 m-4 italic border-l-8 bg-neutral-100 text-neutral-600 border-neutral-500 quote"
    >
      “Those who know, do. Those that understand, teach.” ― Aristotle
    </blockquote>
    <p class="text-base text-left md:w-1/2 p-2 mx-auto">
      Topics ranging from LeetCode competitive coding to UI testing and VueJS
      framework, technical related short explanation and snippets to remind you
      catch-up quickly.
      <br />
    </p>

    <blog-list :articles="posts" />

    <Pagination :next-page="next" :page-no="1" url-prefix="/techblog" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  async asyncData({ $content }) {
    const articles = await $content("techblog")
      .only(["slug", "createdAt", "path", "title", "tags", "readingTime"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();

    const next = articles.length === 5;
    const posts = next ? articles.slice(0, -1) : articles;
    return {
      posts,
      next,
    };
  },

  head() {
    return { title: "TechBlog | Azaa blog" };
  },
};
</script>

<style scoped></style>

<template>
  <div class="container flex flex-col">
    <h1 class="text-2xl text-center p-2 font-medium text-green-600 underline">
      Personal Blog: Things I'd like to express after reflecting
    </h1>
    <blockquote
      class="md:w-1/2 mx-auto text-center p-4 italic border-l-8 bg-neutral-100 text-neutral-600 border-neutral-500 quote"
    >
      “Your life is a reflection of your thoughts. If you change your thinking,
      you change your life.” Brian Tracy
    </blockquote>
    <p class="text-base text-left md:w-1/2 p-2 mx-auto">
      Basically topics not related with "careers, work, and technology".
      <br />
      More of personal thoughts about things I do, realize and understand. That
      means it's <span class="font-medium text-green-600">the safest</span> and
      <span class="font-medium text-green-600"> the most welcome</span> place to
      keep myself feeling <span class="font-medium"> ALIVE </span>.
      <br />
    </p>

    <blog-list :articles="posts" />
    <Pagination :next-page="next" :page-no="1" url-prefix="/blog" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  async asyncData({ $content }) {
    const articles = await $content("blog")
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
    return { title: "Blog | Azaa blog" };
  },
};
</script>

<style scoped></style>

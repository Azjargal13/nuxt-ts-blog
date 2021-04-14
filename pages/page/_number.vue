<template>
  <section id="prev-next">
    <nuxt-link :to="prevLink">
      Prev page
    </nuxt-link>
    <nuxt-link v-if="nextPage" :to="`/page/${pageNo + 1}`">
      Next page
    </nuxt-link>
  </section>
</template>
<script>
export default {
  data() {
    return {
      pageNo: 0
    };
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? "/" : `/page/${this.pageNo - 1}`;
    }
  },
  async mounted() {
    const pageNo = parseInt(this.$route.params.number);
    const tenPosts = await this.$content()
      .only(["author", "createdAt", "description", "path", "title"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .skip(4 * (pageNo - 1))
      .fetch();

    // if (!tenPosts.length) {
    //   return error({ statusCode: 404, message: "No posts found!" });
    // }

    const nextPage = tenPosts.length === 5;
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts;
    return { nextPage, posts, pageNo };
  }
};
</script>

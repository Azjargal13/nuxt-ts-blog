<template>
  <div>
    <blog-list :articles="fewPosts" />
    <Pagination :next-page="next" :page-no="1" url-prefix="/blog" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  data() {
    return {
      fewPosts: [],
      next: {}
    };
  },
  mounted() {
    this.fetchFewPosts().then(values => {
      this.fewPosts = values.posts;
      this.next = values.nextPage;
    });
  },
  methods: {
    formatTime(value) {
      return moment(value).format("MMMM Do YYYY");
    },
    async fetchFewPosts() {
      const fewPosts = await this.$content("blog")
        .only(["createdAt", "path", "title", "tags"])
        .sortBy("createdAt", "desc")
        .limit(5)
        .fetch();
      const nextPage = fewPosts.length === 5;
      const posts = nextPage ? fewPosts.slice(0, -1) : fewPosts;
      return { nextPage, posts };
    }
  },
  head() {
    return { title: "Blog | Azaa blog" };
  }
};
</script>

<style scoped></style>

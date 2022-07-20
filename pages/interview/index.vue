<template>
  <div>
    <h1 class="text-2xl text-center p-2 font-medium text-green-600 underline">
      SPARK: All about career paths and opportunities
    </h1>
    <p class="text-base text-left md:w-1/2 p-2 mx-auto">
      For helping you and I, and other tech industry professionals seeking
      growth and support from their community, as well as expansion of the
      network, I will be interviewing mid-career & senior positioned "Tech, IT,
      Software engineering" background individuals to share their career paths
      and opportunities that we're not even aware of.
      <br />
      This content might be very helpful for
      <span class="font-medium text-green-600">new graduates</span> and/or
      <span class="font-medium text-green-600">junior tech enthusiasts </span>
      for exploring different career paths and learn from experienced
      individuals who've done something
      <span class="font-medium">AMAZING</span> on this path.
    </p>
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
      next: {},
    };
  },
  mounted() {
    this.fetchFewPosts().then((values) => {
      this.fewPosts = values.posts;
      this.next = values.nextPage;
    });
  },
  methods: {
    formatTime(value) {
      return moment(value).format("MMMM Do YYYY");
    },
    async fetchFewPosts() {
      const fewPosts = await this.$content("interview")
        .only(["createdAt", "path", "title", "tags"])
        .sortBy("createdAt", "desc")
        .limit(5)
        .fetch();
      const nextPage = fewPosts.length === 5;
      const posts = nextPage ? fewPosts.slice(0, -1) : fewPosts;
      return { nextPage, posts };
    },
  },
  head() {
    return { title: "Career Interviews | Azaa blog" };
  },
};
</script>

<style scoped></style>

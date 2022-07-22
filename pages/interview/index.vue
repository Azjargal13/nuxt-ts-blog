<template>
  <div class="container flex flex-col">
    <div class="md:mx-12">
      <h1 class="text-2xl text-center p-2 font-medium text-green-600 underline">
        SPARK: All about career paths and opportunities
      </h1>
      <p class="text-base text-left p-2 mx-auto md:w-1/2">
        For helping tech industry professionals who seek constant growth and
        support from their communities to realize opportunities in the tech
        world.
        <br />
        <br />

        This content might be very helpful for
        <span class="font-medium text-green-600">new graduates</span> and/or
        <span class="font-medium text-green-600"
          >entry level tech enthusiasts
        </span>
        for exploring different career paths and learn from experienced
        individuals who've gone through a lot and have done something
        <span class="font-medium">AMAZING</span> on their paths.
      </p>
      <p
        class="bg-gray-50 dark:bg-gray-800 text-base text-left p-2 mx-auto shadow-md md:w-1/2"
      >
        I will be interviewing mid-senior professionals from "Tech, IT, Software
        engineering, Product Development" backgrounds to share their paths and
        opportunities that we're not even aware of. Based on the interview,
        bi-weekly a summary of the article will be published. (less than 5 mins
        read time).
      </p>
    </div>
    <br />

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
        .only(["createdAt", "path", "title", "tags", "readingTime"])
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

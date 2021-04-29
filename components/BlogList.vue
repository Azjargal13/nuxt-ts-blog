<template>
  <div class="container flex flex-col divide-y-2 divide-green-500">
    <div v-for="post in fewPosts" :key="post.id" class="blog-list m-6">
      <div class="blog-col">
        <NuxtLink :to="post.path" class="hover:text-green-500">
          <ul class="lg:text-xl font-medium sm:text-lg mb-2">
            <li>{{ post.title }}</li>
          </ul>
        </NuxtLink>
        <div class="mb-2 flex flex-row hover:text-green-500">
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="h-4 w-4 mt-2 mr-1"
          >
            <path
              fill="currentColor"
              d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
            />
          </svg>
          <span v-for="item in post.tags" :key="item.id" class="m-0.5">
            {{ item }} |
          </span>

          <!-- <svg
                class="h-6 w-6"
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M446.2 270.4c-6.2-19-26.9-29.1-46-22.9l-45.4 15.1-30.3-90 45.4-15.1c19.1-6.2 29.1-26.8 23-45.9-6.2-19-26.9-29.1-46-22.9l-45.4 15.1-15.7-47c-6.2-19-26.9-29.1-46-22.9-19.1 6.2-29.1 26.8-23 45.9l15.7 47-93.4 31.2-15.7-47c-6.2-19-26.9-29.1-46-22.9-19.1 6.2-29.1 26.8-23 45.9l15.7 47-45.3 15c-19.1 6.2-29.1 26.8-23 45.9 5 14.5 19.1 24 33.6 24.6 6.8 1 12-1.6 57.7-16.8l30.3 90L78 354.8c-19 6.2-29.1 26.9-23 45.9 5 14.5 19.1 24 33.6 24.6 6.8 1 12-1.6 57.7-16.8l15.7 47c5.9 16.9 24.7 29 46 22.9 19.1-6.2 29.1-26.8 23-45.9l-15.7-47 93.6-31.3 15.7 47c5.9 16.9 24.7 29 46 22.9 19.1-6.2 29.1-26.8 23-45.9l-15.7-47 45.4-15.1c19-6 29.1-26.7 22.9-45.7zm-254.1 47.2l-30.3-90.2 93.5-31.3 30.3 90.2-93.5 31.3z"
                ></path>
              </svg> -->
        </div>
        <div class="mt-4 clock-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 clock mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ formatTime(post.createdAt) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      articles: [],
      fewPosts: [],
      next: {}
    };
  },
  mounted() {
    // this.articles = await this.$content(this.path).fetch();
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
      const fewPosts = await this.$content(this.path)
        .only(["createdAt", "path", "title", "tags"])
        .sortBy("createdAt", "desc")
        // .limit(10)
        .fetch();

      const nextPage = fewPosts.length === 5;
      const posts = nextPage ? fewPosts.slice(0, -1) : fewPosts;
      return { nextPage, posts };
    }
  }
};
</script>

<style scoped>
.clock {
  display: inline-block;
}
.blog-list {
  text-align: justify;
}
.container {
  justify-content: start;
  align-items: center;
  max-width: 600px;
}
</style>

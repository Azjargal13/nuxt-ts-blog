<template>
  <div class="">
    <section class=" prose prose-sm sm:prose lg:prose-lg mx-auto md:m-2 sm:m-4">
      <article
        v-for="post in article"
        :key="post.id"
        class="shadow-md rounded p-4 md:p-12 shadow-2xl blog-article "
      >
        <h1>
          {{ post.title }}
        </h1>
        <div class="mb-2 flex flex-row justify-center">
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="h-4 w-4 mt-3 mr-1"
          >
            <path
              fill="currentColor"
              d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
            ></path>
          </svg>
          <span v-for="item in post.tag" :key="item.id" class="m-0.5">
            {{ item }} |
          </span>
        </div>

        <div class="mt-2 mr-2 clock-icon text-lg flex justify-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 clock mt-1.5 mr-0.5"
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
        <img
          v-if="post.image"
          :src="post.image"
          alt="img"
          class="max-h-1/5 min-w-sm"
        />
        <nuxt-content :document="post" />
      </article>
    </section>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    path: {
      type: String,
      required: true,
      default: ""
    }
  },
  data() {
    return {
      article: {}
    };
  },
  async mounted() {
    this.article = await this.$content(this.path)
      .where({ slug: this.$route.params.title })
      .fetch();
  },
  methods: {
    formatTime(value) {
      return moment(value).format("MMMM Do YYYY");
    }
  }
};
</script>

<style scoped>
.clock {
  display: inline-block;
}
.blog-article {
  text-align: justify;
}
</style>

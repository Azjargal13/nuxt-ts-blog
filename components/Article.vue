<template>
  <section
    class="article prose dark:prose-dark prose-sm sm:prose lg:prose-xl mx-auto md:m-2"
  >
    <article
      v-for="post in article"
      :key="post.id"
      class="shadow-md dark:bg-gray-800 rounded p-4 md:p-12 blog-article sm:p-12"
    >
      <h2 class="text-left">
        {{ post.title }}
      </h2>
      <div class="flex justify-start items-center">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="h-4 w-4 mr-2"
        >
          <path
            fill="currentColor"
            d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
          />
        </svg>
        <div>
          <span v-for="(item, id) in post.tags" :key="id" class="m-0.5">
            {{ addSeparator(id, post.tags.length, item) }}
          </span>
        </div>
      </div>

      <div class="clock-icon flex justify-between">
        <p>
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

          {{ post.readingTime.text }}
        </p>
        <p>
          {{ formatTime(post.createdAt) }}
        </p>
      </div>
      <div v-if="post.image" class="mt-2">
        <img
          :src="post.image"
          alt="img"
          class="max-h-1/5 min-w-sm"
          style="margin: 0 auto"
        />
      </div>
      <nuxt-content :document="post" />
    </article>
  </section>
</template>

<script>
import moment from "moment";
export default {
  props: {
    path: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      article: {},
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
    },
    addSeparator(id, length, value) {
      return id !== length - 1 ? ` ${value} |` : value;
    },
  },
};
</script>

<style scoped>
.clock {
  display: inline-block;
}
.blog-article {
  max-width: 900px;
  text-align: justify;
}
.article {
  align-items: center;
  width: inherit;
}
</style>

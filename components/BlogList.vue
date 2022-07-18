<template>
  <div class="container flex flex-col divide-y-2 w-full divide-green-500">
    <div v-for="post in articles" :key="post.id" class="blog-list p-6 w-full ">
      <div class="blog-col">
        <NuxtLink :to="post.path">
          <h2 class="font-medium sm:text-lg mb-2">
            {{ post.title }}
          </h2>

          <div class="mb-2 flex flex-row ">
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-4 w-4 mt-3 mr-1 "
            >
              <path
                fill="currentColor"
                d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
              />
            </svg>
            <span
              v-for="(item, id) in post.tags"
              :key="id"
              class="mt-2 hover:text-green-500"
              style="cursor:pointer"
            >
              {{ item }}
              <span v-show="id !== post.tags.length - 1" class="mx-2">
                |
              </span>
            </span>
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
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },

  mounted() {},
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
.blog-list {
  text-align: justify;
}
.container {
  justify-content: start;
  align-items: flex-start;
  max-width: 800px;
}
</style>

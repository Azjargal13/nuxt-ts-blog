<template>
  <div class="container flex flex-col">
    <div v-for="post in articles" :key="post.id" class="blog-list">
      <NuxtLink :to="post.path" class="space-y-2.5">
        <ul class="text-xl">
          <li>{{ post.title }}</li>
        </ul>
      </NuxtLink>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      articles: []
    }
  },
  async mounted () {
    this.articles = await this.$content(this.path).fetch()
  }
}
</script>

<style scoped></style>

<template>
  <div class="container flex flex-col">
    <div v-for="post in articles" :key="post.id" class="blog-list m-6">
      <div class="blog-col flex flex-row">
        <div class="">
          <NuxtLink :to="post.path" class="hover:text-green-500 ">
            <ul class="lg:text-2xl font-medium sm:text-lg mb-2">
              <li>{{ post.title }}</li>
            </ul>
            <!-- {{ post }} -->

            <div class="mb-2">
              # tag or # label
            </div>
            <div class="mt-2 clock-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 clock"
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

        <div v-if="post.image">
          <img :src="post.image" alt="img" class="max-h-36 max-w-36 rounded p-2 ">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
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
  },
  methods: {
    formatTime (value) {
      return moment(value).format('MMMM Do YYYY')
    }
  }
}
</script>

<style scoped>
.clock{
  display: inline-block;
}
.blog-list{
  text-align: justify;
}
.container{
  justify-content: start;
  align-items: flex-start;
}
</style>

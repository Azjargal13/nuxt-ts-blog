<template>
  <div class="max-w-full container ">
    <section class=" prose prose-sm sm:prose lg:prose-lg mx-auto md:m-2 sm:m-4">
      <article v-for="post in article" :key="post.id" class="shadow-md rounded p-4 md:p-12 shadow-2xl lg:w-3/4">
        <h1>
          {{ post.title }}
        </h1>
        <h5>#Label</h5>
        <h5>#Tags</h5>
        <div class="mt-2 mr-2 clock-icon text-lg ">
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
        <nuxt-content
          :document="post"
        />
      </article>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    path: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      article: {}
    }
  },
  async mounted () {
    this.article = await this.$content(this.path).where({ slug: this.$route.params.title }).fetch()
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
.container{
  text-align: justify;
}
</style>

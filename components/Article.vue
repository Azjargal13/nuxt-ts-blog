<template>
  <div>
    <article v-for="post in article" :key="post.id" class="prose lg:prose-xl">
      <h1>{{ post.title }}</h1>
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script>
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
  }

}
</script>

<style scoped>

</style>

<template>
  <div>
    {{ articles.length }}
    <NuxtLink v-for="post in articles" :key="post.id" :to="post.path">
      <h1>{{ post.title }}</h1>
    </NuxtLink>
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

<style scoped>

</style>

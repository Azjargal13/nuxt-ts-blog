<template>
  <div>
    {{ articles.length }}
    <nuxt-child>
      hey i am the kind
    </nuxt-child>
    <NuxtLink v-for="post in articles" :key="post.id" :to="post.path">
      <h1>{{ post.title }}</h1>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  key (route) {
    return route.fullPath
  },
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
    console.log('i got my props', this.path)
    this.articles = await this.$content(this.path).fetch()
  }

}
</script>

<style scoped>

</style>

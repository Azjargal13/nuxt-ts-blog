<template>
  <div class="container flex flex-col">
    <NuxtLink v-for="post in articles" :key="post.id" :to="post.path">
      <ul>
        <li>{{ post.title }}</li>
      </ul>
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
  data() {
    return {
      articles: []
    };
  },
  async mounted() {
    this.articles = await this.$content(this.path).fetch();
  }
};
</script>

<style scoped></style>

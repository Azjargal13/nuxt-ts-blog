<template>
  <div>
    <article class="prose lg:prose-xl">
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      Type: Object,
      required: true
    }

  }

}
</script>

<style scoped>

</style>

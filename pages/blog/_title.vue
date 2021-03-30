<template>
  <div class="container">
    <Article
      :path="postPath"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      postPath: 'blog'
    }
  }

}
</script>

<style scoped>

</style>

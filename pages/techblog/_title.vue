<template>
  <div class="container">
    <Article :path="postPath" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      postPath: 'techblog'
    }
  }

}
</script>

<style scoped>

</style>

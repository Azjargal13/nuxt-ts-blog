<template>
  <div>
    <navigation />
    <div class="container">
      <Article
        :path="postPath"
      />
    </div>
    <prev-next />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import PrevNext from '~/components/PrevNext.vue'
export default {
  components: { Navigation, PrevNext },
  data () {
    return {
      postPath: 'blog'
    }
  }

}
</script>

<style scoped>

</style>

<template>
  <div class="flex justify-center h-12 static bottom-0">
    <p class="prose lg:prose-lg">
      &copy; Aza in {{date}}
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <navigation />
    <div class="container justify-center flex">
      <Article :path="postPath" />
    </div>
    <prev-next :path="postPath" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      postPath: "blog"
    };
  },
  head() {
    return {
      title: "Aza Blog |" + this.$route.params.title
    };
  }
};
</script>

<style scoped></style>

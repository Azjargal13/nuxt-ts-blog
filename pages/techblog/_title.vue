<template>
  <div class="">
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
      postPath: "techblog"
    };
  }
};
</script>

<style scoped></style>

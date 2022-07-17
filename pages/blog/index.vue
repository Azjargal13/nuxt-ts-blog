<template>
  <div>
    <blog-list path="blog" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  head() {
    return { title: "Blog | Azaa blog" };
  }
};
</script>

<style scoped></style>

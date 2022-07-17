<template>
  <div>
    <blog-list path="techblog" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  head() {
    return { title: "TechBlog | Azaa blog" };
  }
};
</script>

<style scoped></style>

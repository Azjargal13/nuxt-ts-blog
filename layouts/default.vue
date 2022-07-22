<template>
  <div>
    <Nuxt />
    <Footer v-show="$route.path !== '/'" />
  </div>
</template>
<script>
export default {
  name: "Default",
};
</script>
<style></style>

<template>
  <div class="text-lg p-6 static nav flex justify-center">
    <NuxtLink v-show="$route.path !== '/'" to="/">
      home |
    </NuxtLink>
    <NuxtLink to="/techblog">
      tech blog |
    </NuxtLink>
    <NuxtLink to="/blog">
      blog |
    </NuxtLink>
    <NuxtLink to="/about">
      about
    </NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a:hover {
color: #10b981;
}
</style>

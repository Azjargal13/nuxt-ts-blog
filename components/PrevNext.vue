<template>
  <div class="flex justify-around m-6">
    <NuxtLink
      v-if="prev"
      class="bg-green-600 text-white text-md p-4 rounded hover:bg-green-400 hover:text-white"
      :to="{ path: prev.path }"
    >
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      class="bg-green-600 text-md p-4 text-white rounded hover:bg-green-400 hover:text-white"
      :to="{ path: next.path }"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    next: {
      type: Object,
      default: {},
    },
    prev: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped></style>

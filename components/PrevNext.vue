<template>
  <div class="flex justify-around m-6">
    <NuxtLink
      v-if="prev"
      class="bg-green-700 text-md p-4 text-white rounded hover:bg-green-400 hover:text-white"
      :to="{ path: prev.path }"
    >
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      class="bg-green-700 text-md p-4 text-white rounded hover:bg-green-400 hover:text-white"
      :to="{ path: next.path }"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: "",
      require: true
    }
  },
  data() {
    return {
      prev: {},
      next: {}
    };
  },

  mounted() {
    this.fetchPrevNext().then(values => {
      this.prev = values.prev;
      this.next = values.next;
    });
  },
  methods: {
    async fetchPrevNext() {
      const [prev, next] = await this.$content(this.path)
        .only(["title", "slug"])
        .sortBy("createdAt", "asc")
        .fetch();
      return {
        prev,
        next
      };
    }
  }
};
</script>

<style scoped></style>

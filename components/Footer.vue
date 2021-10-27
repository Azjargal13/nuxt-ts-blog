<template>
  <div class="flex justify-center h-12 static bottom-0">
    <div class="divider flex flex-row justify-center">
      <p class="prose lg:prose-lg dark:text-white text-center">
        &copy; Aza in {{ date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.divider {
  width: 80%;
  margin-top: 10px;
  border-top: 1px rgba(16, 185, 129) solid;
}
</style>

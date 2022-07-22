<template>
  <div class="flex justify-center h-12 static bottom-0">
    <div class="divider flex flex-row justify-center">
      <p class="prose dark:prose-dark text-center">
        &copy;

        <a
          href="https://www.linkedin.com/in/azjargal-gankhuyag"
          target="_blank"
        >
          Azaa
        </a>
        in {{ date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.divider {
  width: 80%;
  margin-top: 10px;
  border-top: 1px rgba(16, 185, 129) solid;
}
</style>

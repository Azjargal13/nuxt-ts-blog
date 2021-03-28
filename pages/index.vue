<template>
  <div class="container">
    <div>
      <front-design/>
      </div>

  </div>
</template>

<script>

export default
{
  async asyncData({ $content }) {
    const page = await $content('index').fetch();

    return {
      page,
    };
  },
};
</script>

<style>

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>

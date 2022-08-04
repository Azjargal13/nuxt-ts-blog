<template>
  <div>
    <navigation />
    <div class="container justify-center flex">
      <Article :article="page" />
    </div>
    <prev-next />
  </div>
</template>

<script>
import moment from "moment";
export default {
  async asyncData({ $content, params }) {
    console.log("param", params);
    const slug = params.slug || "index";
    const page = await $content("blog", slug).fetch();
    const articles = await $content("blog")
      .where({ published: { $ne: false } })
      .sortBy("date", "desc")
      .fetch();
    const [prev, next] = await $content("blog")
      .where({ published: { $ne: false } })
      .sortBy("date", "desc")
      .surround(slug)
      .fetch();

    return {
      page,
      prev,
      next,
      articles,
    };
  },

  methods: {
    formatTime(value) {
      return moment(value).format("MMMM Do YYYY");
    },
    addSeparator(id, length, value) {
      return id !== length - 1 ? ` ${value} |` : value;
    },
  },

  head() {
    return {
      // title: "Azaa Blog |" + this.$route.params.title,
    };
  },
};
</script>

<template>
  <div>
    <navigation />
    <div class="container justify-center flex">
      <Article :article="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log("param", params);
    const slug = params.slug || "index";
    const page = await $content("interview", slug).fetch();
    const articles = await $content("interview")
      .where({ published: { $ne: false } })
      .sortBy("date", "desc")
      .fetch();
    const [prev, next] = await $content("interview")
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
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
        // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
        { property: "og:site_name", content: "Azaa Blog | Interviews" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://azjargal.me/",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.page.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.page.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.page.image,
        },

        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://azjargal.me/",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.page.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.page.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.page.ogImage,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://azjargal.me/interview/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style scoped></style>

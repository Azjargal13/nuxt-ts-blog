<template>
  <div class="container flex flex-col">
    <div class="md:mx-12">
      <h1 class="text-2xl text-center p-2 font-medium text-green-600 underline">
        SPARK: All about career paths and opportunities
      </h1>
      <p class="text-base text-left p-2 mx-auto md:w-1/2">
        For helping tech industry professionals who seek constant growth and
        support from their communities to realize opportunities in the tech
        world.
        <br />
        <br />

        This content might be very helpful for
        <span class="font-medium text-green-600">new graduates</span> and/or
        <span class="font-medium text-green-600"
          >entry level tech enthusiasts
        </span>
        for exploring different career paths and learn from experienced
        individuals who've gone through a lot and have done something
        <span class="font-medium">AMAZING</span> on their paths.
      </p>
      <p
        class="bg-gray-50 dark:bg-gray-800 text-base text-left p-2 mx-auto shadow-md md:w-1/2"
      >
        I will be interviewing mid-senior professionals from "Tech, IT, Software
        engineering, Product Development" backgrounds to share their paths and
        opportunities that we're not even aware of. Based on the interview,
        bi-weekly a bite-sized summary of the article will be published.
      </p>
    </div>
    <br />

    <blog-list :articles="posts" />
    <Pagination :next-page="next" :page-no="1" url-prefix="/blog" />
  </div>
</template>

<script>
export default {
  layout: "blog",
  async asyncData({ $content }) {
    const articles = await $content("interview")
      .only(["slug", "createdAt", "path", "title", "tags", "readingTime"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();
    const next = articles.length === 5;
    const posts = next ? articles.slice(0, -1) : articles;
    return {
      posts,
      next,
    };
  },
  head() {
    return {
      title: "Career interviews | Azaa | Azjargal",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " For helping tech industry professionals who seek constant growth and support from their communities to realize opportunities in the tech world.",
        },
        // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
        {
          property: "og:site_name",
          content:
            "Azaa career interviews | Job opportunities in Tech industry",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://azjargal.me/",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Career interviews | Azaa | Azjargal",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            " For helping tech industry professionals who seek constant growth and support from their communities to realize opportunities in the tech world.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/ds9sourwm/image/upload/v1658122112/azjargal.me/editedAza_vtvufx.jpg",
        },

        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://azjargal.me/",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Career interviews | Azaa | Azjargal",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            " For helping tech industry professionals who seek constant growth and support from their communities to realize opportunities in the tech world.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/ds9sourwm/image/upload/v1658122112/azjargal.me/editedAza_vtvufx.jpg",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://azjargal.me/interview`,
        },
      ],
    };
  },
};
</script>

<style scoped></style>

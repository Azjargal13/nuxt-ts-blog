<template>
  <section class="flex container">
    <article class="prose dark:prose-dark prose-sm lg:prose-xl sm:prose-sm">
      <h2>About me: Who is Azaa?</h2>
      <p>
        I'm someone who like to question things a lot and try to find answers by
        reading, observing, and listening.
      </p>
      <h4>some facts</h4>
      <ul>
        <li>born and raised in Ulaanbaatar, Mongolia.</li>
        <li>
          studied Bachelor in Computer Science, majored hardware & network in
          Ulaanbaatar, Mongolia.
        </li>
        <li>
          studied Master in Computer Science, majored CSE in Mumbai, India.
        </li>
        <li>work as a software engineer in Tokyo, Japan.</li>
      </ul>

      <p>
        you can find my detailed resume on
        <a href="https://www.linkedin.com/in/azjargal-gankhuyag/">
          LinkedIn.
        </a>
      </p>

      <p>
        Below is a bit more of personal. Feel free to go back and check out the
        blog posts too!
      </p>
      <p class="text-xl font-medium">photos</p>
      <div class="shadow-md flex justify-center">
        <img
          src="https://res.cloudinary.com/ds9sourwm/image/upload/v1658122112/azjargal.me/editedAza_vtvufx.jpg"
          alt="me"
          class="p-6 lg:w-2/3"
        />
      </div>

      <p class="text-xl font-medium">Hobbies & Interests</p>
      <li>
        Obsessive reading specifically topics on behavioral psychology, child
        psychology, personality and a bit of philosophy.
      </li>
      <li>
        A daughter of the Mother Nature, love to be around mountains, trees,
        forests, lakes, rivers and sea.
      </li>
      <li>kind of 'people person' however prefer 'solitude'!</li>
      <p>
        That's all about short intro. Hope you can get something interesting or
        useful from the short articles. Appreciated your valuable time for
        stopping by.
      </p>
    </article>
  </section>
</template>

<script>
export default {
  layout: "blog",
  head() {
    return {
      title: "About me | Azaa | Azjargal",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " I am someone who like to question things a lot and try to find answers by reading, observing, and listening.",
        },
        // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
        { property: "og:site_name", content: "Azaa Blog | About" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://azjargal.me/",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "About me | Azaa | Azjargal",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            " I am someone who like to question things a lot and try to find answers by reading, observing, and listening.",
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
          content: "About me | Azaa | Azjargal",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            " I am someone who like to question things a lot and try to find answers by reading, observing, and listening.",
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
          href: `https://azjargal.me/about`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  text-align: justify;
}
</style>

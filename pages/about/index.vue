<template>
  <div class="container">
    <section class="flex">
      <article class="prose prose-sm lg:prose-xl sm:prose-sm">
        <h1>About me: Who is Aza?</h1>
        <p>
          I'm someone who like to question things a lot and try to find answers
          by reading, observing, and listening.
        </p>
        <h4>some facts</h4>
        <ul>
          <li>
            born and raised in Ulaanbaatar, Mongolia.
          </li>
          <li>
            studied Bachelor in Computer Science, majored hardware & network in
            Ulaanbaatar, Mongolia.
          </li>
          <li>
            studied Master in Computer Science, majored CSE in Mumbai, India.
          </li>
          <li>
            work as a software engineer in Tokyo, Japan.
          </li>
        </ul>

        <p>
          you can find my detailed resume on
          <a href="https://www.linkedin.com/in/azjargal-gankhuyag/">
            LinkedIn.
          </a>
        </p>

        <p>
          Below is a bit more of personal. Feel free to go back and check out
          the blog posts too!
        </p>
        <p class="text-xl font-medium ">
          photos
        </p>
        <div class="shadow-md flex justify-center">
          <img src="~/assets/editedAza.jpg" alt="me" class="p-6  lg:w-2/3" />
        </div>

        <p class="text-xl font-medium">
          Hobbies & Interests
        </p>
        <li>
          Obsessive reading specifically topics on behavioral psychology, child
          psychology, personality and a bit of philosophy.
        </li>
        <li>
          A daughter of the Mother Nature, love to be around mountains, trees,
          forests, lakes, rivers and sea.
        </li>
        <li>
          kind of 'people person' however prefer 'solitude'!
        </li>
        <p>
          That's all about short intro. Hope you can get something interesting
          or useful from the short articles. Appreciated your valuable time for
          stopping by.
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  layout: "blog"
};
</script>

<style scoped>
.container {
  text-align: justify;
}
</style>

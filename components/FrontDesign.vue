<template>
  <div class="text-green-900">
    <section id="bg-img0" class="container">
      <div>
        <navigation />

        <h1 class="text-5xl p-6 welcome">
          vivere memento
        </h1>
        <p class="text-2xl font-medium font-sans">
          Hi, I'm Aza :)
        </p>
        <p class="text-3xl p-4">
          {{ showMajor }}
        </p>
      </div>
    </section>
    <section id="bg-img" class="container">
      <div class="grid grid-cols-1 divide-y divide-green-700 text-2xl">
        <div
          class="text-xl"
          @mouseover="onhoverCountry = true"
          @mouseleave="onhoverCountry = false"
        >
          <p v-show="!onhoverCountry">
            Where I am from
          </p>
          <p v-show="onhoverCountry" class="hover:text-green-400">
            {{ country }}
          </p>
        </div>
        <div
          class="text-xl"
          @mouseover="onhoverLiving = true"
          @mouseleave="onhoverLiving = false"
        >
          <h2 v-show="!onhoverLiving">
            Where I live
          </h2>
          <p v-show="onhoverLiving" class="hover:text-green-400">
            {{ living }}
          </p>
        </div>
      </div>
    </section>
    <section id="bg-img1" class="container">
      <div>
        <h1 class="p-8">
          Wanna contact?
        </h1>
      </div>

      <div
        class="grid grid-cols-1 divide-y divide-green-700 text-2xl text-black "
      >
        <div>
          <a
            class="text-xl p-2"
            href="https://www.linkedin.com/in/azjargal-gankhuyag/"
            target="_blank"
          >connect on LinkedIn</a>
        </div>
        <div
          @mouseover="onhoverEmail = true"
          @mouseleave="onhoverEmail = false"
        >
          <a v-show="!onhoverEmail" class="text-xl p-2">email me</a>
          <p v-show="onhoverEmail" class="text-base hover:text-green-400">
            {{ email }}
          </p>
        </div>
        <div>
          <a
            class="text-xl p-2"
            href="https://github.com/Azjargal13"
            target="_blank"
          >check out Github</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      major: [
        'Software engineer',
        'Full stack developer',
        'Front-end developer',
        'Research & Dev',
        'Amateur blogger'
      ],
      showMajor: '',
      timer: null,
      country: 'Mongolia',
      living: 'Tokyo, Japan',
      email: 'azjargalgankhuyag13@gmail.com',
      onhoverCountry: false,
      onhoverLiving: false,
      onhoverEmail: false
    }
  },
  mounted () {
    // this.updateMajor(this.major, this.delegate, 3000)
  },

  methods: {
    // updateMajor (arr, delegate, delay) {
    //   let i = 0
    //   const interval = setInterval(() => {
    //     delegate(arr[i])
    //     if (i++ >= arr.length - 1) {
    //       clearInterval(interval)
    //     }
    //   }, delay)
    // },
    // delegate (value) {
    //   this.showMajor = value
    // }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&family=Syne+Mono&display=swap");

#bg-img {
  background-image: url("../assets/bg1.jpg");
}
#bg-img1 {
  background-image: url("../assets/bg4.jpg");
  background-size: 800px 700px;
}

#bg-img0 {
  background-image: url("../assets/bg0.jpg");
  background-size: 750px 650px;
}
.welcome {
  font-family: "Noto Sans TC", sans-serif;
}
</style>

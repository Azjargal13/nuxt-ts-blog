<template>
  <div class="text-green-900">
    <div id="section-intro">
      <section
        v-show="showIntro"
        id="bg-img0"
        class="container"
        style="cursor:pointer"
        @click="toggle"
      >
        <div>
          <navigation />
          <h1 class="lg:text-5xl sm:text-4xl p-6 welcome">
            {{ motto }}
          </h1>
          <p class="lg:text-2xl sm:text-xl font-medium font-sans">
            {{ intro }}
            <span> &#128516; </span>
          </p>
          <p class="text-3xl p-4">
            {{ showMajor }}
          </p>
        </div>
      </section>
      <section
        v-show="showLocation"
        id="bg-img"
        class="container"
        style="cursor:pointer"
        @click="toggle"
      >
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
    </div>
    <section id="bg-img1" class="container">
      <div>
        <h1 class="p-8">
          Wanna contact?
        </h1>
      </div>

      <div
        class="grid grid-cols-1 divide-y divide-green-700 text-2xl text-black"
      >
        <div>
          <a
            class="text-xl p-2"
            href="https://www.linkedin.com/in/azjargal-gankhuyag/"
            target="_blank"
            >connect on LinkedIn</a
          >
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
            >check out Github</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      major: [
        "Software engineer",
        "Full stack developer",
        "Front-end developer",
        "Research & Dev",
        "Amateur blogger"
      ],
      motto: "vivero memento",
      intro: "Hi, I'm Aza",
      showMajor: "",
      timer: null,
      country: "Mongolia",
      living: "Tokyo, Japan",
      email: "azjargalgankhuyag13@gmail.com",
      onhoverCountry: false,
      onhoverLiving: false,
      onhoverEmail: false,
      showIntro: true,
      showLocation: false
    };
  },
  mounted() {
    // this.updateMajor(this.major, this.delegate, 3000)
  },

  methods: {
    toggle() {
      this.showLocation = !this.showLocation;
      this.showIntro = !this.showIntro;
    }
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&family=Syne+Mono&display=swap");

#section-intro {
  transition: 0.5s all ease-out;
  transform: rotateY(0) scale(1);
}

#bg-img {
  background-image: url("../assets/bg1.jpg");
  transition-delay: 0.17s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
#bg-img1 {
  background-image: url("../assets/bg4.jpg");
  background-size: 800px 700px;
}

#bg-img0 {
  background-image: url("../assets/bg0.jpg");
  background-size: 750px 650px;
  transition: 0.4 all linear;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.welcome {
  font-family: "Noto Sans TC", sans-serif;
}
</style>

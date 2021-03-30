<template>
  <div class="text-green-900">
    <section class="container bg-gradient-to-r from-white to-gray-100 ">
      <div>
        <navigation />

        <h1 class="text-6xl p-6">
          Hey, welcome here :)
        </h1>
        <p class="text-3xl">
          I'm Aza
        </p>
        <p class="text-4xl p-4">
          Software Engineer
        </p>
      </div>
    </section>
    <section id="bg-img" class="container">
      <div class="grid grid-cols-1 divide-y divide-green-700 text-2xl">
        <div>
          <p class="text-xl">
            Where I am from
          </p>
        </div>
        <div>
          <h2 class="text-xl">
            Where I live
          </h2>
        </div>
      </div>
    </section>
    <section id="bg-img1" class="container">
      <div>
        <h1 class="p-8">
          Wanna contact?
        </h1>
      </div>

      <div class="grid grid-cols-1 divide-y divide-green-700 text-2xl text-gray-700 ">
        <div><a class="text-xl p-2" href="#">connect on LinkedIn</a></div>
        <div><a class="text-xl p-2" href="#">email me</a></div>
        <div><a class="text-xl p-2" href="#">check out Github</a></div>
      </div>
    </section>
  </div>
</template>

<style scoped>

#bg-img{
  background-image: url('../assets/bg1.jpg');
}
#bg-img1{
  background-image: url('../assets/bg4.jpg');
}
</style>

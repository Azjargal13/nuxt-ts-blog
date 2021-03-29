<template>
  <div>
    {{articles.length}}
    <nuxt-child>
      hey i am the kind
    </nuxt-child>
    <NuxtLink v-for="post in articles" :key="post.id" :to="post.path">
      <h1>{{ post.title }}</h1>



    </NuxtLink>
      </div>
</template>

<script>
  export default {
    data(){
      return {
        articles:[]
      }
    },
    props:{
      path:{
        type:String,
        required:true
      }
    },
    async mounted(){
      console.log('i got my props', this.path)
      this.articles = await this.$content(this.path).fetch()
    },
     key(route) {
    return route.fullPath
  }




  }
</script>

<style scoped>

</style>

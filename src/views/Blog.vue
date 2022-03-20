<template>
  <NavBar/>
  <Blogs :blogs="blogs" v-for="(blogs,index) in bloglist" :key="index"/>
</template>

<script>
import Blogs from '@/components/Blogs.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
    Blogs,
  },

  data(){
    return{
      bloglist: [
        { bimage: "hongkong1.jpeg", title: "First Blog" , description: "description: the detailed description of my first trip to Hong Kong", date: "Dec 11 2022", username: "korey"},
        { bimage: "hongkong2.jpeg", title: "Second Blog", description: "description: the detailed description of my second trip to Hong Kong", date: "Jan 23 2021", username: "dai"},
      ]
    }
  }
}
</script>

<style scoped>


</style>
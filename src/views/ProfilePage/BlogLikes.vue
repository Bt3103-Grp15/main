<template>
    <user-header/>
    <div class="container">
    <Blogs :blogs="blogs" v-for="(blogs,index) in bloglist" :key="index"/>
    </div>
</template>

<script>
import Blogs from '../../components/ProfileComponents/Blogs.vue'
import UserHeader from "../../components/ProfileComponents/UserHeader.vue"

export default {
  components: { UserHeader, Blogs },
  data () {
        return {
            bloglist: [
                { bimage: "hongkong1.jpeg", title: "First Blog" , description: "the thhhdhdhd description of my first trip to Hong Kong", date: "Dec 11 2022", username: "Dora Zhu", place: "HongKong", likes: 1000, state: false},
                { bimage: "hongkong2.jpeg", title: "Second Blog", description: "the detailed description of my second trip to Hong Kong", date: "Jan 23 2021", username: "Kelly Zhou", place: "HongKong", likes: 1300, state: true},
            ],
        }
    },

}
</script>

<style>
.container {
    padding-left: 5vw;
    padding-right:5vw;
    background-color: rgb(220,220,220)
}
</style>
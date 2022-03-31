<template>
    
    <UserHeader :name="this.$store.state.username" imgpath=""/>
    <div class="container">
        <sectionHeader title="My Account" instruction="View and edit your personal info below. "/>
        <hr/>
        <sectionHeader title="Display Info" instruction="Change your display name here. "/>
        <DisplayNameForm @change-name="changeName"/>
        <hr/>
        <sectionHeader title="Account" instruction="Update and Edit the information you share with the community "/>
       
        <hr/>
  </div>

  <Blogs :blogs="blogs" v-for="(blogs,index) in bloglist" :key="index"/>

</template>

<script>
import DisplayNameForm from '../components/ProfileComponents/DisplayNameForm.vue'
import sectionHeader from '../components/ProfileComponents/sectionHeader.vue'
import UserHeader from '../components/ProfileComponents/UserHeader.vue'
import Blogs from '@/components/ProfileComponents/Blogs.vue'

export default {
    name: 'Profile',
    data () {
        return {
            userName : "ba",
            bloglist: [
                { bimage: "hongkong1.jpeg", title: "First Blog" , description: "description: the detailed description of my first trip to Hong Kong", date: "Dec 11 2022", username: "korey"},
                { bimage: "hongkong2.jpeg", title: "Second Blog", description: "description: the detailed description of my second trip to Hong Kong", date: "Jan 23 2021", username: "dai"},
            ]
        }
    },
    methods: {
        changeName(name) {
            this.$store.dispatch("updateUsername", name)
        }
    },

    components: {
        UserHeader,
        sectionHeader,
        DisplayNameForm,
        Blogs,
}
    
}

</script>

<style scoped>
.container {
    padding-left: 5vw;
    padding-right:5vw;
    background-color: rgb(220,220,220)
}

hr {
    width: 90%;
    color: gray;
    size: 1;
}
</style>

<template>
    
    <UserHeader :name="this.$store.state.username" imgpath=""/>
    <ProfileNav/>
    <div class="container">
        <sectionHeader title="My Account" instruction="View and edit your personal info below. "/>
        <hr/>
        <sectionHeader title="Display Info" instruction="Change your display name here. "/>
        <DisplayNameForm @change-name="changeName"/>
        <hr/>
        <sectionHeader title="Account" instruction="Update and Edit the information you share with the community "/>
       
        <hr/>
        <h2>My Blogs</h2>
        <Blogs :blogs="blogs" v-for="(blogs,index) in bloglist" :key="index"/> <br>

        <router-link to="/bloglikes" class="likesbtn"> View My Likes </router-link>
  </div>

</template>

<script>
import DisplayNameForm from '@/components/ProfileComponents/DisplayNameForm.vue'
import sectionHeader from '@/components/ProfileComponents/sectionHeader.vue'
import UserHeader from '@/components/ProfileComponents/UserHeader.vue'
import Blogs from '@/components/ProfileComponents/Blogs.vue'
import ProfileNav from '@/components/ProfileComponents/ProfileNav.vue'

export default {
    name: 'Profile',
    data () {
        return {
            userName : "ba",
            bloglist: [
                { bimage: "hongkong1.jpeg", title: "First Blog" , description: "the thhhdhdhd description of my first trip to Hong Kong", date: "Dec 11 2022", username: "Dora Zhu", place: "HongKong", likes: 1000, state: false},
                { bimage: "hongkong2.jpeg", title: "Second Blog", description: "the detailed description of my second trip to Hong Kong", date: "Jan 23 2021", username: "Kelly Zhou", place: "HongKong", likes: 1300, state: true},
            ],
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
        ProfileNav,
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

.likesbtn{
    width: 150px;
    height: 60px;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 13px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0,0,0,0);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
</style>

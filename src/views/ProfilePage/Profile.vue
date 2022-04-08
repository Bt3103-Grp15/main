<template>
    <UserHeader :name="this.$store.state.username" imgpath=""/>
    <ProfileNav/>
    <div class="container-profile">
        <sectionHeader title="My Account" instruction="View and edit your personal info below. "/>
        <hr/>
        <sectionHeader title="Display Info" instruction="Change your display name here. "/>
        <DisplayNameForm @change-name="changeName"/>
        <hr/>
        <sectionHeader title="Account" instruction="Update and Edit the information you share with the community "/>
  </div>

</template>

<script>
import DisplayNameForm from '@/components/ProfileComponents/DisplayNameForm.vue'
import sectionHeader from '@/components/ProfileComponents/sectionHeader.vue'
import UserHeader from '@/components/ProfileComponents/UserHeader.vue'
import ProfileNav from '@/components/ProfileComponents/ProfileNav.vue'

export default {
    name: 'Profile',
    data () {
        return {
            userName : "ba",
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
        ProfileNav,
    }
    
}

</script>

<style scoped>
.container-profile {
    padding-left: 5vw;
    padding-right:5vw;
    padding: 1vh 5vw 1vh 5vw;
    background: url(../../assets/image/bc3ec7bc825c4e6ca746c659189cea83.jpeg);
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

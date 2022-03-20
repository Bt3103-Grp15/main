<template>
    <div><header><Header/></header></div>
    <div><UserHeader :name="userName" imgpath=""/></div>
    <div class="container">
        <sectionHeader title="My Account" instruction="View and edit your personal info below. "/>
        <hr/>
        <sectionHeader title="Display Info" instruction="Change your display name here. "/>
        <DisplayNameForm @change-name="changeName"/>
        <hr/>
        <sectionHeader title="Account" instruction="Update and Edit the information you share with the community "/>
       
        <hr/>
  </div>

</template>

<script>
import DisplayNameForm from '../components/ProfileComponents/DisplayNameForm.vue'
import sectionHeader from '../components/ProfileComponents/sectionHeader.vue'
import UserHeader from '../components/ProfileComponents/UserHeader.vue'


export default {
    name: 'Profile',
    data () {
        return {
            userName : "ba"
        }
    },
    methods: {
        changeName(name) {
            this.userName = name
        }
    },

    components: {
        UserHeader,
        sectionHeader,
        DisplayNameForm,
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

header {
    height: auto;
    width:100%;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
}
</style>

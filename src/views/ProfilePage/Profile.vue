<template>
    <UserHeader :name="this.$store.state.username" imgpath=""/>
    <ProfileNav/>
    <div class="container-profile">
        <sectionHeader title="My Account" instruction="View and edit your personal info below. "/>
        <hr/>
        <sectionHeader title="Display Info" instruction="Change your display name here. "/>
        <DisplayNameForm @change-name="changeName"/>
        <hr/>
        <sectionHeader title="Change your password" instruction="Send an email to change your password. "/>
        <button class="btn" @click="changepassword">Change the password</button>
    </div>

</template>

<script>
import DisplayNameForm from '@/components/ProfileComponents/DisplayNameForm.vue'
import sectionHeader from '@/components/ProfileComponents/sectionHeader.vue'
import UserHeader from '@/components/ProfileComponents/UserHeader.vue'
import ProfileNav from '@/components/ProfileComponents/ProfileNav.vue'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/index";
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
        },
        async changepassword() {
            sendPasswordResetEmail(auth, this.$store.state.user.email)
            .then(() => {
                alert("Password reset email sent!")
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                console.log(errorCode)
            });

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
    height: 75vh;
    padding-left: 5vw;
    padding-right:5vw;
    padding: 1vh 10vw 1vh 10vw;
    background-size: 100% 100%;
    background-image: url(../../assets/image/bc3ec7bc825c4e6ca746c659189cea83.jpeg);
}

hr {
    width: 90%;
    color: gray;
    size: 1;
}

.btn {
    width: 250px;
    height: 30px;
    border: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    /* border-radius: 25px; */
    display: block;
    padding: auto;
}
</style>

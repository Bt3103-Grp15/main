<template>
    <UserHeader :name="this.$store.state.username" imgpath=""/>
    <profile-nav/>
    <h1>Notification</h1>
    <div class="notificationboard">
        <div></div>
    </div>
</template>

<script>
import ProfileNav from '../../components/ProfileComponents/ProfileNav.vue';
import UserHeader from '../../components/ProfileComponents/UserHeader.vue';
export default {
    components: {
        UserHeader,
        ProfileNav,
    }
}
</script>

<style scoped>
</style>
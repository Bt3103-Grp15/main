<template>
    <Button type="primary" @click='this.$store.dispatch("logout")'>
        <span v-if="$store.state.user!==null">Logout</span>
        <span v-else>Login</span>
        <span>
        <MdPersonIcon /></span>
    </Button>
</template>

<script>
import MdPersonIcon from 'vue-ionicons/dist/md-person.vue'
import { Button } from "ant-design-vue"

export default {
    name: "LogOut",
    components: {
        MdPersonIcon,
        Button
    }

}
</script>

<style scoped>
Button {
    float: right;

}
</style>
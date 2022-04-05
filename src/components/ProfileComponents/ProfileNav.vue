<template>
<div id="navMenu">
    <router-link to="/profile" class="navitems"> Settings </router-link>
    <p class="navitems"> </p>
    <router-link to="/myblogs" class="navitems">MyBlogs</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navMenu {
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.navitems{
    color: black;
    text-decoration: none;
    font-size: 1.7em;
    font-weight: 500;
    display: inline-block;
    width: 80px;
    padding-right: 10px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.navitems:hover {
  color: cadetblue;
}
</style>
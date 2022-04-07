<template>
<div id="navMenu" class="Container">
    <router-link to="/profile" class="navitems"> Setting </router-link>
    <p class="navitems"> </p>
    <router-link to="/myblogs" class="navitems">Blog</router-link>
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
.Container {
    background-color: rgb(255, 255, 255);
    padding: 2vh 10vw 2vh 10vw;
    align-items: center;
    margin: 0;
    display: flex;
}
</style>
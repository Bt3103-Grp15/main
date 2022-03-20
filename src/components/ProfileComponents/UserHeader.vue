<template>
<div class = "Container">
    <img :src="imgpath" alt="profile pic ">
    <h1> {{ name }} </h1>
</div>
</template>

<script>
export default {
    name: "UserHeader",
    props: {
        name: {
            type: String, 
            default: "User Name"
        },
        imgpath: {
            type: String,
        }
    }
}
</script>


<style scoped>
img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid white;
    top: 50%;
}
h1 {
    float:left;
    color: white;
    height: 120px;
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.Container {
    background-color: rgb(70,130,180);
    padding: 3vh 10vw 1vh 10vw;
    margin: 0;
    display: flex;
}

</style>
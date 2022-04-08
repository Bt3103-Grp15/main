<template>
<div class = "Container">
    <h1> Greeting, {{ name }}</h1>
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
h1 {
    float:left;
    color: black;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size:25px
}
.Container {
    background-color: rgb(229, 231, 232);
    padding: 2vh 10vw 2vh 10vw;
    display: flex;
}

</style>
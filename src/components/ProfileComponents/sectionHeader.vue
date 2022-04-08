<template>
    <div class = "container">
        <h2>
            {{title}}
        </h2>
        <p>
            {{instruction}}
        </p>
    </div>
</template>

<script>
export default {
    name: "sectionHeader",
    props: {
        title: String,
        instruction: String
    }
}
</script>

<style scoped>
.container {
    padding: 3vh 0vw 1vh 0vw;
    margin: 2vh 0vw 2vh 0vw;
    text-align: left;
}
h2{
    font-size: 18px;
    font-weight:bold
}
p{
    font-size: 15px;
}
</style>
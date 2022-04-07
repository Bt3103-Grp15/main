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
    background-color: lightgrey;
}
</style>
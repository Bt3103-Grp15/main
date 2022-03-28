<template>
  <div class="bloglist">
    <div class="blogss">
      <img :src="require(`@/assets/${blogs.bimage}`)" width="700" height="400"/> 
      <div class="btext">
        <h2>{{blogs.title}}</h2>
        <h5> {{blogs.username}} {{blogs.date}} </h5> <hr>
        <p> {{blogs.description}} </p>
      </div> 
  </div>
</div>

</template>

<script>
export default {
  name: "blogsP",
  props: ["blogs"],
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
  align-items: center;
}

.bloglist {
  display: flex;   
  justify-content: center;
}

.btext{
  text-align: left;
}

.blogss {
  align-items: center;
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

</style>
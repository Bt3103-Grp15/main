<template>
  <main class="Container">
    <div>
      <section class="form">
          <h2>Write a review to us!</h2>
          <p>Tell us some features that you would like to see in our website </p>
          <textarea name="review" id="review" class="textbox"></textarea>
          <button @click="submitReview()"> sumbit </button>
          
      </section>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    submitReview() {
      this.$router.push({name: "ReviewFeedback"})
    }
  }
}
</script>

<style scoped>

.Container{
  padding:10vh;
  height: 60%;
  display: flex;
  background-image: url("../../assets/review.jpg");
  background-color: white;
  background-size: 100% 100%;
}

h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 5vh;
  font-weight: bold;
}

p{
    font-size: 15px;
}
.form {
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 85vh;
  width:100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}



.textbox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5vh;
  height: 40vh;
  width: 100%;
  border:none;
  padding: 10px;

}

button {
  width: 100px;
  height: 35px;
  background-color: rgb(30, 26, 26);
  color: white;
  justify-content: center;
  text-align: center;
  justify-content: center;
  border-color: white;
  border-radius: 10px;
  position: relative;
}


</style>
<template>
  <main class="Container">
    <div>
      <section class="form">
          <h2>Thank you for the review!</h2>
          <p>Want to write another one? Go back to <router-link to="/review">review </router-link></p>
          
      </section>
    </div>
  </main>
</template>

<script>
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
</style>
<template>
  <main class="Container">
    <div>
      <section class="form">
        
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
  background-image: url("../../assets/login.webp");
  background-color: white;
  background-size: 100% 100%;
}

h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 5vh;
  font-weight: bold;
}

.login-register {
  font-size: 13px;
  margin-bottom: 30px
}

.form {
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 85vh;
  width:100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

.form .login{
    width:40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  align-items: center;
  text-align: center;

}


.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5vh;
  width: 50%
}

.input input {
  width: 100%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 50px;
  border-radius: 10px;
  font-size:15px      
}

.btn {
  width:30%;
  padding:10px;
  border: 0ch;
  border-radius: 30px;
  
}

.icon {
          width: 16px;
          position: absolute;
          left: 6px;
}

img {
  height:70vh;
  width:auto;
  padding:0;
  margin:0;
  display: block;
  float: right;
}

</style>
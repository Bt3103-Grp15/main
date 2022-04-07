<template>
  <main class="Container">
    <div>
      <section class="form">
        <form class="login" @submit.prevent="login">
          <p class="login-register">
        Don't have an account?
        <router-link class="router-link" to="/register">Register</router-link>
      </p>
          <h2>Login</h2>
          <div class = "input">
            <input
            type="email"
            placeholder="Email"
            v-model="login_form.email"
            required
          />
          <svg-icon class="icon" iconClass="envelope-regular"></svg-icon>
          </div>
          
          <div class = "input">
            <input
            type="password"
            placeholder="Password"
            v-model="login_form.password"
            required
          />
          <svg-icon class="icon" iconClass="lock-alt-solid"></svg-icon>
          </div>

          <input class="btn" type="submit" value="Log in" />
        </form>
      </section>
    </div>
    <div class="background"></div>
    <div id="firebaseui-auth-container"></div>
  </main>
</template>

<script>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";

export default {
  setup() {
    const login_form = ref({});

    // const login = () => {
    //     this.$store.dispatch('login', login_form.value);
    // }

    return {
      login_form,
    };
  },

  mounted() {},
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(
          auth,
          this.login_form.email,
          this.login_form.password
        );
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }

      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style scoped>

.Container{
  padding:10px;
  margin: 10px;
  height: 60%
}

h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
}

.form {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 50vh;
}

.form .login{
    width:40%;
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
  margin-bottom: 15px;
  width: 50%
}

.input input {
  width: 100%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 50px;      
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

.background{
  display: none;
    flex: 2;
    background-size: cover;
    background-color: brown;
    background-image: url("../assets/login.jpeg");
    width: 100px;
    height: 100px;
}
/*
h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}
form.login input[type="submit"] {
  background-color: #4682b4;
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

main.login {
  width: 80%;
  margin: 1% 10%;
  height: 500px;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  padding-bottom: 40px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
} */
</style>
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
          <div class="textContainer">
              <h3>or</h3>
          </div>
          <div id="firebaseui-auth-container"></div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";
import {firebase} from '@/firebase/uifire.js';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default {
  setup() {
    const login_form = ref({});
    return {
      login_form,
    };
  },

  mounted() {
    var ui = firebaseui.auth.AuthUI.getInstance();
    if(!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
     }
    var uiConfig = {
        signInSuccessUrl: '/index',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         ]
     };
     ui.start("#firebaseui-auth-container", uiConfig)

  },
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
  padding:10vh;
  height: 60%;
  display: flex;
  background-image: url("../assets/login.webp");
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

p {
  font-size: 20;
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

.textContainer {
  padding-top: 10px;
}


.background-login {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/login.jpeg");
    width: 100%;
    height: 100%;
  }
</style>
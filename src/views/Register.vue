<template>
  <main class="Container">
      <section class="form">

          <form class="register" @submit.prevent="register">
              <p class="login-register">
        ALready have an account?
        <router-link class="router-link" to="/login">Login</router-link>
      </p>

            <h2>Register</h2>
            <div class = "inputBox">
            <input
            type="email"
            placeholder="Email"
            v-model="register_form.email"
            required
          />
          <svg-icon class="icon" iconClass="envelope-regular"></svg-icon>
          </div>
          
          <div class = "inputBox">
            <input
            type="password"
            placeholder="Password"
            v-model="register_form.password"
            required
          />
          <svg-icon class="icon" iconClass="lock-alt-solid"></svg-icon>
          </div>

            <div class = "inputBox">
                <input
                type="displayname"
                placeholder="Display name"
                v-model="register_form.name" 
                required/>
                <svg-icon class="icon" iconClass="user-alt-light"></svg-icon>
            </div>

            <input
                class="btn"
                type="submit"
                value="Register" />
            
          </form>

      </section>
      <div class = "background-login"></div>
      <div id="firebaseui-auth-container"></div>
  </main>
</template>

<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from '../firebase/index'
import {doc, setDoc} from "firebase/firestore"

export default {

    setup() {
        const register_form = ref({});

        return {
            register_form,
        }
    },
    methods: {
        async register() {
            try {
                await createUserWithEmailAndPassword(auth, this.register_form.email, this.register_form.password)
            } catch (error) {
             switch(error.code) {
                case 'auth/email-already-in-use':
                    alert("Email already in use")
                    break
                case 'auth/invalid-email':
                    alert("Invalid email")
                    break
                case 'auth/operation-not-allowed':
                    alert("Operation not allowed")
                    break
                case 'auth/weak-password':
                    alert("Weak password")
                    break
                default:
                    alert("Something went wrong")
                }
                return
            }

            await setDoc(doc(db, "users", auth.currentUser.uid), {
                name: this.register_form.name
            })

            this.$router.push({ name: "index"})
        }
    }

}
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
  width:50%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

.form .register{
    width:40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  align-items: center;
  text-align: center;

}


.inputBox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5vh;
  width: 50%;
}

.inputBox input {
  width: 100%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 50px;
  border-radius: 10px;
  font-size:15px;
  background-color: -internal-light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
color: -internal-light-dark(black, white) !important;
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

.background-login {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/login.jpeg");
    width: 100%;
    height: 100%;
  }

</style>
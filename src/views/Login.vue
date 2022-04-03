<template>
  <main class="login">
        <div>
            <section class="form">
            <form class="login" @submit.prevent="login">
                <h2>Login</h2>
                <router-link to="/register">Register</router-link>
                <input
                    type="email"
                    placeholder="Email address"
                    v-model="login_form.email" required/>
                <input
                    type="password"
                    placeholder="Password"
                    v-model="login_form.password" required/>
                <input
                    type="submit"
                    value="Login" />
            </form>
            </section>
        </div>
		<div id="firebaseui-auth-container"></div>
  </main>
</template>

<script>
import { ref } from 'vue';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '@/firebase/index.js'

const auth = getAuth(app)
export default {
    setup() {
        const login_form = ref({});

        // const login = () => {
        //     this.$store.dispatch('login', login_form.value);
        // }

        return {
            login_form
        }
    },

	mounted() {
    },
    methods:{
        async login() {
          try {
            await signInWithEmailAndPassword(auth, this.login_form.email, this.login_form.password)
            } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }

      this.$router.push({ name: "index"})
        }
    }
}
</script>

<style scoped>
form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}

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
	background-color: #4682B4;
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}

main.login{
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
}
</style>
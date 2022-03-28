import { createStore } from 'vuex'
import router from '../router'
import app from '@/firebase/index.js'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  getAuth
} from 'firebase/auth'
import {doc, setDoc, getFirestore, getDoc} from "firebase/firestore"

const auth = getAuth(app)
const db = getFirestore(app)

export default createStore({
  state: {//Use to store state globally
    user: null,
    username: "",
    blogs: [],
  },
  mutations: {//change the state

    SET_USER (state, user) {
      state.user = user
    },

    SET_PROFILE(state, data) {
      state.username = data.name
      if (data.blogs) { //if user has created blogs before 
        state.blogs = data.blogs
      }
    },


    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    async googlelogin ({ commit }, details) {
      const { provider } = details

      try {
        await signInWithPopup(auth, provider)
      } catch (error) {
        switch(error.code) {
          default:
            alert("Something went wrong")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },
    async login ({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
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
      commit('SET_USER', auth.currentUser)

      //get user document 
      const userDocRef = doc(db, "users", auth.currentUser.uid)
      const docSnap = await getDoc(userDocRef)
      const data = await docSnap.data()
      commit('SET_PROFILE', data)

      router.push('/')
    },

    async register ({ commit }, details) {
      const { email, password, name } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
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

      console.log(name)
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: name
      })
      
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },

    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')
      router.push({name :'Login'})
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)
          //get user document 
          const userDocRef = doc(db, "users", auth.currentUser.uid)
          const docSnap = await getDoc(userDocRef)
          const data = await docSnap.data()
          commit('SET_PROFILE', data)

          if(router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  }
})

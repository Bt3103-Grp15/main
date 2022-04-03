import { createStore } from 'vuex'
import router from '../router'
import { db, auth } from '../firebase/index'
import { 
  signOut,
  signInWithPopup,
} from 'firebase/auth'
import {doc, getDoc, updateDoc} from "firebase/firestore"


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

    SET_USERNAME(state, name) {
      state.username = name
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
      router.push({name : 'Destination'})
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

          if(router.isReady() && router.currentRoute.value.name === 'Login') {
            router.push({ name: "Login"})
          }
        }
      })
    },

    async updateUsername({commit}, newName) {
      await updateDoc(doc(db,"users",auth.currentUser.uid), {name : newName});

      console.log("hi im next")
      
      commit('SET_USERNAME', newName)
    }
  }
})

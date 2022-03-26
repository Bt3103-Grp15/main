<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "App",
  components: {
  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button {
  display: inline-flex;
  height: 30px;
  padding: 0;
  background: #F2F2F2;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: absolute;
  left: 80%;
}

.button_icon,
.button_text {
  display: inline-flex;
  align-items: center;
  padding: 0, 20px;
  font-size: 25px;
  color: #4682B4;
  height: 100%,
}
</style>

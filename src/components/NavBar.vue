<template>
  <header>
    <div id="nav">
      <router-link to="/layout">Destination</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/about">About</router-link> |

      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          Profile
        </a>

        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <router-link to="/profile">Personal Profile</router-link> 
            </a-menu-item><br/>

            <a-menu-item key="1">
              <router-link to="/createBlog">CreateaBlog</router-link>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <LogOut />
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import LogOut from "./LogOut.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    LogOut,
  },
});
</script>

<style scoped>
#nav {
  padding: 30px;
  background-color: #f2f2f2;
  word-spacing: 20px;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: grey;
}
</style>
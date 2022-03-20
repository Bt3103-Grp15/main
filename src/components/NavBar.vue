<template>
    <div id="nav">
      <router-link to='/'>Destination</router-link> |
      <router-link to='/blog'>Blog</router-link> |
      <router-link to='/about'>About</router-link> |

      <Dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
          Profile
          <DownOutlined />
        </a>

        <template #overlay>
          <Menu>
            <Menu.Item key="0">
              <router-link to='/profile'>Personal Profile</router-link>
            </Menu.Item><br>

            <Menu.Item key="1">
              <router-link to='/createBlog'>CreateaBlog</router-link>
            </Menu.Item>
          </Menu>
        </template>
      </Dropdown>
      <LogOut/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.css';
import LogOut from './LogOut.vue';

export default defineComponent ({
    name: "NavBar",
    components: {
      DownOutlined,
      LogOut
    }

})
</script>

<style scoped>

#nav {
  padding:30px;
  background-color: #f2f2f2;
  word-spacing: 20px;
  font-size: 20px;

}

#nav a.router-link-exact-active {
  color: grey;
}

</style>
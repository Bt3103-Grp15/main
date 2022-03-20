import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Dropdown, Menu } from 'ant-design-vue';
import NavBar from '@/components/NavBar.vue'
require('vue-ionicons/ionicons.css')

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const app = createApp(App).use(store).use(router)

app.component('Dropdown', Dropdown)
app.component('Menu', Menu)
app.component('NavBar', NavBar)
app.component('QuillEditor', QuillEditor)

app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Dropdown, DropdownButton, Menu, MenuItem, SubMenu } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import NavBar from '@/components/NavBar.vue'
import './assets/reset.css'
import './assets/style.less'
import './assets/icons/index'
import SvgIcon from '@/components/svgIcon'
require('vue-ionicons/ionicons.css')

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const app = createApp(App).use(store).use(router).use(Dropdown).use(DropdownButton).use(Menu).use(MenuItem).use(SubMenu)

app.component('svg-icon', SvgIcon)
app.component('NavBar', NavBar)
app.component('QuillEditor', QuillEditor)
app.mount('#app')


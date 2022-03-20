import { createRouter, createWebHistory } from 'vue-router'
import app from '../firebase/index'
import NotFound from '@/components/NotFound.vue'
import { getAuth } from 'firebase/auth';
import layout from "../views/index"; // 主页

const auth = getAuth(app)

const routes = [
  {
    path: '/',
    name: 'Destination',
    component: layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../components/Homepage/index/index'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue'),
    meta: {
      reqiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import( '../views/Blog.vue'),
  },
  {
    path: '/createBlog',
    name: 'BlogCreate',
    component: () => import( '../components/BlogCreate.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( '../views/Profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router

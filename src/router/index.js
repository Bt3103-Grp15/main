import { createRouter, createWebHistory } from 'vue-router'
import Destination from '../views/Destination.vue'
import app from '../firebase'
import NotFound from '@/components/NotFound.vue'
import { getAuth } from 'firebase/auth';

const auth = getAuth(app)

const routes = [
  {
    path: '/',
    name: 'Destination',
    component: Destination,
    meta: {
      reqiresAuth: true
    }
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

import { createRouter, createWebHistory } from 'vue-router'
import app from '../firebase/index'
import NotFound from '@/components/NotFound.vue'
import { getAuth } from 'firebase/auth';
import layout from "@/layout"; // 主页

const auth = getAuth(app)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/AboutPage/About.vue'),
    meta: {
      reqiresAuth: true
    }
  },
  {
    path: '/createBlog',
    name: 'BlogCreate',
    component: () => import( '../views/blogCreate/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/layout',
    name: 'layout',
    component: layout,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import( '../views/Profile.vue')
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import( '../views/blogListPage/BlogListingPage.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import( '../views/Register.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import( '../views/Login.vue'),
      },
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/Destination/index.vue'),
      },
      {
        path: 'attractionListPage',
        name: 'attractionListPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/attractionListPage'),
      },
      {
        path: 'blogListPage',
        name: 'blogListPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/blogListPage'),
      },
      {
        path: 'cityPage',
        name: 'cityPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/cityPage'),
      }
    ]
  }
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

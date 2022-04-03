import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/index'
import NotFound from '@/components/NotFound.vue'
import layout from "@/layout"; // 主页


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
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/index',
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import( '../views/Profile.vue')
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
        component: () => import('../views/attractionListPage'),
      },
      {
        path: 'attactionListPage/:id',
        name: 'indivAttraction',
        component: () => import('../views/attractionListPage/indivAttraction'),
        props: true
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
      },
      {
        path: 'blog-main',
        name: 'blog-main',
        component: () => import(/* webpackChunkName: "about" */ '../views/blog-main'),
      },
      {
        path: 'indivBlogPage',
        name: 'indivBlogPage',
        component: () => import(/* webpackChunkName: "about" */ '../views/indivBlogPage'),
      },
      {
        path: '/blogdetail',
        name: 'BlogD',
        component: () => import('../views/indivBlogPage/BlogDetail.vue')
      },
      {
        path: '/blogdetail/:id',
        name: 'BlogDetail',
        component: () => import('../views/indivBlogPage/BlogDetail.vue'),
        props: true
      },
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

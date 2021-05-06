import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  // 首页
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'views/category/Category.vue')
  },
  {
    path: '/shopcart',
    component: () => import('views/shopcart/Shopcart.vue')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

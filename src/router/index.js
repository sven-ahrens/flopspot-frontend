import Vue from 'vue'
import VueRouter from 'vue-router'
import TheRating from '../views/TheRating'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TheRating
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

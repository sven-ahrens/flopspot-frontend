import Vue from 'vue'
import VueRouter from 'vue-router'
import TheIntro from '../views/TheIntro'
import TheTo from '../views/TheTo'
import TheJourneyDate from '../views/TheJourneyDate'
import TheFrom from '../views/TheFrom'
import TheTrain from '../views/TheTrain'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TheIntro
  },
  {
    path: '/from',
    component: TheFrom
  },
  {
    path: '/journey-date',
    component: TheJourneyDate
  },
  {
    path: '/train',
    component: TheTrain
  },
  {
    path: '/to',
    component: TheTo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

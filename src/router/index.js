import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game/:gameName',
    name: 'Game',
    component: Game,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import routerStruct from "./routerStruct";

Vue.use(VueRouter)

const router = new VueRouter({
  routerStruct
})

export default router

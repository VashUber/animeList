import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import List from '../pages/List.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: "List",
    path: "/",
    component: List,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

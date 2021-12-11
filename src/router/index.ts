import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import List from "../pages/List.vue"
import Anime from "../pages/Anime.vue"

const routes: Array<RouteRecordRaw> = [
  {
    name: "Anime list",
    path: "/",
    component: List,
  },
  {
    name: "anime",
    path: "/anime/:id",
    component: Anime,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

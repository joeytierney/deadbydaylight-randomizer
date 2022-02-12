import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Survivors from "../views/Survivors.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/survivors",
    name: "Survivors",
    component: Survivors
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

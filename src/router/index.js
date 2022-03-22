import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Survivors from "../views/Survivors.vue";
import Killers from "../views/Killers.vue";
import Perks from "../views/Perks.vue";
import SurvivorPerks from "../views/dropdown/survivor-perks.vue";
import KillerPerks from "../views/dropdown/killer-perks.vue";
import Error404 from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/survivors",
    name: "Survivors",
    component: Survivors,
  },
  {
    path: "/killers",
    name: "Killers",
    component: Killers,
  },
  {
    path: "/perks",
    name: "Perks",
    component: Perks,
  },
  {
    path: "/perks/survivor-perks",
    name: "SurvivorPerks",
    component: SurvivorPerks,
  },
  {
    path: "/perks/killer-perks",
    name: "KillerPerks",
    component: KillerPerks,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error404",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

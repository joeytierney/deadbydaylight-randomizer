import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: { name: 'Home' }
  },
  {
    path: "/deadbydaylight-randomizer/",
    name: "Home",
    component: Home,
  },
  {
    path: "/deadbydaylight-randomizer/:queryParams(.*)",
    name: "Result",
    component: Result,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

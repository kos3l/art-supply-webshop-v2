import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Painting from "../views/Painting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/painting",
    name: "Painting",
    component: Painting,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

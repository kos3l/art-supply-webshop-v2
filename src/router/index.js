import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Painting from "../views/Painting.vue";
import Drawing from "../views/Drawing.vue";
import Bundles from "../views/Bundles.vue";
import Product from "../views/Product.vue";
import BasketPage from "../views/BasketPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/painting",
    name: "Painting",
    component: Painting,
    props: true,
  },
  {
    path: "/drawing",
    name: "Drawing",
    component: Drawing,
    props: true,
  },
  {
    path: "/bundles",
    name: "Bundles",
    component: Bundles,
    props: true,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    props: true,
  },
  {
    path: "/basketpage",
    name: "BasketPage",
    component: BasketPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

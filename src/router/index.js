import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Painting from "../views/Painting.vue";
import Drawing from "../views/Drawing.vue";
import Bundles from "../views/Bundles.vue";
import Product from "../views/ProductPages/Product.vue";
import ProductDrawing from "../views/ProductPages/ProductDrawing.vue";
import ProductBundles from "../views/ProductPages/ProductBundles.vue";
import BasketPage from "../views/BasketPage.vue";
import Paints from "../categories/Paints.vue";
import Pencils from "../categories/Pencils.vue";
import BundleCategory from "../categories/BundleCategory.vue";
import Admin from "../views/Admin.vue";
import AddNewItems from "../components/admin/AddNewItems.vue";
import Login from "../components/admin/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    props: true,
  },
  {
    path: "/addNew",
    name: "addNew",
    component: AddNewItems,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "*",
    redirect: "/",
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
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true,
  },
  {
    path: "/productDrawing/:id",
    name: "ProductDrawing",
    component: ProductDrawing,
    props: true,
  },
  {
    path: "/productBundles/:id",
    name: "ProductBundles",
    component: ProductBundles,
    props: true,
  },
  {
    path: "/basketpage",
    name: "BasketPage",
    component: BasketPage,
    props: true,
  },
  {
    path: "/paints/:ctgr",
    name: "Paints",
    component: Paints,
    props: true,
  },
  {
    path: "/pencils/:ctgr",
    name: "Pencils",
    component: Pencils,
    props: true,
  },
  {
    path: "/bundleCategory/:ctgr",
    name: "BundleCategory",
    component: BundleCategory,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

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
import Orders from "../views/Orders.vue";
import AddNewItems from "../components/admin/AddNewItems.vue";
import Login from "../components/admin/Login.vue";
import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    props: true,
    meta: {
      title: "Admin",
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    props: true,
    meta: {
      title: "Orders",
      requiresAuth: true,
    },
  },
  {
    path: "/addNew",
    name: "addNew",
    component: AddNewItems,
    props: true,
    meta: {
      title: "addNew",
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
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
    meta: {
      title: "Painting",
      requiresAuth: false,
    },
  },
  {
    path: "/drawing",
    name: "Drawing",
    component: Drawing,
    props: true,
    meta: {
      title: "Drawing",
      requiresAuth: false,
    },
  },
  {
    path: "/bundles",
    name: "Bundles",
    component: Bundles,
    props: true,
    meta: {
      title: "Bundles",
      requiresAuth: false,
    },
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true,
    meta: {
      title: "Product",
      requiresAuth: false,
    },
  },
  {
    path: "/productDrawing/:id",
    name: "ProductDrawing",
    component: ProductDrawing,
    props: true,

    meta: {
      title: "ProductDrawing",
      requiresAuth: false,
    },
  },
  {
    path: "/productBundles/:id",
    name: "ProductBundles",
    component: ProductBundles,
    props: true,
    meta: {
      title: "ProductBundles",
      requiresAuth: false,
    },
  },
  {
    path: "/basketpage",
    name: "BasketPage",
    component: BasketPage,
    props: true,
    meta: {
      title: "BasketPage",
      requiresAuth: false,
    },
  },
  {
    path: "/paints/:ctgr",
    name: "Paints",
    component: Paints,
    props: true,
    meta: {
      title: "Paints",
      requiresAuth: false,
    },
  },
  {
    path: "/pencils/:ctgr",
    name: "Pencils",
    component: Pencils,
    props: true,
    meta: {
      title: "Pencils",
      requiresAuth: false,
    },
  },
  {
    path: "/bundleCategory/:ctgr",
    name: "BundleCategory",
    component: BundleCategory,
    props: true,
    meta: {
      title: "BundlesCategory",
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next("login");
  } else {
    next();
  }
});
export default router;

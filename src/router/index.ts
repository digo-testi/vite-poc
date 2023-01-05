import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
//import Blanklayout from "../layouts/blank-layout/Blanklayout.vue";
import Layout from "../layouts/full-layout/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        componet: HomeView,
      },
      {
        path: "about",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: routes,
});

export default router;

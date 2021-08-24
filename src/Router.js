import Vue from "vue";
import Router from "vue-router";
import Home from "./Views/Home.vue";
import Register from "./Views/Register.vue";
import Logout from "./Views/Logout.vue";
import Job from "./Views/JobDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/logout",
      component: Logout,
    },
    {
      path: "/job",
      component: Job,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

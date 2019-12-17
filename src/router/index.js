import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/pages/Login.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

let isAuthenticated = () => {
  let user = firebase.auth().currentUser;
  // console.log(user.email);
  if (user == null) {
    return false;
  } else {
    return true;
  }
};

router.beforeEach(async (to, from, next) => {
  // console.log(isAuthenticated())
  const isAuth = await isAuthenticated();
  const isAuthReq = to.matched.some(record => record.meta.requiresAuth);

  if (!isAuth && isAuthReq) {
    next('/login')
  } else {
    next();
  }
});

export default router;

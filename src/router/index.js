import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About1 from "../components/About1.vue";
import About2 from "../components/About2.vue";
import Service1 from "../components/Service1.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import Portfilio1 from "../components/Portfilio1.vue";
import Blog from "../components/Blog.vue";
import Contact from "../components/Contact.vue";
import Map from "../components/Map.vue";
import Elements from "../components/Elements.vue";
import myCollection from "../components/myCollection.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coll",
    name: "myCollection",
    component: myCollection,
  },
  {
    path:"/about1",
    name:"About1",
    component:About1
  },
  {
    path:"/about2",
    name:"About2",
    component:About2
  },
  {
    path:"/service1",
    name:"service",
    component:Service1
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/portfilio1",
    name: "portfilio1",
    component: Portfilio1,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/map",
    name: "map",
    component: Map,
  },
  {
    path: "/elements",
    name: "elements",
    component: Elements,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

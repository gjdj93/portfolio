import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Resume from "@/views/Resume";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import NotFound from "@/views/NotFound";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

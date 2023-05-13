import { createRouter, createWebHistory } from "vue-router";
// import DefaultView from "@/layout/DefaultView.vue";
import ResumePage from "@/components/ResumePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import WorkPage from "@/components/WorkPage.vue";
import ContactPage from "@/components/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumePage,
  },
  {
    path: "/work",
    name: "work",
    component: WorkPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory("#"),
  mode: "history",
  routes,
});

export default router;

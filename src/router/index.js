import { createRouter, createWebHistory } from "vue-router";
import DefaultView from "@/layout/DefaultView.vue";
import ResumePage from "@/components/ResumePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DefaultView,
  },
  {
    path: "/resume",
    name: "resume",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ResumePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

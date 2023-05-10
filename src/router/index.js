import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import KituiView from "@/views/KituiView.vue";
import ConfigcolorView from "@/views/ConfigcolorView.vue";
import ConnexionView from "@/views/ConnexionView.vue";
import InscriptionView from "@/views/InscriptionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kitui",
      name: "kitui",
      component: KituiView,
    },
    {
      path: "/connexion",
      name: "login",
      component: ConnexionView,
    },
    {
      path: "/inscription",
      name: "register",
      component: InscriptionView,
    },
    {
      path: "/config-color",
      name: "configcolor",
      component: ConfigcolorView,
    },
  ],
});

export default router;

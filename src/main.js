import { createApp } from "vue";
//import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main.css";
import Layout from "@/components/Layout.vue";

const app = createApp(App);
app.use(router);
app.component("Layout", Layout);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/assets/css/global.css";

createApp(App).use(router).use(vuetify).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./plugins/globalComponent";
import store from "./store/index";

import "@/assets/css/global.css";

createApp(App).use(router).use(vuetify).use(store).mount("#app");

import { createApp } from "vue";

import VueBtn from "@/components/common/VueBtn.vue";
import App from "@/App.vue";

// Vue.Component("VueBtn", VueBtn);

const app = createApp(App);

app.component("my-component", VueBtn);

import { createApp } from "vue";

import VueBtn from "@/components/common/VueBtn.vue";
import App from "@/App.vue";
import FooterBelow from "@/components/common/FooterBelow.vue";

// Vue.Component("VueBtn", VueBtn);

const app = createApp(App);

app.component("VueBtn", VueBtn);
app.component("FooterBelow", FooterBelow);

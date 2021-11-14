import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";
import "@/assets/index.css";
import { FontAwesomeIcon } from "@/plugins/font-awesome";

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");

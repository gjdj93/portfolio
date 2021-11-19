import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";
import "@/assets/index.css";
import { FontAwesomeIcon } from "@/plugins/font-awesome";
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App).use(router).component("fa", FontAwesomeIcon).use(VueAxios, axios).mount("#app");

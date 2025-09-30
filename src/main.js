import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as lucide from "lucide-vue-next";
import "aos/dist/aos.css";
import AOS from "aos";

import { createHead } from "@vueuse/head";

const app = createApp(App);
const head = createHead(); // inisialisasi vueuse/head

// Daftarkan icon lucide secara global
Object.entries(lucide).forEach(([name, component]) => {
  app.component(name, component);
});

// Pakai head
app.use(head);

// Mount
app.mount("#app");

// Inisialisasi AOS
AOS.init({
  duration: 1000,
  once: true,
  startEvent: "DOMContentLoaded",
  offset: 50,
});

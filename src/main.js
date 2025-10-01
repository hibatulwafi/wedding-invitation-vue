import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as lucide from "lucide-vue-next";
import "aos/dist/aos.css";
import AOS from "aos";

// 🔹 Import router
import router from "./router";

const app = createApp(App);

// Daftarin semua icon lucide
Object.entries(lucide).forEach(([name, component]) => {
  app.component(name, component);
});

// 🔹 Gunakan router
app.use(router);

app.mount("#app");

// AOS animation
AOS.init({
  duration: 1000,
  once: true,
  startEvent: "DOMContentLoaded",
  offset: 50,
});

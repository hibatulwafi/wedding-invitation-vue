import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as lucide from "lucide-vue-next";
import "aos/dist/aos.css";
import AOS from "aos";

const app = createApp(App);

Object.entries(lucide).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount("#app");

AOS.init({
  duration: 1000,
  once: true,
  startEvent: "DOMContentLoaded",
  offset: 50,
});

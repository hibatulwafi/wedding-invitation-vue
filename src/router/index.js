import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Generate from "../page/generate.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: App, // ini halaman undangan utama
    },
    {
        path: "/generate",
        name: "generate",
        component: Generate, // ini halaman generator link
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

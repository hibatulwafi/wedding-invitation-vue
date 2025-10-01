import { createRouter, createWebHistory } from "vue-router";
import Index from "../page/index.vue";
import Generate from "../page/generate.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Index,
    },
    {
        path: "/generate",
        name: "generate",
        component: Generate,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("@/views/Products.vue"),
    },
    {
        path: "/login",
        component: () => import("@/views/LoginPage.vue"),
        props: true,
    },
    {
        name: "Dashboard",
        path: "/dashboard/:user_id",
        component: () => import("@/views/Dashboard.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

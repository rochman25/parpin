import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        //main layout
        {
            path: "",
            component: () =>
                import ("./layouts/main/Main.vue"),
            children: [

            ]
        }
    ]
});

export default router;
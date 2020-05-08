import Vue from "vue";
import Router from "vue-router";
import auth from './auth/authService';

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
                //main page
                {
                    path: '/',
                    redirect: '/dashboard'
                },
                {
                    path: '/dashboard',
                    name: 'parpin-dashboard',
                    component: () =>
                        import ('./views/Dashboard.vue'),
                    meta: {
                        authRequired: true
                    }
                }
            ]
        },
        {
            path: "",
            component: () =>
                import ('./layouts/full-page/FullPage.vue'),
            children: [
                //fullpages
                {
                    path: '/login',
                    name: 'parpin-login',
                    component: () =>
                        import ('./views/pages/login.vue')
                },
                {
                    path: '/not-found',
                    name: 'parpin-not-found',
                    component: () =>
                        import ('./views/pages/404.vue')
                },
                // {
                //     path: '/not-authorized',
                //     name: 'parpin-not-authorized',
                //     component: () =>
                //         import ('./views/pages/not-authorized.vue')
                // }
            ]
        },
        //redirect to 404
        {
            path: '*',
            redirect: '/not-found'
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.authRequired) {
        if (!(auth.isAuthenticated())) {
            router.push({
                path: '/login',
                query: { to: to.path }
            });
        }
    }
    return next();
})

export default router;
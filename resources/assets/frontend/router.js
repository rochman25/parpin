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
                        // breadcrumb: [
                        //     { title: 'Home', url: '/' },
                        //     { title: 'Dashboard', url: '/dashboard' },
                        //     { title: 'Home', active: true },
                        // ],
                        authRequired: true
                    }
                },
                {
                    path: '/alat',
                    name: 'parpin-alat',
                    component: () =>
                        import ('./views/pages/Alat/list_alat.vue'),
                    meta: {
                        // breadcrumb: [
                        //     { title: 'Home', url: '/' },
                        //     { title: 'Alat', url: '/alat' },
                        //     { title: 'List Alat', active: true },
                        // ],
                        authRequired: true
                    }
                },
                {
                    path: '/pengguna',
                    name: 'parpin-pengguna',
                    component: () =>
                        import ('./views/pages/Pengguna/list_pengguna.vue'),
                    meta: {
                        // breadcrumb: [
                        //     { title: 'Home', url: '/' },
                        //     { title: 'Pengguna', url: '/pengguna' },
                        //     { title: 'List Pengguna', active: true },
                        // ],
                        authRequired: true
                    }
                },
                {
                    path: '/sensor',
                    name: 'parpin-sensor',
                    component: () =>
                        import ('./views/pages/Sensor/list_sensor.vue'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: '/microcontroller',
                    name: 'parpin-microcontroller',
                    component: () =>
                        import ('./views/pages/Microcontroller/list_microcontroller.vue'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: '/notifikasi',
                    name: 'parpin-notifikasi',
                    component: () =>
                        import ('./views/pages/Notifikasi/view_notifikasi.vue'),
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
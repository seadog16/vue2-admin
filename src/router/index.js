import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        component: () => import("@/views/Login")
    }
];

const router = new VueRouter({
    routes
});

let isRoute = false;
router.beforeEach((to, from, next) => {
    const { $store } = router.app;
    NProgress.start();
    const whiteList = [/^\/login/];
    const isWhite = whiteList.some(v => v.test(to.fullPath));
    if (isWhite) {
        if (/^\/login/.test(to.fullPath)) isRoute = false;
        next();
    } else {
        const token = window.sessionStorage.getItem("token");
        if (token) {
            if (!isRoute) {
                Promise.all([$store.sys.queryMenus()])
                    .then(() => {
                        // const [r]: any[] = storeSys.menus.filter((v: any) => Boolean(v.component));
                        const layout = {
                            path: "/",
                            name: "Layout",
                            // redirect: r?.uri,
                            component: () => import("@/views/Layout/index.vue"),
                            children: []
                        };
                        layout.children.push(
                            ...$store.state.sys.menus
                                .filter(v => Boolean(v.component))
                                .map(v => {
                                    return {
                                        path: v.uri,
                                        name: v.code,
                                        meta: {
                                            name: v.menu,
                                            component: v.component
                                        },
                                        component: () => import(`@/views/${v.component}.vue`)
                                    };
                                })
                        );
                        router.addRoutes([layout]);
                        isRoute = true;
                        next({ ...to, replace: true });
                    })
                    .catch(() => {
                        isRoute = false;
                        next();
                    });
            } else {
                next();
            }
        } else {
            isRoute = false;
            next("/login");
        }
    }
});
router.afterEach(() => {
    NProgress.done();
});
export default router;

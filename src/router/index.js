import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import $store from "@/store";
import { logout } from "@/utils";

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
    NProgress.start();
    const whiteList = [/^\/login/];
    const isWhite = whiteList.some(v => v.test(to.fullPath));
    if (isWhite) {
        isRoute = false;
        next();
    } else {
        const token = window.sessionStorage.getItem("token");
        if (token) {
            if (!isRoute) {
                Promise.all([$store.dispatch("sys/queryMenu")])
                    .then(() => {
                        const [r] = $store.state.sys.menus.filter(v => Boolean(v.component));
                        const layout = {
                            path: "/",
                            name: "Layout",
                            redirect: r?.uri,
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
                                        component: () => import(`@/pages/${v.component}`)
                                    };
                                })
                        );
                        router.addRoutes([layout]);
                        isRoute = true;
                        next({ ...to, replace: true });
                    })
                    .catch(() => {
                        isRoute = false;
                        if (from.fullPath.match(/^\/login/)) next(new Error("菜单加载失败"));
                        else logout(next);
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

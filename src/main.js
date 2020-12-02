import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ContentMenu from "v-contextmenu";
import "v-contextmenu/dist/index.css";
import ElementUI from "element-ui";
import "@/style/init.styl";
import "@/mock";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "small" });
Vue.use(ContentMenu);

export default new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

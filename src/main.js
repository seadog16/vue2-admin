import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ContentMenu from "v-contextmenu";
import "v-contextmenu/dist/index.css";
import ElementUI from "element-ui";
import "@/style/init.styl";
import "@/mock";
import ByPage from "@/components/ByPage";
import ByTable from "@/components/ByTable";
import ByView from "@/components/ByView";
import ByDialog from "@/components/ByDialog";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "small" });
Vue.use(ContentMenu);

// 自定义组件
Vue.component("ByPage", ByPage);
Vue.component("ByTable", ByTable);
Vue.component("ByView", ByView);
Vue.component("ByDialog", ByDialog);

export default new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

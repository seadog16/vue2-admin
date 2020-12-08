<template lang="pug">
    el-container.container
        el-header.container-head header
        el-container
            el-aside.container-side
                el-scrollbar.container-side-scroll
                    menus
            el-container
                el-main main
                el-footer footer
    //el-container.container
        el-header.container-head
            .container-head-brand.alignMiddle
                img.logo
                h1.name 政务服务一体机
            .container-head-widget
                .left
                .right
                    el-dropdown.dropdown
                        label
                            i.el-icon-user.el-icon--left
                            span
                            i.el-icon-arrow-down.el-icon--right
                        el-dropdown-menu.dropdown-menu(slot="dropdown")
                            .dropdown-table
                                table
                                    tr
                                        th 账号名
                                        td
                                    tr
                                        th 账号ID
                                        td
                                    tr
                                        th 手机号
                                        td
                            el-button-group.dropdown-btns
                                el-button.info(
                                    type="info"
                                    plain
                                    @click="$router.push('/user/account')") 账户信息
                                el-button.exit(
                                    @click="logout"
                                    type="info"
                                    plain) 退出
        el-container.container-main
            el-aside.side
                el-scrollbar.scroll
                    menus.menu
            el-main.main
                layout-tabs
                keep-alive(:include="tabsInclude" :max="20")
                    router-view.view
                layout-version
</template>

<script>
import { mapState } from "vuex";
import Menus from "./Menu.vue";
import LayoutTabs from "./LayoutTabs.vue";
import LayoutVersion from "./LayoutVersion.vue";
import { logout } from "@/utils";

export default {
    name: "Layout",
    components: { Menus, LayoutTabs, LayoutVersion },
    data() {
        return {
            logout
        };
    },
    computed: {
        ...mapState("sys", ["tabs"]),
        tabsInclude() {
            return this.tabs.map(v => v.code);
        }
    }
};
</script>
<style lang="stylus">
body, html
    height 100%
</style>
<style scoped lang="stylus">
$header-height = 60px!important
$side-width = 240px!important

.container
    min-width 1200px
    height 100%

    &-head
        height $header-height

    &-side
        width $side-width

        &-scroll
            height 100%
</style>

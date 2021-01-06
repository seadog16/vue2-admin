<template lang="pug">
    el-container.container
        el-header.container-head header
        el-container
            el-aside.container-side
                el-scrollbar.container-side-scroll
                    layout-menu
            el-container
                el-main.container-main main
                el-footer
                    layout-footer
</template>

<script>
import { mapState } from "vuex";
import LayoutMenu from "./LayoutMenu.vue";
import LayoutTabs from "./LayoutTabs.vue";
import LayoutVersion from "./LayoutVersion.vue";
import LayoutFooter from "./LayoutFooter.vue";
import { logout } from "@/utils";

export default {
    name: "Layout",
    components: { LayoutMenu, LayoutTabs, LayoutVersion, LayoutFooter },
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
        border-right 1px solid $--border-color-lighter
        border-top 1px solid $--border-color-lighter

        &-scroll
            height 100%

            & >>> .el-scrollbar__wrap
                height calc(100% + 15px)

    &-main
        background $--background-color-base
</style>

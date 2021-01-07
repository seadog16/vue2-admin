<template lang="pug">
    el-container.container
        el-aside.container-side(:width="menuCollapse?'64px':'240px'")
            el-header.container-brand
                layout-brand
                a.container-collapse.alignMiddle.alignCenter(@click="SET_STATE({menuCollapse:!menuCollapse})")
                    .iconCollapse
                        span
                        span
                        span
            .container-block
            el-scrollbar.container-side-scroll
                layout-menu
        el-container
            el-header
                layout-header
            el-main.container-main
                router-view
            el-footer(height="40px")
                layout-footer
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LayoutMenu from "./LayoutMenu.vue";
import LayoutTabs from "./LayoutTabs.vue";
import LayoutVersion from "./LayoutVersion.vue";
import LayoutBrand from "./LayoutBrand.vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutFooter from "./LayoutFooter.vue";
import { logout } from "@/utils";

export default {
    name: "Layout",
    components: {
        LayoutMenu,
        LayoutTabs,
        LayoutVersion,
        LayoutFooter,
        LayoutBrand,
        LayoutHeader
    },
    data() {
        return {
            logout
        };
    },
    computed: {
        ...mapState("sys", ["tabs", "menuCollapse"]),
        tabsInclude() {
            return this.tabs.map(v => v.code);
        }
    },
    methods: {
        ...mapMutations("sys", ["SET_STATE"])
    }
};
</script>
<style lang="stylus">
body, html
    height 100%
</style>
<style scoped lang="stylus">
.container
    min-width 1200px
    height 100%

    &-block
        position absolute
        z-index 1
        height 15px
        width 100%
        background linear-gradient(hsla(0, 0, 100, 1), hsla(0, 0, 100, 0))

    &-brand
        position relative

    &-collapse
        position absolute
        right 5px
        top 10px
        width 40px
        height 40px
        background alpha($--background-color-base, 0)

        &:hover
            background alpha($--background-color-base, 1)

        .iconCollapse
            width 3px
            margin-top -4px
            display inline-block

            span
                background-color $--color-text-secondary
                display block
                height 3px
                width 100%
                margin-top 4px

    &-side
        width $side-width
        border-right 1px solid $--border-color-lighter
        position relative
        background white
        transition $--all-transition

        &-scroll
            height "calc(100% - %s)" % $header-height

            & >>> .el-scrollbar__wrap
                height calc(100% + 15px)

    &-main
        background $--background-color-base
</style>

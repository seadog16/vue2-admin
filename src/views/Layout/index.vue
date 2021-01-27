<template lang="pug">
    .container.clearfix(:class="{menuCollapse}")
        .container-side
            .container-brand
                layout-brand.brand
                a.container-collapse.alignMiddle.alignCenter(@click="SET_STATE({menuCollapse:!menuCollapse})")
                    .iconCollapse
                        span
                        span
                        span
            el-aside.container-side-menu(:width="menuCollapse?'64px':'240px'")
                el-scrollbar
                    layout-menu
        el-header.container-header(height="50px")
            layout-header
        el-main.container-main
            el-scrollbar
                router-view.container-main-view
        el-footer.container-footer(height="40px")
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
    mounted() {
        this.fixedScreen();
    },
    methods: {
        ...mapMutations("sys", ["SET_STATE"]),
        fixedScreen() {
            document.body.classList.add("fixed-screen");
            document.documentElement.classList.add("fixed-screen");
        }
    }
};
</script>

<style scoped lang="stylus">
$side-width = 240px
$side-collapse-width = 64px
$header-height = 50px
$footer-height = 40px

.container
    height 100%

    &-side
        position fixed
        left 0
        top 0
        bottom 0
        display flex
        flex-direction column
        background-color white

        &-menu
            flex auto
            border-right 1px solid #f2f4f9
            box-shadow 0 8px 10px 0 rgba(183 192 206, .2)
            transition $--all-transition

            & >>> .el-scrollbar
                height 100%

                .el-scrollbar__wrap
                    height calc(100% + 15px)

    &-brand
        height 50px
        flex none
        border-bottom 1px solid #f2f4f9
        border-right 1px solid #f2f4f9
        position relative

        .brand
            opacity 1
            transition $--fade-transition
            position static
            padding 0 20px

            ^[-2].menuCollapse &
                opacity 0
                position absolute

    &-collapse
        position absolute
        right 12px
        top 5px
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

    &-header
        position fixed
        top 0
        left $side-width
        right 0
        background-color white
        border-bottom 1px solid #f2f4f9
        box-shadow 3px 0 10px 0 rgba(183 192 206, .2)
        transition $--all-transition

        ^[-1].menuCollapse &
            left $side-collapse-width

    &-footer
        position fixed
        bottom 0
        left $side-width
        right 0
        background-color white
        border-top 1px solid #f2f4f9
        box-shadow 3px 0 10px 0 rgba(183 192 206, .2)
        transition $--all-transition

        ^[-1].menuCollapse &
            left $side-collapse-width

    &-main
        height 100%
        padding $header-height 0 $footer-height $side-width
        transition $--all-transition

        &-view
            padding 20px

        & >>> .el-scrollbar
            height 100%

            .el-scrollbar__wrap
                height calc(100% + 15px)

        ^[-1].menuCollapse &
            padding-left $side-collapse-width
</style>

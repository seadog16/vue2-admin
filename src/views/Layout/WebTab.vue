<template lang="pug">
    .webTab
        .scrollLeft(
            v-if="scrollBtn"
            @click="watchRoute(-200)")
            i.el-icon-arrow-left
        .scrollRight(
            v-if="scrollBtn"
            @click="watchRoute(200)")
            i.el-icon-arrow-right
        .webTabWrap(ref="webTab")
            template(v-for="(item, index) in tabs")
                span.itemSplit(v-if="index!==0") /
                a.item(
                    :class="{active:item.path === $route.fullPath}"
                    :key="index"
                    @click="jumpTab(item)"
                    v-contextmenu:contextmenu
                    @contextmenu="contextValue=item")
                    |{{ item.name }}
                    i.el-icon-close(
                        v-if="tabs.length > 1"
                        @click.stop="removeTab(item)")
        v-contextmenu(ref="contextmenu")
            v-contextmenu-item(@click="contextClick('close')") 关闭
            v-contextmenu-item(@click="contextClick('other')") 关闭其他
            v-contextmenu-item(@click="contextClick('left')") 关闭左侧
            v-contextmenu-item(@click="contextClick('right')") 关闭右侧
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "WebTab",
    data() {
        return {
            scrollBtn: false,
            contextValue: {}
        }
    },
    computed: {
        ...mapState("sys", ["tabs"])
    },
}
</script>

<style scoped lang="stylus">
.webTab
    height 46px
    line-height 46px
    padding 0 20px
    white-space nowrap
    position relative
    box-sizing border-box

    .webTabWrap
        position relative
        overflow hidden

    .scrollLeft
    .scrollRight
        position absolute
        z-index 1
        top 0
        width 30px
        height 100%
        text-align center
        cursor pointer

        &:hover
            color $color-primary

    .scrollLeft
        left 0
        background linear-gradient(to right, #f9fafb 40%, rgba(249, 250, 251, 0) 100%)

    .scrollRight
        right 0
        background linear-gradient(to left, #f9fafb 40%, rgba(249, 250, 251, 0) 100%)

    .itemSplit
        display inline-block
        color $color-box-dashed
        user-select none

    .item
        padding-left 20px
        padding-right 20px
        display inline-block
        font-size 14px
        position relative
        line-height 1.5
        user-select none
        color $color-font-secondary

        .el-icon-close
            display none
            position absolute
            right 0
            top 1px
            width 18px
            height 18px
            text-align center
            line-height 18px
            vertical-align middle
            border-radius 50%
            color $color-font-secondary

            &:hover
                background $color-box-background

        &:hover .el-icon-close
            display block

        &.active
            color $color-primary
            font-weight 500
</style>

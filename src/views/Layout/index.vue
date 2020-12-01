<template lang="pug">
    el-container.container
        el-header.head
            button.head-btn(
                v-if="isManager"
                type="button"
                @click="$router.push('/center')")
                i.el-icon-menu
            .brand.alignMiddle
                img.brand-logo
                h1.brand-name 政务服务一体机
            .head-contain
                .head-left
                .head-right
                    //el-button(@click="logout") 退出
                    el-dropdown.dropdown
                        label
                            i.el-icon-user.el-icon--left
                            span {{userInfo.name}}
                            i.el-icon-arrow-down.el-icon--right
                        el-dropdown-menu.dropdown-menu(slot="dropdown")
                            .dropdown-table
                                table
                                    tr
                                        th 账号名
                                        td {{userInfo.userName}}
                                    tr
                                        th 账号ID
                                        td {{userInfo.userId}}
                                    tr
                                        th 手机号
                                        td {{userInfo.mobilePhone}}
                            el-button-group.dropdown-btns
                                el-button.info(
                                    v-if="store.role==='developer'"
                                    type="info"
                                    plain
                                    @click="$router.push('/user/account')") 账户信息
                                el-button.exit(
                                    @click="logout"
                                    type="info"
                                    plain) 退出
        el-container.mainContain
            el-aside.side
                el-scrollbar.scroll
                    menus.menu(:menu="tree")
            el-main.main
                web-tab
                keep-alive(:include="tabsInclude" :max="20")
                    router-view.view
                web-info
</template>

<script>
import { mapState } from "vuex";
import Menus from "./Menu.vue";
import WebTab from "./WebTab.vue";
import WebInfo from "./WebInfo.vue";

export default {
    name: "Layout",
    components: { Menus, WebTab, WebInfo },
    computed: {
        ...mapState("sys", {
            storeTabs: state => state.tabs,
            storeRole: state => state.role,
            storeTree: state => state.tree,
            storeModuleCode: state => state.moduleCode,
            storeUserName: state => state.userName,
            storeUserId: state => state.userId,
            storeName: state => state.name,
            storeMobilePhone: state => state.mobilePhone
        }),
        tabsInclude() {
            return this.storeTabs.map(v => v.code);
        },
        tree() {
            const code = this.storeRole === "system" ? this.storeModuleCode : "DevelopCenter";
            const item = this.storeTree.find(v => v.code === code);
            return item?.children;
        },
        userInfo() {
            return {
                userName: this.storeUserName,
                userId: this.storeUserId,
                name: this.storeName,
                mobilePhone: this.storeMobilePhone
            };
        },
        isManager() {
            return this.storeRole === "system";
        }
    }
}
</script>

<style scoped lang="stylus">
$header-height = 60px

.container
    min-width 1200px

    .side
        width 240px!important

.container
.side
    height 100%

.head
    height $header-height!important

.brand
    line-height 1
    user-select none
    margin-left 10px

    &-logo
        max-height $header-height - 26px
        max-width 100px
        vertical-align middle

    &-name
        font-size 18px
        vertical-align middle
        display inline-block
        color $color-primary
        margin-left 5px

.side
    display flex
    flex-flow column nowrap
    overflow visible
    box-shadow 0 8px 10px rgba(183, 192, 206, 0.2)
    border-right 1px solid #f2f4f9

.scroll
    flex auto

    & >>> .el-scrollbar__wrap
        overflow-x hidden

.menu
    border none

.head
    border-bottom 1px solid #f2f4f9
    box-shadow 3px 0 10px rgba(183, 192, 206, 0.2)
    position relative
    line-height 60px
    display flex
    padding 0

    &-btn
        width 60px
        font-size 20px
        background #fff
        color $color-primary
        border none
        cursor pointer
        outline none

        &:hover
            background $color-primary
            color #fff

    &-left
        text-align left

        & > *
            margin-right 20px
    &-right
        text-align right

        & > *
            margin-left 20px

    &-contain
        flex auto
        padding 0 20px
        display flex
        justify-content space-between

.main
    background #f9fafb
    padding 0
    display flex
    flex-flow column nowrap
    overflow hidden

    .view
        flex auto
        overflow hidden

.more
    padding 9px

.mainContain
    height 'calc(100% - %s)' % $header-height

.dropdown
    line-height 32px
    height 32px

    &-table
        border-collapse collapse
        padding 10px 0
        width 200px

        table
            width 100%

        th
            font-weight normal
            text-align right
            color $color-font-secondary
            width 80px

        th, td
            padding 5px

    &-btns
        margin-bottom -6px
        width 100%

        .exit
            border none
            width 100%

        .info
        .info + .exit
            border none
            width 50%

        .exit:hover
            background #F56C6C

        .info:hover
            background #409EFF
</style>

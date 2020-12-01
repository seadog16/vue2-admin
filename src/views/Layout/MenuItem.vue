<template lang="pug">
    el-submenu(
        v-if="menu.children && menu.children.length"
        :index="menu.href")
        template(#title)
            i.el-icon-(:class="menu.icon")
            span {{ menu.title }}
        menu-item(
            v-for="(item, index) in menu.children"
            :key="index"
            :menu="item")
    el-menu-item(
        v-else
        :index="menu.href"
        :route="menu")
        i(:class="menu.icon")
        span {{ menu.title }}
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        menu: {
            type: Object,
            default: () => ({})
        },
        path: String
    }
}
</script>

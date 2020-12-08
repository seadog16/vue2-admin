<template lang="pug">
    el-submenu(
        v-if="menu.children && menu.children.length"
        :index="menu.uri")
        template(#title)
            i.el-icon-(:class="menu.icon")
            span {{ menu.name }}
        menu-item(
            v-for="(item, index) in menu.children"
            :key="index"
            :menu="item")
    el-menu-item(
        v-else
        :index="menu.uri"
        :route="menu")
        i(:class="menu.icon")
        span {{ menu.name }}
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

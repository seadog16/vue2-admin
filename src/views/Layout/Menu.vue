<template lang="pug">
    el-menu(
        @select="changeRoute"
        :default-active="$route.fullPath"
        :collapse-transition="false")
        menu-item(
            v-for="(item, index) in menu"
            :key="index"
            :menu="item")
</template>

<script>
import { mapMutations } from "vuex";
import MenuItem from "./MenuItem.vue";

export default {
    name: "Menu",
    components: {
        MenuItem
    },
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        ...mapMutations("sys", ["pushTabs"]),
        changeRoute(index, indexPath, comp) {
            const { route } = comp;
            if (this.$route.fullPath !== index) {
                this.pushTabs({
                    name: route.title,
                    code: route.code,
                    path: route.href
                });
                this.$router.push(index);
            }
        }
    }
}
</script>

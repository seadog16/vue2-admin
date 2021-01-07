<template lang="pug">
    el-menu.menu(
        @select="changeRoute"
        :default-active="$route.fullPath"
        :collapse="menuCollapse")
        menu-item(
            v-for="(item, index) in menuTree"
            :key="index"
            :menu="item")
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import MenuItem from "./MenuItem.vue";

export default {
    name: "LayoutMenu",
    components: {
        MenuItem
    },
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        ...mapState("sys", ["menuCollapse"]),
        ...mapGetters("sys", ["menuTree"])
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
};
</script>
<style lang="stylus" scoped>
.menu
    border-right none
</style>

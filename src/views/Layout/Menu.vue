<template lang="pug">
    el-menu(
        @select="changeRoute"
        :default-active="$route.fullPath")
        menu-item(
            v-for="(item, index) in menuTree"
            :key="index"
            :menu="item")
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
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
    computed: {
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

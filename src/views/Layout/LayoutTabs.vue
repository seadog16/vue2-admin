<template lang="pug">
    .layout-tabs
        el-tabs(:value="tabActive")
            el-tab-pane(
                v-for="(tab, index) in tabs"
                :key="index"
                :label="tab.name"
                :name="tab.code")
        v-contextmenu(ref="contextmenu")
            v-contextmenu-item(@click="") 关闭
            v-contextmenu-item(@click="") 关闭其他
            v-contextmenu-item(@click="") 关闭左侧
            v-contextmenu-item(@click="") 关闭右侧
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "LayoutTabs",
    data() {
        return {
            tabActive: "",
            contextValue: {}
        };
    },
    computed: {
        ...mapState("sys", ["tabs"])
    }
};
</script>

<style scoped lang="stylus">

</style>

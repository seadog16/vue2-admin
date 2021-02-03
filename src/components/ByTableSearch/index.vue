<template lang="pug">
    el-form(inline)
        el-form-item
            el-select(
                v-model="label"
                filterable
                default-first-option
                @change="changeHandler")
                el-option(
                    v-for="opt in column"
                    :key="opt.prop"
                    :value="opt.prop"
                    :label="opt.label")
        by-form-item(
            :item="item"
            v-model="value")
</template>

<script>
import ByFormItem from "../ByFormItem";

export default {
    name: "ByTableSearch",
    components: { ByFormItem },
    props: {
        column: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            label: null,
            value: null
        };
    },
    computed: {
        item() {
            return this.column.find(v => v.prop === this.label) || {};
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.label = this.column?.[0]?.prop;
        },
        changeHandler() {
            this.value = null;
        }
    }
};
</script>

<style scoped lang="stylus">

</style>

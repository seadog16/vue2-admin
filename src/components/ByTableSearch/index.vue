<template lang="pug">
    el-form(inline @submit.native.prevent="submitHandler")
        el-form-item
            el-select(
                v-model="label"
                filterable
                default-first-option
                @change="value=null")
                el-option(
                    v-for="opt in column"
                    :key="opt.prop"
                    :value="opt.prop"
                    :label="opt.label")
        by-form-item(
            :item="{...item,label:''}"
            v-model="value"
            @change="pushSearch")
        input(type="submit" style="display:none")
        el-form-item
            el-button(
                circle
                type="primary"
                icon="el-icon-search"
                @click="submitHandler")
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
        pushSearch() {
            this.$emit("set", this.item.prop, this.value);
        },
        submitHandler() {
            this.$emit("search");
        },
        clear() {
            this.value = null;
            this.pushSearch();
        }
    }
};
</script>

<style scoped lang="stylus">

</style>

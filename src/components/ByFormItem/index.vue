<template lang="pug">
    el-form-item.form-item(
        :label="item.label"
        :prop="item.prop")
        component(
            :is="itemComp"
            v-bind="itemProp"
            v-model.trim="v"
            clearable
            :placeholder="item.placeholder"
            v-on="$listeners")
            template(v-if="item.options")
                el-option(
                    v-for="opt in item.options"
                    :key="opt.value"
                    :label="opt.label"
                    :value="opt.value")
</template>

<script>
export default {
    name: "ByFormItem",
    props: {
        item: Object,
        value: [String, Number, Array, Object]
    },
    model: {
        prop: "value",
        event: "update"
    },
    data() {
        return {
            itemComp: "",
            itemProp: {}
        };
    },
    computed: {
        v: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit("update", val);
            }
        }
    },
    watch: {
        item: {
            handler: "changeComp",
            immediate: true
        }
    },
    methods: {
        changeComp() {
            const { component, options } = this.item;
            switch (component) {
                case "dateRange":
                    this.itemComp = "elDatePicker";
                    this.itemProp = {
                        type: "daterange",
                        valueFormat: "yyyy-MM-dd"
                    };
                    break;
                case "dateTimeRange":
                    this.itemComp = "elDatePicker";
                    this.itemProp = {
                        type: "datetimerange",
                        valueFormat: "yyyy-MM-dd HH:mm:ss"
                    };
                    break;
                case "textArea":
                    this.itemComp = "elInput";
                    this.itemProp = {
                        type: "textarea",
                        rows: 4
                    };
                    break;
                case "switch":
                    this.itemComp = "elSwitch";
                    this.itemProp = {
                        activeValue: "1",
                        inactiveValue: "0",
                        activeText: "是",
                        inactiveText: "否"
                    };
                    break;
                default:
                    if (component) {
                        this.itemComp = component;
                    } else if (options) {
                        this.itemComp = "elSelect";
                        this.itemProp = {
                            filterable: true,
                            defaultFirstOption: true
                        };
                    } else {
                        this.itemComp = "elInput";
                    }
            }
        }
    }
};
</script>
<style scoped lang="stylus">
</style>

<template lang="pug">
    el-form-item.form-item(
        :label="item.label"
        :prop="item.prop"
        :rules="rules")
        span(v-if="property && property.readonly") {{v}}
        component(
            v-else
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
        value: [String, Number, Array, Object],
        property: Object,
        rules: Array
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
                    if (this.property) this.itemProp = { ...this.itemProp, ...this.property };
                    break;
                case "dateTimeRange":
                    this.itemComp = "elDatePicker";
                    this.itemProp = {
                        type: "datetimerange",
                        valueFormat: "yyyy-MM-dd HH:mm:ss"
                    };
                    if (this.property) this.itemProp = { ...this.itemProp, ...this.property };
                    break;
                case "textArea":
                    this.itemComp = "elInput";
                    this.itemProp = {
                        type: "textarea",
                        rows: 4
                    };
                    if (this.property) this.itemProp = { ...this.itemProp, ...this.property };
                    break;
                case "switch":
                    this.itemComp = "elSwitch";
                    this.itemProp = {
                        activeValue: "1",
                        inactiveValue: "0",
                        activeText: "是",
                        inactiveText: "否"
                    };
                    if (this.property) this.itemProp = { ...this.itemProp, ...this.property };
                    break;
                default:
                    if (component) {
                        this.itemComp = component;
                    } else {
                        this.itemComp = "elInput";
                    }
                    if (options) {
                        this.itemComp = "elSelect";
                        this.itemProp = {
                            filterable: true,
                            defaultFirstOption: true
                        };
                    }
                    if (this.property) this.itemProp = { ...this.itemProp, ...this.property };
            }
        }
    }
};
</script>

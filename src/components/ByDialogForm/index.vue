<template lang="pug">
    by-dialog(
        :visible.sync="visible"
        :title="title"
        v-on="ownListener")
        slot(name="tip" :model="model")
        el-form(
            ref="form"
            :label-width="labelWidth"
            :model="model"
            @submit.native.prevent="submitHandler")
            el-row
                el-col(
                    v-for="item in column"
                    :span="item.wide?24:12"
                    v-if="!(item.properties && item.properties.dialog && item.properties.dialog.visible===false)"
                    :key="item.prop")
                    slot(
                        v-if="item.slot && item.slot.dialog"
                        :name="item.slot && item.slot.dialog"
                        :row="model")
                    by-form-item(
                        v-else
                        :item="item"
                        v-model="model[item.prop]"
                        :property="item.properties && item.properties.dialog"
                        :rules="item.properties && item.properties.dialog && item.properties.dialog.rules")
        template(#footer)
            el-button(@click="visible=false") 取消
            el-button(
                type="primary"
                :loading="loading"
                @click="submitHandler") 提交
</template>

<script>
import ByFormItem from "@/components/ByFormItem";
export default {
    name: "ByDialogForm",
    components: { ByFormItem },
    props: {
        column: {
            type: Array,
            default: () => []
        },
        labelWidth: {
            type: String,
            default: "120px"
        }
    },
    data() {
        return {
            model: {},
            visible: false,
            title: "",
            loading: false
        };
    },
    computed: {
        ownListener() {
            return {
                ...this.$listeners,
                closed: () => {
                    this.$set(this, "model", {});
                    this.$refs.form.resetFields();
                    this.loading = false;
                    this.$emit("closed");
                }
            };
        }
    },
    methods: {
        open(data, title) {
            this.visible = true;
            this.title = title;
            this.column.forEach(v => {
                if (v.default) {
                    const isFunction = v.default instanceof Function;
                    this.$set(this.model, v.prop, isFunction ? v.default() : v.default);
                }
            });
            if (data && typeof data === "object") {
                for (const i in data) {
                    if (Object.prototype.hasOwnProperty.call(data, i)) {
                        this.$set(this.model, i, data[i]);
                    }
                }
            }
        },
        submitHandler() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$emit("submit", this.model, this.finish);
                }
            });
        },
        finish(error = true) {
            this.loading = false;
            if (error) this.visible = false;
        }
    }
};
</script>

<style scoped lang="stylus">
.component
    width 100%
</style>

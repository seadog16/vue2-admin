<template lang="pug">
    el-dialog.dialog(
        v-if="life"
        :visible.sync="v"
        v-bind="$attrs"
        append-to-body
        :close-on-click-modal="false"
        :fullscreen="fullscreen"
        v-on="$listeners")
        slot(name="footer" slot="footer")
        slot
        .tableInside(v-if="$slots.table")
            slot(name="table")
        template(#title)
            span.el-dialog__title {{$attrs.title}}
            button.el-dialog__headerbtn.fullscreen(@click="fullscreen=!fullscreen")
                i.iconfont(:class="fullscreen?'el-icon-copy-document':'el-icon-full-screen'")
</template>

<script>
export default {
    name: "ByDialog",
    inheritAttrs: false,
    props: {
        visible: Boolean
    },
    data() {
        return {
            fullscreen: false,
            life: false
        };
    },
    computed: {
        v: {
            get() {
                return this.visible;
            },
            set(val) {
                this.$emit("update:visible", val);
            }
        }
    },
    watch: {
        v(val) {
            if (val) {
                this.life = true;
            } else {
                setTimeout(() => {
                    this.life = false;
                }, 350);
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.fullscreen
    color #909399
    right 45px

    &:focus
    &:hover
        color #409EFF

.tableInside
    height 55vh
    & >>> .page
        box-shadow none
        border-radius none
        padding 0
</style>

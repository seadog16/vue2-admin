<template lang="pug">
    .uploadImage
        .uploadImage-layer(v-loading="loading")
            img(
                v-if="url"
                :src="url")
            a.uploadImage-layer-noImage.alignMiddle.alignCenter(
                v-else
                @click="$refs.imgUpload.click()")
                i.el-icon-plus
            .uploadImage-layer-tools.alignCenter(
                v-if="url && !loading")
                el-button(
                    type="text"
                    icon="el-icon-zoom-in"
                    @click="dialogVisible=true")
                el-button(
                    type="text"
                    icon="el-icon-upload2"
                    @click="$refs.imgUpload.click()")
                el-button(
                    type="text"
                    icon="el-icon-delete"
                    @click="removeHandler")
            input(
                type="file"
                style="display:none"
                accept="image/*"
                ref="imgUpload"
                @change="uploadHandler")
        by-dialog.dialog(
            :visible.sync="dialogVisible"
            :width="dialogWidth")
            .alignCenter
                img(:src="url")
</template>

<script>
export default {
    name: "ByUploadImage",
    props: {
        src: String
    },
    model: {
        event: "update",
        prop: "src"
    },
    data() {
        return {
            url: "",
            loading: false,
            dialogVisible: false,
            dialogWidth: "650px"
        };
    },
    watch: {
        src: {
            immediate: true,
            handler(val) {
                if (val) {
                    let img = new Image();
                    this.loading = true;
                    img.onload = () => {
                        this.url = val;
                        this.dialogWidth = img.width + 40 + "px";
                        img = null;
                        this.loading = false;
                    };
                    img.onerror = () => {
                        this.url = "";
                        img = null;
                        this.loading = false;
                    };
                    img.src = val;
                } else {
                    this.url = "";
                }
            }
        }
    },
    methods: {
        removeHandler() {
            this.$emit("update", "");
        },
        uploadHandler(e) {
            const { target } = e;
            if (target.value) {
                console.log("upload file");
                // 成功后要清空target.value
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.uploadImage
    display inline

    &-layer
        width 100px
        height @width
        position relative
        overflow hidden

        img
            width 100%
            height @width
            object-fit cover

        &-noImage
            width 100%
            height @width
            display block
            background-color $--background-color-base
            border 1px dashed $--border-color-base
            box-sizing border-box

            &:hover
                border-color $--border-color-hover

                [class^=el-icon]
                    color $--border-color-hover

            [class^=el-icon]
                color $--border-color-base
                font-size 20px

        &-tools
            width 100%
            height 30%
            background-image linear-gradient(transparent 0, rgba(0, 0, 0, .35) 50%, rgba(0, 0, 0, .75) 85%)
            position absolute
            left 0
            bottom 0
            transition opacity 300ms
            display flex
            justify-content space-evenly
            opacity 0

            ^[-1]:hover &
                opacity 1

            & >>> .el-button--text
                color $--color-white
                margin 0

.dialog
    & >>> .el-dialog
        max-width 90%

        &.is-fullscreen
            max-width initial

        img
            width 100%
</style>

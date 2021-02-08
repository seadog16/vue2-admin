<script lang="jsx">
export default {
    name: "ColumnImage",
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
        row: Object
    },
    render() {
        const src = this.row[this.item.prop];
        return (
            <el-image
                class="image"
                src={src}
                fit="cover">
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
        )
    }
};
</script>

<style scoped lang="stylus">
.image
    display inline

    & >>> .el-image__inner
    & >>> &-slot
        width 100px
        height @width
</style>

<script lang="jsx">
export default {
    name: "ColumnLink",
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
        row: Object
    },
    data() {
        return {
            tooltip: false
        }
    },
    render() {
        const properties = {
            props: {
                type: "primary"
            },
            on: {}
        }
        if (this.item.properties) {
            properties.attrs = this.item.properties.link;
        }
        if (typeof this.item.link === "string") {
            properties.props.href = this.item.link;
        } else if (this.item.link instanceof Function) {
            properties.props.href = String(this.item.link(this.row));
        }
        if (this.item.click) {
            properties.on.click = () => this.item.click(this.row);
        }
        return (
            <el-tooltip
                disabled={ !this.tooltip }
                content={ String(this.row[this.item.prop]) }
                placement="top">
                <el-link
                    ref="elLink"
                    class="elLink"
                    { ...properties }>
                    { this.row[this.item.prop] }
                </el-link>
            </el-tooltip>
        )
    },
    mounted() {
        const outerWidth = this.$refs.elLink.$el.offsetWidth
        const innerWidth = this.$refs.elLink.$el.querySelector(".el-link--inner").offsetWidth
        this.tooltip = innerWidth > outerWidth;
    }
};
</script>
<style scoped lang="stylus">
.elLink
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    display inline-block
    max-width 100%
</style>

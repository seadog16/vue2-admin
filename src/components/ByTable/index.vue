<template lang="pug">
    .table
        el-table.table-main(
            ref="table"
            :data="data"
            :row-key="rowKey"
            :height="pagination?'calc(100% - 42px)':'100%'"
            stripe
            border
            highlight-current-row
            :row-class-name="rowClassName"
            @selection-change="$emit('selection-change', $event)"
            @current-change="$emit('current-change', $event)"
            @sort-change="$emit('sort-change', $event)")
            template(
                v-for="item in tableColumn")
                slot(
                    v-if="item.slot && item.slot.table"
                    :name="item.slot && item.slot.table")
                el-table-column(
                    v-else-if="item.options || item.dict"
                    :label="item.label"
                    :prop="item.prop"
                    :show-overflow-tooltip="false"
                    v-bind="item.properties && item.properties.table")
                    column-tag(
                        slot-scope="{row}"
                        :item="item"
                        :row="row")
                el-table-column(
                    v-else-if="item.link || item.click"
                    :label="item.label"
                    :prop="item.prop"
                    v-bind="item.properties&&item.properties.table")
                    column-link(
                        slot-scope="{row}"
                        :item="item"
                        :row="row")
                el-table-column(
                    v-else-if="item.component==='image'"
                    :label="item.label"
                    :prop="item.prop"
                    v-bind="item.properties&&item.properties.table")
                    column-image(
                        slot-scope="{row}"
                        :item="item"
                        :row="row")
                el-table-column(
                    v-else
                    show-overflow-tooltip
                    :label="item.label"
                    :prop="item.prop"
                    v-bind="item.properties&&item.properties.table")
            template(slot="empty")
                slot(name="empty")
        el-pagination.table-pagination(
            v-if="pagination"
            layout="prev, pager, next, sizes, jumper, total"
            :total="total"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="[20, 50, 100, 200]"
            @size-change="$emit('size-change', $event)"
            @current-change="$emit('page-change', $event)")
</template>

<script>
import { mapActions, mapState } from "vuex";
import ColumnTag from "./ColumnTag";
import ColumnLink from "./ColumnLink";
import ColumnImage from "./ColumnImage";
import chroma from "chroma-js";

export default {
    name: "ByTable",
    components: { ColumnTag, ColumnLink, ColumnImage },
    props: {
        column: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        rowKey: String,
        total: {
            type: [Number, String],
            default: () => 1
        },
        currentPage: {
            type: [Number, String],
            default: () => 1
        },
        pageSize: {
            type: [Number, String],
            default: () => 30
        },
        pagination: {
            type: Boolean,
            default: true
        },
        box: Boolean
    },
    computed: {
        ...mapState("sys", ["dictionary"]),
        tableColumn() {
            return this.column.filter(v => v.table !== false);
        }
    },
    mounted() {
        this.initTable();
    },
    methods: {
        ...mapActions("sys", ["queryDict"]),
        initTable() {
            // 获取有字典的列
            const columns = this.tableColumn.filter(v => v.dict);
            for (const col of columns) {
                // 请求字典接口
                this.queryDict(col.dict).then(() => {
                    const dict = this.dictionary[col.dict];

                    // 字典列表放入column配置的options里，作为标签使用
                    this.$set(
                        col,
                        "options",
                        dict.map(v => ({
                            value: v.labelValue,
                            label: v.label
                        }))
                    );

                    // 字典数量计算成标签颜色
                    const scale = chroma.scale(["#409EFF", "#67C23A", "#e6a23c", "#F56C6C"]).mode("hsl");
                    const tagColors = {
                        color: scale.colors(dict.length),
                        border: scale.colors(dict.length, null).map(v =>
                            chroma(v)
                                .brighten(1.2)
                                .desaturate(0.45)
                                .hex()
                        )
                    };
                    this.$set(col, "tagColors", tagColors);
                });
            }
        },
        rowClassName({ rowIndex }) {
            if (rowIndex === 5) {
                return "abc";
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.table
    height 100%

    &-main
        height 100%

        //& >>> tr.current-row
        //    & > td
        //        background-color $--color-primary!important
        //        border-right-color lighten($--color-primary, 10)
        //        color $--color-white
        //
        //    &:hover > td
        //        background-color lighten($--color-primary, 3)!important
        //
        //    .el-link
        //        color #fff000
        //
        //        &.is-underline:hover:after
        //            border-color: #fff000
        //
        & >>> .el-link
            font-weight inherit
            font-size inherit

    &-pagination
        text-align center
        margin-top 10px
        height 32px
        box-sizing border-box
</style>

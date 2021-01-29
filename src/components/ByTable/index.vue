<template lang="pug">
    .table(:style="pagination?'height:calc(100% - 36px)':''")
        el-table(
            ref="table"
            :data="data"
            :row-key="rowKey"
            stripe
            height="100%"
            border
            :row-class-name="rowClassName"
            @selection-change="selectHandler"
            @current-change="$emit('select-change', $event)"
            @row-click="rowClickHandler")
            template(
                v-for="item in tableColumn")
                slot(
                    v-if="item.slot"
                    :name="item.slot")
                el-table-column(
                    v-else-if="item.options"
                    v-bind="item")
                    template(v-slot="{row}")
                        el-tag(
                            v-if="findValue(row, item)"
                            size="small"
                            effect="plain"
                            v-bind="findColor(row, item)") {{findValue(row, item)}}
                el-table-column(
                    v-else
                    show-overflow-tooltip
                    v-bind="item")
            template(slot="empty")
                slot(name="empty")
        el-pagination.pagination(
            v-if="pagination"
            layout="prev, pager, next, sizes, jumper, total"
            :total="total"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="[30, 60, 100]"
            @size-change="$emit('size-change', $event)"
            @current-change="$emit('current-change', $event)")
</template>

<script>
export default {
    name: "ComTable",
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
        pageSize: [Number, String],
        pagination: {
            type: Boolean,
            default: true
        },
        labelWidth: String
    },
    data() {
        return {
            selection: []
        };
    },
    computed: {
        tableColumn() {
            return this.column.filter(v => v.table !== false);
        }
    },
    methods: {
        selectHandler(selection) {
            this.selection = selection;
        },
        findColor(row, item) {
            const { options, prop } = item;
            const val = row[prop];
            const index = options.findIndex(v => String(v.value) === String(val));
            if (index > -1 && options[index].tag) {
                const key = /^#(\w|\d){3,6}/.test(options[index].tag) ? "color" : "type";
                return { [key]: options[index].tag };
            } else {
                const type = ["", "success", "info", "warning", "danger"][index % 5];
                return { type };
            }
        },
        findValue(row, item) {
            const child = item.options.find(v => String(v.value) === String(row[item.prop]));
            return child?.label;
        },
        rowClickHandler(row) {
            this.toggleRowSelection(row);
        },
        rowClassName({ rowIndex }) {
            if (rowIndex === 5) {
                return "abc";
            }
        },
        dialogOpen(title, data) {
            return this.$refs.dialog.open(title, data);
        },
        setCurrentRow(val) {
            this.$refs.table.setCurrentRow(val);
        },
        toggleRowSelection(row, selected) {
            this.$refs.table.toggleRowSelection(row, selected);
        },
        clearSelection() {
            this.$refs.table.clearSelection();
        }
    }
};
</script>

<style scoped lang="stylus">
.table
    height 100%
    margin-bottom -20px

.pagination
    text-align center
    margin-top 10px
    height 32px
</style>

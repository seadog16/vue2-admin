<template lang="pug">
    by-page
        template(#left)
            by-table-search(
                ref="tableSearch"
                :column="searchColumn"
                @set="setSearch"
                @search="queryData")
        template(#right)
            el-button(
                v-if="buttonsLayoutComputed.includes('new')"
                circle
                type="primary"
                icon="el-icon-plus"
                help="新增"
                @click="newHandler")
            el-button(
                v-if="buttonsLayoutComputed.includes('edit')"
                circle
                icon="el-icon-edit"
                help="编辑"
                :disabled="isEmpty(selection)"
                @click="editHandler")
            el-button(
                v-if="buttonsLayoutComputed.includes('delete')"
                circle
                icon="el-icon-delete"
                help="删除"
                :disabled="isEmpty(selection)"
                @click="removeHandler")
            slot
        template(#tag)
            el-tag.tag(
                v-for="(item, key) in searchForm"
                :key="key"
                closable
                effect="plain"
                @close="closeTag(key)") {{itemFilter(item,key)}}
        by-table(
            :column="column"
            :data="data"
            :total="page.total"
            :current-page.sync="page.page"
            :page-size.sync="page.pageSize"
            @size-change="sizeChange"
            @page-change="pageChange"
            @current-change="selection=$event"
            v-loading="loading"
            :box="removeMode"
            @sort-change="$emit('sort-change', $event)")
            slot(
                v-for="col in column"
                v-if="col.slot && col.slot.table"
                :name="col.slot.table"
                :slot="col.slot.table")
        by-dialog-form(
            ref="dialogForm"
            :column="dialogColumn"
            @closed="dialogColumnProperties={}"
            @submit="(param, done)=>$emit('submit', param, done)")
            slot(
                v-for="col in column"
                v-if="col.slot && col.slot.dialog"
                :name="col.slot.dialog"
                :slot="col.slot.dialog")
</template>

<script lang="jsx">
import ByTableSearch from "@/components/ByTableSearch";
import ByDialogForm from "@/components/ByDialogForm";
import * as _ from "lodash";
export default {
    name: "ByView",
    components: { ByTableSearch, ByDialogForm },
    props: {
        column: {
            type: Array,
            default: () => []
        },
        filter: {
            type: Object,
            default: () => ({})
        },
        api: Object,
        buttonsLayout: {
            type: String,
            default: "new,edit,delete"
        }
    },
    data() {
        return {
            isEmpty: _.isEmpty,
            data: [],
            page: {
                page: 1,
                total: 1,
                pageSize: 20
            },
            loading: false,
            searchForm: {},
            selection: {},
            dialogColumnProperties: {},
            removeMode: false
        };
    },
    computed: {
        searchColumn() {
            const { search } = this.filter;
            const column = _.cloneDeep(this.column);
            if (search && search.length) {
                return column.filter(v => search.includes(v.prop));
            } else {
                return column;
            }
        },
        dialogColumn() {
            const { dialog } = this.filter;
            let column = _.cloneDeep(this.column);
            if (dialog && dialog.length) {
                column = column.filter(v => dialog.includes(v.prop));
            }
            for (const i in this.dialogColumnProperties) {
                if (Object.prototype.hasOwnProperty.call(this.dialogColumnProperties, i)) {
                    const item = column.find(v => v.prop === i);
                    if (item) {
                        if (!item.properties) item.properties = { dialog: {} };
                        if (!item.properties.dialog) item.properties.dialog = {};
                        item.properties.dialog = { ...item.properties.dialog, ...this.dialogColumnProperties[i] };
                    }
                }
            }
            return column;
        },
        buttonsLayoutComputed() {
            return this.buttonsLayout.split(",").map(v => v.trim());
        }
    },
    created() {
        this.queryData();
    },
    methods: {
        queryData() {
            if (this.api && this.api.list) {
                this.loading = true;
                this.api
                    .list({
                        pageIndex: this.page.page,
                        pageSize: this.page.pageSize,
                        obj: {}
                    })
                    .then(res => {
                        const { rows, total } = res;
                        const { pageSize, page } = this.page;
                        if (pageSize * (page - 1) > total) {
                            this.page.page--;
                            this.queryData();
                            return;
                        }
                        this.data = rows;
                        this.page.total = total;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        },
        sizeChange(pageSize) {
            this.page.pageSize = pageSize;
            this.queryData();
        },
        pageChange(page) {
            this.page.page = page;
            this.queryData();
        },
        setSearch(key, value) {
            if (_.isEmpty(value)) {
                this.$delete(this.searchForm, key);
            } else {
                this.searchForm[key] = value;
            }
        },
        itemFilter(val, key) {
            const item = this.column.find(v => v.prop === key);
            const value = item.options?.find(v => v.value === val)?.label || val;
            return item.label + ": " + value;
        },
        closeTag(key) {
            if (this.$refs.tableSearch.label === key) {
                this.$refs.tableSearch.clear();
            } else {
                this.$delete(this.searchForm, key);
            }
            this.queryData();
        },
        newHandler() {
            this.$emit("dialog-new", this.dialogColumnProperties);
            this.$refs.dialogForm.open({}, "新增");
        },
        editHandler() {
            this.$emit("dialog-edit", this.dialogColumnProperties);
            this.$refs.dialogForm.open(this.selection, "编辑");
        },
        removeHandler() {
            if (this.api && this.api.remove) {
                const html = (<p>确认删除 <span style="color:#F56C6C">{this.selection.id}</span> 吗?</p>);
                this.$confirm(html, {
                    type: "warning"
                }).then(() => {
                    this.loading = true;
                    this.api.remove({ id: this.selection.id }).finally(() => this.loading = false);
                });
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.tag + .tag
    margin-left 5px
</style>

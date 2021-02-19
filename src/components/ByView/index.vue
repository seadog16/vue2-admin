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
                circle
                type="primary"
                icon="el-icon-plus"
                help="新增"
                @click="newHandler")
            el-button(
                circle
                icon="el-icon-edit"
                help="编辑")
            el-button(
                circle
                icon="el-icon-delete"
                help="删除")
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
            @current-change="currentChange"
            v-loading="loading")
            slot(
                v-for="col in column"
                :name="col.tableSlot"
                :slot="col.tableSlot")
        by-dialog-form(
            ref="dialogForm"
            :column="dialogColumn")
</template>

<script>
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
        queryApi: Function
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
            searchForm: {}
        };
    },
    computed: {
        searchColumn() {
            const { search } = this.filter;
            if (search && search.length) {
                return this.column.filter(v => search.includes(v.prop));
            } else {
                return this.column;
            }
        },
        dialogColumn() {
            const { dialog } = this.filter;
            if (dialog && dialog.length) {
                return this.column.filter(v => dialog.includes(v.prop));
            } else {
                return this.column;
            }
        }
    },
    created() {
        this.queryData();
    },
    methods: {
        queryData() {
            if (this.queryApi) {
                this.loading = true;
                this.queryApi({
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
        currentChange(page) {
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
            this.$refs.dialogForm.open({}, "新增");
        }
    }
};
</script>

<style scoped lang="stylus">
.tag + .tag
    margin-left 5px
</style>

<template lang="pug">
    by-page
        template(#left)
            by-table-search(
                :column="searchColumn")
        template(#right)
        by-table(
            :column="column"
            :data="data"
            :total="page.total"
            :current-page.sync="page.page"
            :page-size.sync="page.pageSize"
            @size-change="sizeChange"
            @current-change="currentChange"
            v-loading="loading")
</template>

<script>
export default {
    name: "ByView",
    props: {
        column: {
            type: Array,
            default: () => []
        },
        searchFilter: {
            type: Array,
            default: () => []
        },
        queryApi: Function
    },
    data() {
        return {
            data: [],
            page: {
                page: 1,
                total: 1,
                pageSize: 20
            },
            loading: false
        };
    },
    computed: {
        searchColumn() {
            return this.column.filter(v => this.searchFilter.includes(v.prop));
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
        }
    }
};
</script>

<style scoped lang="stylus">

</style>

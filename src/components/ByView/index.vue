<template lang="pug">
    by-table(
        :column="column"
        :data="data"
        :total="page.total"
        :current-page.sync="page.page"
        :page-size.sync="page.pageSize"
        @size-change="sizeChange"
        @current-change="currentChange")
</template>

<script>
export default {
    name: "ByView",
    props: {
        column: {
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
            }
        };
    },
    created() {
        this.queryData();
    },
    methods: {
        queryData() {
            if (this.queryApi) {
                this.queryApi({
                    pageIndex: this.page.page,
                    pageSize: this.page.pageSize,
                    obj: {}
                }).then(res => {
                    const { rows, total } = res;
                    const { pageSize, page } = this.page;
                    if (pageSize * (page - 1) > total) {
                        this.page.page--;
                        this.queryData();
                        return;
                    }
                    this.data = rows;
                    this.page.total = total;
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

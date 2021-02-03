<template lang="pug">
    by-view(
        :column="column"
        :query-api="queryBusiness"
        :search-filter="searchFilter")
</template>

<script>
import { queryBusiness } from "@/http/api/business";
export default {
    name: "FunctionTable",
    data() {
        return {
            queryBusiness,
            searchFilter: ["id", "phone", "company", "superiorUnits", "status"],
            column: [
                {
                    prop: "id",
                    label: "账号ID"
                },
                {
                    prop: "phone",
                    label: "绑定手机"
                },
                {
                    prop: "company",
                    label: "开发者名称"
                },
                {
                    prop: "superiorUnits",
                    label: "所属单位"
                },
                {
                    prop: "itemCount",
                    label: "授权事项数",
                    component: "elInputNumber"
                },
                {
                    prop: "onlineItemCount",
                    label: "已上线事项数",
                    component: "elInputNumber"
                },
                {
                    prop: "auditTime",
                    label: "审核时间",
                    dialog: false
                },
                {
                    prop: "status",
                    label: "状态",
                    dialog: false,
                    dict: "dev_status"
                }
            ]
        };
    }
};
</script>

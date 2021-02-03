<template lang="pug">
    by-page
        by-view(
            :column="column"
            :query-api="queryBusiness")
</template>

<script>
import { queryBusiness } from "@/http/api/business";
export default {
    name: "FunctionTable",
    data() {
        return {
            queryBusiness,
            column: [
                {
                    prop: "id",
                    label: "账号ID",
                    search: true,
                    component: "id",
                    slot: "id",
                    disabled: true
                },
                {
                    prop: "phone",
                    label: "绑定手机",
                    search: true,
                    disabled: true
                },
                {
                    prop: "company",
                    label: "开发者名称",
                    search: true,
                    rules: {
                        required: true,
                        message: "开发者名称必填"
                    },
                    componentProperties: {
                        maxlength: 60,
                        showWordLimit: true
                    }
                },
                {
                    prop: "superiorUnits",
                    label: "所属单位",
                    search: true,
                    rules: {
                        required: true,
                        message: "所属单位必填"
                    },
                    componentProperties: {
                        maxlength: 60,
                        showWordLimit: true
                    }
                },
                {
                    prop: "itemCount",
                    label: "授权事项数",
                    component: "elInputNumber",
                    componentProperties: {
                        min: 1,
                        max: 100,
                        stepStrictly: true
                    }
                },
                {
                    prop: "onlineItemCount",
                    label: "已上线事项数",
                    component: "elInputNumber",
                    disabled: true
                },
                {
                    prop: "auditTime",
                    label: "审核时间",
                    dialog: false
                },
                {
                    prop: "status",
                    label: "状态",
                    search: true,
                    dialog: false,
                    dict: "dev_status"
                }
            ]
        };
    }
};
</script>

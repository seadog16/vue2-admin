<template lang="pug">
    by-view(
        :column="column"
        :query-api="queryBusiness"
        :search-filter="searchFilter")
        el-table-column(slot="phone" label="绑定手机")
            template(slot-scope="{row}")
                span {{row.phone}}
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
                    label: "账号ID",
                    link(row) {
                        return `http://www.baidu.com?p=${row.id}`;
                    },
                    properties: {
                        link: {
                            target: "_blank"
                        }
                    }
                },
                {
                    tableSlot: "phone"
                },
                {
                    prop: "company",
                    label: "开发者名称",
                    click(row) {
                        console.log(row);
                        // do something
                    }
                },
                {
                    prop: "superiorUnits",
                    label: "所属单位"
                },
                {
                    prop: "avator",
                    label: "头像",
                    component: "image"
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

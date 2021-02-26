<template lang="pug">
    by-view(
        ref="view"
        :column="column"
        :api="api"
        :filter="filter"
        @dialog-new="dialogNewHandler"
        @dialog-edit="dialogEditHandler"
        @submit="submitHandler"
        @sort-change="sortChange"
        buttons-layout="new,edit,delete")
        el-button(circle icon="el-icon-upload2" help="导入")
        el-button(circle icon="el-icon-download" help="导出")
        el-table-column(slot="tablePhone" label="绑定手机")
            template(slot-scope="{row}")
                span {{row.phone}}
        template(#dialogPhone="row")
            el-form-item(label="绑定手机" prop="phone")
                el-input-number(v-model="row.phone")
</template>

<script>
import { businessList, businessRemove } from "@/http/api/business";
export default {
    name: "FunctionTable",
    data() {
        return {
            api: {
                list: businessList,
                remove: businessRemove
            },
            filter: {
                search: ["id", "phone", "company", "superiorUnits", "status"],
                dialog: ["id", "phone", "company", "superiorUnits", "avator", "status"]
            },
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
                    prop: "phone",
                    label: "绑定手机",
                    slot: {
                        table: "tablePhone",
                        dialog: "dialogPhone"
                    }
                },
                {
                    prop: "company",
                    label: "开发者名称",
                    click(row) {
                        console.log(row);
                        // do something
                    },
                    properties: {
                        dialog: {
                            rules: [
                                {
                                    required: true,
                                    message: "开发者名称必填"
                                }
                            ]
                        }
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
                    component: "elInputNumber",
                    default: 0
                },
                {
                    prop: "auditTime",
                    label: "审核时间"
                },
                {
                    prop: "status",
                    label: "状态",
                    dict: "dev_status",
                    properties: {
                        table: {
                            filters: [{ text: "通过", value: "0" }],
                            filterMethod(val, row, column) {
                                console.log(val, row, column);
                            },
                            sortable: "custom"
                        }
                    }
                }
            ]
        };
    },
    methods: {
        dialogNewHandler(col) {
            this.$set(col, "id", { visible: false });
        },
        dialogEditHandler(col) {
            this.$set(col, "id", { readonly: true });
        },
        submitHandler(data, done) {
            console.log(data, done);
        },
        sortChange({ column, prop, order }) {
            console.log(column, prop, order);
        }
    }
};
</script>

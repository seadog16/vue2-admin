import Mock from "mockjs";

const template = {
    status: 200
};
Mock.setup({
    timeout: "100-400"
});
Mock.mock("/api/auth/token", "post", option => {
    let { body } = option;
    body = JSON.parse(body);
    if (body.username === "admin" && body.password === "admin") {
        return {
            ...template,
            data:
                "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiYW9zaiIsInVzZXJJZCI6IjE0IiwibmFtZSI6IumyjemxvCIsImV4cCI6MTYwNjg5NDcxNn0.FEFtJYQJ84ltVaqy4TqMgkxcSzuNox7WvhwPOtiq5n2Nw1Zha9OKmgELw_X20grtgQU-oPIjLdhy7cBx7xrXfwAXbv9RVMFLOxiGjv8ubOCpxxeiZqlb7TzRpjoCM8Qc7yBsCw-KOcr5mnOmGYP6RJV8p4LMDz4G5Du0rl8UfJ4"
        };
    } else {
        return {
            status: 500,
            message: "用户名或密码错误"
        };
    }
});

Mock.mock("/api/sys/menu", "get", {
    ...template,
    data: [
        {
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },
        {
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },
        {
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        },{
            id: "1",
            code: "Function",
            uri: "",
            name: "功能",
            component: "",
            icon: "el-icon-set-up"
        },
        {
            id: "1-1",
            parentId: "1",
            code: "FunctionTable",
            uri: "/function/table",
            name: "表格",
            component: "FunctionTable/index.vue",
            icon: "el-icon-date"
        }
    ]
});

Mock.mock("/api/sys/dict", "get", option => {
    console.log(option);
});

import Mock from "mockjs";

const template = {
    status: 200
};

Mock.mock("/api/auth/token", "post", {
    ...template,
    data:
        "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiYW9zaiIsInVzZXJJZCI6IjE0IiwibmFtZSI6IumyjemxvCIsImV4cCI6MTYwNjg5NDcxNn0.FEFtJYQJ84ltVaqy4TqMgkxcSzuNox7WvhwPOtiq5n2Nw1Zha9OKmgELw_X20grtgQU-oPIjLdhy7cBx7xrXfwAXbv9RVMFLOxiGjv8ubOCpxxeiZqlb7TzRpjoCM8Qc7yBsCw-KOcr5mnOmGYP6RJV8p4LMDz4G5Du0rl8UfJ4"
});

Mock.mock("/api/sys/menu", "get", {
    ...template,
    data: [
        {
            code: "SystemUser",
            uri: "/admin/user",
            menu: "用户管理",
            component: "SystemUser/index"
        },
        {
            code: "SystemMenu",
            uri: "/admin/menu",
            menu: "菜单管理",
            component: "SystemMenu/index"
        },
        {
            code: "SystemRole",
            uri: "/admin/group",
            menu: "角色权限管理",
            component: "SystemRole/index"
        },
        {
            code: "SystemRoleType",
            uri: "/admin/groupType",
            menu: "角色类型管理",
            component: "SystemRoleType/index"
        },
        {
            code: "RoleManager",
            uri: "/role",
            menu: "权限管理",
            component: ""
        },
        {
            code: "SystemLog",
            uri: "/admin/gateLog",
            menu: "操作日志",
            component: "SystemLog/index"
        },
        {
            code: "ServiceManager",
            uri: "/auth/service",
            menu: "服务管理",
            component: "ServiceManager/index"
        },
        {
            code: "monitorManager",
            uri: "/service",
            menu: "监控模块管理"
        },
        {
            code: "MonitorRegister",
            uri: "/monitor/register",
            menu: "服务注册中心",
            component: "MonitorRegist/index"
        },
        {
            code: "MonitorStatus",
            uri: "/monitor/status",
            menu: "服务状态监控",
            component: "MonitorStatus/index"
        },
        {
            code: "MonitorLink",
            uri: "/monitor/link",
            menu: "服务链路监控",
            component: "MonitorLink/index"
        },
        {
            code: "DevelopCenter",
            uri: "/dev",
            menu: "开发中心"
        },
        {
            code: "MyTasks",
            uri: "/dev/task",
            menu: "我的事项",
            component: "MyTasks/index"
        },
        {
            code: "AuthorizationInterface",
            uri: "/dev/interface",
            menu: "授权接口",
            component: "AuthorizationInterface/index"
        },
        {
            code: "MyInterface",
            uri: "/dev/myInterface",
            menu: "我注册的接口",
            component: "MyInterface/index"
        },
        {
            code: "TaskBulletin",
            uri: "/dev/taskBulletin",
            menu: "事项公告",
            component: "TaskBulletin/index"
        },
        {
            code: "ApiDocument",
            uri: "/dev/ApiDocument",
            menu: "API文档",
            component: "ApiDocument/index"
        },
        {
            code: "TaskAnalysis",
            uri: "/analysis/task",
            menu: "事项数据统计",
            component: "AnalysisTask/index"
        },
        {
            code: "UserCenter",
            uri: "/account",
            menu: "个人中心",
            component: ""
        },
        {
            code: "AccountInfo",
            uri: "/user/account",
            menu: "账号信息",
            component: "AccountInfo/index"
        },
        {
            code: "MyMessage",
            uri: "/user/message",
            menu: "我的消息",
            component: "MyMessage/index"
        },
        {
            code: "elementManager",
            uri: "/admin/element",
            menu: "元素管理",
            component: "SystemElement/index"
        },
        {
            code: "DevelopmentManager",
            uri: "/open/dev",
            menu: "开发者管理",
            component: "OpenDevelopmentManager/index"
        },
        {
            code: "TaskManager",
            uri: "/open/task",
            menu: "事项列表",
            component: "OpenTaskManager/index"
        },
        {
            code: "TaskVerify",
            uri: "/open/taskverify",
            menu: "事项入驻审核",
            component: "OpenTaskVerify/index"
        },
        {
            code: "TaskDesign",
            uri: "/open/taskdesign",
            menu: "事项设计评审",
            component: "OpenTaskDesign/index"
        },
        {
            code: "InterfaceAuthorize",
            uri: "/open/interfaceauthorize",
            menu: "接口授权审核",
            component: "OpenInterfaceAuthorize/index"
        },
        {
            code: "InterfaceRegister",
            uri: "/open/interfaceregister",
            menu: "注册接口审核",
            component: "OpenInterfaceRegister/index"
        },
        {
            code: "TaskOnline",
            uri: "/open/taskonline",
            menu: "事项上线审核",
            component: "OpenTaskOnline/index"
        },
        {
            code: "TaskOffline",
            uri: "/open/taskoffline",
            menu: "事项下架审核",
            component: "OpenTaskOffline/index"
        },
        {
            code: "BulletinManager",
            uri: "/open/bulletin",
            menu: "事项公告管理",
            component: "OpenBulletinManager/index"
        },
        {
            code: "OpenAPI",
            uri: "/open/api",
            menu: "接口管理",
            component: "OpenAPI/index"
        },
        {
            code: "APIDoc",
            uri: "/open/doc",
            menu: "API文档",
            component: "OpenAPIDoc/index"
        },
        {
            code: "SystemDict",
            uri: "/admin/dict",
            menu: "系统字典管理",
            component: "SystemDict/index"
        },
        {
            code: "ReportCenter",
            uri: "/report",
            menu: "报表中心"
        },
        {
            code: "OperationCenter",
            uri: "/operation",
            menu: "运营中心"
        },
        {
            code: "OpenCenter",
            uri: "/open",
            menu: "开放中心"
        },
        {
            code: "SMSPlatform",
            uri: "/sms",
            menu: "短信平台"
        },
        {
            code: "SystemManager",
            uri: "/system",
            menu: "系统管理"
        },
        {
            code: "TaskManager",
            uri: "/TaskManager",
            menu: "事项管理"
        },
        {
            code: "SmsTemplate",
            uri: "/sms/smsTemplate",
            menu: "短信模板管理",
            component: "sms/SmsTemplatePage/index"
        },
        {
            code: "SmsMerchant",
            uri: "/sms/smsMerchant",
            menu: "短信服务商管理",
            component: "sms/SmsMerchant/index"
        },
        {
            code: "smsbasic",
            uri: "/smsbasic",
            menu: "短信基础信息管理"
        },
        {
            code: "SmsInfo",
            uri: "/SmsInfo",
            menu: "短信信息管理"
        },
        {
            code: "SmsSign",
            uri: "/sms/smsSign",
            menu: "短信签名管理",
            component: "sms/SmsSign/index"
        },
        {
            code: "SmsRecord",
            uri: "/sms/SmsRecord",
            menu: "短信记录管理",
            component: "sms/SmsRecord/index"
        }
    ]
});

Mock.mock("/api/sys/dict", "get", option => {
    console.log(option);
});

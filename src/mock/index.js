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
            type: "menu",
            uri: "/admin/user",
            method: "GET",
            name: "访问",
            menu: "用户管理",
            component: "SystemUser/index"
        },
        {
            code: "SystemMenu",
            type: "menu",
            uri: "/admin/menu",
            method: "GET",
            name: "访问",
            menu: "菜单管理",
            component: "SystemMenu/index"
        },
        {
            code: "SystemRole",
            type: "menu",
            uri: "/admin/group",
            method: "GET",
            name: "访问",
            menu: "角色权限管理",
            component: "SystemRole/index"
        },
        {
            code: "SystemRoleType",
            type: "menu",
            uri: "/admin/groupType",
            method: "GET",
            name: "访问",
            menu: "角色类型管理",
            component: "SystemRoleType/index"
        },
        {
            code: "RoleManager",
            type: "menu",
            uri: "/role",
            method: "GET",
            name: "访问",
            menu: "权限管理",
            component: ""
        },
        {
            code: "SystemLog",
            type: "menu",
            uri: "/admin/gateLog",
            method: "GET",
            name: "访问",
            menu: "操作日志",
            component: "SystemLog/index"
        },
        {
            code: "ServiceManager",
            type: "menu",
            uri: "/auth/service",
            method: "GET",
            name: "访问",
            menu: "服务管理",
            component: "ServiceManager/index"
        },
        {
            code: "monitorManager",
            type: "menu",
            uri: "/service",
            method: "GET",
            name: "访问",
            menu: "监控模块管理"
        },
        {
            code: "MonitorRegister",
            type: "menu",
            uri: "/monitor/register",
            method: "GET",
            name: "访问",
            menu: "服务注册中心",
            component: "MonitorRegist/index"
        },
        {
            code: "MonitorStatus",
            type: "menu",
            uri: "/monitor/status",
            method: "GET",
            name: "访问",
            menu: "服务状态监控",
            component: "MonitorStatus/index"
        },
        {
            code: "MonitorLink",
            type: "menu",
            uri: "/monitor/link",
            method: "GET",
            name: "访问",
            menu: "服务链路监控",
            component: "MonitorLink/index"
        },
        {
            code: "DevelopCenter",
            type: "menu",
            uri: "/dev",
            method: "GET",
            name: "访问",
            menu: "开发中心"
        },
        {
            code: "MyTasks",
            type: "menu",
            uri: "/dev/task",
            method: "GET",
            name: "访问",
            menu: "我的事项",
            component: "MyTasks/index"
        },
        {
            code: "AuthorizationInterface",
            type: "menu",
            uri: "/dev/interface",
            method: "GET",
            name: "访问",
            menu: "授权接口",
            component: "AuthorizationInterface/index"
        },
        {
            code: "MyInterface",
            type: "menu",
            uri: "/dev/myInterface",
            method: "GET",
            name: "访问",
            menu: "我注册的接口",
            component: "MyInterface/index"
        },
        {
            code: "TaskBulletin",
            type: "menu",
            uri: "/dev/taskBulletin",
            method: "GET",
            name: "访问",
            menu: "事项公告",
            component: "TaskBulletin/index"
        },
        {
            code: "ApiDocument",
            type: "menu",
            uri: "/dev/ApiDocument",
            method: "GET",
            name: "访问",
            menu: "API文档",
            component: "ApiDocument/index"
        },
        {
            code: "TaskAnalysis",
            type: "menu",
            uri: "/analysis/task",
            method: "GET",
            name: "访问",
            menu: "事项数据统计",
            component: "AnalysisTask/index"
        },
        {
            code: "UserCenter",
            type: "menu",
            uri: "/account",
            method: "GET",
            name: "访问",
            menu: "个人中心",
            component: ""
        },
        {
            code: "AccountInfo",
            type: "menu",
            uri: "/user/account",
            method: "GET",
            name: "访问",
            menu: "账号信息",
            component: "AccountInfo/index"
        },
        {
            code: "MyMessage",
            type: "menu",
            uri: "/user/message",
            method: "GET",
            name: "访问",
            menu: "我的消息",
            component: "MyMessage/index"
        },
        {
            code: "elementManager",
            type: "menu",
            uri: "/admin/element",
            method: "GET",
            name: "访问",
            menu: "元素管理",
            component: "SystemElement/index"
        },
        {
            code: "DevelopmentManager",
            type: "menu",
            uri: "/open/dev",
            method: "GET",
            name: "访问",
            menu: "开发者管理",
            component: "OpenDevelopmentManager/index"
        },
        {
            code: "TaskManager",
            type: "menu",
            uri: "/open/task",
            method: "GET",
            name: "访问",
            menu: "事项列表",
            component: "OpenTaskManager/index"
        },
        {
            code: "TaskVerify",
            type: "menu",
            uri: "/open/taskverify",
            method: "GET",
            name: "访问",
            menu: "事项入驻审核",
            component: "OpenTaskVerify/index"
        },
        {
            code: "TaskDesign",
            type: "menu",
            uri: "/open/taskdesign",
            method: "GET",
            name: "访问",
            menu: "事项设计评审",
            component: "OpenTaskDesign/index"
        },
        {
            code: "InterfaceAuthorize",
            type: "menu",
            uri: "/open/interfaceauthorize",
            method: "GET",
            name: "访问",
            menu: "接口授权审核",
            component: "OpenInterfaceAuthorize/index"
        },
        {
            code: "InterfaceRegister",
            type: "menu",
            uri: "/open/interfaceregister",
            method: "GET",
            name: "访问",
            menu: "注册接口审核",
            component: "OpenInterfaceRegister/index"
        },
        {
            code: "TaskOnline",
            type: "menu",
            uri: "/open/taskonline",
            method: "GET",
            name: "访问",
            menu: "事项上线审核",
            component: "OpenTaskOnline/index"
        },
        {
            code: "TaskOffline",
            type: "menu",
            uri: "/open/taskoffline",
            method: "GET",
            name: "访问",
            menu: "事项下架审核",
            component: "OpenTaskOffline/index"
        },
        {
            code: "BulletinManager",
            type: "menu",
            uri: "/open/bulletin",
            method: "GET",
            name: "访问",
            menu: "事项公告管理",
            component: "OpenBulletinManager/index"
        },
        {
            code: "OpenAPI",
            type: "menu",
            uri: "/open/api",
            method: "GET",
            name: "访问",
            menu: "接口管理",
            component: "OpenAPI/index"
        },
        {
            code: "APIDoc",
            type: "menu",
            uri: "/open/doc",
            method: "GET",
            name: "访问",
            menu: "API文档",
            component: "OpenAPIDoc/index"
        },
        {
            code: "SystemDict",
            type: "menu",
            uri: "/admin/dict",
            method: "GET",
            name: "访问",
            menu: "系统字典管理",
            component: "SystemDict/index"
        },
        {
            code: "ReportCenter",
            type: "menu",
            uri: "/report",
            method: "GET",
            name: "访问",
            menu: "报表中心"
        },
        {
            code: "OperationCenter",
            type: "menu",
            uri: "/operation",
            method: "GET",
            name: "访问",
            menu: "运营中心"
        },
        {
            code: "OpenCenter",
            type: "menu",
            uri: "/open",
            method: "GET",
            name: "访问",
            menu: "开放中心"
        },
        {
            code: "SMSPlatform",
            type: "menu",
            uri: "/sms",
            method: "GET",
            name: "访问",
            menu: "短信平台"
        },
        {
            code: "SystemManager",
            type: "menu",
            uri: "/system",
            method: "GET",
            name: "访问",
            menu: "系统管理"
        },
        {
            code: "TaskManager",
            type: "menu",
            uri: "/TaskManager",
            method: "GET",
            name: "访问",
            menu: "事项管理"
        },
        {
            code: "SmsTemplate",
            type: "menu",
            uri: "/sms/smsTemplate",
            method: "GET",
            name: "访问",
            menu: "短信模板管理",
            component: "sms/SmsTemplatePage/index"
        },
        {
            code: "SmsMerchant",
            type: "menu",
            uri: "/sms/smsMerchant",
            method: "GET",
            name: "访问",
            menu: "短信服务商管理",
            component: "sms/SmsMerchant/index"
        },
        {
            code: "smsbasic",
            type: "menu",
            uri: "/smsbasic",
            method: "GET",
            name: "访问",
            menu: "短信基础信息管理"
        },
        {
            code: "SmsInfo",
            type: "menu",
            uri: "/SmsInfo",
            method: "GET",
            name: "访问",
            menu: "短信信息管理"
        },
        {
            code: "SmsSign",
            type: "menu",
            uri: "/sms/smsSign",
            method: "GET",
            name: "访问",
            menu: "短信签名管理",
            component: "sms/SmsSign/index"
        },
        {
            code: "SmsRecord",
            type: "menu",
            uri: "/sms/SmsRecord",
            method: "GET",
            name: "访问",
            menu: "短信记录管理",
            component: "sms/SmsRecord/index"
        }
    ]
});

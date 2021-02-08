import Mock from "mockjs";
import * as _ from "lodash";

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
            name: "主要功能",
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

Mock.mock(/^\/api\/business\/data/, "get", {
    ...template,
    data: {
        total: 30,
        rows: [
            {
                id: 35,
                baseUserId: 1856,
                company: "测试的企业信息",
                socialCode: "888888888888",
                mail: "5555555@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/18024070462/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201130141102.png",
                businessLicense:
                    "http://192.168.10.241:9000/18024070462/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201210133919.jpg",
                superiorUnits: "测试的单位",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                avator: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                businessContact: "测试的",
                businessPhone: "18024070462",
                technicalContact: "何涛测试的",
                technicalPhone: "18888888888",
                onlineItemCount: 0,
                status: 1
            },
            {
                id: 32,
                baseUserId: 1848,
                company: "test",
                phone: "13610550272",
                socialCode: "1233121234567",
                mail: "yicb@createw.com",
                companyLogo: "http://192.168.10.241:9000/13610550272/excellent1.png",
                businessLicense: "http://192.168.10.241:9000/13610550272/excellent2.png",
                superiorUnits: "cn",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 2,
                businessContact: "cbyi",
                businessPhone: "13610550272",
                technicalContact: "cbyi",
                technicalPhone: "13610550272",
                onlineItemCount: 0,
                status: 1
            },
            {
                id: 30,
                baseUserId: 1846,
                company: "234324",
                phone: "13129311817",
                socialCode: "234324",
                mail: "13129311817@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/13129311817/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                businessLicense:
                    "http://192.168.10.241:9000/13129311817/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                superiorUnits: "3234",
                coverage: "440400000,440500000,440600000,440700000,445100000,445200000,445300000",
                itemCount: 1,
                businessContact: "123",
                businessPhone: "13129311817",
                technicalContact: "2342",
                technicalPhone: "13129311817",
                description: "1324122",
                onlineItemCount: 0,
                auditTime: "2021-01-06 15:08:07",
                status: 1
            },
            {
                id: 12,
                baseUserId: 160,
                company: "1312",
                phone: "13712920915",
                socialCode: "12312",
                mail: "1244@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/13712920915/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                businessLicense:
                    "http://192.168.10.241:9000/13712920915/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                superiorUnits: "qwrqw",
                coverage: "440100000",
                itemCount: 5,
                businessContact: "wrqw",
                businessPhone: "13712920915",
                technicalContact: "wrw",
                technicalPhone: "13712920915",
                description: "wrewr",
                onlineItemCount: 0,
                auditTime: "2021-01-04 13:43:51",
                status: 3
            },
            {
                id: 24,
                baseUserId: 1832,
                company: "测试发展企业",
                phone: "17373511730",
                socialCode: "测试的",
                mail: "5555555@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201214141737.png",
                businessLicense:
                    "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201210134917.jpg",
                superiorUnits: "广州测试的单位",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 20,
                businessContact: "小何",
                businessPhone: "15555555555",
                technicalContact: "小王",
                technicalPhone: "15333333333",
                onlineItemCount: 0,
                auditTime: "2020-12-31 14:33:41",
                status: 3
            },
            {
                id: 21,
                baseUserId: 1818,
                company:
                    "测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位",
                phone: "17373511730",
                socialCode: "测试的代码",
                mail: "666666@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201214141737.png",
                businessLicense:
                    "http://192.168.10.241:9000/17373511730/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E6%B3%B0%E5%B1%B1%E7%89%88.pdf",
                superiorUnits:
                    "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 1,
                businessContact: "何涛测试的",
                businessPhone: "18888888888",
                technicalContact: "哈哈哈",
                technicalPhone: "18989898898",
                description: "不通过",
                onlineItemCount: 0,
                auditTime: "2020-12-14 14:33:55",
                status: 3
            },
            {
                id: 19,
                baseUserId: 1795,
                company:
                    "恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财",
                phone: "18520696907",
                socialCode:
                    "恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财",
                mail: "aaa@aaa.com",
                companyLogo: "http://192.168.10.241:9000/18520696907/link.png",
                businessLicense: "http://192.168.10.241:9000/18520696907/link.png",
                superiorUnits: "123",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 1,
                businessContact: "武大郎",
                businessPhone: "18520696907",
                technicalContact: "武大郎",
                technicalPhone: "18520696907",
                description: "a",
                onlineItemCount: 0,
                auditTime: "2020-12-18 20:14:46",
                status: 2
            },
            {
                id: 18,
                baseUserId: 1794,
                company: "创能",
                phone: "17620505282",
                socialCode: "11",
                mail: "1448695520@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/17620505282/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201013141743.png",
                businessLicense:
                    "http://192.168.10.241:9000/17620505282/06%E5%9B%9B%E5%AE%9E%E4%B8%93%E9%A2%98%EF%BC%887200%E7%89%88%EF%BC%89.JPG",
                superiorUnits: "1",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 2,
                businessContact: "luzq luzq",
                businessPhone: "17620505282",
                technicalContact: "17620505282",
                technicalPhone: "17620505282",
                description:
                    "测试1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                onlineItemCount: 0,
                auditTime: "2020-11-19 06:23:38",
                status: 3
            },
            {
                id: 17,
                baseUserId: 1792,
                company: "abc",
                phone: "18520696907",
                socialCode: "abc",
                mail: "aaa@aa.com",
                companyLogo: "http://192.168.10.241:9000/18520696907/minlogo1.png",
                businessLicense: "http://192.168.10.241:9000/18520696907/%E5%9B%BE%E7%89%875.png",
                superiorUnits: "aabc",
                coverage: "0",
                itemCount: 1,
                businessContact: "aa",
                businessPhone: "18520696907",
                technicalContact: "aa",
                technicalPhone: "18520696907",
                description: "拒绝原因",
                onlineItemCount: 0,
                auditTime: "2020-11-13 07:25:35",
                status: 2
            },
            {
                id: 15,
                baseUserId: 177,
                company: "创创",
                phone: "13926104093",
                socialCode: "123",
                mail: "aaa@q.com",
                companyLogo: "http://192.168.10.241:9000/13926104093/profileimg2.png",
                businessLicense: "http://192.168.10.241:9000/13926104093/profileimg5.png",
                superiorUnits: "能能",
                coverage: "440000000",
                itemCount: 9,
                businessContact: "鱼鱼",
                businessPhone: "13926104093",
                technicalContact: "鱼鱼",
                technicalPhone: "13926104093",
                onlineItemCount: 0,
                auditTime: "2020-11-03 12:56:00",
                status: 3
            },
            {
                id: 35,
                baseUserId: 1856,
                company: "测试的企业信息",
                socialCode: "888888888888",
                mail: "5555555@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/18024070462/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201130141102.png",
                businessLicense:
                    "http://192.168.10.241:9000/18024070462/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201210133919.jpg",
                superiorUnits: "测试的单位",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 1,
                businessContact: "测试的",
                businessPhone: "18024070462",
                technicalContact: "何涛测试的",
                technicalPhone: "18888888888",
                onlineItemCount: 0,
                status: 1
            },
            {
                id: 32,
                baseUserId: 1848,
                company: "test",
                phone: "13610550272",
                socialCode: "1233121234567",
                mail: "yicb@createw.com",
                companyLogo: "http://192.168.10.241:9000/13610550272/excellent1.png",
                businessLicense: "http://192.168.10.241:9000/13610550272/excellent2.png",
                superiorUnits: "cn",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 2,
                businessContact: "cbyi",
                businessPhone: "13610550272",
                technicalContact: "cbyi",
                technicalPhone: "13610550272",
                onlineItemCount: 0,
                status: 1
            },
            {
                id: 30,
                baseUserId: 1846,
                company: "234324",
                phone: "13129311817",
                socialCode: "234324",
                mail: "13129311817@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/13129311817/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                businessLicense:
                    "http://192.168.10.241:9000/13129311817/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                superiorUnits: "3234",
                coverage: "440400000,440500000,440600000,440700000,445100000,445200000,445300000",
                itemCount: 1,
                businessContact: "123",
                businessPhone: "13129311817",
                technicalContact: "2342",
                technicalPhone: "13129311817",
                description: "1324122",
                onlineItemCount: 0,
                auditTime: "2021-01-06 15:08:07",
                status: 1
            },
            {
                id: 12,
                baseUserId: 160,
                company: "1312",
                phone: "13712920915",
                socialCode: "12312",
                mail: "1244@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/13712920915/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                businessLicense:
                    "http://192.168.10.241:9000/13712920915/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
                superiorUnits: "qwrqw",
                coverage: "440100000",
                itemCount: 5,
                businessContact: "wrqw",
                businessPhone: "13712920915",
                technicalContact: "wrw",
                technicalPhone: "13712920915",
                description: "wrewr",
                onlineItemCount: 0,
                auditTime: "2021-01-04 13:43:51",
                status: 3
            },
            {
                id: 24,
                baseUserId: 1832,
                company: "测试发展企业",
                phone: "17373511730",
                socialCode: "测试的",
                mail: "5555555@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201214141737.png",
                businessLicense:
                    "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201210134917.jpg",
                superiorUnits: "广州测试的单位",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 20,
                businessContact: "小何",
                businessPhone: "15555555555",
                technicalContact: "小王",
                technicalPhone: "15333333333",
                onlineItemCount: 0,
                auditTime: "2020-12-31 14:33:41",
                status: 3
            },
            {
                id: 21,
                baseUserId: 1818,
                company:
                    "测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位",
                phone: "17373511730",
                socialCode: "测试的代码",
                mail: "666666@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201214141737.png",
                businessLicense:
                    "http://192.168.10.241:9000/17373511730/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E6%B3%B0%E5%B1%B1%E7%89%88.pdf",
                superiorUnits:
                    "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 1,
                businessContact: "何涛测试的",
                businessPhone: "18888888888",
                technicalContact: "哈哈哈",
                technicalPhone: "18989898898",
                description: "不通过",
                onlineItemCount: 0,
                auditTime: "2020-12-14 14:33:55",
                status: 3
            },
            {
                id: 19,
                baseUserId: 1795,
                company:
                    "恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财",
                phone: "18520696907",
                socialCode:
                    "恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财",
                mail: "aaa@aaa.com",
                companyLogo: "http://192.168.10.241:9000/18520696907/link.png",
                businessLicense: "http://192.168.10.241:9000/18520696907/link.png",
                superiorUnits: "123",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 1,
                businessContact: "武大郎",
                businessPhone: "18520696907",
                technicalContact: "武大郎",
                technicalPhone: "18520696907",
                description: "a",
                onlineItemCount: 0,
                auditTime: "2020-12-18 20:14:46",
                status: 2
            },
            {
                id: 18,
                baseUserId: 1794,
                company: "创能",
                phone: "17620505282",
                socialCode: "11",
                mail: "1448695520@qq.com",
                companyLogo:
                    "http://192.168.10.241:9000/17620505282/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201013141743.png",
                businessLicense:
                    "http://192.168.10.241:9000/17620505282/06%E5%9B%9B%E5%AE%9E%E4%B8%93%E9%A2%98%EF%BC%887200%E7%89%88%EF%BC%89.JPG",
                superiorUnits: "1",
                coverage:
                    "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
                itemCount: 2,
                businessContact: "luzq luzq",
                businessPhone: "17620505282",
                technicalContact: "17620505282",
                technicalPhone: "17620505282",
                description:
                    "测试1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                onlineItemCount: 0,
                auditTime: "2020-11-19 06:23:38",
                status: 3
            },
            {
                id: 17,
                baseUserId: 1792,
                company: "abc",
                phone: "18520696907",
                socialCode: "abc",
                mail: "aaa@aa.com",
                companyLogo: "http://192.168.10.241:9000/18520696907/minlogo1.png",
                businessLicense: "http://192.168.10.241:9000/18520696907/%E5%9B%BE%E7%89%875.png",
                superiorUnits: "aabc",
                coverage: "0",
                itemCount: 1,
                businessContact: "aa",
                businessPhone: "18520696907",
                technicalContact: "aa",
                technicalPhone: "18520696907",
                description: "拒绝原因",
                onlineItemCount: 0,
                auditTime: "2020-11-13 07:25:35",
                status: 2
            },
            {
                id: 15,
                baseUserId: 177,
                company: "创创",
                phone: "13926104093",
                socialCode: "123",
                mail: "aaa@q.com",
                companyLogo: "http://192.168.10.241:9000/13926104093/profileimg2.png",
                businessLicense: "http://192.168.10.241:9000/13926104093/profileimg5.png",
                superiorUnits: "能能",
                coverage: "440000000",
                itemCount: 9,
                businessContact: "鱼鱼",
                businessPhone: "13926104093",
                technicalContact: "鱼鱼",
                technicalPhone: "13926104093",
                onlineItemCount: 0,
                auditTime: "2020-11-03 12:56:00",
                status: 3
            }
            // {
            //     id: 35,
            //     baseUserId: 1856,
            //     company: "测试的企业信息",
            //     socialCode: "888888888888",
            //     mail: "5555555@qq.com",
            //     companyLogo:
            //         "http://192.168.10.241:9000/18024070462/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201130141102.png",
            //     businessLicense:
            //         "http://192.168.10.241:9000/18024070462/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201210133919.jpg",
            //     superiorUnits: "测试的单位",
            //     coverage:
            //         "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
            //     itemCount: 1,
            //     businessContact: "测试的",
            //     businessPhone: "18024070462",
            //     technicalContact: "何涛测试的",
            //     technicalPhone: "18888888888",
            //     onlineItemCount: 0,
            //     status: 1
            // },
            // {
            //     id: 32,
            //     baseUserId: 1848,
            //     company: "test",
            //     phone: "13610550272",
            //     socialCode: "1233121234567",
            //     mail: "yicb@createw.com",
            //     companyLogo: "http://192.168.10.241:9000/13610550272/excellent1.png",
            //     businessLicense: "http://192.168.10.241:9000/13610550272/excellent2.png",
            //     superiorUnits: "cn",
            //     coverage:
            //         "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
            //     itemCount: 2,
            //     businessContact: "cbyi",
            //     businessPhone: "13610550272",
            //     technicalContact: "cbyi",
            //     technicalPhone: "13610550272",
            //     onlineItemCount: 0,
            //     status: 1
            // },
            // {
            //     id: 30,
            //     baseUserId: 1846,
            //     company: "234324",
            //     phone: "13129311817",
            //     socialCode: "234324",
            //     mail: "13129311817@qq.com",
            //     companyLogo:
            //         "http://192.168.10.241:9000/13129311817/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
            //     businessLicense:
            //         "http://192.168.10.241:9000/13129311817/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
            //     superiorUnits: "3234",
            //     coverage: "440400000,440500000,440600000,440700000,445100000,445200000,445300000",
            //     itemCount: 1,
            //     businessContact: "123",
            //     businessPhone: "13129311817",
            //     technicalContact: "2342",
            //     technicalPhone: "13129311817",
            //     description: "1324122",
            //     onlineItemCount: 0,
            //     auditTime: "2021-01-06 15:08:07",
            //     status: 1
            // },
            // {
            //     id: 12,
            //     baseUserId: 160,
            //     company: "1312",
            //     phone: "13712920915",
            //     socialCode: "12312",
            //     mail: "1244@qq.com",
            //     companyLogo:
            //         "http://192.168.10.241:9000/13712920915/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
            //     businessLicense:
            //         "http://192.168.10.241:9000/13712920915/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201231152305.png",
            //     superiorUnits: "qwrqw",
            //     coverage: "440100000",
            //     itemCount: 5,
            //     businessContact: "wrqw",
            //     businessPhone: "13712920915",
            //     technicalContact: "wrw",
            //     technicalPhone: "13712920915",
            //     description: "wrewr",
            //     onlineItemCount: 0,
            //     auditTime: "2021-01-04 13:43:51",
            //     status: 3
            // },
            // {
            //     id: 24,
            //     baseUserId: 1832,
            //     company: "测试发展企业",
            //     phone: "17373511730",
            //     socialCode: "测试的",
            //     mail: "5555555@qq.com",
            //     companyLogo:
            //         "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201214141737.png",
            //     businessLicense:
            //         "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201210134917.jpg",
            //     superiorUnits: "广州测试的单位",
            //     coverage:
            //         "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
            //     itemCount: 20,
            //     businessContact: "小何",
            //     businessPhone: "15555555555",
            //     technicalContact: "小王",
            //     technicalPhone: "15333333333",
            //     onlineItemCount: 0,
            //     auditTime: "2020-12-31 14:33:41",
            //     status: 3
            // },
            // {
            //     id: 21,
            //     baseUserId: 1818,
            //     company:
            //         "测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位测试的单位",
            //     phone: "17373511730",
            //     socialCode: "测试的代码",
            //     mail: "666666@qq.com",
            //     companyLogo:
            //         "http://192.168.10.241:9000/17373511730/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20201214141737.png",
            //     businessLicense:
            //         "http://192.168.10.241:9000/17373511730/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%E6%B3%B0%E5%B1%B1%E7%89%88.pdf",
            //     superiorUnits:
            //         "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
            //     coverage:
            //         "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
            //     itemCount: 1,
            //     businessContact: "何涛测试的",
            //     businessPhone: "18888888888",
            //     technicalContact: "哈哈哈",
            //     technicalPhone: "18989898898",
            //     description: "不通过",
            //     onlineItemCount: 0,
            //     auditTime: "2020-12-14 14:33:55",
            //     status: 3
            // },
            // {
            //     id: 19,
            //     baseUserId: 1795,
            //     company:
            //         "恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财",
            //     phone: "18520696907",
            //     socialCode:
            //         "恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财恭喜发财",
            //     mail: "aaa@aaa.com",
            //     companyLogo: "http://192.168.10.241:9000/18520696907/link.png",
            //     businessLicense: "http://192.168.10.241:9000/18520696907/link.png",
            //     superiorUnits: "123",
            //     coverage:
            //         "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
            //     itemCount: 1,
            //     businessContact: "武大郎",
            //     businessPhone: "18520696907",
            //     technicalContact: "武大郎",
            //     technicalPhone: "18520696907",
            //     description: "a",
            //     onlineItemCount: 0,
            //     auditTime: "2020-12-18 20:14:46",
            //     status: 2
            // },
            // {
            //     id: 18,
            //     baseUserId: 1794,
            //     company: "创能",
            //     phone: "17620505282",
            //     socialCode: "11",
            //     mail: "1448695520@qq.com",
            //     companyLogo:
            //         "http://192.168.10.241:9000/17620505282/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201013141743.png",
            //     businessLicense:
            //         "http://192.168.10.241:9000/17620505282/06%E5%9B%9B%E5%AE%9E%E4%B8%93%E9%A2%98%EF%BC%887200%E7%89%88%EF%BC%89.JPG",
            //     superiorUnits: "1",
            //     coverage:
            //         "440100000,440200000,440300000,440400000,440500000,440600000,440700000,440800000,440900000,441200000,441300000,441400000,441500000,441600000,441700000,441800000,441900000,442000000,445100000,445200000,445300000",
            //     itemCount: 2,
            //     businessContact: "luzq luzq",
            //     businessPhone: "17620505282",
            //     technicalContact: "17620505282",
            //     technicalPhone: "17620505282",
            //     description:
            //         "测试1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
            //     onlineItemCount: 0,
            //     auditTime: "2020-11-19 06:23:38",
            //     status: 3
            // },
            // {
            //     id: 17,
            //     baseUserId: 1792,
            //     company: "abc",
            //     phone: "18520696907",
            //     socialCode: "abc",
            //     mail: "aaa@aa.com",
            //     companyLogo: "http://192.168.10.241:9000/18520696907/minlogo1.png",
            //     businessLicense: "http://192.168.10.241:9000/18520696907/%E5%9B%BE%E7%89%875.png",
            //     superiorUnits: "aabc",
            //     coverage: "0",
            //     itemCount: 1,
            //     businessContact: "aa",
            //     businessPhone: "18520696907",
            //     technicalContact: "aa",
            //     technicalPhone: "18520696907",
            //     description: "拒绝原因",
            //     onlineItemCount: 0,
            //     auditTime: "2020-11-13 07:25:35",
            //     status: 2
            // },
            // {
            //     id: 15,
            //     baseUserId: 177,
            //     company: "创创",
            //     phone: "13926104093",
            //     socialCode: "123",
            //     mail: "aaa@q.com",
            //     companyLogo: "http://192.168.10.241:9000/13926104093/profileimg2.png",
            //     businessLicense: "http://192.168.10.241:9000/13926104093/profileimg5.png",
            //     superiorUnits: "能能",
            //     coverage: "440000000",
            //     itemCount: 9,
            //     businessContact: "鱼鱼",
            //     businessPhone: "13926104093",
            //     technicalContact: "鱼鱼",
            //     technicalPhone: "13926104093",
            //     onlineItemCount: 0,
            //     auditTime: "2020-11-03 12:56:00",
            //     status: 3
            // },
            // {
            //     id: 55,
            //     baseUserId: 177,
            //     company: "创创",
            //     phone: "13926104093",
            //     socialCode: "123",
            //     mail: "aaa@q.com",
            //     companyLogo: "http://192.168.10.241:9000/13926104093/profileimg2.png",
            //     businessLicense: "http://192.168.10.241:9000/13926104093/profileimg5.png",
            //     superiorUnits: "能能",
            //     coverage: "440000000",
            //     itemCount: 9,
            //     businessContact: "鱼鱼",
            //     businessPhone: "13926104093",
            //     technicalContact: "鱼鱼",
            //     technicalPhone: "13926104093",
            //     onlineItemCount: 0,
            //     auditTime: "2020-11-03 12:56:00",
            //     status: 3
            // }
        ]
    }
});

Mock.mock(/\/api\/sys\/queryDictByName\?.*/, "get", option => {
    let data = [];
    let params = option.url.match(/(?<=\?).+$/).toString();
    params = params.split("&");
    params = params.map(v => v.split("="));
    params = _.fromPairs(params);
    if (params.name === "dev_status") {
        data = [
            {
                "id": 10,
                "name": "status_dev",
                "label": "已开通",
                "labelValue": "3",
                "dictSort": 3,
                "status": 1,
                "description": "开发者状态"
            },
            {
                "id": 11,
                "name": "status_dev",
                "label": "帐号已停用",
                "labelValue": "4",
                "dictSort": 4,
                "status": 1,
                "description": "开发者状态"
            },
            {
                "id": 8,
                "name": "status_dev",
                "label": "待审核",
                "labelValue": "1",
                "dictSort": 1,
                "status": 1,
                "description": "开发者状态"
            },
            {
                "id": 9,
                "name": "status_dev",
                "label": "未通过审核",
                "labelValue": "2",
                "dictSort": 2,
                "status": 1,
                "description": "开发者状态"
            }
        ]
    }
    return {
        ...template,
        data
    };
});

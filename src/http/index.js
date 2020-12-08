import axios from "axios";
import vm from "@/main";

const http = axios.create();
let unAuth = false;
// 发送截流器
http.interceptors.request.use(
    config => {
        const token = window.sessionStorage.getItem("token");
        config.headers.Authorization = token;
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 接受截流器
http.interceptors.response.use(
    res => {
        switch (res.config.responseType) {
            case "blob":
            case "document":
                return res.data;
        }
        const { data, status, message } = res.data;
        switch (status) {
            case 200:
                return data;
            case 40301:
                if (!unAuth) {
                    unAuth = true;
                    vm.$alert("您的账号已超时或在其他设备登录，请重新登录", "警告", {
                        type: "error"
                    }).finally(() => {
                        vm.$router.push("/logout");
                        unAuth = false;
                    });
                }
                break;
            default:
                return Promise.reject(message);
        }
    },
    err => {
        return Promise.reject(err);
    }
);

export default http;

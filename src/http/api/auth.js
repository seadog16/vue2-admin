import http from "@/http";

const path = "/api/auth";

// 登录
export const getToken = params => http.post(path + "/jwt/token", params);

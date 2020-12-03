import http from "@/http";

const path = "/api/sys";

// 登录
export const queryMenu = params => http.get(path + "/menu", { params });

// 字典
export const queryDict = name => http.get(path + "/dict", { name });

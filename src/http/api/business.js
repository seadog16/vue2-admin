import http from "@/http";

const path = "/api/business";

// 列表
export const businessList = params => http.get(path + "/list", { params });

// 删除
export const businessRemove = params =>
    http.post(path + "/remove", params, {
        onsuccess: true
    });

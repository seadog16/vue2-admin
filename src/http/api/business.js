import http from "@/http";

const path = "/api/business";

// 数据
export const queryData = params => http.get(path + "/data", { params });

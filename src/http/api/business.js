import http from "@/http";

const path = "/api/business";

// 数据
export const queryBusiness = params => http.get(path + "/data", { params });

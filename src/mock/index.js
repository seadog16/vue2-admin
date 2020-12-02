import Mock from "mockjs";

const template = {
    status: 200
};

Mock.mock("/api/auth/token", "post", {
    ...template,
    data:
        "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiYW9zaiIsInVzZXJJZCI6IjE0IiwibmFtZSI6IumyjemxvCIsImV4cCI6MTYwNjg5NDcxNn0.FEFtJYQJ84ltVaqy4TqMgkxcSzuNox7WvhwPOtiq5n2Nw1Zha9OKmgELw_X20grtgQU-oPIjLdhy7cBx7xrXfwAXbv9RVMFLOxiGjv8ubOCpxxeiZqlb7TzRpjoCM8Qc7yBsCw-KOcr5mnOmGYP6RJV8p4LMDz4G5Du0rl8UfJ4"
});

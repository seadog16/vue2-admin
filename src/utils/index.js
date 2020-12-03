import $store from "@/store";
import $router from "@/router";

export const logout = () => {
    $store.commit("sys/SET_STATE", {
        menus: []
    });
    window.sessionStorage.removeItem("token");
    $router.push("/login");
};

export const recursive = (arrayObject, options = {}) => {
    const opt = {
        parent: "parentId",
        field: "id",
        children: "children",
        ...options
    };
    const arr = [...arrayObject];
    const collection = [];
    arr.forEach((v, i) => {
        const item = arr.find(j => j[opt.field] === v[opt.parent]);
        if (item) {
            if (!item[opt.children]) {
                item[opt.children] = [];
            }
            item[opt.children][item[opt.children]["length"]] = v;
            collection.push(i);
        }
    });
    collection.reverse();
    collection.forEach(v => {
        arr.splice(v, 1);
    });
    collection.reverse();
    return arr;
};

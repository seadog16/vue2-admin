import vm from "@/main";

export const logout = () => {
    const { $store, $router } = vm;
    $store.sys.setState({
        menus: [],
        name: "",
        userName: "",
        userId: "",
        elements: [],
        description: "",
        tabs: [],
        tree: [],
        moduleCode: "",
        role: ""
    });
    window.sessionStorage.removeItem("token");
    window.localStorage.removeItem("moduleCode");
    $router.push("/login");
};

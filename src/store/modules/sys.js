import Vue from "vue";
import { recursive } from "@/utils";
import { queryMenu, queryDict } from "@/http/api/sys";

const state = {
    menus: [],
    tabs: [],
    menuCollapse: false,
    dictionary: {}
};
const mutations = {
    SET_STATE(state, payload) {
        if (payload instanceof Object) {
            for (let i in payload) {
                if (Object.prototype.hasOwnProperty.call(payload, i)) {
                    Vue.set(state, i, payload[i]);
                }
            }
        }
    }
};
const getters = {
    menuTree: state => recursive(state.menus)
};
const actions = {
    queryMenu({ commit }) {
        return queryMenu().then(res => {
            commit("SET_STATE", {
                menus: res || []
            });
        });
    },
    queryDict({ commit, state }, payload) {
        return queryDict(payload).then(res => {
            commit("SET_STATE", {
                dictionary: {
                    ...state.dictionary,
                    [payload]: res || []
                }
            });
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

import Vue from "vue";
import Vuex from "vuex";
import UsersAPI from "@/api/UsersAPI";

Vue.use(Vuex);

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export const store = new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations,
    actions,
});

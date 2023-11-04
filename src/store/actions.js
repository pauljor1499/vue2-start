import axios from "axios";
const BASE_URL = "https://dummyjson.com/users";

export const reducePrice = ({ commit }, payload) => {
    commit("reducePrice", payload);
};

export const createUser = ({ commit }, payload) => {
    commit("addUser", payload);
};

export const getUsers = ({ commit }) => {
    axios.get(BASE_URL).then((response) => {
        commit("setProducts", response.data.users);
    });
};

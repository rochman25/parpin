import axios from "./../../axios.js";

export default {
    fetchDataPengguna({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/pengguna", { idP: localStorage.getItem("userInfo").id })
                .then(response => {
                    // console.log(response)
                    commit("SET_PENGGUNA", response.data.data.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    addItem({ commit }, item) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/pengguna/add", {
                    username: item.username,
                    email: item.email,
                    notelp: item.notelp,
                })
                .then(response => {
                    // console.log(response.data.data.microcontroller._id)
                    commit(
                        "ADD_ITEM",
                        Object.assign(item, { id: response.data.data.microcontroller._id })
                    );
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    updateItem({ commit }, item) {
        return new Promise((resolve, reject) => {
            axios
                .put(`/api/v1/pengguna/update/${item.id}`, {
                    username: item.username,
                    email: item.email,
                    notelp: item.notelp,
                })
                .then(response => {
                    // console.log(response)
                    commit("UPDATE_PENGGUNA", response.data.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    removeItem({ commit }, itemId) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`/api/v1/pengguna/delete?id=${itemId}`)
                .then(response => {
                    commit("REMOVE_ITEM", itemId);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
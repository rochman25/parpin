import axios from "./../../axios.js";

export default {
    fetchDataPengguna({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/pengguna")
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
                    nama: item.nama,
                    model: item.model,
                    connection_type: item.cp,
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
                .put(`/api/v1/microcontroller/update/${item.id}`, {
                    nama: item.nama,
                    model: item.model,
                    connection_type: item.cp,
                })
                .then(response => {
                    // console.log(response)
                    commit("UPDATE_MICRO", response.data.data);
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
                .delete(`/api/v1/microcontroller/delete?id=${itemId}`)
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
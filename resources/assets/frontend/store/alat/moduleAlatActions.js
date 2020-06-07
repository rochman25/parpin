import axios from "./../../axios.js";

export default {
    fetchDataAlat({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/alat")
                .then(response => {
                    // console.log(response.data.data)
                    commit("SET_ALAT", response.data.data.data);
                    commit("SET_TOTAL", response.data.data.total);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    fetchDetailAlat({ commit }, itemId) {
        return new Promise((resolve, reject) => {
            axios
                .get(`api/v1/alat?id=${itemId}`)
                .then(response => {
                    // console.log(itemId)
                    // console.log(response.data.data)
                    commit("SET_ALAT", response.data.data);
                    // commit("SET_TOTAL", response.data.data.total);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    fetchStatisticArus({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get(`api/v1/alat/arus`, {})
                .then(response => {
                    // commit("UPDATE_STAT", response.data.data);
                    console.log(response);
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
                .post("/api/v1/alat/add", {
                    nama: item.nama,
                    id_sensor: item.sensor_id,
                    id_micro: item.micro_id
                })
                .then(response => {
                    // console.log(response.data.data.microcontroller._id)
                    commit(
                        "ADD_ITEM",
                        Object.assign(item, { id: response.data.data.alat._id })
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
                .put(`/api/v1/alat/update/${item.id}`, {
                    nama: item.nama,
                    id_sensor: item.sensor_id,
                    id_micro: item.micro_id
                })
                .then(response => {
                    // console.log(response)
                    commit("UPDATE_ALAT", response.data.data);
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
                .delete(`/api/v1/alat/delete?id=${itemId}`)
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
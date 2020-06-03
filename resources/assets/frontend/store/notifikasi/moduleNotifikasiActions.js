import axios from "./../../axios.js";

export default {
    fetchDataAlat({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/notifikasi")
                .then(response => {
                    // console.log(response.data.data)
                    commit("SET_NOTIFIKASI", response.data.data.data);
                    commit("SET_TOTAL", response.data.data.total);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
}
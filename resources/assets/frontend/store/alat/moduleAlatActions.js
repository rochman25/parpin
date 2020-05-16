import axios from "./../../axios.js";

export default {
    fetchDataAlat({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/alat")
                .then(response => {
                    // console.log(response.data)
                    commit("SET_ALAT", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
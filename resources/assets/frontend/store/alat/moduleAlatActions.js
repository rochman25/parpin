import axios from "./../../axios.js";

export default {
    fetchDataAlat({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/alat")
                .then(response => {
                    // console.log(response)
                    commit("SET_ALAT", response.data.data.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
import axios from "./../../axios.js";

export default {
    fetchDataSensor({ commit }) {
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
    }
};
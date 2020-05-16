import axios from "./../../axios.js";

export default {
    fetchDataMicro({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/microcontroller")
                .then(response => {
                    // console.log(response);
                    commit("SET_MICRO", response.data.data.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
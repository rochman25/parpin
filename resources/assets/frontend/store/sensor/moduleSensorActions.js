import axios from "./../../axios.js";

export default {
    fetchDataSensor({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/sensor")
                .then(response => {
                    // console.log(response)
                    commit("SET_SENSOR", response.data.data.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};
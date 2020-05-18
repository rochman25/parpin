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
    },
    addItem({ commit }, item) {
        return new Promise((resolve, reject) => {
            axios.post("/api/v1/sensor/add", { nama: item.nama, model: item.model, work_range: item.work_range, water_pressure: item.water_pressure })
                .then((response) => {
                    // console.log(response.data.data.sensor._id)
                    commit('ADD_ITEM', Object.assign(item, { id: response.data.data.sensor._id }))
                    resolve(response)
                })
                .catch((error) => { reject(error) })
        })
    },
    updateItem({ commit }, item) {
        return new Promise((resolve, reject) => {
            axios.put(`/api/v1/sensor/update/${item.id}`, { nama: item.nama, model: item.model, work_range: item.work_range, water_pressure: item.water_pressure })
                .then((response) => {
                    // console.log(response)
                    commit('UPDATE_SENSOR', response.data.data)
                    resolve(response)
                })
                .catch((error) => { reject(error) })
        })
    },

};
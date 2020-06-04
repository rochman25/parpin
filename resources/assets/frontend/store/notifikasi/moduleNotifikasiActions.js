import axios from "./../../axios.js";

export default {
    fetchDataNotifikasi({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/notifikasi")
                .then(response => {
                    // console.log(response.data.data)
                    var total = 0;
                    commit("SET_NOTIFIKASI", response.data.data.data);
                    for (var i = 0; i < response.data.data.data.length; i++) {
                        // console.log(i)
                        if (response.data.data.data[i].status == 0) {
                            total += 1
                        }
                    }
                    commit("SET_TOTAL_NEW", total);
                    commit("SET_TOTAL", response.data.data.total)
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
                .put(`/api/v1/notifikasi/update/${item}`)
                .then(response => {
                    console.log(response)
                        // commit("UPDATE_NOTIFIKASI", response.data.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
}
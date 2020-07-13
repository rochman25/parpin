import Vue from "vue";
// Vuex Store
import store from './../store/store.js'

const userTopicSubscriptions = id => {
    // if (id) {
    let subscription = Vue.ws.socket.getSubscription("alat:" + id);
    if (!subscription) {
        subscription = Vue.ws.subscribe("alat:" + id);
    }
    // subscription.on("message", data => {
    //     console.log("Hello (event handled in src/WsSubscriptions.js)", data);
    // });
    // subscription.forEach(function(val, key) {
    // console.log(subscription);
    // });
    // }
};

export default async() => {
    return new Promise((resolve, reject) => {
        Vue.ws.disconnect();
        Vue.ws.connect({
            wsDomain: "ws://localhost:3333"

            // jwtToken: null
        }, {
            path: "adonis-ws"
                // reconnectionAttempts: 30,
                // reconnectionDelay: 100
        });
        Vue.ws.socket.on("open", () => {
            resolve();
            console.log("ws connected");
        });
        Vue.ws.socket.on("close", () => {
            console.log("ws disconnected");
        });
    });
};
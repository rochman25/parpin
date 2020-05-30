import Vue from "vue";
// Vuex Store
import store from './../store/store.js'

const userTopicSubscriptions = id => {
    // if (id) {
    let subscription = Vue.ws.socket.getSubscription("alat:" + id);
    if (!subscription) {
        subscription = Vue.ws.subscribe("alat:" + id);
    }
    subscription.on("message", data => {
        console.log("Hello (event handled in src/WsSubscriptions.js)", data);
    });
    // console.log(subscription);
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
            // console.log(store.watch())
            // console.log(store)
            // if (store.getters.getAlatId != null) {
            // userTopicSubscriptions(store.getters.getAlatId)
            // } else {
            userTopicSubscriptions("all")
                // }
            resolve();
            console.log("ws connected");
            // store.watch(
            //         () => store.getters.getAlatId,
            //         async id => {
            //             console.log(id)
            //         }
            //     )
            // console.log(store.getters.getAlatId)
        });
        Vue.ws.socket.on("close", () => {
            console.log("ws disconnected");
        });
        // FOR EXAMPLE you can observe for userId or another variable from Vuex
        store.watch(
            () => store.getters.getAlatId,
            async id => {
                if (id) {
                    userTopicSubscriptions(id);
                } else {
                    userTopicSubscriptions("*");
                }
                console.log(id)
            }
        );
    });
};
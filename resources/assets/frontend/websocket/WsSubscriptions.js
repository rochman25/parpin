import Vue from "vue";

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
            wsDomain: "ws://localhost:3333",

            // jwtToken: null
        }, {
            path: "adonis-ws"
                // reconnectionAttempts: 30,
                // reconnectionDelay: 100
        });
        Vue.ws.socket.on("open", () => {
            userTopicSubscriptions("*");
            resolve();
            console.log("ws connected");
        });
        Vue.ws.socket.on("close", () => {
            console.log("ws disconnected");
        });

        // FOR EXAMPLE you can observe for userId or another variable from Vuex
        store.watch(
            () => store.getters.vgUserUid,
            async id => {
                if (id) {
                    userTopicSubscriptions(uid);
                }
            }
        );
    });
};
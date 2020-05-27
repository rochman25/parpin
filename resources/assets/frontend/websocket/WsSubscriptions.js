import Vue from "vue";

const userTopicSubscriptions = id => {
    if (id) {
        let subscription = Vue.ws.socket.getSubscription(`alat`);
        if (!subscription) {
            subscription = Vue.ws.subscribe(`alat`);
        }
        subscription.on("message", data => {
            console.log('Hello (event handled in src/WsSubscriptions.js)', data)
        });
    }
};

export default async() => {
    return new Promise((resolve, reject) => {
        Vue.ws.disconnect()
        Vue.ws.connect({
            wsDomain: "ws://192.168.1.19:3333",
            jwtToken: null
        }, {
            path: 'adonis-ws',
            reconnectionAttempts: 300,
            reconnectionDelay: 5000
        });
        Vue.ws.socket.on("open", () => {
            userTopicSubscriptions(1);
            resolve()
        });

        // FOR EXAMPLE you can observe for userId or another variable from Vuex
        // store.watch(
        //   () => store.getters.vgUserUid,
        //   async id => {
        //     if (id) {
        //       userTopicSubscriptions(uid);
        //     }
        //   }
        // );
    })
};
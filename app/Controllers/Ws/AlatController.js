"use strict";

class AlatController {
    constructor({ socket, request }) {
        this.socket = socket;
        this.request = request;
        var user_count = 0;

        // console.log("new alat join with socket id: ", socket)
    }

    onMessage(message) {
        this.socket.broadcastToAll("message", message);
        console.log(message);
    }

}

module.exports = AlatController;
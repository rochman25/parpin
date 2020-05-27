'use strict'

class AlatController {
    constructor({ socket, request }) {
        this.socket = socket
        this.request = request
    }

    onMessage(message) {
        this.socket.broadcastToAll('message', message);
        console.log(message)
    }

}

module.exports = AlatController
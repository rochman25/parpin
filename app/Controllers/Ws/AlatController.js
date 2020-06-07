"use strict";
const Alat = use("App/Models/Alat");
const Arus = use("App/Models/ArusAlat");

class AlatController {
    constructor({ socket, request }) {
        this.socket = socket;
        this.request = request;
        // console.log("new alat join with socket id: ", socket)
    }

    onMessage(message) {
        this.socket.broadcastToAll("message", message);
        let alat_id = message.alat_id;
        let arusAlat = message.arus;
        let nama_alat = message.nama;
        // let alat = Arus.where("alat_id", alat_id).first();
        let arus = new Arus();
        arus.alat_id = alat_id;
        arus.nama_alat = nama_alat;
        arus.arus = arusAlat;
        arus.save();
        console.log(message);
    }

}

module.exports = AlatController;
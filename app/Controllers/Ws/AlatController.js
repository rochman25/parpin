"use strict";
const Alat = use("App/Models/Alat");
const Arus = use("App/Models/ArusAlat");
const Notifikasi = use("App/Models/Notifikasi");

class AlatController {
    constructor({ socket, request }) {
        this.socket = socket;
        this.request = request;
        // console.log("new alat join with socket id: ", socket)
    }

    onMessage(message) {
        this.socket.broadcastToAll("message", message);
        if (message.arus > 0) {
            setInterval(this.saveToDb(message), 60 * 1000);
        } else {
            // console.log("woi")
            this.saveNotification(message);
        }
        // console.log(message);
    }

    saveToDb(message) {
        let alat_id = message.alat_id;
        let arusAlat = message.arus;
        let nama_alat = message.nama_alat;
        // let alat = Arus.where("alat_id", alat_id).first();
        let arus = new Arus();
        arus.alat_id = alat_id;
        arus.nama_alat = nama_alat;
        arus.arus = arusAlat;
        arus.save();
    }

    async saveNotification(message) {
        let title = "";
        let msg = "";
        let idAlat = message.alat_id;
        let category = "";
        if (message.status == "online") {
            if (message.arus == 0) {
                title = "Jalur pipa sebelum " + message.nama_alat + " terjadi kebocoran"
                msg = message.nama_alat + " tidak dapat menerima arus air"
                category = "danger"
                let notifikasi = await Notifikasi.query().where("alat._id", idAlat).orderBy('created_at', 'desc').first()
                    // console.log(notifikasi)
                if (notifikasi != null) {
                    if (notifikasi.toJSON().status == 1) {
                        let alat = await Alat.find(idAlat);
                        let notifikasi = new Notifikasi();
                        notifikasi.title = title;
                        notifikasi.msg = msg;
                        notifikasi.alat = alat.toJSON();
                        notifikasi.category = category;
                        notifikasi.status = 0;
                        await notifikasi.save();
                    }
                } else {
                    let alat = await Alat.find(idAlat);
                    let notifikasi = new Notifikasi();
                    notifikasi.title = title;
                    notifikasi.msg = msg;
                    notifikasi.alat = alat.toJSON();
                    notifikasi.category = category;
                    notifikasi.status = 0;
                    await notifikasi.save();
                }
            }
        }
    }
}

module.exports = AlatController;
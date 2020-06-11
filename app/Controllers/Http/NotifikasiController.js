"use strict";
const BaseController = use("App/Controllers/Http/BaseController.js");
const Notifikasi = use("App/Models/Notifikasi");
const Alat = use("App/Models/Alat");

class NotifikasiController extends BaseController {
    async index({ request, response }) {
        let id = request.input("id");
        let page = request.input("page") ? request.input("page") : 1;
        let respon = {};
        let notifikasi = [];
        if (id != null) {
            notifikasi = await Notifikasi.find(id);
            if (notifikasi) {
                respon = {
                    message: this.dataFound,
                    data: notifikasi
                };
            } else {
                respon = {
                    message: this.dataNotFound,
                    data: notifikasi
                };
            }
            return response.json(this.successResponse(respon));
        }
        notifikasi = await Notifikasi.query().orderBy('created_at', 'desc').paginate(page, 10);
        if (notifikasi.toJSON().total > 0) {
            respon = {
                message: this.dataFound,
                data: notifikasi
            };
        } else {
            respon = {
                message: this.dataNotFound,
                data: notifikasi
            };
        }
        // console.log(alat.toJSON().total)
        return response.json(this.successResponse(respon));
    }

    async lastest({ response }) {
        let respon = {}
            // let notifikasi = await Notifikasi.query().orderBy('created_at', 'desc').first()
        let notifikasi = await Notifikasi.query().where("alat._id", "5ebe4aa8223616100e59d3cb").orderBy('created_at', 'desc').first()
        respon = {
            message: this.dataFound,
            data: notifikasi
        };
        return response.json(this.successResponse(respon));
    }

    async add_action({ request, response }) {
        let title = request.input("title");
        let msg = request.input("msg");
        let idAlat = request.input("id_alat");
        let category = request.input("category")
        let alat = await Alat.find(idAlat);

        let notifikasi = new Notifikasi();
        notifikasi.title = title;
        notifikasi.msg = msg;
        notifikasi.alat = alat.toJSON();
        notifikasi.category = category;
        notifikasi.status = 0;
        await notifikasi.save();
        let respon = {
            message: this.addSuccessMessage,
            data: {
                notifikasi: notifikasi
            }
        };
        return response.json(this.successResponse(respon));
    }

    async update_action({ request, response, params }) {
        let id = params.id;
        let notifikasi = await Notifikasi.find(id);
        let respon = {};

        if (notifikasi) {
            // let title = request.input("title");
            // let msg = request.input("msg");
            // let idAlat = request.input("id_alat");
            // let category = request.input("category");
            // let alat = await Alat.find(idAlat);
            // notifikasi.title = title;
            // notifikasi.msg = msg;
            // notifikasi.alat = alat.toJSON();
            // notifikasi.category = category;
            notifikasi.status = 1;
            await notifikasi.save()

            respon = {
                message: this.updateSuccessMessage,
                data: notifikasi
            };
            return response.json(this.successResponse(respon));
        } else {
            respon = {
                message: this.dataNotFound
            };
            return response.json(this.successResponse(respon));
        }
    }
}

module.exports = NotifikasiController;
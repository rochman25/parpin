"use strict";
const BaseController = use("App/Controllers/Http/BaseController.js");
const Notifikasi = use("App/Models/Notifikasi");

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
        notifikasi = await Notifikasi.query().paginate(page, 10);
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
}

module.exports = NotifikasiController;
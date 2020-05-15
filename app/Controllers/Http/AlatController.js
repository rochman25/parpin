'use strict'
const BaseController = use("App/Controllers/Http/BaseController.js");
const Alat = use("App/Models/Alat");

class AlatController extends BaseController {

    async index({ request, response }) {
        let id = request.input("id");
        let page = request.input("page") ? request.input("page") : 1;
        let respon = {};
        let alat = [];
        if (id != null) {
            alat = await Alat.find(id);
            if (alat) {
                respon = {
                    message: this.dataFound,
                    data: alat
                };
            } else {
                respon = {
                    message: this.dataNotFound,
                    data: alat
                };
            }
            return response.json(this.successResponse(respon));
        }
        alat = await Alat.query().paginate(page, 10);
        if (alat.total > 0) {
            respon = {
                message: this.dataFound,
                data: alat
            };
        } else {
            respon = {
                message: this.dataNotFound,
                data: alat
            };
        }
        return response.json(this.successResponse(respon));
    }

    async add_action({ request, response }) {

    }

    async update_action({ request, response }) {

    }

    async delete_action({ request, response }) {

    }


}

module.exports = AlatController
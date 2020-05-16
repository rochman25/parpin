"use strict";
const BaseController = use("App/Controllers/Http/BaseController.js");
const Alat = use("App/Models/Alat");
const Sensor = use("App/Models/Sensor");
const Micro = use("App/Models/Microcontroller");

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
        if (alat.toJSON().total > 0) {
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
        // console.log(alat.toJSON().total)
        return response.json(this.successResponse(respon));
    }

    async add_action({ request, response }) {
        let nama = request.input("nama");
        let ids = request.input("id_sensor");
        let idm = request.input("id_micro");
        let sensor = await Sensor.find(ids);
        let micro = await Micro.find(idm);
        let alat = new Alat();
        alat.nama = nama;
        alat.sensor = sensor.toJSON();
        alat.micro = micro.toJSON();
        await alat.save();
        let respon = {
            message: this.addSuccessMessage,
            data: {
                alat: alat
            }
        };

        // console.log(sensor.toJSON())
        return response.json(this.successResponse(respon));
    }

    async update_action({ request, response, params }) {
        let id = params.id;
        let alat = await Alat.find(id);
        let respon = {};
        if (alat) {
            let nama = request.input("nama");
            let ids = request.input("id_sensor");
            let idm = request.input("id_micro");
            let sensor = await Sensor.find(ids);
            let micro = await Micro.find(idm);

            alat.nama = nama;
            alat.sensor = sensor.toJSON()
            alat.micro = micro.toJSON()
            await alat.save()

            respon = {
                message: this.updateSuccessMessage,
                data: alat
            };
            return response.json(this.successResponse(respon));
        } else {
            respon = {
                message: this.dataNotFound
            };
            return response.json(this.successResponse(respon));
        }
    }

    async delete_action({ request, response }) {
        let id = request.input("id");
        let alat = await Alat.find(id);
        let respon = {};
        if (alat) {
            await alat.delete()
            respon = {
                message: this.deleteSuccessMessage,
            };
        } else {
            respon = {
                message: this.dataNotFound
            };
        }
        return response.json(this.successResponse(respon));
    }
}

module.exports = AlatController;
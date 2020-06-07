"use strict";
const BaseController = use("App/Controllers/Http/BaseController.js");
const Alat = use("App/Models/Alat");
const AlatArus = use("App/Models/ArusAlat");
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

    async getStatisticArus({ request, response }) {
        let respon = {};
        let id = request.input("id");
        let arus = [];

        if (id != null) {
            arus = await AlatArus.where("alat_id", id).fetch();
            respon = {
                message: this.dataNotFound,
                data: arus
            };
            return response.json(this.successResponse(respon));
        }
        arus = await AlatArus.all();
        if (arus) {
            respon = {
                message: this.dataFound,
                data: arus
            };
        } else {
            respon = {
                message: this.dataNotFound,
                data: arus
            };
        }
        return response.json(this.successResponse(respon));
    }

    async add_action({ request, response }) {
        let nama = request.input("nama");
        let ids = request.input("id_sensor");
        let idm = request.input("id_micro");
        let sensor = await Sensor.find(ids);
        let micro = await Micro.find(idm);
        let latitude = request.input("lat");
        let longitude = request.input("long");
        let photo = request.input("photo");
        let alat = new Alat();
        alat.nama = nama;
        alat.sensor = sensor.toJSON();
        alat.micro = micro.toJSON();
        alat.latitude = latitude;
        alat.longitude = longitude;
        alat.photo = photo;
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
            let latitude = request.input("lat");
            let longitude = request.input("long");
            let photo = request.input("photo");

            alat.nama = nama;
            alat.sensor = sensor.toJSON();
            alat.micro = micro.toJSON();
            alat.latitude = latitude;
            alat.longitude = longitude;
            alat.photo = photo;
            await alat.save();

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
            await alat.delete();
            respon = {
                message: this.deleteSuccessMessage
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
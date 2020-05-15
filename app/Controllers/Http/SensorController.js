"use strict";
const BaseController = use("App/Controllers/Http/BaseController.js");
const Sensor = use("App/Models/Sensor");

class SensorController extends BaseController {
    async index({ request, response }) {
        let id = request.input("id");
        let page = request.input("page") ? request.input("page") : 1;
        let respon = {};
        let sensor = [];
        if (id != null) {
            sensor = await Sensor.find(id);
            if (sensor) {
                respon = {
                    message: this.dataFound,
                    data: sensor
                };
            } else {
                respon = {
                    message: this.dataNotFound,
                    data: sensor
                };
            }
            return response.json(this.successResponse(respon));
        }
        sensor = await Sensor.query().paginate(page, 10);
        if (sensor.total > 0) {
            respon = {
                message: this.dataFound,
                data: sensor
            };
        } else {
            respon = {
                message: this.dataNotFound,
                data: sensor
            };
        }
        return response.json(this.successResponse(respon));
    }

    async add_action({ request, response }) {
        let nama = request.input("nama");
        let model = request.input("model");
        let wr = request.input("work_range");
        let wp = request.input("water_pressure");
        let sensor = new Sensor();
        sensor.nama = nama;
        sensor.model = model;
        sensor.working_range = wr;
        sensor.water_pressure = wp;
        await sensor.save();
        let respon = {
            message: this.addSuccessMessage,
            data: {
                sensor: sensor
            }
        };
        return response.json(this.successResponse(respon));
    }

    async update_action({ request, response, params }) {
        let id = params.id;
        // let sensor = await Sensor.where('_id', id).fetch();
        let sensor = await Sensor.find(id);
        let respon = {};
        if (sensor) {
            let nama = request.input("nama");
            let model = request.input("model");
            let wr = request.input("work_range");
            let wp = request.input("water_pressure");

            sensor.nama = nama;
            sensor.model = model;
            sensor.working_range = wr;
            sensor.water_pressure = wp;

            await sensor.save();

            respon = {
                message: this.updateSuccessMessage,
                data: sensor
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
        let sensor = await Sensor.find(id);
        let respon = {};
        if (sensor) {
            await sensor.delete()
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

module.exports = SensorController;
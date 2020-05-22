'use strict'
const BaseController = use("App/Controllers/Http/BaseController.js");
const Micro = use("App/Models/Microcontroller");

class MicroController extends BaseController {

    async index({ request, response }) {
        let id = request.input("id");
        let page = request.input("page") ? request.input("page") : 1;
        let respon = {};
        let microcontroller = [];
        if (id != null) {
            microcontroller = await Micro.find(id);
            if (microcontroller) {
                respon = {
                    message: this.dataFound,
                    data: microcontroller
                };
            } else {
                respon = {
                    message: this.dataNotFound,
                    data: microcontroller
                };
            }
            return response.json(this.successResponse(respon));
        }
        microcontroller = await Micro.query().paginate(page, 10);
        if (microcontroller.toJSON().total > 0) {
            respon = {
                message: this.dataFound,
                data: microcontroller
            };
        } else {
            respon = {
                message: this.dataNotFound,
                data: microcontroller
            };
        }
        return response.json(this.successResponse(respon));
    }

    async add_action({ request, response }) {
        let nama = request.input("nama");
        let model = request.input("model");
        let ct = request.input("connection_type");
        let photo = request.input("photo");

        let microcontroller = new Micro();
        microcontroller.nama = nama;
        microcontroller.model = model;
        microcontroller.connection_type = ct;
        microcontroller.photo = photo;
        await microcontroller.save();
        let respon = {
            message: this.addSuccessMessage,
            data: {
                microcontroller: microcontroller
            }
        };
        return response.json(this.successResponse(respon));
    }

    async update_action({ request, response, params }) {
        let id = params.id;
        let microcontroller = await Micro.find(id);
        let respon = {};
        if (microcontroller) {
            let nama = request.input("nama");
            let model = request.input("model");
            let ct = request.input("connection_type");
            let photo = request.input("photo");

            microcontroller.nama = nama;
            microcontroller.model = model;
            microcontroller.connection_type = ct;
            microcontroller.photo = photo;

            await microcontroller.save();

            respon = {
                message: this.updateSuccessMessage,
                data: microcontroller
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
        let microcontroller = await Micro.find(id);
        let respon = {};
        if (microcontroller) {
            await microcontroller.delete()
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

module.exports = MicroController
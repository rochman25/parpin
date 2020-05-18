"use strict";
const BaseController = use("App/Controllers/Http/BaseController.js");
const Pengguna = use("App/Models/Pengguna");

class PenggunaController extends BaseController {
    async index({ request, response }) {
        return response.json(this.successResponse());
    }

    async login_action({ request, response, auth }) {
        const username = request.input("username");
        const password = request.input("password");
        try {
            let pengguna = await Pengguna.where("username", username).first();
            if (pengguna != null) {
                if (await auth.attempt(username, password)) {
                    let token = await auth.generate(pengguna);
                    let respon = {
                        message: this.loginSuccessMessage,
                        data: {
                            pengguna: pengguna,
                            token: token
                        }
                    };
                    return response.json(this.successResponse(respon));
                }
            } else {
                let respon = {
                    message: this.emailNotFound
                };
                return response.json(this.errorResponse(respon));
            }
        } catch (e) {
            return response.json(this.errorResponse(e));
        }
    }

    async fetch({ request, response }) {
        let id = request.input("id");
        let page = request.input("page") ? request.input("page") : 1;
        let respon = {};
        let pengguna = [];
        if (id != null) {
            pengguna = await Pengguna.find(id);
            if (pengguna) {
                respon = {
                    message: this.dataFound,
                    data: pengguna
                };
            } else {
                respon = {
                    message: this.dataNotFound,
                    data: pengguna
                };
            }
            return response.json(this.successResponse(respon));
        }
        pengguna = await Pengguna.query().paginate(page, 10);
        if (pengguna.toJSON().total > 0) {
            respon = {
                message: this.dataFound,
                data: pengguna
            };
        } else {
            respon = {
                message: this.dataNotFound,
                data: pengguna
            };
        }
        return response.json(this.successResponse(respon));
    }

    async add_action({ request, response }) {
        let username = request.input("username");
        let password = request.input("password");
        let email = request.input("email");
        let no_telp = request.input("notelp");
        let pengguna = new Pengguna();
        pengguna.username = username;
        pengguna.password = password;
        pengguna.email = email;
        pengguna.no_telp = no_telp;
        await pengguna.save();
        let respon = {
            message: this.addSuccessMessage,
            data: {
                pengguna: pengguna
            }
        };
        return response.json(this.successResponse(respon));
    }

    async update_action({ request, response, params }) {

    }

    async delete_action({ request, response }) {

    }

    async list_data({ response }) {}
}

module.exports = PenggunaController;
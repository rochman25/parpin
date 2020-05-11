'use strict'
const BaseController = use("App/Controllers/Http/BaseController");
class Pengguna extends BaseController {
    get rules() {
        return {
            // validation rules
            username: 'required|string|unique:pengguna,username',
            email: 'email|unique:pengguna,email',
            password: 'required|confirmed'
        }
    }

    get messages() {
        return {
            // validation messages
            'username.required': 'username required',
            'username.string': 'username must string',
            'username.unique': 'username already taken',
            'email.required': 'email required',
            'email.email': 'email not valid',
            'email.unique': 'email already taken',
            'password.required': 'password required',
            'password.confirmed': 'password confirmation not same'
        }
    }

    async fails(errorMessages) {
        let respon = {
            message: this.validationMessage,
            error: errorMessages,
        };
        return this.ctx.response.json(this.errorResponse(respon));
    }
}

module.exports = Pengguna
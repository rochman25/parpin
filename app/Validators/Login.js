'use strict'
const BaseController = use("App/Controllers/Http/BaseController");
class Login extends BaseController {
    get rules() {
        return {
            // validation rules
            username: 'required|string',
            password: 'required'
        }
    }
    get messages() {
        return {
            // validation messages
            'username.required': 'username required',
            'username.string': 'username must string',
            'password.required': 'password required',
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

module.exports = Login
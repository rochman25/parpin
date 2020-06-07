"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ArusAlat extends Model {
    static get collection() {
        return "arus_test";
    }
}

module.exports = ArusAlat;
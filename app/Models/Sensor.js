'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sensor extends Model {

    static get collection() {
        return 'sensor'
    }

}

module.exports = Sensor
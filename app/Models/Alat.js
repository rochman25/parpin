'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alat extends Model {

    static get collection() {
        return 'alat'
    }

}

module.exports = Alat
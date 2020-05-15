'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Microcontroller extends Model {

    static get collection() {
        return 'microcontroller'
    }

}

module.exports = Microcontroller
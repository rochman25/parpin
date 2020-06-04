'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Notifikasi extends Model {

    static get collection() {
        return 'notifikasi'
    }
}

module.exports = Notifikasi
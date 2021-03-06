'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Projecto extends Model {
    user (){
        return this.belongsTo('App/Models/User')
    }

    tareas (){
        return this.hasMany('App/Models/Tarea')
    }
}

module.exports = Projecto

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Tarea = new Schema({
    nombre:{
        type:String
    },
    descripcion:{
        type:String
    }
})

module.exports = mongoose.model('Tarea',Tarea)
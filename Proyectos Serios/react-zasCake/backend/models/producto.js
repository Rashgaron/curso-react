const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({

    id_producto:{
        type:String,
        // required:true,
        trim:true
    },
    nombre:{
        type:String,
        // required:true,
        trim:true
    },
    referencia:{
        type:String,
        // required:true,
        trim:true
    },
    descripcion:{
        type:String,
        // required:true,
        trim:true
    },
    precio_distribuidores:{
        type:Number,
        // required:true
    },
    precio_neto:{
        type:Number,
        // required:true
    },
    iva:{
        type:Number,
        // required:true
    },
    precio_bruto:{
        type:Number,
        // required:true
    },
    categoria_principal:{
        type:String,
        trim:true,
        // required:true
    },
    url_imagen_principal:{
        type:String,
        trim:true,
        // required:true
    },
    jerarquia_marca:{
        type:String,
        trim:true,
        // required:true
    },
    




})

module.exports = mongoose.model('Producto', ProductoSchema)
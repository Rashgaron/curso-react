const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const producto = require("../models/producto");

// api/productos

// Obtener Productos

router.get('/:categoria', productosController.obtenerProductos);

router.get('/busqueda/:busqueda', productosController.buscarProducto)

// Crear producto, pero no lo voy a usar
router.post('/', productosController.crearProducto)



module.exports = router;

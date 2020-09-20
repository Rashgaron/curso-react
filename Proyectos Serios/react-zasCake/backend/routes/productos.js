const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// api/productos

// Obtener Productos

router.get('/:categoria', productosController.obtenerProductos);

router.post('/', productosController.crearProducto)


module.exports = router;

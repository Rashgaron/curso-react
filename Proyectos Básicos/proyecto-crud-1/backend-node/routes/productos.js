const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const { check } = require('express-validator');

// //api/productos

router.post('/', productoController.crearProducto);

router.get('/', productoController.obtenerProductos);

router.put(
	'/:id',
	[ check('nombre', 'El nombre es obligatorio').notEmpty(), check('precio', 'El precio es obligatorio').notEmpty() ],
	productoController.editarProducto
);

router.delete('/:id', productoController.eliminarProducto);

module.exports = router;

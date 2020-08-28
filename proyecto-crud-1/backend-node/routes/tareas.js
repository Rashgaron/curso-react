const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const { check } = require('express-validator');

//api/tareas

router.post(
	'/',
	[
		check('nombre', 'El nombre es obligatorio').notEmpty(),
		check('detalles', 'Los detalles son obligatorios').notEmpty()
	],
	tareaController.crearTarea
);

router.get('/', tareaController.obtenerTareas);

router.put(
	'/:id',
	[
		check('nombre', 'El nombre es obligatorio').notEmpty(),
		check('detalles', 'Los detalles son obligatorios').notEmpty()
	],
	tareaController.editarTarea
);

router.delete('/:id', tareaController.eliminarTarea);

module.exports = router;

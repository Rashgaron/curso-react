const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos

// Crear proyecto

router.post(
	'/',
	[ check('nombre', 'El nombre del proyecto es obligatorio').notEmpty() ],
	proyectoController.crearProyecto
);


router.get(
    '/',
    proyectoController.obtenerProyectos
)


router.delete(
    '/:id',
    proyectoController.eliminarProyecto
)
module.exports = router;

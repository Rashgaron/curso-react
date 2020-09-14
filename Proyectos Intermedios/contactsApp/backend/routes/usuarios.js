const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

const { check } = require('express-validator');

// Crea un usuario

// usuario

router.post(
	'/',
	[check('email', 'El email es obligatorio').notEmpty(), check('password', 'El password es obligatorio').notEmpty()],

	usuarioController.crearUsuario
);
module.exports = router;

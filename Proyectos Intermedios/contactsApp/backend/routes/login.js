const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const loginController = require('../controllers/loginController');
const auth = require('../middleware/auth');
// login

// Iniciar Sesion

router.post(
	'/',
	[check('email', 'El email es obligatorio').notEmpty(), check('password', 'El password es obligatorio').notEmpty()],
	loginController.iniciarSesion
);

// Obtener usuario autenticado

router.get('/', auth, loginController.usuarioAutenticado);

module.exports = router;

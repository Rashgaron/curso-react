const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.iniciarSesion = async (req, res) => {
	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	const { email, password } = req.body;

	try {
		// Revisar que el usuario esté registrado

		let usuario = await Usuario.findOne({ email });
		if (!usuario) {
			return res.status(400).json({ msg: 'El usuario no está registrado' });
		} else {
			// verificamos el password
			const passCorrecto = await bcryptjs.compare(password, usuario.password);
			if (!passCorrecto) return res.status(400).json({ msg: 'Password incorrecto' });
		}

		const payload = {
			usuario: {
				id: usuario.id,
			},
		};

		jwt.sign(
			payload,
			process.env.SECRETA,
			{
				expiresIn: 3600,
			},
			(err, token) => {
				if (err) throw err;
				res.status(200).json({ token });
			}
		);
	} catch (error) {
		console.log(error);
		return res.status(400).json({ msg: 'Hubo un error' });
	}
};

// Obtener usuario autenticado

exports.usuarioAutenticado = async (req, res) => {
	try {
		const usuario = await Usuario.findById(req.usuario.id).select('password');
		res.status(200).json({ usuario });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: 'Hubo un error' });
	}
};

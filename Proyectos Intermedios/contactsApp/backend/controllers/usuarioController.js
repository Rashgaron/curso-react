const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {
	// Reviso errores

	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	// extraigo email y password

	const { email, password } = req.body;

	try {
		// Reviso si hay otro usuario con mismo mail

		let usuario = await Usuario.findOne({ email });

		if (usuario) {
			return res.status(400).json({
				msg: 'El usuario ya existe',
			});
		}

		// Creo nuevo usuario

		usuario = new Usuario(req.body);

		// Codificar password

		const salt = await bcryptjs.genSalt(10);
		usuario.password = await bcryptjs.hash(password, salt);

		// Guardo el nuevo usuario

		await usuario.save();

		// Creo y firmo el jwt

		const payload = {
			usuario: {
				id: usuario.id,
			},
		};
		// Firmo el token

		jwt.sign(payload, process.env.SECRETA, { expiresIn: 3600 }, (err, token) => {
			if (err) throw err;
			res.status(200).json({ token });
		});
	} catch (error) {
		console.log(error);
		res.status(400).send('Hubo un error');
	}
};

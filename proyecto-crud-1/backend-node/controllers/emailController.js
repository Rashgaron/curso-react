exports.enviarEmail = async (req, res) => {
	// Requerimos el paquete

	var nodemailer = require('nodemailer');

	// Creamos el objeto de transporte

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'danisendmail@gmail.com',
			pass: 'daniel123321432'
		}
	});

	var mensaje = req.body.contenido;

	var mailOptions = {
		from: 'danisendmail@gmail.com',
		to: req.body.to,
		subject: 'Asunto del correo',
		text: mensaje
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			return res.status(400).json({ msg: error });
		} else {
			console.log('Email enviado:' + info.response);
			return res.status(200).json({ msg: 'Enviado con exito' });
		}
	});
};

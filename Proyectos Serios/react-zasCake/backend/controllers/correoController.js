var nodemailer = require('nodemailer');
require('dotenv').config({ path: 'variables.env' });

var transporter = nodemailer.createTransport({
	service: 'gmail', //al usar un servicio bien conocido, no es necesario proveer un nombre de servidor.
	auth: {
		user: 'infozascake@gmail.com',
		pass: `${process.env.PASSWORD}`,
	},
});
exports.enviarCorreo = async (req, res) => {
	const { email, consulta } = req.body;
	let texto = `
    <p>Querido cliente, hemos recibido su propuesta y le contestaremos en breves.
    Muchas gracias por confiar en nosotros.</p>
    
    `;

	var mailOptions = {
		from: 'infozascake@gmail.com',
		to: `${email}`,
		subject: 'Querido Cliente',
		html: `${texto}`,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		console.log('senMail returned!');
		if (error) {
			res.status(400).json({ msg: 'Error al enviar el correo' });
			console.log('ERROR!!!!!!', error);
		} else {
			res.status(200).json({ msg: 'Correo enviado correctamente' });
			console.log('Email sent: ' + info.response);
		}
	});

	texto = `
    <p>${email}</p>
    <p>${consulta}</p>`;
	var mailOptions = {
		from: 'infozascake@gmail.com',
		to: 'infozascake@gmail.com',
		subject: 'Nueva Consulta',
		html: `${texto}`,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		console.log('senMail returned!');
		if (error) {
			res.status(400).json({ msg: 'Error al enviar el correo' });
			console.log('ERROR!!!!!!', error);
		} else {
			res.status(200).json({ msg: 'Correo enviado correctamente' });
			console.log('Email sent: ' + info.response);
		}
	});
};

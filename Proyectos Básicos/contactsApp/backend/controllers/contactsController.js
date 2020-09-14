// Obtener Contactos
const axios = require('axios');


exports.obtenerContactos = async (req, res) => {
	try {
		let contactos = await axios.get('https://exercise.goldenspear.com/contacts.json');
		
		res.status(200).send(JSON.parse(JSON.stringify(contactos.data)));
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: 'Error al obtener los contactos' });
	}
};

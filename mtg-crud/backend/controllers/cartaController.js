const Carta = require('../models/carta');

exports.agregarCarta = async (req, res) => {
	try {
		// Crear una nueva carta

		const carta = new Carta(req.body);

		// todo: Guardar creador

		// Guardar carta

		carta.save();
		res.status(200).json({ msg: 'Carta guardada con éxito' });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};
exports.obtenerCartas = async (req, res) => {
	try {
		const cartas = await Carta.find();
		res.status(200).json({ cartas });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

exports.eliminarCarta = async (req, res) => {
	try {
		await Carta.findOneAndRemove({ _id: req.params.id });
		res.status(200).json({ msg: 'Proyecto eliminado' });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

exports.editarCarta = async (req, res) => {
	try {
		// Extraer carta y comporbar si existe

		const { id, cantidad } = req.body;

		let carta = await Carta.findOne({ id });

		if (!carta) {
			return res.status(400).json({ msg: 'No existe esa carta' });
		} else {
			carta.cantidad = cantidad;
			await Carta.findOneAndUpdate({ id }, carta, { new: true });
			return res.status(200).json({ carta });
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

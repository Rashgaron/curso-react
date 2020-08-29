const Producto = require('../models/Producto');
const { validationResult } = require('express-validator');
// Crea una Producto nueva

exports.crearProducto = async (req, res) => {
	// Revisar si hay errores

	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	try {
		const producto = new Producto(req.body);
		producto.save()
		res.status(200).json({ producto });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: 'Error al crear la Producto' });
	}
};

// Obtener Productos

exports.obtenerProductos = async (req, res) => {
	try {
		const Productos = await Producto.find();
		console.log(Productos);
		res.status(200).json({ Productos });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

// Editar Productos

exports.editarProducto = async (req, res) => {
	// Revisar si hay errores

	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	try {
		const producto = {};
		producto.nombre = req.body.nombre;
		producto.detalles = req.body.detalles;
		await Producto.findOneAndUpdate({ _id: req.params.id }, producto, {
			new: true
		});
		res.status(200).json({ msg: 'Producto actualizada con éxito' });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

// Eliminar Producto

exports.eliminarProducto = async (req, res) => {
	try {
		await Producto.findByIdAndDelete(req.params.id);

		res.status(200).json({ msg: 'Producto eliminada con éxito' });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
};

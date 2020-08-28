const Tarea = require('../models/Tarea');
const { validationResult } = require('express-validator');
// Crea una tarea nueva

exports.crearTarea = async (req, res) => {
	// Revisar si hay errores

	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	try {
		const tarea = new Tarea(req.body);
		await tarea.save();
		res.status(200).json({ tarea });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: 'Error al crear la Tarea' });
	}
};

// Obtener Tareas

exports.obtenerTareas = async (req, res) => {
	try {
		const tareas = await Tarea.find();
		console.log(tareas);
		res.status(200).json({ tareas });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

// Editar Tareas

exports.editarTarea = async (req, res) => {
	// Revisar si hay errores

	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ errores: errores.array() });
	}

	try {
		const tarea = {};
		tarea.nombre = req.body.nombre;
		tarea.detalles = req.body.detalles;
		await Tarea.findOneAndUpdate({ _id: req.params.id }, tarea, {
			new: true
		});
		res.status(200).json({ msg: 'Tarea actualizada con éxito' });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

// Eliminar Tarea

exports.eliminarTarea = async (req, res) => {
	try {
		await Tarea.findByIdAndDelete(req.params.id);

		res.status(200).json({ msg: 'Tarea eliminada con éxito' });
	} catch (error) {
		res.status(400).json({ msg: error });
	}
};

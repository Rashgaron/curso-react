const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async (req, res) => {
	// Revisar si no hay errores

	const errores = validationResult(req);
	if (!errores.isEmpty()) {
		return res.status(400).json({ msg: errores.array() });
	}

	try {
		// Crear un nuevo proyecto

		const proyecto = new Proyecto(req.body);

		// guardar Proyecto

		await proyecto.save();
		res.status(200).json({ msg: 'Guardado con éxito' });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: 'Hubo un error' });
	}
};

exports.obtenerProyectos = async (req, res) => {
	try {
		const resultado = await Proyecto.find();
		res.status(200).json({ resultado });
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};



exports.eliminarProyecto = async (req,res) =>{
    try {
        

        await Proyecto.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:'Eliminado con éxito'})

    } catch (error) {
        console.log(error)
        res.status(400).json({msg:error})
    }
}
const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
	nombre: {
		type: String,
		// required: true,
		trim: true
	},
	precio: {
		type: Number,
		// required: true,
		trim: true
	}
});

module.exports = mongoose.model('Tarea', TareaSchema);

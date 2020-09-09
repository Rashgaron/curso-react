const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
	email: {
		type: 'String',
		required: true,
		trim: true,
	},
	password: {
		type: 'String',
		required: true,
		trim: true,
	},
});

module.exports = mongoose.model('Usuario', UsuariosSchema);

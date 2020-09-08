const mongoose = require('mongoose');

const CartaSchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
		trim: true,
	},
	name: {
		type: String,
		required: true,
		trim: true,
	},
	lang: {
		type: 'String',
		required: true,
		trim: true,
	},
	img_large: {
		type: 'String',
		required: true,
		trim: true,
	},
	cantidad: {
		type: 'Number',
		required: true,
		trim: true,
	},
	propietario:{
		type:'String',
		required:true,
		
	}
});


module.exports = mongoose.model('Carta',CartaSchema)
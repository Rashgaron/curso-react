const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://rashgaron:1234@cluster0.8pwhb.mongodb.net/mtg-db?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});
		console.log('DB connected sucessfully');
	} catch (error) {
		console.log(error);
		process.exit(1); //Detener la app
	}
};
module.exports = conectarDB;

const mongoose = require('mongoose')
const uri = 'mongodb+srv://rashgaron:12345@cluster0.8pwhb.mongodb.net/<dani>?retryWrites=true&w=majority';

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('‘MongoDB Connected…’');
	})
	.catch((err) => console.log(err));

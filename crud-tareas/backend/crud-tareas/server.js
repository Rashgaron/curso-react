const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const tareaRoutes = express.Router();
const PORT = 4000;
let Tarea = require('./tarea.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://rashgaron:1234@cluster0.8pwhb.mongodb.net/crud-tareas?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', function() {
	console.log('MongoDB database connection established successfully');
});

tareaRoutes.route('/').get(function(req, res) {
	Tarea.find(function(err, tareas) {
		if (err) {
			console.log(err);
		} else {
			res.json(tareas);
		}
	});
});

tareaRoutes.route('/add').post(function(req, res) {
	let tarea = new Tarea(req.body);
	tarea
		.save()
		.then((tarea) => {
			res.status(200).json({ tarea: 'añadido correctamente' });
		})
		.catch((err) => {
			res.status(400).send('algo ha fallado');
			console.log('error');
		});
});

tareaRoutes.route('/delete/:id').post(function(req, res) {
	Tarea.findByIdAndRemove(req.params.id, function(err) {
		if (err) console.log(err);
		else {
			res.status(200).send('eliminado');
		}
	});
});

app.use('/tareas', tareaRoutes);
// app.listen(process.env.PORT || 5000)

app.listen(PORT)
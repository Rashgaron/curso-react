const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creo el servidor

const app = express();

// Conecto a DB

conectarDB();

// //Habilito cors

app.use(cors());

// Habilito express.json

app.use(express.json({ extended: true }));

// Puerto de la app

const PORT = process.env.PORT || 4000;

// Importar Rutas

app.use('/contacts', require('./routes/contacts'));

app.use('/usuario', require('./routes/usuarios'))


app.use('/login', require('./routes/login'))


// Página principal

app.get('/', (req, res) => {
	res.send('Backend de Contactos');
});




// Arrancar la app

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server is running on port -> ${PORT}`);
});

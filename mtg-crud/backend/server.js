const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
// Crear el servidor

const app = express();

// Conectar a la base de datos

conectarDB();

// Habilitar cors

app.use(cors());

// Habilitar express.json

app.use(express.json({ extended: true }));

// Puerto de la app

const PORT = process.env.PORT || 4000;

// Importar rutas

app.use('/api/cartas', require('./routes/cartas'));

// Definir la página principal

app.get('/', (req, res) => {
	res.send('Hola Mundo');
});

// Arrancar la app

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server running on port -> ${PORT}`);
});

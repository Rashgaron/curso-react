const express = require('express');
const cors = require('cors');

// Crear el servidor

const app = express();

// Habilitar cors

app.use(cors());

// Habilitar express.json()

app.use(express.json({ extended: true }));

// Puerto de la app

const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/correo', require('./routes/correo'))
// Definir página principal

app.get('/', (req, res) => {
	res.send('Hola');
});

// Arrancar la app

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server running on port -> ${PORT}`);
});

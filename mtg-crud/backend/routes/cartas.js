const express = require('express');
const router = express.Router();
const cartaController = require('../controllers/cartaController');

// Agrega cartas
// api/cartas

// Crear Carta

router.post('/', cartaController.agregarCarta);

// Obtener Cartas

router.get('/', cartaController.obtenerCartas);

// Eliminar Cartas

router.delete('/:id', cartaController.eliminarCarta);

module.exports = router;

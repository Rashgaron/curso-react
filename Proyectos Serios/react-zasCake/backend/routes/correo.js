const express = require('express');
const router = express.Router();
const correoController = require('../controllers/correoController');

// Envía correo
// /api/correo
router.post('/', correoController.enviarCorreo);

module.exports = router;

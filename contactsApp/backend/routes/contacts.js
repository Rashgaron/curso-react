const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// contacts

router.get(
	'/',

	contactsController.obtenerContactos
);

module.exports = router;

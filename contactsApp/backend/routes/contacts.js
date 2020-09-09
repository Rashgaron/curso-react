const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const auth = require('../middleware/auth');
// contacts

router.get(
	'/',
	auth,
	contactsController.obtenerContactos
);

module.exports = router;

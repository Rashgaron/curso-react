const express = require('express')
const router = express.Router()
const emailController = require('../controllers/emailController')


// api/email
// Enviar un email

router.post(
    '/',
    emailController.enviarEmail
)


module.exports = router
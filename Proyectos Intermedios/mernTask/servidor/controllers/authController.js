const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer email y pass

  const { email, password } = req.body;

  try {
    // Revisar que sea un usuario registrado

    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    } else {
      // Revisar pass correcto
      //password es el que hemos puesto en el form
      //usuario.password es el de la base de datos
      const passCorrecto = await bcryptjs.compare(password, usuario.password);
      if (!passCorrecto)
        return res.status(400).json({ msg: "Password incorrecto" });
    }
    // Crear y firmar el jwt

    const payload = {
      usuario: {
        id: usuario.id,
      },
    };
    // Firmar el token
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(200).send("error");
  }
};

// Obtiene que usuario está autenticado

exports.usuarioAutenticado = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id).select("-password");
    res.status(200).json({ usuario });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

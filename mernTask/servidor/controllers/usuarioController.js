const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
exports.crearUsuario = async (req, res) => {
  //    Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // extraer email y password

  const { email, password } = req.body;

  try {
    // Revisar que el usuario registrado sea único

    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        msg: "El usuario ya existe",
      });
    }
    // Crea nuevo usuario
    usuario = new Usuario(req.body);
    // Hashear el password

    const salt = await bcryptjs.genSalt(10);
    usuario.password = await bcryptjs.hash(password, salt);

    console.log(usuario.password);
    // Guardar usuario

    await usuario.save();

    // Crear y firmar el jwt

    const payload = {
        usuario:{
            id: usuario.id
        }
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
    res.status(400).send("Hubo un error");
  }
};


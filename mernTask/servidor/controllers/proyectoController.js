const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");
exports.crearProyecto = async (req, res) => {
  //   Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  try {
    // Crear un nuevo proyecto

    const proyecto = new Proyecto(req.body);
    // Guardar creador

    proyecto.creador = req.usuario.id;

    // Guardar proyecto

    proyecto.save();

    res.json(proyecto);
  } catch (err) {
    console.log(err);
    res.status(500).send("Hubo un error");
  }
};

// Obtiene todos los proyectos del usuario actual

exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({
      creado: -1,
    });
    res.json({ proyectos });
  } catch (err) {
    console.log(err);
    res.status(500).send("Hubo un error");
  }
};

// Actualiza un proyecto
exports.actualizarProyecto = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer la información del proyecto

  const { nombre } = req.body;

  const nuevoProyecto = {};

  if (nombre) {
    nuevoProyecto.nombre = nombre;
  }

  try {
    //Revisar el ID

    let proyecto = await Proyecto.findById(req.params.id);

    // si el proyecto existe o no

    //Verificar creador del proyecto

    if (proyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }
    // Actualizar

    proyecto = await Proyecto.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoProyecto },
      { new: true }
    );
    res.status(200).json({ proyecto });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Proyecto no encontrado" });
  }
};

// Elimina un proyecto por su ID

exports.eliminarProyecto = async (req, res) => {
  try {
    //Revisar el ID

    let proyecto = await Proyecto.findById(req.params.id);

    // si el proyecto existe o no

    //Verificar creador del proyecto

    if (proyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }
    // Eliminar el proyecto

    await Proyecto.findOneAndRemove({ _id: req.params.id });
    res.status(200).json({ msg: "Proyecto eliminado" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No se ha encontrado el proyecto" });
  }
};

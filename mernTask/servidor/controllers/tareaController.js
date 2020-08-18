const Tarea = require("../models/Tarea");
const Proyecto = require("../models/Proyecto");
const { validationResult, body } = require("express-validator");
// Crea una nueva tarea

exports.crearTarea = async (req, res) => {
  //   Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    //   extraemos el proyecto y comprobamos si existe

    const { proyecto } = req.body;
    const proyectoBD = await Proyecto.findById(proyecto);
    console.log(proyecto);
    if (!proyectoBD)
      return res.status(404).json({ msg: "El proyecto no existe" });

    // Revisar si el proyecto actual pertenece al usuario autenticado
    if (proyectoBD.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    // Creamos la tarea

    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({ tarea });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error con el servidor" });
  }
};

// Obtiene tareas por proyecto

exports.obtenerTareas = async (req, res) => {
  try {
    // Extraer el proyecto y comprobar si existe

    const { proyecto } = req.body;

    const existeProyecto = await Proyecto.findById(proyecto);
    if (!existeProyecto) {
      return res.status(404).json({ msg: "Proyecto no encontrado" });
    }

    // Revisar si el proyecto actual pertenece al usuario

    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }

    // Obtener las tareas por proyecto
    const tareas = await Tarea.find({ proyecto: proyecto });
    res.json({ tareas });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Error con el servidor" });
  }
};

// Actualizar una tarea

exports.actualizarTarea = async (req, res) => {
  try {
    // Extraer el proyecto y comprobar si existe

    const { proyecto, nombre, estado } = req.body;

    // Si la tarea existe o no

    let tarea = await Tarea.findById(req.params.id);

    if (!tarea) {
      return res.status(404).json({ msg: "No existe esa tarea" });
    }

    const existeProyecto = await Proyecto.findById(proyecto);

    // Revisar si el proyecto actual pertenece al usuario

    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No Autorizado" });
    }

    // Crear objeto con la nueva informacion

    const nuevaTarea = {};

    if (nombre) {
      nuevaTarea.nombre = nombre;
    }
    if (estado) {
      nuevaTarea.estado = estado;
    }

    // Guardar la Tarea

    tarea = await Tarea.findOneAndUpdate({ _id: req.params.id }, nuevaTarea, {
      new: true,
    });
    res.status(200).json({ tarea });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Hubo un error" });
  }
};

exports.eliminarTarea = async (req, res) => {
  try {

    // Extraer el proyecto
    const { proyecto } = req.body;

    
    const existeTarea = await Tarea.find({proyecto})
    

    if(!existeTarea){
      return res.status(404).json({msg:'Tarea no existe'})
    }

    const existeProyecto = await Proyecto.findById(proyecto)

    if(existeProyecto.creador.toString() !== req.usuario.id){
      return res.status(401).json({msg:'No autorizado'})
    }


    await Tarea.findOneAndRemove({_id:req.params.id})

    return res.status(200).json({msg:'Tarea eliminada'})

  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Hubo un error" });
  }
};

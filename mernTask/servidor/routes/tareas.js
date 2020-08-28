const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// api/tareas

// Crear una tarea

router.post(
  "/",

  auth,
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("proyecto", "El proyecto es obligatorio").notEmpty(),
  ],

  tareaController.crearTarea
);

// Obtener tareas
router.get(
  "/",

  auth,
  tareaController.obtenerTareas
);

// Actualizar tarea
router.put("/:id", auth, tareaController.actualizarTarea);


// Eliminar Tarea

router.delete('/:id',
auth,
tareaController.eliminarTarea)



module.exports = router;

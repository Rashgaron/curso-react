const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// Crea proyectos
// api/proyectos

// Crear proyecto
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").notEmpty()],
  proyectoController.crearProyecto
);

// Obtener todos proyectos del usuario
router.get("/", auth, proyectoController.obtenerProyectos);

// Actualizar un proyecto vía ID

router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre es necesario").notEmpty()],
  proyectoController.actualizarProyecto
);

router.delete("/:id", auth, proyectoController.eliminarProyecto);



module.exports = router;

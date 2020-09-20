const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

// Crear el servidor

const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar cors

app.use(cors());

// Habilitar express.json()

app.use(express.json({ extended: true }));

// Puerto de la app

const PORT = process.env.PORT || 4000;

// Importar rutas

// Ruta para obtener productos
app.use("/api/productos", require("./routes/productos"));

// Ruta para mandar correo
app.use("/api/correo", require("./routes/correo"));

// Definir página principal

app.get("/", (req, res) => {
  res.send("Hola");
});

// Arrancar la app

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port -> ${PORT}`);
});

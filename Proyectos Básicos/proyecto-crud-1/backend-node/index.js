const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

// Crear servidor

const app = express();

// Conectar a la base de datos

conectarDB();

// Habilitar cors

app.use(cors())


// Habilitar express.json

app.use(express.json({extended:true}))


// Puerto de la app

const PORT = process.env.PORT || 4000;


// Importar rutas

app.use('/api/productos',require('./routes/productos'))

app.use('/api/proyectos',require('./routes/proyectos'))

app.use('/api/email',require('./routes/email'))


app.use('/create-checkout-session',require('./routes/checkout'))
// Defiir la página principal

app.get('/', (req,res)=>{
    res.send('Welcome to my backend')
})



// Arrancar la app

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is running on port -> ${PORT}`)
})
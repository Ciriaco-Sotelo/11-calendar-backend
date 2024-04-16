const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');
const path = require('path');

// console.log(process.env)

// #1 Crear el servidor de express 
const app = express();

// #6 Base de datos
dbConnection();

// #7 CORS
app.use(cors());

// #4 Directorio público
app.use( express.static('public') );

// #5 Lectura y parseo del body
app.use( express.json() );

// #3 Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// 8 Rutas en front
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => {
    res.sendFile( path.join(__dirname, 'public', 'index.html') );
})

// #2 Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})

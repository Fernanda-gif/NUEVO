const express = require('express');
//Crear el servidor
const app = express();
//Nos ayuda en la comunicacion interna de nuestra aplicacion    |
const cors = require('cors');
//Llamado a la conexion de la base de datos
require('./database');
//Genera datos falsos
app.use(cors());

//Rutas de la app
app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server on port 3000');
});
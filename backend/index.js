// USA REQUIRES (No imports de React)
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// CONFIGURACIÓN
app.use(cors());
app.use(express.json()); // Esto es vital para recibir datos del formulario

// CONEXIÓN A POSTGRES
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'proyecto_fad',
  password: 'tu_contraseña',
  port: 5432,
});

// RUTA PARA PROBAR EN EL NAVEGADOR
app.get('/', (req, res) => {
  res.send("El servidor está vivo y es .js");
});

app.listen(5000, () => {
  console.log("Servidor escuchando en el puerto 5000");
});
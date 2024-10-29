const express = require('express');
const { urlencoded, json } = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes.routes.js');
const codesRoutes = require('./routes/codesRoutes.routes.js');
const port = process.env.PORT;

const app = express();

// Middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// Configurar CORS para permitir solo solicitudes desde el dominio de tu frontend
const corsOptions = {
  origin: 'https://codigo-front-promo.vercel.app', // Reemplaza esto por la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos que vas a permitir
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers que permites
  credentials: true // Si estás manejando autenticación basada en cookies o sesiones
};

// Usar CORS con las opciones configuradas
app.use(cors(corsOptions));

// Rutas de tu aplicación
app.use('/user', userRoutes);
app.use('/codes', codesRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/user/login', (req, res) => {
  res.send('¡Hola, login!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

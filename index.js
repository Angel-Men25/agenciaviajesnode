// Extraer express del paquete que instalamos
// import express from 'express';
const express = require("express");
const router = require("./routes/index.js");
const db = require("./config/db.js");

// "express()" es un funcion que almacenamos en "app" para ejecutar express
// entonces se intancia en la variable "app"
const app = express();

// Conexion de base de datos
db.authenticate()
  .then( () => console.log('Base de datos conectada') )
  .catch( error => console.log(error) )

// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar PUG para Views o Vistas con Motores de plantillas
app.set("view engine", "pug");

// Crear propio middlewares - obtener año actual
app.use( (req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia de Viajes';
  next();
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({
  extended: true
}));

// Definir la carpeta public
app.use(express.static("public"));

// Agregar router
app.use("/", router);

// Arrancar la aplicación
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});

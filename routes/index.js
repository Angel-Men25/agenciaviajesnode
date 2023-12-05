const express = require("express");
const { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } = require("../controllers/paginasController.js");
const { guardarTestimonial } = require('../controllers/testimonialController.js')

const router = express.Router();

// Express soporta GET, POST, PATCH, PUT, DELETE para enviar peticiones a una URL
/*
  - PARA ENVIAR COMO EN LA CONSOLA PERO APARECER EN EL DOCUMENT
    res.send('Inicio');

  - PARA ENVIAR OBJETOS TIPO JSON
    res.json({
      id: 1,
      nombre: 'Angel'
    });

  - PARA MOSTRAR UNA VISTA
    res.render();
*/

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);


module.exports = router;
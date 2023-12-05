const Viaje = require('../models/Viaje.js');
const { Testimonial } = require('../models/Testimoniales.js');

const paginaInicio = async (req, res) => {
  // req - lo que enviamos : res - lo que express responde

  try {
    // Consultar 3 viajes del modelo Viaje
    const viajes = await Viaje.findAll({ limit: 3 })

    // Consultar 3 testimoniales del modelo Testimoniales
    const testimoniales = await Testimonial.findAll({ limit: 3 });

    res.render("inicio", {
      pagina: 'Inicio',
      clase: 'home',
      viajes,
      testimoniales
    });
  } catch (error) {
    console.log(error);
  }

};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: 'Nosotros'
  });
};

const paginaViajes = async (req, res) => {

  // Consultar base de datos
  const viajes = await Viaje.findAll();

  // console.log(viajes);

  res.render("viajes", {
    pagina: 'Próximos Viajes',
    viajes
  });
};

const paginaTestimoniales = async(req, res) => {
  try {

    // Consultar base de datos de testimoniales
    const testimoniales = await Testimonial.findAll();

    res.render("testimoniales", {
      pagina: 'Testimoniales',
      testimoniales
    });
  } catch (error) {
    console.log(error);
  }
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;
  try {
    const viaje = await Viaje.findOne({
      where: {
        slug
      }
    });
    res.render('viaje', {
      pagina: 'Información Viaje',
      viaje
    })
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje
}
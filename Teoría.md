# Pasos para crear aplicacion

1.- Iniciar node en la carpeta con ```npm init```

2.- Instalar express como dependencia de producción 

* ```npm i express```

3.- Instalar nodemon como dependencia de desarrollo 

* ```npm i --save-dev nodemon```

4.- Crear archivo **index.js** para configurar express

==============================================

# Tema de base de datos

Ya se tiene un .dump que se llama "agenciaviajes" 

Se abre en TablePlus importandolo

Se instala ```npm install mysql2 sequelize```

"sequelize es un ORM"

Creamos carpeta "config" en ruta principal

Creamos archivo config > db.js

# Introduccion a MVC

Patron de diseño de software que permite separar cada pieza en el codigo

* Modelo - se encarga de los datos que vienen desde una base de datos y su logica para mostrarlos
* Vista - las vistas del HTML, donde se muestran los datos de los Modelos
* Controladores - es el que manda a llamar los datos desde la base de datos y los muestra en las vistas, es este intermedio que se comunica entre el modelo y la vista

* Router - encargado de registrar las URL o las endpoints que la app soporta
Ejemplo:
  * El usuario accede a **/productos**. El ***router*** llama a un ***controlador*** que se comunica con el ***modelo*** para obtener los datos y mostrarlos en la ***vista***.


# DEPLOYMENT

1.- Proyectos con Node/Express deben ser publicados en un servidor que soporten la plataforma (Netlify NO soporta)
2.- La BD necesita tambien ser publicada en un servidor para que los usuarios puedan acceder a ella
3.- Realizar ajustes especificos
  *  Variables de Entorno


## Variables de Entorno

```npm i dotenv```
// Librerias de Node/NPM
const cors = require("cors"); // Control de Origenes Cruzados
const loggerHTTP = require("morgan"); // Crear archivo log con procesos http o simplemente mostrarlos es consola
const helmet = require("helmet"); // Proteger vulnerabilidades web conocidas por control de cabeceras HTTP.
const express = require("express");

exports.useMiddleware = function (app) {
  app.use(helmet());
  app.use(cors());
  //  Configuración para Morgan y creación del stream node.log y mensajes en consola
  app.use(loggerHTTP("dev"));
  // Configuracion de BodyParser en formato json y limite de bytes
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  // Manejo de errores
  configureErrorHandler(app);
  configureLog(app);
};

function configureLog(app) {
  app.use((req, res, next) => {
    const body = JSON.stringify(req.body);
    console.log(`${req.method} : ${req.url} - ${body}`);
    next();
  });
}

function configureErrorHandler(app) {
  app.use((err, req, res, next) => {
    if (!err) next();
    // Set locals, solo en desarrollo
    // Igual a req.app.get('env') === 'dev'
    if (process.env.NODE_ENV === "production") {
      res.locals.error = { miMensaje: "Error desde Middelware" };
    } else {
      res.locals.message = err.message;
      res.locals.error = err;
      // Escribimos el log de errores
      res.locals.error = { miMensaje: "Error desde Middelware" };
    }
    console.error("Error desde Middelware: " + err);

    res.status(err.status || 500).send({
      method: req.method,
      url: req.url,
      message: err.message,
    });
  });
}

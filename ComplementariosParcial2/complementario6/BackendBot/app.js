const express = require("express");
const app = express();
// const path = require('path');
const middleware = require("./src/middleware");

process.on("uncaughtException", (err) => {
  console.warn("uncaughtException");
  console.error(err);
  process.exit(1);
});

// Configurar Middleware
middleware.useMiddleware(app);

// Administrar Rutas

module.exports = app;

const { createContainer, asClass, asValue, asFunction } = require("awilix");
//config
const config = require("../config");
const app = require(".");
//servicios
const { GasolineraService } = require("../services");
//controladores
const { GasolineraController } = require("../controllers");
//rutas
const { GasolineraRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    GasolineraService: asClass(GasolineraService).singleton(),
  })
  .register({
    GasolineraController: asClass(GasolineraController.bind(GasolineraController)).singleton(),
  })
  .register({
    GasolineraRoutes: asFunction(GasolineraRoutes).singleton(),
  });
module.exports = container;
const { createContainer, asClass, asValue, asFunction } = require('awilix');
    //config
const config = require('../config')
const app = require('.')
    //servicios
const { PreguntafrecService } = require('../services')
    //controladores
const { PreguntafrecController } = require('../controllers')
    //rutas
const { PreguntafrecRoutes } = require('../routes/index.routes')
const Routes = require('../routes')
const container = createContainer();
container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        PreguntafrecService: asClass(PreguntafrecService).singleton()
    }).register({
        PreguntafrecController: asClass(PreguntafrecController.bind(PreguntafrecController)).singleton()

    }).register({
        PreguntafrecRoutes: asFunction(PreguntafrecRoutes).singleton()
    })
module.exports = container;
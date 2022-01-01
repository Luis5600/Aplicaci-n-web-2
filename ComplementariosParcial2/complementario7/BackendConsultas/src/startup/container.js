const { createContainer, asClass, asValue, asFunction } = require('awilix');
//config
const config = require('../config')
const app = require('.')
    //servicios
const { LibroService, ClienteService, CategoriaService, PreguntafrecService, PrestamoService } = require('../services')
    //controladores
const { LibroController, ClienteController, CategoriaController, PreguntafrecController, PrestamoController } = require('../controllers')
    //rutas
const { LibroRoutes, ClienteRoutes, CategoriaRoutes, PreguntafrecRoutes, PrestamoRoutes } = require('../routes/index.routes')
const Routes = require('../routes')
const container = createContainer();
container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        LibroService: asClass(LibroService).singleton(),
        ClienteService: asClass(ClienteService).singleton(),
        CategoriaService: asClass(CategoriaService).singleton(),
        PreguntafrecService: asClass(PreguntafrecService).singleton(),
        PrestamoService: asClass(PrestamoService).singleton()
    }).register({
        LibroController: asClass(LibroController.bind(LibroController)).singleton(),
        ClienteController: asClass(ClienteController.bind(ClienteController)).singleton(),
        CategoriaController: asClass(CategoriaController.bind(CategoriaController)).singleton(),
        PreguntafrecController: asClass(PreguntafrecController.bind(PreguntafrecController)).singleton(),
        PrestamoController: asClass(PrestamoController.bind(PrestamoController)).singleton()

    }).register({
        LibroRoutes: asFunction(LibroRoutes).singleton(),
        ClienteRoutes: asFunction(ClienteRoutes).singleton(),
        CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
        PreguntafrecRoutes: asFunction(PreguntafrecRoutes).singleton(),
        PrestamoRoutes: asFunction(PrestamoRoutes).singleton()
    })
module.exports = container;
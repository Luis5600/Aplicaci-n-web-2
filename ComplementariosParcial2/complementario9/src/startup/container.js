const { createContainer, asClass, asValue, asFunction } = require('awilix');

const config = require('../config');
const app = require('./index');

// importar servicios
const { HomeService, UserService, BebidaService, PizzaService  } = require('../services');

// importar controladores
const { HomeController, UserController, BebidaController, PizzaController  } = require('../controllers');

// importar rutas
const Routes = require('../routes')
const { HomeRoutes, UserRoutes, BebidaRoutes, PizzaRoutes  } = require('../routes/index.routes');

// models
const { UserModel, BebidaModel, PizzaModel } = require('../models');

// repositorios
const { UserRepository, BebidaRepository, PizzaRepository  } = require('../repositories');


const container = createContainer();
container
    .register(
        {
            app: asClass(app),
            router: asFunction(Routes).singleton(),
            config: asValue(config)
        }
    )
    .register(
        {
            HomeService: asClass(HomeService).singleton(),
            UserService: asClass(UserService).singleton(),
            PizzaService: asClass(PizzaService).singleton(),
            BebidaService: asClass(BebidaService).singleton(),
            // ComboService: asClass(ComboService).singleton()
        }
    ).register(
        {
            HomeController: asClass(HomeController.bind(HomeController)).singleton(),
            UserController: asClass(UserController.bind(UserController)).singleton(),
            PizzaController: asClass(PizzaController.bind(PizzaController)).singleton(),
            BebidaController: asClass(BebidaController.bind(BebidaController)).singleton(),
            // ComboController: asClass(ComboController.bind(ComboController)).singleton()
        }
    ).register(
        {
            HomeRoutes: asFunction(HomeRoutes).singleton(),
            UserRoutes: asFunction(UserRoutes).singleton(),
            PizzaRoutes: asFunction(PizzaRoutes).singleton(),
            BebidaRoutes: asFunction(BebidaRoutes).singleton(),
            // ComboRoutes: asFunction(ComboRoutes).singleton()
        }
    ).register(
        {
            User: asValue(UserModel),
            Bebida: asValue(BebidaModel),
            Pizza: asValue(PizzaModel),
            // Combo: asValue(ComboModel)
        }
    ).register(
        {
            UserRepository: asClass(UserRepository).singleton(),
            BebidaRepository: asClass(BebidaRepository).singleton(),
            PizzaRepository: asClass(PizzaRepository).singleton(),
            // ComboRepository: asClass(ComboRepository).singleton()
        }
    )


module.exports = container;